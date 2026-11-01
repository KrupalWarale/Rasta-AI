import { Complaint } from '../types';
import { DEMO_ROAD_IMAGES, DEMO_REPAIR_IMAGES, DEMO_LOCATIONS } from './demoImages';

export const INITIAL_COMPLAINTS: Complaint[] = [
  {
    id: 'RA-2026-001',
    citizenId: 'cit-001',
    citizenName: 'Aditya Sharma',
    citizenEmail: 'citizen@raastaai.demo',
    citizenPhone: '+91 98201 45890',
    category: 'Pothole',
    description: 'Large pothole on the main road causing difficulty for two-wheeler riders.',
    severity: 'High',
    imageUrl: DEMO_ROAD_IMAGES[0].url,
    imageName: DEMO_ROAD_IMAGES[0].title,
    location: {
      ...DEMO_LOCATIONS[0],
      isDemo: true
    },
    status: 'Submitted',
    createdAt: '2026-10-28T09:30:00Z',
    updatedAt: '2026-10-28T09:30:00Z',
    timeline: [
      {
        status: 'Submitted',
        timestamp: '2026-10-28T09:30:00Z',
        actor: 'Citizen (Aditya Sharma)',
        remarks: 'Report registered with geo-tag and photographic evidence.'
      }
    ]
  },
  {
    id: 'RA-2026-002',
    citizenId: 'cit-001',
    citizenName: 'Aditya Sharma',
    citizenEmail: 'citizen@raastaai.demo',
    citizenPhone: '+91 98201 45890',
    category: 'Waterlogging',
    description: 'Water accumulation near the residential street.',
    severity: 'Medium',
    imageUrl: DEMO_ROAD_IMAGES[3].url,
    imageName: DEMO_ROAD_IMAGES[3].title,
    location: {
      ...DEMO_LOCATIONS[1],
      isDemo: true
    },
    status: 'Verified',
    createdAt: '2026-10-27T11:15:00Z',
    updatedAt: '2026-10-27T14:40:00Z',
    verifiedAt: '2026-10-27T14:40:00Z',
    verifiedBy: 'Rajesh Varma (Ward K-East Officer)',
    timeline: [
      {
        status: 'Submitted',
        timestamp: '2026-10-27T11:15:00Z',
        actor: 'Citizen (Aditya Sharma)',
        remarks: 'Report registered near residential drainage conduit.'
      },
      {
        status: 'Verified',
        timestamp: '2026-10-27T14:40:00Z',
        actor: 'Municipal Admin (Rajesh Varma)',
        remarks: 'Issue verified through civic GIS cross-check. Drainage clearance required.'
      }
    ]
  },
  {
    id: 'RA-2026-003',
    citizenId: 'cit-002',
    citizenName: 'Priya Mehra',
    citizenEmail: 'priya.mehra@example.com',
    citizenPhone: '+91 98452 77123',
    category: 'Damaged Road',
    description: 'Cracked road surface near the main junction.',
    severity: 'Medium',
    imageUrl: DEMO_ROAD_IMAGES[6].url,
    imageName: DEMO_ROAD_IMAGES[6].title,
    location: {
      ...DEMO_LOCATIONS[2],
      isDemo: true
    },
    status: 'Assigned',
    createdAt: '2026-10-26T16:20:00Z',
    updatedAt: '2026-10-27T10:00:00Z',
    verifiedAt: '2026-10-27T08:30:00Z',
    verifiedBy: 'Rajesh Varma',
    assignedTeam: 'Road Maintenance Team A',
    assignedAt: '2026-10-27T10:00:00Z',
    assignmentPriority: 'Standard',
    assignmentRemarks: 'Mobilize asphalt patching crew with mini roller.',
    timeline: [
      {
        status: 'Submitted',
        timestamp: '2026-10-26T16:20:00Z',
        actor: 'Citizen (Priya Mehra)',
        remarks: 'Initial complaint filed with road crack photo.'
      },
      {
        status: 'Verified',
        timestamp: '2026-10-27T08:30:00Z',
        actor: 'Municipal Admin (Rajesh Varma)',
        remarks: 'Verified road deterioration and confirmed maintenance jurisdiction.'
      },
      {
        status: 'Assigned',
        timestamp: '2026-10-27T10:00:00Z',
        actor: 'Municipal Admin (Rajesh Varma)',
        remarks: 'Work order dispatched to Road Maintenance Team A.'
      }
    ]
  },
  {
    id: 'RA-2026-004',
    citizenId: 'cit-001',
    citizenName: 'Aditya Sharma',
    citizenEmail: 'citizen@raastaai.demo',
    citizenPhone: '+91 98201 45890',
    category: 'Pothole',
    description: 'Multiple potholes near the school entrance.',
    severity: 'High',
    imageUrl: DEMO_ROAD_IMAGES[1].url,
    imageName: DEMO_ROAD_IMAGES[1].title,
    location: {
      ...DEMO_LOCATIONS[3],
      isDemo: true
    },
    status: 'In Progress',
    createdAt: '2026-10-25T08:45:00Z',
    updatedAt: '2026-10-26T11:20:00Z',
    verifiedAt: '2026-10-25T10:00:00Z',
    verifiedBy: 'Rajesh Varma',
    assignedTeam: 'Emergency Road Repair Team',
    assignedAt: '2026-10-25T12:00:00Z',
    assignmentPriority: 'Urgent',
    assignmentRemarks: 'School zone safety hazard. Immediate surface leveling required.',
    inProgressAt: '2026-10-26T11:20:00Z',
    timeline: [
      {
        status: 'Submitted',
        timestamp: '2026-10-25T08:45:00Z',
        actor: 'Citizen (Aditya Sharma)',
        remarks: 'Report registered for school safety zone.'
      },
      {
        status: 'Verified',
        timestamp: '2026-10-25T10:00:00Z',
        actor: 'Municipal Admin (Rajesh Varma)',
        remarks: 'High priority flag raised due to active pedestrian traffic.'
      },
      {
        status: 'Assigned',
        timestamp: '2026-10-25T12:00:00Z',
        actor: 'Municipal Admin (Rajesh Varma)',
        remarks: 'Assigned to Emergency Road Repair Team with fast-track allocation.'
      },
      {
        status: 'In Progress',
        timestamp: '2026-10-26T11:20:00Z',
        actor: 'Field Crew (Emergency Road Repair Team)',
        remarks: 'On-site excavation and aggregate base prep underway.'
      }
    ]
  },
  {
    id: 'RA-2026-005',
    citizenId: 'cit-003',
    citizenName: 'Farhan Shaikh',
    citizenEmail: 'farhan.shaikh@example.com',
    citizenPhone: '+91 97654 32109',
    category: 'Waterlogging',
    description: 'Drainage overflow causing water accumulation.',
    severity: 'Medium',
    imageUrl: DEMO_ROAD_IMAGES[4].url,
    imageName: DEMO_ROAD_IMAGES[4].title,
    location: {
      ...DEMO_LOCATIONS[4],
      isDemo: true
    },
    status: 'Resolved',
    createdAt: '2026-10-22T07:10:00Z',
    updatedAt: '2026-10-24T15:30:00Z',
    verifiedAt: '2026-10-22T09:00:00Z',
    verifiedBy: 'Rajesh Varma',
    assignedTeam: 'Municipal Repair Team',
    assignedAt: '2026-10-22T11:00:00Z',
    inProgressAt: '2026-10-23T08:30:00Z',
    resolvedAt: '2026-10-24T15:30:00Z',
    resolvedBy: 'Rajesh Varma (Chief Municipal Engineer)',
    resolutionRemarks: 'Clogged catch-basin desilted and storm drain capacity restored. Surface water drained completely and pavement inspected.',
    repairEvidenceImage: DEMO_REPAIR_IMAGES[1].url,
    timeline: [
      {
        status: 'Submitted',
        timestamp: '2026-10-22T07:10:00Z',
        actor: 'Citizen (Farhan Shaikh)',
        remarks: 'Severe pooling reported near market lane.'
      },
      {
        status: 'Verified',
        timestamp: '2026-10-22T09:00:00Z',
        actor: 'Municipal Admin (Rajesh Varma)',
        remarks: 'Verified stormwater blockage.'
      },
      {
        status: 'Assigned',
        timestamp: '2026-10-22T11:00:00Z',
        actor: 'Municipal Admin (Rajesh Varma)',
        remarks: 'Assigned to Municipal Repair Team (Stormwater Division).'
      },
      {
        status: 'In Progress',
        timestamp: '2026-10-23T08:30:00Z',
        actor: 'Field Crew',
        remarks: 'Suction jetting machine deployed to clear blocked conduit.'
      },
      {
        status: 'Resolved',
        timestamp: '2026-10-24T15:30:00Z',
        actor: 'Municipal Admin (Rajesh Varma)',
        remarks: 'Drainage clear, dry asphalt confirmed, photo evidence verified.',
        evidenceImage: DEMO_REPAIR_IMAGES[1].url
      }
    ]
  },
  {
    id: 'RA-2026-006',
    citizenId: 'cit-004',
    citizenName: 'Sneha Patel',
    citizenEmail: 'sneha.patel@example.com',
    citizenPhone: '+91 99302 11988',
    category: 'Damaged Road',
    description: 'Broken pavement creating difficulty for pedestrians.',
    severity: 'Low',
    imageUrl: DEMO_ROAD_IMAGES[7].url,
    imageName: DEMO_ROAD_IMAGES[7].title,
    location: {
      ...DEMO_LOCATIONS[5],
      isDemo: true
    },
    status: 'Rejected',
    createdAt: '2026-10-20T14:00:00Z',
    updatedAt: '2026-10-21T10:15:00Z',
    rejectionReason: 'Location falls inside a privately maintained commercial gated campus under private society jurisdiction rather than public municipal authority.',
    timeline: [
      {
        status: 'Submitted',
        timestamp: '2026-10-20T14:00:00Z',
        actor: 'Citizen (Sneha Patel)',
        remarks: 'Complaint lodged regarding broken pavement.'
      },
      {
        status: 'Rejected',
        timestamp: '2026-10-21T10:15:00Z',
        actor: 'Municipal Admin (Rajesh Varma)',
        remarks: 'Rejected: Private society jurisdiction. Forwarded reference to residential association.'
      }
    ]
  }
];

export const INITIAL_NOTIFICATIONS: any[] = [
  {
    id: 'notif-1',
    userId: 'cit-001',
    targetRole: 'citizen',
    complaintId: 'RA-2026-004',
    title: 'Repair In Progress',
    message: 'Emergency Road Repair Team has begun work on your report RA-2026-004.',
    type: 'info',
    read: false,
    createdAt: '2026-10-26T11:20:00Z'
  },
  {
    id: 'notif-2',
    userId: 'cit-001',
    targetRole: 'citizen',
    complaintId: 'RA-2026-002',
    title: 'Complaint Verified',
    message: 'Your report RA-2026-002 has been verified by the municipal authority.',
    type: 'success',
    read: true,
    createdAt: '2026-10-27T14:40:00Z'
  },
  {
    id: 'notif-3',
    userId: 'admin-001',
    targetRole: 'admin',
    complaintId: 'RA-2026-001',
    title: 'New High Priority Report',
    message: 'Complaint RA-2026-001 (Pothole - High Severity) submitted in BKC Central.',
    type: 'alert',
    read: false,
    createdAt: '2026-10-28T09:30:00Z'
  }
];
