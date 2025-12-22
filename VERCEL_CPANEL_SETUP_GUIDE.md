# Complete Guide: Using Vercel with cPanel Domain

This guide will walk you through deploying your Next.js website to Vercel and connecting it to your cPanel domain.

---

## 📋 Prerequisites

- ✅ Your Next.js project is ready (already built successfully)
- ✅ You have a cPanel account with a domain
- ✅ You have access to DNS settings in cPanel
- ✅ A free Vercel account (sign up at vercel.com)

---

## 🚀 Part 1: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended for Beginners)

#### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Sign up with GitHub, GitLab, Bitbucket, or Email

#### Step 2: Import Your Project
1. In Vercel Dashboard, click **"Add New..."** → **"Project"**
2. If your code is on GitHub/GitLab:
   - Click **"Import Git Repository"**
   - Select your repository
   - Click **"Import"**
3. If your code is NOT on Git:
   - Use Vercel CLI (see Option B below)

#### Step 3: Configure Project Settings
Vercel will auto-detect Next.js. Verify these settings:
- **Framework Preset:** Next.js
- **Root Directory:** `./` (leave as default)
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install --legacy-peer-deps` (important!)

#### Step 4: Add Environment Variables
Before deploying, add your environment variables:

1. In the project setup page, scroll to **"Environment Variables"**
2. Click **"Add"** and add each variable:

| Variable Name | Value | Environment |
|--------------|-------|-------------|
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | `bZeJrV53pwWCcsblX` | Production, Preview, Development |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | `service_nrk8bog` | Production, Preview, Development |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | `template_r9domie` | Production, Preview, Development |
| `NODE_ENV` | `production` | Production |

3. Click **"Deploy"**

#### Step 5: Wait for Deployment
- Vercel will build and deploy your site
- This takes 2-5 minutes
- You'll get a URL like: `your-project.vercel.app`

---

### Option B: Deploy via Vercel CLI (If Not Using Git)

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Login to Vercel
```bash
vercel login
```
This will open a browser to authenticate.

#### Step 3: Deploy
Navigate to your project folder and run:
```bash
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Your account
- **Link to existing project?** → No
- **Project name?** → Press Enter (uses folder name)
- **Directory?** → Press Enter (uses current directory)
- **Override settings?** → No

#### Step 4: Add Environment Variables
```bash
vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID
vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
vercel env add NODE_ENV
```
Enter the values when prompted:
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`: `bZeJrV53pwWCcsblX`
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: `service_nrk8bog`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`: `template_r9domie`
- `NODE_ENV`: `production`

#### Step 5: Deploy to Production
```bash
vercel --prod
```

---

## 🌐 Part 2: Connect Your cPanel Domain

### Step 1: Add Domain in Vercel

1. Go to your project in Vercel Dashboard
2. Click **"Settings"** tab
3. Click **"Domains"** in the left sidebar
4. Enter your domain (e.g., `yourdomain.com` or `www.yourdomain.com`)
5. Click **"Add"**

### Step 2: Get DNS Configuration from Vercel

After adding the domain, Vercel will show you DNS records to add:

