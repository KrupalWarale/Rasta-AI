<div align="center">

# 🛣️ RaastaAI

### Smart Road Issue Reporting & Municipal Resolution Platform

**Spot it. Report it. Track it. Fix it.**

A civic technology platform designed to connect everyday road users with municipal authorities through photo-supported reports, location-aware issue mapping, transparent complaint tracking, and accountable repair closeout.

<p>
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=20232A" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-typed-3178C6?logo=typescript&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white" />
  <img alt="Leaflet" src="https://img.shields.io/badge/Maps-Leaflet-199900?logo=leaflet&logoColor=white" />
  <img alt="Recharts" src="https://img.shields.io/badge/Charts-Recharts-22B5BF" />
  <img alt="License" src="https://img.shields.io/badge/License-MIT-green.svg" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/867145e2-2328-4b68-9824-14f1a379cb4c" width="32%" />
  <img src="https://github.com/user-attachments/assets/ac2d6359-40d4-42cb-a7e3-9914717b903a" width="32%" />
  <img src="https://github.com/user-attachments/assets/7a6f56cb-f465-4fa2-b873-64ca51144a7f" width="32%" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/4cb3b386-2394-4021-990b-d4e88fb24921" width="32%" />
  <img src="https://github.com/user-attachments/assets/b2bb8ed5-dae0-46fd-be92-91e8a85e0ac3" width="32%" />
  <img src="https://github.com/user-attachments/assets/65bd4986-f539-4209-8c80-c3d813d6bc19" width="32%" />
</p>

## 🎥 Project Demo

Watch the complete demonstration of **RaastaAI — Smart Road Issue Reporting & Municipal Resolution Platform**.

<p align="center">
  <a href="https://youtu.be/V5Fk328ZFYk">
    <img src="https://img.youtube.com/vi/V5Fk328ZFYk/maxresdefault.jpg" alt="RaastaAI Project Demo" width="800">
  </a>
</p>

<p align="center">
  ▶️ <a href="https://youtu.be/V5Fk328ZFYk"><strong>Watch the Full Demo on YouTube</strong></a>
</p>


<p align="center">
  <strong>🌍 Building Smarter Roads. Creating Safer Cities.</strong>
  <br>
  Powered by AI. Driven by Civic Innovation. Built for Everyone.
</p>

<p align="center">
  ⭐ If you like RaastaAI, consider giving this repository a star!
</p>

## Contents

