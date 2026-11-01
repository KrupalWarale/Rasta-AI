import React, { useState } from 'react';
import {
  LayoutDashboard,
  Inbox,
  Clock,
  ShieldCheck,
  Truck,
  Wrench,
  CheckCircle2,
  Map as MapIcon,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  LogOut,
  UserCheck,
  RefreshCw,
  Bell
} from 'lucide-react';
import { Logo } from '../common/Logo';
import { Complaint, User } from '../../types';
import { AdminDashboard } from './AdminDashboard';
import { ComplaintList } from './ComplaintList';
import { AdminMap } from './AdminMap';
import { AdminAnalytics } from './AdminAnalytics';
import { ComplaintDetailModal } from './ComplaintDetailModal';
import { resetDemoData } from '../../services/dataService';

interface AdminLayoutProps {
  user: User;
  complaints: Complaint[];
  onSwitchToCitizen: () => void;
  onLogout: () => void;
  activeView: string;
  setActiveView: (view: string) => void;
  onSelectComplaint: (complaint: Complaint) => void;
  selectedComplaint: Complaint | null;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  onComplaintUpdated: (updated: Complaint) => void;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({
  user,
  complaints,
  onSwitchToCitizen,
  onLogout,
  activeView,
  setActiveView,
  onSelectComplaint,
  selectedComplaint,
  isModalOpen,
  setIsModalOpen,
  onComplaintUpdated
}) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Badge counts
  const pendingCount = complaints.filter(c => c.status === 'Submitted').length;
  const verifiedCount = complaints.filter(c => c.status === 'Verified').length;
  const assignedCount = complaints.filter(c => c.status === 'Assigned').length;
  const inProgressCount = complaints.filter(c => c.status === 'In Progress').length;
  const resolvedCount = complaints.filter(c => c.status === 'Resolved').length;

