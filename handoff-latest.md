# 12earth Handoff — 2025-11-14

## Current Context
- Static marketing site served from `index.html`, `styles.css`, and `script.js`; no bundler or framework.
- `package.json` only defines a dev server alias (`npm run dev` → `python3 -m http.server 4173`).
- JavaScript handles header scroll state, mobile nav toggling (including Escape close), and section-based nav highlighting.
- Contact form posts to Formspree endpoint `https://formspree.io/f/xayvvewz`.
- Project linked to Vercel (`brandpn-r-freemans-projects/12earth`) via `.vercel/project.json`; `.vercel` ignored by git per `.gitignore`.

## Outstanding Work / Notes
- No open bugs or tasks specified yet; update this section as new work is defined.
- User instruction: “Always git commit and push to my branch after every phase is complete.” Treat each logical batch of work as a phase.
- File `image` (text “npm”) is untracked; leave untouched unless directed.
- Removed decorative logo underline (“badge”) from header per latest request.
- Custom domain mapping pending: `12earth.com` and `12earth.art` still point to Squarespace IPs (23.227.38.32 and 198.49.23.144/145, 198.185.159.144/145). Even after the registrar transfer to GoDaddy, `vercel domains add` returns “Not authorized”/“already assigned to another project,” so the domains are still registered with another Vercel team. Need that team to remove them (or contact Vercel support) before we can add them here, then update DNS to Vercel (A → 76.76.21.21, `www` CNAME → cname.vercel-dns.com).
- Production deploys:
  - 2025-11-14T13:57:03Z → https://12earth-l5t788zql-brandpn-r-freemans-projects.vercel.app
  - 2025-11-14T13:59:24Z → https://12earth-5275tglem-brandpn-r-freemans-projects.vercel.app

## Testing / Verification
- Manual browser check via `npm run dev` (python HTTP server) when UI changes occur.
- No automated tests configured.

## MCP / External Resources
- MCP resources: none configured yet.
- Hosting: connected to Vercel project https://vercel.com/12earth (team scope `brandpn-r-freemans-projects`). Deployments will pick up changes pushed to GitHub.

## Next Steps
1. Await specific implementation requests.
2. Update this document as progress is made (sections above should reflect the latest state).