- [Why RaastaAI?](#-why-raastaai)
- [How It Works](#-how-it-works)
- [Feature Matrix](#-feature-matrix)
- [Technology Stack](#-technology-stack)
- [Architecture and Data Flow](#-architecture-and-data-flow)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Commands](#-available-commands)
- [Demo Personas and Sample Tickets](#-demo-personas-and-sample-tickets)
- [Privacy, Permissions, and Data Handling](#-privacy-permissions-and-data-handling)
- [Reliability and Production Readiness](#-reliability-and-production-readiness)
- [Contributing](#-contributing)
- [License](#-license)

## 🌍 Why RaastaAI?

Potholes, deep cracks, damaged asphalt, and waterlogged roads can turn an ordinary commute into a safety risk. Yet reporting a defect is often disconnected from the work needed to repair it: citizens may not know where to report an issue, who is responsible, or whether action has been taken.

**RaastaAI is designed to make that journey visible from end to end.** Citizens can submit a location-aware report with photographic evidence and follow its progress. Municipal teams can triage complaints, verify defects, dispatch the appropriate crew, record repair evidence, and monitor service-level performance.

### The value proposition

- **For citizens:** a guided reporting experience, traceable ticket IDs, clear status updates, and visibility into community road issues.
- **For municipal teams:** a consolidated queue, severity-aware triage, crew assignment, geographic context, and operational analytics.
- **For communities:** a shared view of reported defects and a more transparent record of how issues move toward resolution.

> **Project status note:** This README documents the intended RaastaAI product and the repository's supplied setup configuration. Some workflows described below may depend on the application source code and runtime configuration. Confirm feature availability in the running build before presenting any feature as production-operational.

## 🔄 How It Works

```text
┌──────────────────────┐
│ Citizen spots a road │
│ defect or hazard     │
└──────────┬───────────┘
           │ Photo + category + severity
           │ GPS / map pin + location details
           ▼
┌──────────────────────┐
│ Submit complaint     │
│ Generate ticket ID   │
└──────────┬───────────┘
           ▼
┌──────────────────────┐
│ Municipal triage     │
│ Verify or reject     │
└──────────┬───────────┘
           │
      ┌────┴─────┐
      │          │
      ▼          ▼
┌───────────┐  ┌───────────────────┐
│ Rejected  │  │ Verified          │
│ + reason  │  │ + priority        │
└───────────┘  └─────────┬─────────┘
                         ▼
               ┌───────────────────┐
               │ Assign repair crew│
               │ and target time   │
               └─────────┬─────────┘
                         ▼
               ┌───────────────────┐
               │ Repair in progress│
               │ Field work begins │
               └─────────┬─────────┘
                         ▼
               ┌───────────────────┐
               │ Upload after-photo│
               │ Engineer sign-off │
               └─────────┬─────────┘
                         ▼
               ┌───────────────────┐
               │ Resolved ticket   │
               │ + closure evidence│
               └─────────┬─────────┘
                         ▼
               ┌───────────────────┐
               │ Citizen tracking  │
               │ + KPI/SLA reports │
               └───────────────────┘
```

### Complaint lifecycle

`Submitted → Verified → Assigned → In Progress → Resolved`

A complaint may instead move to `Rejected` when an authority records a reason. In a production deployment, state changes should be validated by the server, recorded in an audit trail, and communicated to the reporting citizen.

## 🧭 Feature Matrix

The following matrix describes the intended role-based product scope.

| Capability | Citizen Portal | Municipal Admin Portal |
|---|---|---|
| Submit road issue | Submit category, severity, location, and photo evidence | Review incoming submissions |
| Evidence capture | Device camera, image upload, or example-image library where provided | Review submitted photos and attach closure evidence |
| Geolocation | Browser GPS request and manual map-pin selection | View issue locations on operational maps |
| Reverse geocoding | Resolve coordinates into a street/area/ward when a geocoding service is configured | Use ward and area information for routing and triage |
| Complaint tracking | Search by ticket ID and follow lifecycle timeline | Update complaint status and document decisions |
| My reports | View submitted reports and filter by status | Not applicable as a citizen-specific view |
| Community map | Explore issues with severity-coded markers | View defects across wards and municipal zones |
| Verification | See the resulting status and official rejection remarks | Accept or reject with documented justification |
| Crew assignment | View assigned team and estimated completion where available | Assign a maintenance squad and priority |
| Repair progress | Track `In Progress` updates | Mark field work as started |
| Resolution evidence | View before/after photos and closure remarks | Attach after-photos and engineer sign-off |
| Operations dashboard | Personal reporting and impact statistics | Complaint totals, pending verification, active repairs, resolved count, resolution rate |
| Search and filters | Search ticket ID; filter personal reports | Search, filter by category/status/severity/ward, sort, and paginate |
| Analytics | Community impact and personal statistics | Reporting/resolution trends, category breakdown, ward severity, resolution time, and SLA compliance |
| Notifications | Receive ticket lifecycle updates | Receive urgent-report and workflow notifications |
| Gamification | Earn civic badges and view contribution statistics | Monitor aggregate community participation where supported |
| Role switching | Switch between sample roles for demonstration, if enabled | Switch between sample roles for demonstration, if enabled |

### Severity colour convention

| Severity | Marker colour | Suggested interpretation |
|---|---|---|
| High | 🔴 Red | Significant hazard requiring urgent review |
| Medium | 🟠 Orange | Defect requiring planned attention |
| Low | 🟢 Green | Lower-priority issue suitable for routine scheduling |

Severity colours are a visual aid, not a substitute for municipal risk assessment. Emergency response and prioritisation rules should be defined by the responsible authority.

## 🧰 Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| UI framework | React 19 | Component-based user interface |
| Language | TypeScript | Static typing and safer refactoring |
| Development/build | Vite 8 | Local development server and production bundling |
| Styling | Tailwind CSS v4 | Utility-first styling |
| Iconography | Lucide React | Consistent interface icons |
| Motion | Motion | UI transitions and animation |
| Maps | Leaflet | Interactive map, pins, markers, and popups |
| Map tiles | OpenStreetMap tiles | Base-map imagery, subject to provider policy |
| Charts | Recharts | Responsive area, bar, and pie/donut visualisations |
| Browser persistence | LocalStorage and an observer/subscriber pattern (as specified) | Local demo state and cross-view updates |
| AI integration | `@google/genai` | Gemini API integration where used by the application |
| Server-related dependencies | Express, `tsx`, `dotenv` | Available dependencies for server-side/runtime integration where configured |
| Type checking | TypeScript compiler | `npm run lint` currently runs `tsc --noEmit` |

**Configuration reality:** the supplied `package.json` includes React, Vite, Tailwind's Vite plugin, Leaflet, Recharts, Motion, Lucide React, and Google GenAI. It defines `dev`, `build`, `preview`, `clean`, and `lint` scripts. The `lint` command is TypeScript checking rather than ESLint. The provided project metadata also requests geolocation permission. See the repository configuration files for the authoritative current setup.

## 🏗️ Architecture and Data Flow

### High-level view

```text
┌────────────────────────────── Browser ──────────────────────────────┐
│                                                                      │
│  ┌─────────────────┐        ┌────────────────────────────────────┐  │
│  │ Citizen screens │        │ Municipal screens                   │  │
│  │ Report / Track  │        │ Triage / Map / Analytics             │  │
│  └────────┬────────┘        └──────────────────┬─────────────────┘  │
│           └──────────────────┬─────────────────┘                    │
│                              ▼                                      │
│                 ┌────────────────────────┐                           │
│                 │ Shared application state│                          │
│                 │ subscribers / events    │                          │
│                 └────────────┬───────────┘                           │
│                              ▼                                      │
│                 ┌────────────────────────┐                           │
│                 │ LocalStorage (demo)     │                          │
│                 └────────────────────────┘                           │
└──────────────────────────────────────────────────────────────────────┘
                │                       │
                ▼                       ▼
       Browser geolocation       External map tiles /
       (permission-gated)        geocoding services, if configured

       Optional server-side integrations (for example, Gemini)
       must be configured separately and protected server-side.
```

### State and persistence considerations

The project specification describes reactive LocalStorage state with an observer/subscriber pattern. This can be useful for demonstrations and for synchronising views in the same browser, including cross-tab updates when implemented with browser storage events.

**LocalStorage is not a production database.** Data is specific to a browser profile, can be cleared or edited by the user, is not a secure source of authority, and does not automatically synchronise across different devices. For a municipal production system, use a server-authoritative API and database, authentication and role-based access control, durable image storage, audit logs, backups, monitoring, and server-side validation.

### Suggested complaint record

A durable complaint model should include fields similar to these (adapt to the application's actual implementation):

```ts
type ComplaintStatus =
  | "Submitted"
  | "Verified"
  | "Assigned"
  | "In Progress"
  | "Resolved"
  | "Rejected";

type Severity = "Low" | "Medium" | "High";

interface RoadComplaint {
  id: string;
  category: "Pothole" | "Waterlogging" | "Damaged Road";
  severity: Severity;
  status: ComplaintStatus;
  description: string;
  latitude: number;
  longitude: number;
  address?: string;
  ward?: string;
  photoUrls: string[];
  assignedTeam?: string;
  priority?: "Standard" | "Urgent" | "Emergency";
  estimatedCompletionAt?: string;
  rejectionReason?: string;
  resolutionRemarks?: string;
  beforePhotoUrl?: string;
  afterPhotoUrl?: string;
  createdAt: string;
  updatedAt: string;
}
```

This is an illustrative contract for architecture planning, **not a guarantee that the current source code exports this exact type**.

## 📁 Project Structure

The uploaded repository snapshot contains the root configuration files below. The `src/` application files were not included in the supplied file set, so the source tree shown for `src/` is a **recommended/expected layout**, not a verified inventory.

```text
RaastaAI/
├── .env.example          # Example environment variables; never put real secrets here
├── .gitignore            # Ignores dependencies, build output, logs, and env files
├── bun.lock              # Bun dependency lockfile
├── index.html             # Vite HTML entry point and page metadata
├── metadata.json          # App metadata and requested browser permissions
├── package.json           # Dependencies and npm scripts
├── tsconfig.json          # TypeScript compiler configuration
├── vite.config.ts         # React, Tailwind CSS v4, and Vite configuration
├── README.md
├── src/                   # Application source (expected; inspect your checkout)
│   ├── main.tsx           # React entry point
│   ├── App.tsx            # Root application / routing
│   ├── components/        # Shared UI, dialogs, badges, and notifications
│   ├── features/
│   │   ├── citizen/       # Report form, tracking, dashboard, profile
│   │   ├── admin/         # Triage, assignment, command dashboard
│   │   ├── maps/          # Leaflet maps, markers, and popups
│   │   └── analytics/     # Recharts dashboards and reports
│   ├── hooks/             # Reusable React hooks
│   ├── services/          # Geolocation, geocoding, AI, and data services
│   ├── store/             # State, LocalStorage, and subscriptions
│   ├── types/             # Shared TypeScript models
│   └── styles/            # Global styles
└── dist/                  # Generated production build (after npm run build)
```

## 🚀 Getting Started

### Prerequisites

- **Node.js:** use a current LTS release compatible with the installed Vite version.
- **npm:** installed with Node.js.
- **Git** (optional, for cloning and contributing).
- A modern browser. Location features require browser permission and generally a secure context (`https://` or `localhost`).

Check your installed versions:

```bash
node --version
npm --version
```

### 1. Get the project

If you already have the repository locally, open a terminal in the project root (the directory containing `package.json`).

```bash
git clone <YOUR_REPOSITORY_URL>
cd RaastaAI
```

Replace `<YOUR_REPOSITORY_URL>` with the actual repository URL. If you downloaded a ZIP, extract it and open the extracted project folder instead.

### 2. Install dependencies

```bash
npm install
```

The repository includes a `bun.lock` file as well. If the project is managed with Bun in your environment, use the project's established Bun workflow consistently; avoid mixing package managers without a reason.

### 3. Configure environment variables (if needed)

The supplied `.env.example` documents `GEMINI_API_KEY` and `APP_URL`. If the application uses the Gemini integration locally, create a local environment file based on the example:

```bash
cp .env.example .env.local
```

On Windows PowerShell, use:

```powershell
Copy-Item .env.example .env.local
```

Then edit `.env.local` and supply the appropriate values for your local environment. **Never commit real API keys.** The repository's `.gitignore` excludes `.env*` files while allowing `.env.example`.

Important security note: a key used by browser-bundled code may be exposed to users. Production AI requests should go through a server-side endpoint that reads the secret from the server environment. Do not ship a private API key in client-side JavaScript.

If no AI features are needed for the workflow being tested, configure only the variables actually required by the app. Do not assume `APP_URL` or `GEMINI_API_KEY` is required for every screen.

### 4. Start the development server

```bash
npm run dev
```

The current Vite script binds to `0.0.0.0` and uses port **3000**. Open:

```text
http://localhost:3000
```

Stop the server with `Ctrl+C`.

### 5. Type-check the project

```bash
npm run lint
```

Despite its name, this script currently runs `tsc --noEmit`. It checks TypeScript without emitting compiled files; it does not run ESLint rules.

### 6. Build for production

```bash
npm run build
```

Vite writes the production bundle to `dist/`. To preview the generated build locally:

```bash
npm run preview
```

Use the preview URL printed by Vite. A successful local build does not by itself verify deployment configuration, external API access, authentication, or production data persistence.

## 📜 Available Commands

| Command | What it does |
|---|---|
| `npm install` | Installs dependencies from `package.json` |
| `npm run dev` | Starts Vite on port 3000 and binds to `0.0.0.0` |
| `npm run build` | Builds the frontend for production into `dist/` |
| `npm run preview` | Serves the production build locally for verification |
| `npm run lint` | Runs TypeScript checking via `tsc --noEmit` |
| `npm run clean` | Runs `rm -rf dist server.js`; this command uses Unix-style shell syntax and may need an equivalent command on native Windows |

## 🧪 Demo Personas and Sample Tickets

### Role personas

The intended demo experience includes two roles:

| Persona | Role | Typical tasks |
|---|---|---|
| Citizen / Community Reporter | Citizen | Submit a road issue, view personal reports, search a ticket, explore the community map |
| Municipal Officer / Administrator | Municipal admin | Verify or reject reports, assign crews, update progress, close issues with evidence, review analytics |

The specification also describes an instant role switcher for frictionless testing. **No verified username/password pairs were present in the supplied configuration files.** Use the in-app role switcher if implemented, or configure demo accounts in the application's authentication layer. Do not treat a role switcher or client-side role flag as real access control.

### Sample tracking IDs

The following ticket IDs are requested as demonstration examples:

| Ticket ID | Example scenario | Suggested test path |
|---|---|---|
| `RA-2026-001` | High-severity pothole | Submit → verify → assign crew → in progress → resolve with after-photo |
| `RA-2026-002` | Waterlogging after rainfall | Submit → verify → assign drainage squad → record progress → resolve |
| `RA-2026-003` | Deep road cracks / damaged asphalt | Submit → verify or reject with a documented reason |
| `RA-2026-004` | Low-severity road defect | Submit → schedule standard maintenance → resolve |

These IDs are **sample documentation fixtures**, not confirmation that matching records are seeded in the current build. To make the examples immediately testable, seed the data store with matching records and ensure the tracking search can find them.

### Suggested end-to-end smoke test

1. Open the citizen experience and submit a report with a category, severity, photo, and map location.
2. Confirm that the report receives a unique ticket ID.
3. Switch to the municipal role and locate the new report.
4. Verify the complaint, or reject it with a clear reason.
5. Assign an appropriate crew and priority.
6. Move the ticket to `In Progress`.
7. Attach an after-photo and engineer closeout remarks.
8. Return to the citizen view and confirm that the latest status and evidence are visible.
9. Check that dashboard counts and charts reflect the transition.

## 🔐 Privacy, Permissions, and Data Handling

RaastaAI may handle location coordinates, road photographs, complaint descriptions, and account or profile information. Collect and retain only what is needed to process a report.

### Geolocation

- The project metadata requests the browser's **geolocation** permission.
- The browser should ask the user before providing GPS coordinates. Explain why location is requested before triggering it.
- Provide a manual map-pin option where possible, so a citizen can report an issue without sharing live device location.
- GPS coordinates can be sensitive. Do not expose a reporter's identity or precise location more broadly than operationally necessary.
- Reverse geocoding requires a geocoding provider or service; Leaflet alone does not convert coordinates into a street address or municipal ward.
- Browser geolocation generally requires `localhost` or HTTPS and can fail if permission is denied, the device has no location capability, or the signal is unavailable.

### Local browser storage

- LocalStorage content is stored in the browser profile and may persist after the tab closes.
- LocalStorage is not encrypted storage, not a secure database, and not shared automatically across devices.
- Users may clear browser storage at any time; private-browsing modes and browser policies can change persistence behaviour.
- Do not store passwords, API secrets, sensitive identity documents, or other high-risk information in LocalStorage.
- Treat any client-stored complaint, role, or status as untrusted input. A production backend must enforce authorisation and validate every state transition.

### Photographs and third-party services

- Ask users to submit only images they are authorised to share and avoid capturing faces, number plates, or private property unnecessarily.
- Images may contain EXIF metadata, including location information. Consider stripping metadata and applying retention controls before production storage.
- OpenStreetMap-based tiles and any geocoding service have their own usage policies and attribution requirements. Review the selected provider's current terms before deploying at scale.
- If Gemini or another external AI service processes a description or image, disclose the relevant data flow and follow the provider's terms and applicable privacy law.

### Production privacy checklist

- [ ] Publish a privacy notice and retention schedule.
- [ ] Obtain consent for optional location access and provide a manual alternative.
- [ ] Use HTTPS throughout the application.
- [ ] Keep secrets on the server, not in the frontend bundle.
- [ ] Add authentication, role-based authorisation, and server-side validation.
- [ ] Restrict image access and remove unnecessary metadata.
- [ ] Add audit logs for verification, rejection, assignment, and resolution.
- [ ] Define deletion, correction, backup, and incident-response procedures.

## 🛡️ Reliability and Production Readiness

RaastaAI's product goal involves public infrastructure and civic accountability. Before using it for real municipal operations, consider the following engineering controls:

- **Authoritative data:** persist complaints in a database with unique IDs, timestamps, and transaction-safe status changes.
- **Access control:** enforce citizen ownership and municipal permissions on the server, not just in the UI.
- **Auditability:** preserve who changed a status, when it changed, and the reason or evidence attached.
- **Uploads:** validate MIME type and file size; scan uploads; use object storage and access-controlled URLs.
- **Abuse prevention:** rate-limit submissions, detect duplicates, validate coordinates, and provide moderation/reporting workflows.
- **Operational alerts:** define priority rules, acknowledgement targets, escalation paths, and SLA calculation rules with municipal stakeholders.
- **Observability:** monitor client errors, server errors, failed uploads, API latency, and background processing.
- **Accessibility:** support keyboard navigation, visible focus, sufficient contrast, descriptive form errors, and screen-reader labels.
- **Testing:** add unit tests for state transitions, integration tests for the complaint lifecycle, and end-to-end tests for both roles.
- **Deployment:** configure environment variables, HTTPS, content security policy, backups, and rollback procedures.

The dashboard's resolution rate and SLA metrics should be defined precisely—for example, whether rejected tickets count as closed, how reopened complaints are treated, and whether resolution time uses calendar or business hours.

## 🤝 Contributing

Contributions are welcome—from bug fixes and accessibility improvements to mapping, analytics, testing, and documentation.

### Suggested workflow

1. Fork the repository and create a focused branch.
2. Install dependencies with `npm install`.
3. Make the smallest coherent change that addresses the issue.
4. Run `npm run lint` and `npm run build`.
5. Test the affected citizen and municipal workflows manually.
6. Include screenshots or a short reproduction scenario for UI changes.
7. Open a pull request describing the problem, the solution, testing performed, and any configuration changes.

### Contribution guidelines

- Keep changes readable, typed, and consistent with the existing architecture.
- Do not commit `.env.local`, API keys, private citizen data, or real complaint photographs without permission.
- Include accessible labels and keyboard support for new controls.
- Preserve status-transition integrity and add tests when changing lifecycle logic.
- Document new environment variables in `.env.example` using placeholder values only.
- For major features, open an issue first to discuss the intended behaviour and privacy implications.

### Bug reports and feature requests

A useful issue should include:
- A concise title and expected behaviour.
- Steps to reproduce the problem.
- Expected versus actual results.
- Browser/OS and relevant command output.
- Screenshots or redacted logs when they help explain the issue.

Never include credentials, API keys, or personal data in public issues.

## 📄 License

This project is documented as intended for release under the **MIT License**. Before publishing or distributing it, add a root-level `LICENSE` file containing the full MIT License text and the appropriate copyright holder/year. If the repository already has a different approved license, update this section and the badge to match it.

---

<div align="center">

**Better roads start with better reporting.**

*RaastaAI — making civic road maintenance more visible, traceable, and accountable.*

</div>
