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
├── css/
│   └── main.css                                # Extracted modular styling for public website (hero, cards, forms, animations)
├── js/
│   └── main.js                                 # Extracted modular client script (mobile menu, calculator, toast, smooth scroll)
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

### 2026-11-28
* **TikTok Business & Marketing API Access Pack Alignment:**
  * Aligned specifications for integrating TikTok Marketing API on existing IFIX developer app (App ID `7697163022086899732`).
  * Defined permission scopes: Ads Management (read/write for advertiser account), Reporting (spend, impressions, clicks, conversions in Colombo time), and Creative Management.
  * Verified live prerequisite endpoints: verification files (`tiktok7oWz5OrxFJj6cmvjJ5QBuYZaugctuiZt.txt`, `tiktok9fOC1Y7vXgEjjxr3UsyLNI4lEEQwNA15.txt`) and OAuth callback endpoints (`/tiktok-callback`, `/tiktok/callback`) returning HTTP 200 OK.
  * Generated handoff access pack dossier `Weniton/ADS MANAGER/TIKTOK_HERMES_ACCESS_PACK.md` containing credentials, sandbox bindings, OAuth endpoints, and token exchange scripts for the Hermes automation desk.
  * Ready to execute OAuth consent and automated token storage upon receipt of numeric Advertiser ID, Business Center ID, and TikTok Marketing API approval.

### 2026-11-22
* **Management Dashboard & Admin Portal Login/Loading Diagnostics + Frame Auth-Assist Update:**
  * Diagnosed live loading/login blockers across the Management Dashboard and `admin.ifixgreensolutions.lk`:
    * **Google Apps Script Access Setting (`access: "ANYONE"` vs `"ANYONE_ANONYMOUS"`)**: Confirmed that Management Dashboard (Prod & Dev), Accounting, and Task Board Apps Script manifests use `"access": "ANYONE"`, which enforces a Google Sign-In redirect (`302 → accounts.google.com/ServiceLogin`) with `X-Frame-Options: SAMEORIGIN` and `frame-ancestors 'self'`, preventing unauthenticated iframe loads/logins.
    * **Live Server Deployment Gap (`admin.ifixgreensolutions.lk/management`)**: Verified via live inspection and `README — admin page (read before any change)` that `admin.ifixgreensolutions.lk` runs on the remote desk server (`/opt/data/workspace/dashboard-server.py`, port `8095`) behind `cloudflared-dashboard`, where `/management` returns HTTP `404` until deployed via the `ifix-desk` MCP bridge and registered in `dashboard-server.py`.
  * Updated `Weniton/admin page/social-dashboard/js/frame-view.js` and `social-dashboard/css/frame-view.css`:
    * Added a 5-second fallback loader timeout so embedded GAS pages never hang indefinitely if Google blocks framing.
    * Added a dismissible `.auth-bar` inside `.frame-container` with a live-synced **↗ Open / Sign In** button for the active `Prod` / `Dev` URL.

### 2026-11-21
* **Management Dashboard Audit & Dual-Environment Controller Integration (`management.html`):**
  * Conducted an in-depth audit of the **Solar Project Management Dashboard** (`Sharon/Management dashboard`):
    * Verified Google Apps Script backend structure (`SidebarMenu.js`, `DashboardForm.html`, `AutoQuote.js`, `DailyReport.js`, `entrycopy.js`, `appsscript.json`).
    * Confirmed active project pipeline categories: On Grid, Off Grid, Grid Tied with Battery Backup, and Solar Water Pump with 40+ project milestone checkpoints (Clearance, Quotation, Advance, Site Visit, Panel/Inverter Fitted, CEB File, CEB Submission, Invoicing, Warranty).
    * Confirmed 5 web app functional tabs: `DATA ENTRY` (search, metadata, milestone grid, batch queue, audit logs), `ON PROCESS`, `TO BE CONFIRMED`, `COMPLETED` (month filters), and `DASH BOARD` (KPI overview).
  * Upgraded `Weniton/admin page/social-dashboard/management.html`:
    * Added the frosted-glass environment toggle (`Prod` vs `Dev`) in the page header to match `accounting.html` and `task-board.html`.
    * Configured dual-endpoint routing in `FrameViewController` pointing to:
      * **Production**: `AKfycbz7JQ6SCriD7oc7nowq_pAsn7vHRssY8no9W9u_SGaL6bALhw1do0vizr0zJo0haA7QFQ` (`@48`)
      * **Development**: `AKfycbxX1WfWGuzmSmEd1M3A8EsAOJNcyyo72nK-QAPnNcQMSBLk608bUCalT7GCxvK75z4bGg` (`@2`)
    * Preserved minimal file size footprint (clean 64 lines).
