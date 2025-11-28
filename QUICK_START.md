# Borehole Pros - Quick Start Guide

## Deploy in 3 Steps

### Step 1: Push to GitHub
\`\`\`bash
git add .
git commit -m "Phase 1: Borehole Pros website launch"
git push origin main
\`\`\`

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import from GitHub
4. Select this repository
5. Click Deploy

### Step 3: Setup Custom Domain
1. In Vercel Dashboard → Settings → Domains
2. Add `boreholepros.co.za`
3. Update DNS records (shown by Vercel)
4. Wait for verification (usually 5 mins)

**Done!** Your site is live.

---

## First Week Tasks

### Monday: Launch & Monitor
- [ ] Deploy to Vercel
- [ ] Run Lighthouse audit
- [ ] Test all phone links
- [ ] Test on mobile device

### Tuesday: Google Setup
- [ ] Create Google Search Console account
- [ ] Submit sitemap
- [ ] Claim Google Business Profile
- [ ] Verify business

### Wednesday: Analytics
- [ ] Setup Google Analytics 4
- [ ] Add tracking code to site
- [ ] Create custom conversions (phone calls, contact form)
- [ ] Setup notifications

### Thursday: Content
- [ ] Add real photos (replace placeholders)
- [ ] Update phone number (ensure 060 348 8268 throughout)
- [ ] Add your address (if needed)
- [ ] Review all copy

### Friday: Optimization
- [ ] Run SEO audit
- [ ] Check all keywords
- [ ] Verify schema markup
- [ ] Test contact form

---

## Key Configuration Files

**Next Config** - `next.config.mjs`
- Image optimization
- Headers (security)
- Redirects (SEO)
- React compiler

**Global Styles** - `app/globals.css`
- Design tokens (colors)
- Typography
- Utility classes

**Layout** - `app/layout.tsx`
- Organization schema
- Metadata
- Header/Footer

---

## Keyword Quick Reference

**Homepage Targets:**
- borehole drilling south africa
- plumbing services
- emergency plumber

**Johannesburg Page Targets:**
- borehole drilling johannesburg
- plumber johannesburg
- emergency plumbing johannesburg

**Each Location Page:**
- [service] [city]
- plumber [city]
- [service] near me [city]

---

## Performance Checklist

Lighthouse targets:
- [ ] Performance: 95+
- [ ] Accessibility: 95+
- [ ] Best Practices: 95+
- [ ] SEO: 100

Core Web Vitals:
- [ ] LCP: < 2.5s
- [ ] FID: < 100ms
- [ ] CLS: < 0.1

---

## Emergency Contacts to Update

Replace in code:
- `060 348 8268` → Your number
- `info@boreholepros.co.za` → Your email
- Social media links → Your profiles

Search for these in all files:
\`\`\`bash
grep -r "060 348 8268" .
grep -r "boreholepros" .
grep -r "Borehole Pros" .
\`\`\`

---

## Common Issues & Fixes

**Images not loading?**
→ Check alt text and image paths

**Forms not working?**
→ Backend integration needed (Phase 2)

**SEO not improving?**
→ Give it 2-4 weeks for initial indexing

**Mobile looks broken?**
→ Check viewport meta tag

---

## Resources

- **Next.js Docs:** nextjs.org
- **Tailwind Docs:** tailwindcss.com
- **Vercel Docs:** vercel.com/docs
- **SEO Guide:** (included in PHASE_1_SUMMARY.md)

---

**Ready to launch?** Deploy to Vercel now!
