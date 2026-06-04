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

    // The script sends the token securely back to the parent Decap CMS window using postMessage
    const script = `
      <script>
        (function() {
          const message = 'authorization:github:success:{"token":"${accessToken}","provider":"github"}';
          window.opener.postMessage(message, "*");
          window.close();
        })();
      </script>
    `;

    res.setHeader('Content-Type', 'text/html');
    res.send(script);
  } catch (err) {
    res.status(500).send(`Server error: ${err.message}`);
  }
}
