<div align="center">

<img src="docs/images/header.png" alt="RaastaAI Header" width="100%" />

# RaastaAI
### Smarter Roads. Faster Resolution.

An AI-powered platform connecting citizens and municipal authorities to report, monitor and resolve road infrastructure issues.

[![GitHub Repository](https://img.shields.io/badge/GitHub-Rasta--AI-181717?style=for-the-badge&logo=github)](https://github.com/KrupalWarale/Rasta-AI)

</div>

---

## Project Preview

<div align="center">

<img src="docs/images/project-preview.png" alt="RaastaAI Project Preview" width="100%" />

| **Citizen Portal** | **Municipal Admin Dashboard** |
| :---: | :---: |
| Issue Reporting & GPS Selection | Complaint Verification & Tracking |

</div>

---

## System Architecture

<div align="center">
<img src="docs/images/architecture.png" alt="RaastaAI System Architecture" width="100%" />
</div>

The architecture separates client presentation, client-side intelligence, and browser-level persistence for rapid prototype deployment:

1. **Users Layer**: Accessible via dedicated Citizen Portal and Municipal Admin Portal interfaces.
2. **Frontend Layer**: Built on **React 19**, **TypeScript**, and bundled with **Vite 8**.
3. **Services Layer**: Handles Complaint Management logic, **Gemini AI** vision integration, **Leaflet** maps, and **Recharts** metrics.
4. **Data & External Services**: Utilizes **Browser LocalStorage** for client-side state persistence, integrated with **OpenStreetMap** tile layers and the native HTML5 **Geolocation API**.

> *Note: LocalStorage is utilized for client-side demonstration persistence. Production server backend and database infrastructure are planned.*

---

## How It Works

<div align="center">
<img src="docs/images/workflow.png" alt="RaastaAI Workflow" width="100%" />
</div>

1. **REPORT** — Citizen submits a road issue with photo evidence and GPS location.
2. **ANALYZE** — Gemini AI inspects image for severity, category, and summary assessment.
3. **VERIFY** — Municipal authority reviews the AI analysis and validates complaint details.
4. **ASSIGN** — Issue is routed and assigned to appropriate maintenance teams.
5. **RESOLVE** — Repair proof is uploaded and official resolution status is finalized.

---

## Complaint Lifecycle

<div align="center">
<img src="docs/images/complaint-lifecycle.png" alt="RaastaAI Complaint Lifecycle Statuses" width="100%" />
</div>

```
 [ SUBMITTED ] ──► [ VERIFIED ] ──► [ ASSIGNED ] ──► [ IN PROGRESS ] ──► [ RESOLVED ] ──► [ CLOSED ]
        │
        └──► [ REJECTED ]
```

- **SUBMITTED**: Initial citizen report logged.
- **VERIFIED**: Validated by municipal officer.
- **REJECTED**: Flagged as invalid/duplicate during verification.
- **ASSIGNED**: Allocated to maintenance crew.
- **IN PROGRESS**: Active repairs under way.
- **RESOLVED**: Work completed; proof uploaded.
- **CLOSED**: Final sign-off logged.

---

## Key Features

| Feature | Description |
| :--- | :--- |
| **Citizen Road Issue Reporting** | Intuitive interface for reporting potholes, road cracks, and signage damage. |
| **Photo Evidence Submission** | Upload clear photographic evidence directly during issue submission. |
| **GPS Location Selection** | Interactive location picker backed by Browser Geolocation API. |
| **Interactive Complaint Map** | Real-time map displaying reported issues using Leaflet & OpenStreetMap. |
| **AI-Assisted Image Analysis** | Integration with `@google/genai` to analyze damage severity and auto-categorize. |
| **Municipal Complaint Verification** | Admin tools for municipal officers to verify, filter, and reject complaints. |
| **Complaint Assignment & Tracking** | Track status transitions from initial submission to final resolution. |
| **Resolution Evidence** | Upload and archive photographic proof upon repair completion. |
| **Analytics Dashboard** | Visual metrics powered by Recharts for municipal overview and operational trends. |

---

## Built With

<div align="center">
<img src="docs/images/tech-stack.png" alt="Tech Stack Strip" width="100%" />
</div>

* **Frontend**: React 19 • TypeScript • Vite 8 • Tailwind CSS v4
* **AI & Intelligence**: Google Gemini API (`@google/genai`)
* **Maps & Data Visualization**: Leaflet • OpenStreetMap • Recharts
* **UI & Animation**: Motion • Lucide React

---

## Project Structure

```text
Rasta-AI/
├── docs/
│   └── images/               # Documentation visual assets
├── public/                   # Static icons and assets
├── src/
│   ├── components/           # UI components (Map, Dashboards, Forms)
│   ├── context/              # State management & LocalStorage persistence
│   ├── services/             # Gemini AI & External API integrations
│   ├── types/                # TypeScript interfaces & types
│   ├── utils/                # Helper functions & data mappers
│   ├── App.tsx               # Primary application entry point
│   ├── main.tsx              # Application bootstrapper
│   └── index.css             # Tailwind CSS styles
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript config
└── vite.config.ts            # Vite build setup
```

---

## Run Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm / pnpm / yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/KrupalWarale/Rasta-AI.git
   cd Rasta-AI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**  
   Create a `.env` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

---

## Demo

- **Demo Data**: The repository includes pre-loaded sample complaints stored in LocalStorage to demonstrate map plotting, filtering, and status transitions out-of-the-box.
- **Persistence**: Any new complaints reported locally persist in browser LocalStorage. Reset by clearing local browser storage.

---

## Future Scope

- [ ] **Production Backend & Database**: Migration from LocalStorage to PostgreSQL / Node.js backend services.
- [ ] **Secure Authentication & RBAC**: Role-Based Access Control for citizens vs verified municipal employees.
- [ ] **Real-Time Notifications**: Automated updates for citizens on complaint progress via SMS/Email.
- [ ] **Municipal Department Routing**: Automatic dispatch to specialized departments (e.g., PWD, Traffic Safety).
- [ ] **Advanced Damage Analytics**: Multi-image historical comparison to prioritize high-risk road hazards.

---

<div align="center">

### RaastaAI
**Smarter Roads. Faster Resolution.**

Built with React, TypeScript and AI.

[GitHub Repository](https://github.com/KrupalWarale/Rasta-AI)

</div>