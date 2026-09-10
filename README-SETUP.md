# Careers Page + Job Posting Setup

## What's in this bundle
- `sanity/schemaTypes/job.js` + `index.js` — the job posting content model
- `sanity.config.js` — Sanity project config (used by the embedded Studio)
- `lib/sanity.js` — client + `getJobs()` fetch helper
- `app/careers/page.jsx` — server component, fetches jobs, revalidates every 60s
- `app/careers/CareerPageClient.jsx` — your existing UI, now driven by a `jobs` prop instead of a hardcoded array
- `app/studio/[[...tool]]/page.jsx` — embeds Sanity Studio at `/studio` on your own domain
- `app/api/careers/route.js`, `app/api/contact/route.js` — your existing routes, with the mail transporter fixed to use Zoho SMTP instead of the Gmail shortcut
- `.env.local.example` — all env vars you need, both locally and in Vercel

## 1. Copy files into your project
Drop these files into the matching paths in your existing Next.js App Router project. If a `sanity.config.js` or `lib/` folder already exists, merge rather than overwrite.

## 2. Install dependencies
```bash
npm install next-sanity @sanity/client @sanity/image-url
npm install -D sanity
```

## 3. Create the Sanity project
```bash
npx sanity@latest init
```
- Choose "Create new project"
- Dataset name: `production`
- When asked about a template/schema, choose the empty option — the schema in this bundle replaces it
- Note the **Project ID** it prints out

## 4. Environment variables
Copy `.env.local.example` to `.env.local` and fill in:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` — from step 3
- `EMAIL_USER` / `EMAIL_PASS` — your Zoho address + an app-specific password (Zoho Mail → Settings → Security → App Passwords)

Then add the same variables in **Vercel → Project → Settings → Environment Variables** so they're available in production.

## 5. Run locally and confirm
```bash
npm run dev
```
- Visit `/studio` — log in with your Sanity account, click **Job Posting → Create**, fill it in, publish.
- Visit `/careers` — the job should appear (Sanity's CDN cache is a few seconds; local dev is near-instant).
- Test the "Notify Me" form on `/careers` (empty-state) and the contact form — both should now send through Zoho instead of failing against Gmail's SMTP.

## 6. Deploy to Vercel
Push to your repo as normal — Vercel will pick up the new routes automatically. No extra Vercel configuration needed; Sanity itself doesn't require anything on the Vercel side beyond the two env vars above.

## 7. Hand off to the client
Invite their email as a member of the Sanity project (sanity.io/manage → your project → Members), or just give them the `/studio` URL + login instructions if you set up the same login for them. From there, adding, editing, or closing (toggle "Currently Open?") a job takes about 30 seconds and needs zero involvement from you.

## Notes / things to revisit later
- `onViewDetails` / `onOpenJob` in `CareerPageClient.jsx` are still no-ops — clicking "View Details" does nothing yet. Say the word if you want a detail modal or page wired up next.
- If your Zoho account is on the EU data center, set `ZOHO_SMTP_HOST=smtp.zoho.eu` in your env vars.
- If Zoho 2FA is enabled (recommended), you must use an app-specific password — the regular account password won't authenticate over SMTP.