* **Complete Modular Architecture & Code Line Reduction (Admin Portal & Public Website):**
  * Segmented and modularized all monolithic code across the entire codebase to minimize lines per file, improve maintainability, and enforce DRY principles:
    * **Web Components Navigation (`social-dashboard/js/nav-component.js`)**: Replaced repetitive 60+ line SVG navigation blocks across all admin subpages with custom HTML5 Web Components `<ifix-rail active="...">` (desktop left rail) and `<ifix-mobile-nav active="...">` (mobile bottom nav), reducing nav markup to 2 lines per page.
    * **Modular CSS Architecture (`social-dashboard/css/`)**:
      * `theme.css`: Core design system variables, glassmorphism background gradients, dot grid mask, typography, and foundational layout.
      * `navigation.css`: Left desktop rail, mobile bottom bar, header bar, search bar, avatar, and back button styles.
      * `components.css`: Cards, KPI grids, status badges, buttons, filter pills, tabs, item cards, tables, modal dialogs, and form controls.
      * `frame-view.css`: Fullscreen container, spinner loader, and Prod/Dev environment switchers for embedded enterprise modules.
      * `hr-vacancy.css`: District progress bars, candidate cells, role pills, and CV modal styles.
    * **Modular JavaScript Architecture (`social-dashboard/js/`)**:
      * `clock.js`: Self-initializing Colombo live time ticker.
      * `search.js`: Universal client-side search filtering across cards and table rows.
      * `frame-view.js`: Reusable controller class `FrameViewController` for embedded Google Apps Script applications with Prod/Dev switching, external pop-out, and auto-hiding loader.
      * `ops-view.js`: Operations view tab switcher.
      * `po-view.js`: Purchase order filter pills, stock entry modal controller, and deletion confirmation dialog.
      * `users-view.js`: Staff user management actions (add, deactivate, reset, delete).
      * `hr-vacancy-data.js` & `hr-vacancy-view.js`: Candidate dataset and DOM rendering functions.
    * **Admin HTML Line Reductions (Total dropped from 4,689 to 1,492 lines, a 68% overall reduction)**:
      * `accounting.html`: 401 lines → 64 lines (84% reduction).
      * `management.html`: 356 lines → 57 lines (84% reduction).
      * `task-board.html`: 401 lines → 64 lines (84% reduction).
      * `admin.html`: 618 lines → 197 lines (68% reduction).
      * `glass-dashboard.html`: Synchronized with `admin.html` (197 lines).
      * `hr-vacancy.html`: 450 lines → 122 lines (73% reduction).
      * `po.html`: 816 lines → 270 lines (67% reduction).
      * `ops.html`: 844 lines → 345 lines (59% reduction).
      * `users.html`: 803 lines → 373 lines (54% reduction).
    * **Public Website Modularization (`website/`)**:
      * Extracted 432 lines of inline CSS from `website/index.html` into `website/css/main.css`.
      * Extracted 84 lines of inline JavaScript from `website/index.html` into `website/js/main.js`.
      * Reduced `website/index.html` from 1,160 lines to 646 lines (clean semantic `<section>` blocks).
    * **Deployment & Server Sync**:
      * Updated `Weniton/admin page/deploy-final.sh` to copy `css/` and `js/` modular directories directly to production `/opt/data/workspace/social-dashboard/`.
      * Verified `scripts/dev_server.py` routes all 23 endpoints and serves static CSS/JS assets cleanly.
    * **Strict Compliance**: Maintained zero Drone Operations references in this project workspace.

