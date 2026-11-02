# iFix Green Solutions — Official Website & Infrastructure

Official static website and configuration repository for **iFix Green Solutions (Pvt) Ltd** ([ifixgreensolutions.lk](https://ifixgreensolutions.lk)).

---

> [!IMPORTANT]
> **MANDATORY LOGGING RULE:**  
> For any and all work, updates, code changes, or configuration tweaks performed in this repository or associated services, **always record and update the Change Log in this `README.md` file before finishing.**

---

## 🌐 Live Services & Infrastructure

| Service | Endpoint / Details | Provider / Status |
|---|---|---|
| **Production Website** | [https://ifixgreensolutions.lk](https://ifixgreensolutions.lk) | GitHub Pages (Custom Domain + Cloudflare DNS) |
| **Alternative Domain** | [https://www.ifixgreensolutions.lk](https://www.ifixgreensolutions.lk) | CNAME redirect to `ifixgreen.github.io` |
| **Email Routing** | `admin@ifixgreensolutions.lk` → `ifixgreensolutions@gmail.com` | Cloudflare Email Routing (Active, SPF/DKIM configured) |
| **DNS Management** | `lila.ns.cloudflare.com` & `rocky.ns.cloudflare.com` | Cloudflare (Domains.lk Nameservers pointed to Cloudflare) |
| **TikTok Integration** | Developer Site Verification & OAuth Callbacks | Active (`/tiktok-callback`, `/tiktok/callback`, verification tokens) |

---

## 📁 Repository Structure

```
website/
├── index.html                                  # Main landing page (3D solar energetic theme, responsive, bilingual)
├── privacy.html                                # Privacy Policy page
├── terms.html                                  # Terms of Service page
├── tiktok-callback.html                        # TikTok OAuth callback handler
├── tiktok/
│   └── callback.html                           # Secondary TikTok OAuth callback path
├── tiktok7oWz5OrxFJj6cmvjJ5QBuYZaugctuiZt.txt # TikTok developer verification token 1
├── tiktok9fOC1Y7vXgEjjxr3UsyLNI4lEEQwNA15.txt # TikTok developer verification token 2
├── CNAME                                       # Custom domain pointer (ifixgreensolutions.lk)
├── README.md                                   # Project documentation and work log (this file)
├── GEMINI.md                                   # Assistant guidelines & logging rules
├── images/                                     # Assets, logos, product photos, project galleries
│   └── logo.png                                # Official iFix Green Solutions logo
└── .github/
    └── workflows/
        └── deploy.yml                          # Automated GitHub Actions deployment pipeline
```

---

## 🚀 Deployment Pipeline

This website automatically builds and deploys using **GitHub Actions**:
* Every commit pushed to the `main` branch automatically triggers `.github/workflows/deploy.yml`.
* Deployment status can be checked via GitHub CLI:
  ```bash
  gh run list --repo ifixgreen/website
  ```

---

## 📜 Complete Work & Change Log

All modifications, additions, and milestones are documented here in reverse chronological order:

### 2026-11-02
* **Project Documentation & Work Log Standard:**
  * Updated `README.md` with full infrastructure reference and comprehensive history.
  * Created `GEMINI.md` to enforce the rule: *all future updates must be recorded in `README.md`*.
  * Verified live status of website (HTTP 200 OK), TikTok verification token (`tiktok9fOC1Y7vXgEjjxr3UsyLNI4lEEQwNA15.txt`), and Cloudflare Email Routing records.

### 2026-11-01
* **Diwali Festive UI & Offer Card Badges:**
  * Redesigned offer card badges into corner pill badges sitting cleanly above tags inside cards, preventing clipping from rotated ribbon containers.
  * Adjusted Diwali card ribbon text formatting for clear visibility across all viewport sizes.

### 2026-10-19
* **TikTok App Verification:**
  * Added developer URL-prefix verification file `tiktok9fOC1Y7vXgEjjxr3UsyLNI4lEEQwNA15.txt` for TikTok app ID `7697163022086899732`.

### 2026-10-18
* **Branch Contacts & Communication:**
  * Updated Contact section to explicitly list all four physical branch addresses with direct contact numbers (Mannar HQ, Colombo, Jaffna, Batticaloa).
  * Repaired masked `tel:` links for direct calling from mobile devices.
* **Company Figures Update:**
  * Updated live company stats to 385 completed projects and 4.9 MW total installed capacity (54 completed in the current year).
* **Festival Seasonal Theme (Ayudha Pooja):**
  * Added festival theme layer with festive banner bar and offer accents.
  * Customized hero background with festival imagery (diyas, warm lighting, solar silhouette) while preserving solar stats readability.

### 2026-10-17
* **Promotional Offers Section:**
  * Added "Current Offers" section showcasing promotional packages:
    * 20kW Three-Phase Hybrid (Rs 2,160,000)
    * 6kW Off-Grid System (Rs 899,000)
  * Integrated direct WhatsApp inquiry buttons for each promotional package.
* **October Profile Sync:**
  * Updated stats to 380 projects / 4.9 MW.
  * Added Colombo Baseline Road branch location.
  * Added four new district project cards: 250kW Mannar, 44kW Mannar, Matale institution, and Kilinochchi 3.2kW.

### 2026-10-16
* **TikTok Integration:**
  * Added TikTok OAuth callback endpoints (`/tiktok-callback` and `/tiktok/callback`) with verification meta tags.
  * Added initial TikTok developer verification token `tiktok7oWz5OrxFJj6cmvjJ5QBuYZaugctuiZt.txt`.

### 2026-10-03
* **Cloudflare Email Routing (`admin@ifixgreensolutions.lk`):**
  * Configured Cloudflare Email Routing service for `ifixgreensolutions.lk`.
  * Verified `ifixgreensolutions@gmail.com` as the primary forwarding destination.
  * Created custom routing rule: `admin@ifixgreensolutions.lk` → forwards to `ifixgreensolutions@gmail.com`.
  * Automated Cloudflare MX records (`route1.mx.cloudflare.net`, `route2`, `route3`), SPF record (`include:_spf.mx.cloudflare.net`), and DKIM keys.

### 2026-09-30
* **Product & Service Tile Accuracy:**
  * Replaced placeholder graphics with authentic hardware photos for Energy Storage, Solar Panels, Inverters, and Monitoring systems.
  * Added authentic Sunways hybrid inverter product image.
* **Project Portfolio Expansion:**
  * Added 6 completed projects with authentic field photos: Arugam Bay, Eluthoor, Thurukkicity, Palikulam, Uyilankulam, Kurumpasiddy.
  * Updated business roadmap and growth timeline to reflect expansion.

### 2026-09-19
* **Visual Polish & Gallery Enhancement:**
  * Replaced repetitive visuals with 27 unique, distinct Sri Lankan solar installation photos across all gallery cards.
  * Standardized color palette to logo-derived navy blue, teal, and slate tones.

### 2026-09-17
* **Compliance & Legal Pages:**
  * Created dedicated `privacy.html` and `terms.html` pages.
  * Linked legal notices in the website footer.
  * Added TikTok property verification meta tag to homepage `<head>`.

### 2026-08-29
* **Mobile Responsiveness & Navigation:**
  * Implemented mobile navigation menu with centered logo.
  * Optimized image card aspect ratios and spacing for phones.
* **Brand Identity & 3D Interactive Design:**
  * Extracted exact brand colors from company logo (Navy blue `#1e3a5f`, Teal `#2b7a9e`, Sky blue `#5dade2`, Green `#4CAF50`).
  * Rebuilt hero with interactive 3D particle canvas.
  * Added sections: How Solar Works, Growth Roadmap, Collaborating Brands, SLSEA Accreditation details.
  * Added floating WhatsApp consultation widget and back-to-top button.

### 2026-08-27
* **Initial Setup & Hosting Deployment:**
  * Initialized static site structure with GitHub Actions deployment workflow.
  * Connected custom domain `ifixgreensolutions.lk` via GitHub Pages CNAME.
  * Configured Cloudflare DNS nameservers for Sri Lanka Registry (`domains.lk`) and enabled SSL/TLS.
