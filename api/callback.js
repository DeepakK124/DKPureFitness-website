export default async function handler(req, res) {
  const { code } = req.query;
  const clientId = process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;

  if (!code) {
    return res.status(400).send('No code provided in the URL');
  }
  if (!clientId || !clientSecret) {
    return res.status(500).send('OAUTH_CLIENT_ID or OAUTH_CLIENT_SECRET missing in Vercel environment variables.');
  }

  try {
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code
      })
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      return res.status(500).send(`Error from GitHub: ${tokenData.error_description}`);
    }

    const accessToken = tokenData.access_token;

    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers.host;
    const targetOrigin = `${protocol}://${host}`;

    const script = `
      <!DOCTYPE html>
      <html>
      <head><title>Authenticating...</title></head>
      <body>
        <p>Authentication successful! Returning to CMS...</p>
        <script>
          (function() {
            if (!window.opener) {
              document.body.innerHTML = '<p>Error: window.opener is blocked or missing. Please ensure popups are allowed and try a different browser.</p>';
              return;
            }
            const message = 'authorization:github:success:{"token":"${accessToken}","provider":"github"}';
            window.opener.postMessage(message, "${targetOrigin}");
            window.close();
          })();
        </script>
      </body>
      </html>
    `;

    res.setHeader('Content-Type', 'text/html');
    res.send(script);
  } catch (err) {
    res.status(500).send(`Server error: ${err.message}`);
  }
}