### 2026-11-20
* **IFIX Admin Portal Core Google Apps Script Enterprise Modules Integration (`admin.ifixgreensolutions.lk`):**
  * Seamlessly integrated 3 enterprise web application dashboards into dedicated frosted glassmorphism iframe views under `social-dashboard/`:
    * `accounting.html` (`/accounting`, `/ledger`): Embeds **iGroup Ledger** (`AKfycbxsKMkD3iwQ-NTIorD8MIBUJqHzkEXCHLx_GHi0FTBW4LitxdMat__oZE_b6QMNuQDQQA`) for complete double-entry bookkeeping, 18% VAT compliance, and multi-bank reconciliation (Commercial Bank, HNB, Sampath, NTB), complete with a Prod/Dev environment toggle, live reload, and external pop-out actions.
    * `management.html` (`/management`): Embeds the **Solar Project Management Dashboard** (`AKfycbz7JQ6SCriD7oc7nowq_pAsn7vHRssY8no9W9u_SGaL6bALhw1do0vizr0zJo0haA7QFQ`) tracking solar installation milestones (Site Visit, Engineering, CEB/LECO Net Metering Approvals, Equipment Dispatch, Commissioning) and document checkpoints.
    * `task-board.html` (`/task-board`, `/tasks`): Embeds **Task Board V2** (`AKfycbwicwsh1fax42QGn-W1mYEQ5oKOUeFYfBo07Q1vRjVPpIQB7RN84b_VLau-5cHr8uIZZA`) providing interactive Kanban task workflows, customer complaints logging & escalation desk, scheduling calendar, and interactive whiteboard, with a Prod/Dev switcher.
  * Standardized and synchronized Desktop Left Navigation Rail across all portal pages (`admin.html`, `ops.html`, `po.html`, `users.html`, `accounting.html`, `management.html`, `task-board.html`) featuring quick navigation icons for all 7 primary departments.
  * Synchronized Mobile Bottom Navigation across all portal pages with 6 core touch destinations (`Home`, `Accounts`, `Mgmt`, `Tasks`, `Ops`, `POs`).
  * Wired all Operational System Links in `ops.html` to direct to the live embedded views (`Task Board`, `IFIX Accounting`, `IFIX Management`, `HR Missed Punch`, `Vacancy Sheet`).
  * Updated local dev preview server (`scripts/dev_server.py`) and production deployment script (`deploy-final.sh`) to support routing and extensionless aliases (`/accounting`, `/management`, `/task-board`, `/tasks`).
  * Maintained strict separation and exclusion of Drone Operations from this workspace.
* **IFIX Admin Portal Complete Overhaul & Route Resolution (`admin.ifixgreensolutions.lk`):**
  * Built complete, standalone responsive frosted glassmorphism views under `social-dashboard/`:
    * `admin.html`: Main admin hub layout with real-time Colombo clock, interactive search, KPI metrics, project approval queue, HR pipeline ring chart, PO backlog, and quick links.
    * `ops.html`: Operations dashboard (`/ops`) featuring live views for Possible Projects (13 awaiting approvals with client specs, district badges), After Sales tickets (8 tickets with priority tags), Complaints log, and quick links to company modules.
    * `po.html`: Purchase Orders & Stock Entry dashboard (`/po`) with interactive filter pills (`all 12`, `needs entry 12`, `partial 0`, `entered 0`), item stock entry modal, and deletion confirmation.
    * `users.html`: User Management & Login Roster dashboard (`/users`) with add-user form, 12 registered crew member accounts, live role assignment, and status controls.
    * `hr-vacancy.html`: Verified existing candidate register with district normalization and inline CV preview.
  * Updated `deploy-final.sh` to synchronize all 5 core views (`admin.html`, `hr-vacancy.html`, `ops.html`, `po.html`, `users.html`) to `/opt/data/workspace/social-dashboard/` with extensionless routing support (`/ops`, `/po`, `/users`).
  * Updated local development preview server `scripts/dev_server.py` to route all administrative subpages.
  * Strictly removed and excluded all Drone Operations references from this project workspace per explicit user directive.
* **Admin Executive Review Page Audit & Property-Binding Fixes (`v2.5.5-dev` / `@222`):**
  * Audited `View_AdminReview.html` and `Js_AdminReview.html` in `Drone Operations/web dev`.
  * Fixed property-name mismatches in `renderAdminReviewIncentives()` so Daily & Weekly checklist cards accurately display `reviewId`, `weekKey`, `arrivalTime`, `inventoryPhotoUrl`, `droneAccidentScore`, `droneCleaningPhoto1..3`, `vehicleInteriorPhoto1..2`, `vehicleExteriorPhoto1..3`, and `accidentRepairScore`, and pre-load the selected submission into `#modalIncentiveReview`.
  * Wired `loadIncentiveReviewsFromCloud()` in `Js_Incentives.html` to auto-refresh `updateAdminReviewKpis()` and `renderAdminReviewIncentives()`.
  * Deployed to Web Development (`@222`) at deployment `AKfycbydy-s4t-_W5gFpkZfwAfc4ZJYNT85KtIrTd6ehqh381deSg3Z-J6MadUhYif_PM5ONEw`.