**For Root Domain (yourdomain.com):**
- **Type:** A
- **Name:** @ (or leave blank)
- **Value:** `76.76.21.21` (Vercel's IP - may vary, check Vercel dashboard)

**For WWW Subdomain (www.yourdomain.com):**
- **Type:** CNAME
- **Name:** www
- **Value:** `cname.vercel-dns.com` (or what Vercel shows)

**OR Vercel might give you:**
- **Type:** A
- **Name:** @
- **Value:** `76.76.21.21`

- **Type:** CNAME
- **Name:** www
- **Value:** `cname.vercel-dns.com`

---

### Step 3: Update DNS in cPanel

#### Method 1: Using Zone Editor (Recommended)

1. **Login to cPanel**
2. Find **"Zone Editor"** or **"DNS Zone Editor"** in the dashboard
3. Click on it
4. Select your domain from the dropdown
5. Click **"Manage"**

#### For Root Domain (yourdomain.com):

1. Click **"Add Record"**
2. Fill in:
   - **Type:** `A`
   - **Name:** `@` (or leave blank, or `yourdomain.com`)
   - **TTL:** `14400` (or default)
   - **Address:** `76.76.21.21` (use the IP Vercel provided)
3. Click **"Add Record"**

#### For WWW Subdomain (www.yourdomain.com):

1. Click **"Add Record"**
2. Fill in:
   - **Type:** `CNAME`
   - **Name:** `www`
   - **TTL:** `14400` (or default)
   - **CNAME:** `cname.vercel-dns.com` (use what Vercel provided)
3. Click **"Add Record"**

#### Method 2: Using Advanced DNS Zone Editor

1. In cPanel, find **"Advanced DNS Zone Editor"**
2. Select your domain
3. Find existing `A` record for `@` or root
4. Click **"Edit"** and change the IP to Vercel's IP
5. Find existing `CNAME` record for `www`
6. Click **"Edit"** and change to Vercel's CNAME

---

### Step 4: Remove Conflicting Records

**Important:** Remove or update any existing records that conflict:

1. Look for existing `A` records pointing to your cPanel server IP
2. Either **delete** them or **update** to Vercel's IP
3. Look for existing `CNAME` records for `www`
4. Either **delete** them or **update** to Vercel's CNAME

**Common conflicting records to check:**
- `A` record for `@` pointing to cPanel IP
- `CNAME` for `www` pointing to your domain
- Any `A` records for subdomains you want to use

---

### Step 5: Wait for DNS Propagation

DNS changes can take:
- **Minimum:** 5-10 minutes
- **Average:** 1-2 hours
- **Maximum:** 24-48 hours

**Check DNS propagation:**
- Visit [whatsmydns.net](https://www.whatsmydns.net)
- Enter your domain
- Check if `A` record shows Vercel's IP

---

### Step 6: Verify in Vercel

1. Go back to Vercel Dashboard → Your Project → Settings → Domains
2. Wait for the domain status to show **"Valid Configuration"** (green checkmark)
3. If it shows an error, click on it to see what's wrong

---

## ✅ Part 3: Verify Everything Works

### Test Your Site

1. Visit `http://yourdomain.com` (should redirect to HTTPS)
2. Visit `https://yourdomain.com`
3. Visit `https://www.yourdomain.com`
4. Test all pages, especially:
   - Homepage
   - Contact form
   - Navigation links

### Test Contact Form

1. Go to your contact page
2. Fill out and submit the form
3. Check if you receive the email (if Resend is configured)

---

## 🔧 Part 4: Troubleshooting

### Issue: Domain shows "Invalid Configuration" in Vercel

**Solutions:**
1. Double-check DNS records match exactly what Vercel shows
2. Wait longer for DNS propagation (can take up to 48 hours)
3. Clear DNS cache: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)
4. Try using a different DNS checker tool

### Issue: Site shows "Coming Soon" or cPanel default page

**Solutions:**
1. DNS hasn't propagated yet - wait longer
2. Wrong DNS records - verify they match Vercel's requirements
3. Browser cache - try incognito/private mode
4. Check if domain is still pointing to cPanel's IP

### Issue: HTTPS not working

**Solution:**
- Vercel automatically provisions SSL certificates
- Wait 5-10 minutes after DNS is configured
- SSL certificate will be issued automatically

### Issue: www redirect not working

**Solution:**
- Make sure both `A` record (root) and `CNAME` (www) are set correctly
- Vercel will automatically redirect www to non-www (or vice versa) based on your settings

---

## 📝 Part 5: Managing Updates

### After Making Code Changes

**If using Git:**
1. Push changes to your repository
2. Vercel automatically detects and deploys
3. New deployment is live in 2-5 minutes

**If using CLI:**
```bash
vercel --prod
```

### Viewing Deployments

1. Go to Vercel Dashboard → Your Project
2. Click **"Deployments"** tab
3. See all deployments, logs, and rollback if needed

---

## 🎯 Part 6: Optional - Keep cPanel for Email/Other Services

You can keep using cPanel for:
- ✅ Email accounts (email@yourdomain.com)
- ✅ FTP access
- ✅ File Manager
- ✅ MySQL databases (if needed)
- ✅ Subdomains pointing to other services

**Just make sure:**
- Don't create conflicting DNS records
- Email uses `MX` records (won't conflict with Vercel)
- Subdomains can point to different IPs

---

## 📊 Summary Checklist

- [ ] Created Vercel account
- [ ] Deployed project to Vercel
- [ ] Added environment variables in Vercel
- [ ] Added domain in Vercel Dashboard
- [ ] Got DNS configuration from Vercel
- [ ] Updated DNS records in cPanel
- [ ] Removed conflicting DNS records
- [ ] Waited for DNS propagation
- [ ] Verified domain shows "Valid" in Vercel
- [ ] Tested website on custom domain
- [ ] Tested contact form
- [ ] Verified HTTPS is working

---

## 🆘 Need Help?

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Vercel Support:** [vercel.com/support](https://vercel.com/support)
- **DNS Issues:** Check [whatsmydns.net](https://www.whatsmydns.net)

---

**Your site will be live at:** `https://yourdomain.com` 🎉

