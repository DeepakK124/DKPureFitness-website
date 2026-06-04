# DK Pure Fitness: Content Management System Handoff Manual

This repository uses **Decap CMS** to power the `/admin` dashboard. 
Because the dashboard allows non-technical users to edit the website directly on the live site, it uses GitHub to securely save those changes to the codebase. 

When transferring ownership of this website (e.g., from the developer to the gym owner), you must reconnect the authentication plumbing so the new owner can log in to the dashboard securely on their own custom domain.

Follow these 3 steps exactly when transferring ownership or changing the live domain.

---

## Step 1: Create a new GitHub OAuth App
The CMS needs permission to commit changes to your GitHub repository on your behalf.
1. Log into the GitHub account that now owns this repository.
2. Go to **Settings** -> **Developer Settings** -> **OAuth Apps**.
3. Click **New OAuth App**.
4. Fill in the details:
   - **Application name:** DK Pure Fitness CMS
   - **Homepage URL:** `https://your-custom-domain.com` (Must be the exact live domain, e.g. `https://dkpurefitness.com`)
   - **Authorization callback URL:** `https://your-custom-domain.com/api/callback`
5. Click **Register application**.
6. On the next screen, click **Generate a new client secret**.
7. **Important:** Copy the **Client ID** and the **Client Secret** immediately. You will need them for Step 2.

## Step 2: Add Secrets to Vercel
Vercel hosts the secure "middleman" serverless functions (`/api/auth.js` and `/api/callback.js`) that log you in without exposing your passwords to the public.
1. Log into your Vercel account and open this project.
2. Go to the project **Settings** -> **Environment Variables**.
3. Add a new variable:
   - **Key:** `OAUTH_CLIENT_ID`
   - **Value:** (Paste the Client ID from Step 1)
4. Add another variable:
   - **Key:** `OAUTH_CLIENT_SECRET`
   - **Value:** (Paste the Client Secret from Step 1)
5. **Redeploy** the project in Vercel so the new environment variables take effect.

## Step 3: Update `config.yml`
The CMS dashboard needs to know the name of your GitHub repository so it knows where to save the files.
1. In your codebase, open `public/admin/config.yml`.
2. Find the `backend` section at the very top.
3. Change the `repo` line to match your new GitHub username and repository name. For example:
   ```yaml
   backend:
     name: github
     repo: your-github-username/your-gym-repo-name
     branch: main # Change this to 'main' or 'master' depending on your default branch
     base_url: ""
     auth_endpoint: "api/auth"
   ```
4. Push this code change to GitHub.

---

### Troubleshooting
- **"Not Found" when clicking Login:** Make sure your `repo` string in `config.yml` exactly matches your GitHub repo name.
- **Redirect Mismatch Error:** The URL you are currently visiting does not perfectly match the "Authorization callback URL" you typed into GitHub in Step 1. Ensure you include `https://` and do not include trailing slashes.
- **Changes aren't showing up:** Ensure Vercel is set up to automatically deploy when changes are pushed to your main branch.
