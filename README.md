# support.phadindecodes.com — वैदेशिक रोजगार सहायता केन्द्र

This is ready to deploy to Vercel as subdomain.

## Features (Nepali)
- वैदेशिक रोजगारी खोजी -> https://foreignjob.dofe.gov.np/Home/Index
- श्रम स्वीकृति खोजी -> https://foreignjob.dofe.gov.np
- लट नम्बर खोजी -> https://foreignjob.dofe.gov.np/Home/PrePermissionDetail
- उजुरी प्रणाली -> https://ujuri.dofe.gov.np
- नयाँ अपडेट / कानुन / माग — admin panel at /#admin

## How to deploy to Vercel

1. Push this folder to GitHub (new repo: support-phadindecodes)
2. Vercel Dashboard -> Add New -> Project -> Import that repo
3. Framework: Vite, Build Command: npm run build, Output: dist
4. Deploy -> After deploy, Settings -> Domains -> Add `support.phadindecodes.com`
5. Because your nameservers are Vercel, DNS auto Valid ✅
6. Admin: go to https://support.phadindecodes.com/#admin
   Password: phadin2026 (change in src/App.tsx line: ADMIN_PWD)

## How to update daily laws/demands
- Go to /#admin, login, click + नयाँ अपडेट थप्नुहोस्
- Fill title, date, category, description, optional PDF/link
- Publish -> saved in browser localStorage (for this V2)
- Upgrade to Vercel Postgres: see comments at top of App.tsx for production steps.

## Next upgrade (when ready)
Tell me to migrate to Vercel Postgres + Blob so updates are permanent and editable from any device, not just localStorage.
