import React, { useState, useEffect } from 'react';
import { User, Complaint, NotificationItem } from './types';
import {
  getActiveUser,
  setActiveUser,
  getComplaints,
  getNotifications,
  subscribeToDataChanges,
  DEMO_USERS
} from './services/dataService';

// Common Components
import { Navbar } from './components/common/Navbar';
import { LeafletMap } from './components/common/LeafletMap';

// Citizen Portal Components
import { CitizenDashboard } from './components/citizen/CitizenDashboard';
import { ReportIssueForm } from './components/citizen/ReportIssueForm';
import { TrackComplaint } from './components/citizen/TrackComplaint';
import { MyReports } from './components/citizen/MyReports';
import { CitizenProfile } from './components/citizen/CitizenProfile';

// Municipal Admin Portal Components
import { AdminLayout } from './components/admin/AdminLayout';

// Authentication
import { LoginPage } from './components/auth/LoginPage';

export default function App() {
  // Authentication State
  const [user, setUser] = useState<User | null>(getActiveUser());
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  // Complaints & Notifications State
  const [complaints, setComplaints] = useState<Complaint[]>(getComplaints());
  const [notifications, setNotifications] = useState<NotificationItem[]>(getNotifications());

  // Citizen Navigation State
  const [citizenTab, setCitizenTab] = useState<string>('home');
  const [trackingComplaintId, setTrackingComplaintId] = useState<string>('RA-2026-001');

  // Admin Navigation & Modal State
  const [adminView, setAdminView] = useState<string>('dashboard');
  const [adminSelectedComplaint, setAdminSelectedComplaint] = useState<Complaint | null>(null);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState<boolean>(false);

  // Subscribe to real-time data persistence changes
  useEffect(() => {
    const unsubscribe = subscribeToDataChanges(() => {
      setComplaints(getComplaints());
      setNotifications(getNotifications());
    });
    return () => unsubscribe();
  }, []);

  // Handle Login
  const handleLogin = (newUser: User) => {
    setUser(newUser);
    setActiveUser(newUser);
    setShowLoginModal(false);
    if (newUser.role === 'citizen') {
      setCitizenTab('home');
    } else {
      setAdminView('dashboard');
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setShowLoginModal(true);
  };

  // Switch between citizen and admin accounts instantly
  const handleSwitchRole = (targetRole: 'citizen' | 'admin') => {
    const targetUser = DEMO_USERS[targetRole];
    setUser(targetUser);
    setActiveUser(targetUser);
    if (targetRole === 'citizen') {
      setCitizenTab('home');
    } else {
      setAdminView('dashboard');
    }
  };

  // Handle new complaint submitted by citizen
  const handleComplaintSubmitted = (newComplaint: Complaint) => {
    setTrackingComplaintId(newComplaint.id);
  };

  // Handle tracking complaint from dashboard/my reports/notification
  const handleOpenTracker = (id?: string) => {
    if (id) {
      setTrackingComplaintId(id);
    }
    setCitizenTab('track');
  };

  // Handle selecting complaint from notification
  const handleSelectFromNotif = (complaintId: string) => {
    if (user?.role === 'citizen') {
      setTrackingComplaintId(complaintId);
      setCitizenTab('track');
    } else {
      const match = complaints.find(c => c.id === complaintId);
      if (match) {
        setAdminSelectedComplaint(match);
        setIsAdminModalOpen(true);
      }
    }
  };

  // If user requested login screen explicitly or no session
  if (showLoginModal || !user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  // 1. MUNICIPAL ADMIN PORTAL
  if (user.role === 'admin') {
    return (
      <AdminLayout
        user={user}
        complaints={complaints}
        onSwitchToCitizen={() => handleSwitchRole('citizen')}
        onLogout={handleLogout}
        activeView={adminView}
        setActiveView={setAdminView}
        onSelectComplaint={(c) => {
          setAdminSelectedComplaint(c);
          setIsAdminModalOpen(true);
        }}
        selectedComplaint={adminSelectedComplaint}
        isModalOpen={isAdminModalOpen}
        setIsModalOpen={setIsAdminModalOpen}
        onComplaintUpdated={(updated) => {
          setAdminSelectedComplaint(updated);
        }}
      />
    );
  }

  // 2. CITIZEN PORTAL
  return (
    <div className="min-h-screen bg-[#F5F7FA] flex flex-col justify-between pb-16 md:pb-0">
      {/* Citizen Navbar */}
      <Navbar
        user={user}
        activeTab={citizenTab}
        setActiveTab={setCitizenTab}
        notifications={notifications}
        onSwitchToAdmin={() => handleSwitchRole('admin')}
        onSelectComplaintFromNotif={handleSelectFromNotif}
      />

      {/* Main Screen Views based on Tab */}
      <main className="flex-1">
        {citizenTab === 'home' && (
          <CitizenDashboard
            user={user}
            complaints={complaints}
            onOpenReportForm={() => setCitizenTab('report')}
            onOpenTracker={handleOpenTracker}
            onOpenMyReports={() => setCitizenTab('my-reports')}
            onOpenRoadMap={() => setCitizenTab('map')}
          />
        )}

        {citizenTab === 'report' && (
          <ReportIssueForm
            currentUserId={user.id}
            currentUserName={user.name}
            currentUserEmail={user.email}
            onSuccess={handleComplaintSubmitted}
            onCancel={() => setCitizenTab('home')}
            onTrackComplaint={(id) => {
              setTrackingComplaintId(id);
              setCitizenTab('track');
            }}
          />
        )}

        {citizenTab === 'track' && (
          <TrackComplaint
            initialComplaintId={trackingComplaintId}
            onOpenReportForm={() => setCitizenTab('report')}
          />
        )}

        {citizenTab === 'my-reports' && (
          <MyReports
            complaints={complaints}
            currentUserId={user.id}
            onSelectComplaint={(id) => {
              setTrackingComplaintId(id);
              setCitizenTab('track');
            }}
            onNewReport={() => setCitizenTab('report')}
          />
        )}

        {citizenTab === 'map' && (
          <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#142D4E]">
                  Community Road Map
                </h1>
                <p className="text-sm text-slate-500 mt-1">
                  Explore reported road issues, active municipal repair operations, and resolved community hazards.
                </p>
              </div>
              <button
                onClick={() => setCitizenTab('report')}
                className="px-5 py-2.5 rounded-xl bg-[#16A36A] hover:bg-[#138a59] text-white text-xs font-bold shadow-md transition-colors shrink-0"
              >
                + Report New Hazard
              </button>
            </div>

            <LeafletMap
              complaints={complaints}
              height="600px"
              showFilters={true}
              onSelectComplaint={(c) => {
                setTrackingComplaintId(c.id);
                setCitizenTab('track');
              }}
            />
          </div>
        )}

        {citizenTab === 'profile' && (
          <CitizenProfile
            user={user}
            complaints={complaints}
            onSwitchToAdmin={() => handleSwitchRole('admin')}
            onLogout={handleLogout}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="hidden md:block bg-white border-t border-slate-200/80 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-[#142D4E]">RaastaAI</span>
            <span>•</span>
            <span>Civic Technology Platform</span>
          </div>
          <div className="text-slate-400">
            "Every Road Issue Deserves a Resolution."
          </div>
          <div className="flex items-center gap-4 text-slate-600 font-medium">
            <button
              onClick={() => handleSwitchRole(user.role === 'citizen' ? 'admin' : 'citizen')}
              className="text-[#16A36A] hover:underline font-bold"
            >
              Switch to {user.role === 'citizen' ? 'Municipal Admin' : 'Citizen'}
            </button>
            <span>•</span>
            <button
              onClick={() => {
                if (confirm('Reset demo data to initial sample complaints?')) {
                  localStorage.clear();
                  window.location.reload();
                }
              }}
              className="hover:underline text-slate-500"
            >
              Reset Demo
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
