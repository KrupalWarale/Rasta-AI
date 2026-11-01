export type UserRole = 'citizen' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  phone?: string;
  department?: string;
  badge?: string;
}

export type IssueCategory = 'Pothole' | 'Waterlogging' | 'Damaged Road';

export type IssueSeverity = 'Low' | 'Medium' | 'High';

export type ComplaintStatus =
  | 'Submitted'
  | 'Verified'
  | 'Assigned'
  | 'In Progress'
  | 'Resolved'
  | 'Rejected';

export interface LocationData {
  lat: number;
  lng: number;
  address: string;
  area: string;
  city: string;
  isDemo?: boolean;
}

export interface StatusHistoryItem {
  status: ComplaintStatus;
  timestamp: string;
  actor: string;
  remarks?: string;
  evidenceImage?: string;
}

export interface Complaint {
  id: string; // e.g. RA-2026-001
  citizenId: string;
  citizenName: string;
  citizenEmail: string;
  citizenPhone?: string;
  category: IssueCategory;
  description: string;
  severity: IssueSeverity;
  imageUrl: string;
  imageName?: string;
  location: LocationData;
  status: ComplaintStatus;
  createdAt: string;
  updatedAt: string;
  verifiedAt?: string;
  verifiedBy?: string;
  rejectionReason?: string;
  assignedTeam?: string;
  assignedAt?: string;
  assignmentPriority?: 'Standard' | 'Urgent' | 'Emergency';
  assignmentRemarks?: string;
  inProgressAt?: string;
  resolvedAt?: string;
  resolvedBy?: string;
  resolutionRemarks?: string;
  repairEvidenceImage?: string;
  timeline: StatusHistoryItem[];
}

export interface NotificationItem {
  id: string;
  userId: string;
  targetRole: UserRole;
  complaintId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'alert';
  read: boolean;
  createdAt: string;
}

export interface DemoImage {
  id: string;
  title: string;
  category: IssueCategory | 'Repaired Road';
  url: string;
  thumbnail: string;
  description: string;
}
