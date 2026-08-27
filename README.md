# iFix Green Solutions — Static Website

## Quick Start

1. **Create a GitHub repo** and push this folder:
   ```bash
   cd website
   git init
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to **Settings → Pages** in your repo.
   - Under **Source**, select **GitHub Actions**.
   - The deploy workflow will run automatically on every push to `main`.

3. **Point your domains.lk domain**:
   - Edit the `CNAME` file and replace `yourdomain.lk` with your actual domain.
   - Log in to your **domains.lk** DNS panel and add these records:

   | Type  | Name | Value                        |
   |-------|------|------------------------------|
   | A     | @    | 185.199.108.153              |
   | A     | @    | 185.199.109.153              |
   | A     | @    | 185.199.110.153              |
   | A     | @    | 185.199.111.153              |
   | CNAME | www  | YOUR_USERNAME.github.io      |

   - Wait for DNS propagation (up to 24–48 hours).
   - In **Settings → Pages**, enter your custom domain and enable **Enforce HTTPS**.

## Project Structure

```
website/
├── index.html          # Main landing page
├── CNAME               # Custom domain for GitHub Pages
├── README.md           # This file
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions deployment pipeline
```