### 2026-11-19
* **Field Crew Operations Incentive Upload, Dedicated Incentive Tab & Admin 1/0 Review System:**
  * Added **Incentive Upload** subview in the **Operations Tab** allowing Operators and Helpers to submit daily check-ins (arrival time, inventory equipment photo, zero drone accident notes) and weekly inspections (3-angle drone cleaning photos, 5-photo vehicle cleaning photos, accident repair notes).
  * Automatically uploads all submitted photos directly to designated subfolders in Master Google Drive folder `18m5T7l3RBF-cazUyAUv5PGuhdNSqoDr0`.
  * Added dedicated **Incentive** tab in the bottom navigation for Operators and Helpers (`Home | Operations | Incentive | Orders | Menu`) to view their personal flight acreage, bonus sums, leaderboard, and compliance verification status.
  * Under the **Incentive Tab**, enabled Admins to review and score each Operator and Helper individually with binary 1/0 toggles (`1 Correct` vs `0 Wrong`), pre-loading uploaded photos from Google Drive for complete visual inspection before approving payouts.
  * Deployed to Web Development (`@210`) at deployment `AKfycbydy-s4t-_W5gFpkZfwAfc4ZJYNT85KtIrTd6ehqh381deSg3Z-J6MadUhYif_PM5ONEw`.
* **Centralized Google Drive Storage Routing (Target Master Folder ID: `18m5T7l3RBF-cazUyAUv5PGuhdNSqoDr0`):**
  * Configured `MASTER_DRIVE_FOLDER_ID = '18m5T7l3RBF-cazUyAUv5PGuhdNSqoDr0'` across backend services in `Drone Operations/web dev`.
  * Centralized all photo uploads (flight completion, 3-angle drone cleaning, 5-photo vehicle cleaning, inventory audits, land photos), PDFs (sales invoices, Vyapar daily & batch expense sheets), and documents (deposit slips, CapEx, user avatars) to automatically store in designated subfolders inside the user's master Google Drive folder.
  * Deployed to Web Development (`@207`) at deployment `AKfycbydy-s4t-_W5gFpkZfwAfc4ZJYNT85KtIrTd6ehqh381deSg3Z-J6MadUhYif_PM5ONEw`.
* **Drone Operations Admin Segmented Workspace Architecture (Operator | Office | Admin):**
  * Rather than displaying all tabs at once for Admin, partitioned views into three dedicated workspaces: **Operator** (Flight Hub, Vehicle Log, Time Punch, Checklist), **Office** (Orders Hub, Farmers, Accounts, Reviews), and **Admin** (Profit & Loss, Dashboard, User Management, Activity Log).
  * Added 1-tap workspace mode switcher pill above the floating bottom navigation bar and organized desktop header nav and sidebar.
  * Deployed to Web Development (`@205`) at deployment `AKfycbydy-s4t-_W5gFpkZfwAfc4ZJYNT85KtIrTd6ehqh381deSg3Z-J6MadUhYif_PM5ONEw`.
* **Drone Operations Crew Incentive Review & Verification System (1/0 Gate):**
  * Implemented individual operator & helper binary checklist review system (`1` for correct/passed, `0` for wrong/failed) in `Drone Operations/web dev`.
  * **Daily Review**: Arrival time tracking, daily inventory item photo upload & supervisor audit, zero drone accident verification.
  * **Weekly Review**: Drone cleaning verification with 3 angle photos, vehicle cleaning verification with 2 interior + 3 exterior photos, and accident repair work assessment.
  * **Payout Gate**: "Collect Incentive" action on staff leaderboard strictly gated; blocked if any daily or weekly criteria scores `0`.

### 2026-11-22
* **Weekly figures:** 353 → **369 projects**, 4.8 → **5.0 MW**, **66 completed in 2026**. Profile rebuilt and the Drive file replaced in place.
* **Pump row read correctly:** a Mannar pump typed `1500kW` is a 1,500 W submersible — the figures code now treats any value of 1000 kW or more as watts, so the total is 5.0 MW and not 6.5.
* **Offers:** the storage graphic came out; two Black Friday cards went in — 6 kW off-grid **Rs 999,000** and 20 kW hybrid **Rs 2,399,000**, each with its inclusions and Call/WhatsApp.
* **Build fix:** the render and PDF steps were silently failing because a global PYTHONPATH pointed at a broken Pillow; both now run on the venv interpreter with PYTHONPATH cleared.
* Verified live: 369 / 5.0 / 66 on the counters and growth note, both prices present, storage graphic gone.

### 2026-11-15 (later)
* **Project Documentation & Work Log Standard:**
  * Updated `README.md` with full infrastructure reference and comprehensive history.
  * Created and updated `GEMINI.md` to strictly enforce:
    1. **Always read `README.md` before starting any task.**
    2. **Always update `README.md` work log after any task.**
    3. **Always commit and push changes to GitHub `main`.**
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
