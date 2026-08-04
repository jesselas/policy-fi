# TODO

## AuditLamp findings (audit run 2026-08-04, logged 2026-08-05)

Backlog only. Nothing here has been started.

Context: the site is served by **GitHub Pages** (`.github/workflows/deploy.yml`,
CNAME `policy.fi`, A records 185.199.108-111.153). GitHub Pages cannot set custom
HTTP response headers: no `.htaccess`, no `_headers` file, no config hook.
Verified live on 2026-08-04 that none of the five security headers are present.
That constraint decides items 5 to 11 below.

Caveat on the source: unsolicited vendor outreach, proprietary and unverifiable
point weights, 10 of 11 items paywalled ("SEALED"). The findings are worth acting
on where they stand up on their own merits, which is most but not all of them.

### Worth doing (in this order)

1. **Self-host Google Fonts** (audit item 4, ~1 h)
   Currently `fonts.googleapis.com` and `fonts.gstatic.com` in `base.njk`. These
   are the only third-party requests on the whole site; there is no analytics of
   any kind (grepped for gtag, Plausible, Matomo, Fathom, Umami, Clarity,
   Hotjar). So this is the single thing sending visitor IPs to a third party,
   which is what the German Google Fonts rulings covered. Also removes two DNS
   lookups and two preconnects from the critical path, which should help the
   lab PERF score of 77.

2. **Privacy policy page + footer link** (audit item 3, ~30 min)
   Do this *after* the fonts, not before. Once the fonts are local the page is
   short and completely true: no cookies, no analytics, no third-party requests,
   no forms. Written today it would have to disclose the Google Fonts transfer.

3. **Sitemap `lastmod`** (audit item 2, ~45 min)
   `src/sitemap.njk` gives all four URLs `{{ buildDate }}`, so every page claims
   to change on every deploy. Derive per-page dates from the last git commit
   touching each source file. **Gotcha:** `actions/checkout@v4` shallow-clones by
   default, so the workflow needs `fetch-depth: 0` or every file reports the same
   date. While in there, drop `<priority>`; Google ignores it.

4. **SPF + DMARC** (audit items 8 and 9, ~15 min, blocked on one decision)
   Currently no SPF and no DMARC on policy.fi. **Do not use the record the audit
   suggested.** It proposes `v=spf1 include:_spf.google.com -all`, but the domain's
   mail runs through Zoner (`MX` = mailscanner01/02.zoner.fi), not Google. That
   record with a hard fail would cause legitimate mail from the domain to be
   rejected.
   - If mail is *sent* from @policy.fi via Zoner: include Zoner's senders. Their
     own published SPF is `include:spf1.zoner.fi include:spf2.zoner.fi`.
   - If the domain only *receives* and never sends: `v=spf1 -all` is correct and
     is the strongest anti-spoofing stance.
   - DMARC either way: start `v=DMARC1; p=none; rua=mailto:...`, watch reports,
     then tighten toward `p=reject`.

### Blocked on a hosting decision

5. **Security headers** (audit items 5, 6, 7, 10, 11)
   CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy. Not
   settable on GitHub Pages. One decision covers all five:
   - *Cloudflare free tier in front of the domain* (~45 min): fixes all five,
     gives an HSTS toggle, adds a CDN. Cost is moving nameservers off Zoner.
   - *Migrate to Cloudflare Pages or Netlify*: both support a committed
     `_headers` file. Bigger change.
   - *Meta-tag partial* (~15 min): works for CSP and Referrer-Policy only. HSTS,
     X-Frame-Options and nosniff cannot be expressed as meta tags.
   - *Do nothing*: defensible. Static site, no login, no forms, no cookies, no
     user data, so the real attack surface for these is close to nil.
   - Narrow extra option: GitHub Support will add HSTS manually for a custom
     domain on request.

### Not recommended as framed

6. **"Real-business trust pages"** (audit item 1, nominally +30 pt)
   The home page already serves as the About page and the footer already carries
   a contact address. Item 2 above (`/privacy/`) covers one of the three. Add a
   dedicated `/contact/` page if you want one on its own merits, not to chase
   points on a vendor's proprietary scale.
