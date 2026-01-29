# Netlify Deployment Guide

This guide explains how to deploy the project to Netlify and use the faster build option added to this repo.

## Prerequisites

1. GitHub account (to store your code)
2. Netlify account (free at https://app.netlify.com)

## Step-by-Step Deployment

### Step 1: Push Code to GitHub

1. Initialize git in your project (if not already done):
```bash
cd "c:\Backlinks website\pancardnetlify"
git init
```

2. Add all files:
```bash
git add .
```

3. Create a commit:
```bash
git commit -m "Deploy-ready: Netlify settings, tidy styles, faster build"
```

4. Push to your GitHub repository:
```bash
git remote add origin https://github.com/YOUR_USERNAME/pancardnetlify.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Netlify

1. **Go to Netlify Dashboard**
   - Visit https://app.netlify.com
   - Log in with your GitHub account

2. **Create New Site from Git**
   - Click "New site from Git"
   - Select your repository and branch

3. **Configure Build Settings**
   - **Build Command**: `npm run build:fast` (this disables source maps to reduce bundle size)
   - **Publish Directory**: `build`

4. **Advanced / Headers**
   - This repo includes `netlify.toml` configured to set cache headers for static assets.
   - Static JS/CSS and files under `/static/*` will be served with long cache headers while `index.html` is no-cache.

5. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete and visit your site URL

### Step 3: Verify Deployment

- Check pages (Home, Blogs, Blog posts) and navigation.
- Use browser devtools to inspect response headers for `/static/*` JS/CSS assets (Cache-Control should be set).

## Notes on Performance Improvements

- Added `netlify.toml` headers for long-lived caching on static assets.
- New build script `npm run build:fast` disables source maps to reduce bundle size and build time.
- Images used in article listings are lazy-loaded to reduce initial payload.
- CSS variables were added and theme simplified to lower repaint cost and make styles easier to maintain.

## Troubleshooting

- If Netlify build fails, open the build logs and verify the build command `npm run build:fast` is present in `package.json`.
- If static assets appear uncached, confirm `netlify.toml` is present in project root and redeploy.

## Rollback

- Use Netlify's deployment list to promote previous working deploys.

## Additional Resources

- [Netlify Docs - Deploying Sites](https://docs.netlify.com/site-deploys/overview/)
- [Create React App - Deployment](https://create-react-app.dev/docs/deployment/)

---

**Netlify setup ready — use `npm run build:fast` for smaller builds and faster deploys. ✅**