  const NAV_ITEMS = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'all', label: 'All Complaints', icon: Inbox, count: complaints.length },
    { id: 'pending', label: 'Pending Verification', icon: Clock, count: pendingCount, highlight: pendingCount > 0 },
    { id: 'verified', label: 'Verified Reports', icon: ShieldCheck, count: verifiedCount },
    { id: 'assigned', label: 'Assigned Reports', icon: Truck, count: assignedCount },
    { id: 'in-progress', label: 'In Progress', icon: Wrench, count: inProgressCount },
    { id: 'resolved', label: 'Resolved', icon: CheckCircle2, count: resolvedCount },
    { id: 'map', label: 'Road Map', icon: MapIcon },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const handleResetData = () => {
    if (confirm('Reset complaints to initial demo state? This will restore the 6 original sample reports.')) {
      resetDemoData();
    }
  };

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return (
          <AdminDashboard
            complaints={complaints}
            onSelectComplaint={(c) => {
              onSelectComplaint(c);
              setIsModalOpen(true);
            }}
            onNavigateToView={(view) => setActiveView(view)}
          />
        );

      case 'all':
        return (
          <ComplaintList
            complaints={complaints}
            onSelectComplaint={(c) => {
              onSelectComplaint(c);
              setIsModalOpen(true);
            }}
            title="All Municipal Complaints"
            subtitle="Central repository of all citizen road hazard filings across the metropolis."
          />
        );

      case 'pending':
        return (
          <ComplaintList
            complaints={complaints}
            initialStatusFilter="Submitted"
            onSelectComplaint={(c) => {
              onSelectComplaint(c);
              setIsModalOpen(true);
            }}
            title="Complaints Awaiting Verification"
            subtitle="Verify citizen photographs and confirm geographic jurisdiction."
          />
        );

      case 'verified':
        return (
          <ComplaintList
            complaints={complaints}
            initialStatusFilter="Verified"
            onSelectComplaint={(c) => {
              onSelectComplaint(c);
              setIsModalOpen(true);
            }}
            title="Verified Road Reports"
            subtitle="Verified issues ready to be assigned to municipal road maintenance teams."
          />
        );

      case 'assigned':
        return (
          <ComplaintList
            complaints={complaints}
            initialStatusFilter="Assigned"
            onSelectComplaint={(c) => {
              onSelectComplaint(c);
              setIsModalOpen(true);
            }}
            title="Assigned Maintenance Reports"
            subtitle="Work orders dispatched to teams awaiting on-site mobilization."
          />
        );

      case 'in-progress':
        return (
          <ComplaintList
            complaints={complaints}
            initialStatusFilter="In Progress"
            onSelectComplaint={(c) => {
              onSelectComplaint(c);
              setIsModalOpen(true);
            }}
            title="Repairs Currently In Progress"
            subtitle="Crews active on site. Mark resolved once resurfacing evidence is ready."
          />
        );

      case 'resolved':
        return (
          <ComplaintList
            complaints={complaints}
            initialStatusFilter="Resolved"
            onSelectComplaint={(c) => {
              onSelectComplaint(c);
              setIsModalOpen(true);
            }}
            title="Resolved Road Complaints"
            subtitle="Repaired road assets with before-and-after photographic evidence."
          />
        );

      case 'map':
        return (
          <AdminMap
            complaints={complaints}
            onSelectComplaint={(c) => {
              onSelectComplaint(c);
              setIsModalOpen(true);
            }}
          />
        );

      case 'analytics':
        return <AdminAnalytics complaints={complaints} />;

      case 'settings':
        return (
          <div className="max-w-3xl space-y-6 animate-fade-in">
            <h1 className="text-2xl font-black text-[#142D4E]">Municipal Portal Settings</h1>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <h2 className="font-bold text-sm text-[#142D4E]">Demonstration Controls</h2>
              <p className="text-xs text-slate-500">
                You can reset the complaint database back to the clean 6-item hackathon demonstration state at any time.
              </p>
              <button
                onClick={handleResetData}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center gap-2 transition-colors"
              >
                <RefreshCw className="w-4 h-4 text-slate-600" />
                <span>Reset Demo Database to Initial State</span>
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <h2 className="font-bold text-sm text-[#142D4E]">Municipal Department Info</h2>
              <div className="text-xs text-slate-600 space-y-1">
                <div><strong>Jurisdiction:</strong> Greater Metropolitan Corporation</div>
                <div><strong>Division:</strong> Roads &amp; Traffic Infrastructure Engineering</div>
                <div><strong>Officer in Charge:</strong> Rajesh Varma (Chief Road Engineer)</div>
                <div><strong>Standard SLA:</strong> Potholes: 48h | Waterlogging: 24h | Structural: 72h</div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex flex-col md:flex-row">
      {/* Mobile Top Header */}
      <div className="md:hidden bg-[#142D4E] text-white px-4 py-3 flex items-center justify-between sticky top-0 z-[1100]">
        <Logo variant="light" size="sm" />
        <div className="flex items-center gap-2">
          <button
            onClick={onSwitchToCitizen}
            className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-white/10 text-emerald-300"
          >
            Citizen Mode
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 rounded-lg bg-white/10 text-white"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Collapsible Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col justify-between bg-[#142D4E] text-white transition-all duration-300 sticky top-0 h-screen z-40 shrink-0 ${
          isSidebarCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        <div>
          {/* Logo Bar */}
          <div className="p-5 flex items-center justify-between border-b border-white/10">
            {!isSidebarCollapsed ? (
              <Logo variant="light" size="sm" />
            ) : (
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center font-bold text-[#142D4E] mx-auto">
                R
              </div>
            )}
            <button
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors hidden lg:block"
            >
              {isSidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          </div>

          {/* Portal Label */}
          {!isSidebarCollapsed && (
            <div className="px-5 pt-4 pb-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#16A36A]">
                Municipal Authority Portal
              </span>
            </div>
          )}

          {/* Navigation Items */}
          <nav className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-230px)]">
            {NAV_ITEMS.map(item => {
              const Icon = item.icon;
              const isActive = activeView === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveView(item.id);
                  }}
                  title={isSidebarCollapsed ? item.label : undefined}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#16A36A] text-white shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  {!isSidebarCollapsed && (
                    <span className="truncate flex-1 text-left">{item.label}</span>
                  )}
                  {!isSidebarCollapsed && item.count !== undefined && (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-black/20 text-white'
                          : item.highlight
                          ? 'bg-orange-500 text-white'
                          : 'bg-white/10 text-slate-300'
                      }`}
                    >
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-white/10 space-y-2">
          {/* Quick Switch to Citizen Portal */}
          <button
            onClick={onSwitchToCitizen}
            className={`w-full flex items-center gap-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-emerald-300 text-xs font-bold transition-colors ${
              isSidebarCollapsed ? 'justify-center' : ''
            }`}
            title="Switch to Citizen Portal"
          >
            <UserCheck className="w-4 h-4 text-[#16A36A] shrink-0" />
            {!isSidebarCollapsed && <span className="truncate">Citizen View</span>}
          </button>

          {/* Admin User Info */}
          {!isSidebarCollapsed ? (
            <div className="flex items-center justify-between p-2 rounded-xl bg-black/20 text-xs">
              <div className="truncate">
                <div className="font-bold text-white truncate">{user.name}</div>
                <div className="text-[10px] text-slate-400 truncate">Chief Road Engineer</div>
              </div>
              <button
                onClick={onLogout}
                title="Sign Out"
                className="p-1.5 text-slate-400 hover:text-red-400 transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={onLogout}
              title="Sign Out"
              className="w-full p-2 flex justify-center text-slate-400 hover:text-red-400"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </aside>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[1050] bg-slate-950/70 backdrop-blur-sm flex">
          <div className="w-64 bg-[#142D4E] text-white h-full p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <Logo variant="light" size="sm" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 rounded-lg text-slate-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="space-y-1">
                {NAV_ITEMS.map(item => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveView(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold ${
                      activeView === item.id ? 'bg-[#16A36A] text-white' : 'text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </div>
                    {item.count !== undefined && (
                      <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full">
                        {item.count}
                      </span>
                    )}
                  </button>
                ))}
              </nav>
            </div>
            <div className="pt-4 border-t border-white/10 space-y-2">
              <button
                onClick={onSwitchToCitizen}
                className="w-full py-2.5 rounded-xl bg-white/10 text-emerald-300 text-xs font-bold"
              >
                Switch to Citizen View
              </button>
              <button
                onClick={onLogout}
                className="w-full py-2 rounded-xl text-xs text-red-400 font-semibold"
              >
                Sign Out
              </button>
            </div>
          </div>
          <div className="flex-1" onClick={() => setIsMobileMenuOpen(false)} />
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-screen">
        {renderContent()}
      </main>

      {/* Complaint Review & Workflow Modal */}
      <ComplaintDetailModal
        complaint={selectedComplaint}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpdateSuccess={(updated) => {
          onComplaintUpdated(updated);
        }}
        adminName={user.name}
      />
    </div>
  );
};
