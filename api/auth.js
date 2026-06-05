export default function handler(req, res) {
  const clientId = process.env.OAUTH_CLIENT_ID;

  if (!clientId) {
    return res.status(500).json({ error: 'OAUTH_CLIENT_ID is not configured in Vercel environment variables.' });
  }

  // Dynamically determine the host and protocol so this works on preview links or custom domains
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers.host;
  const redirectUri = `${protocol}://${host}/api/callback`;

  // Construct the GitHub OAuth URL
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo,user&redirect_uri=${encodeURIComponent(redirectUri)}`;

  res.setHeader('Content-Type', 'text/html');
  res.send(`
    <!DOCTYPE html>
    <html>
    <head><title>Redirecting to GitHub...</title></head>
    <body>
      <p>Redirecting to GitHub for authentication...</p>
      <script>
        window.location.href = "${authUrl}";
      </script>
    </body>
    </html>
  `);
}
