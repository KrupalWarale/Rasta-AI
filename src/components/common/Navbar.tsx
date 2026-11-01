import React from 'react';
import {
  Home,
  PlusCircle,
  Layers,
  MapPin,
  User as UserIcon,
  ShieldAlert,
  ArrowRightLeft,
  Sparkles
} from 'lucide-react';
import { Logo } from './Logo';
import { NotificationDropdown } from './NotificationDropdown';
import { NotificationItem, User } from '../../types';

interface NavbarProps {
  user: User;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  notifications: NotificationItem[];
  onSwitchToAdmin: () => void;
  onSelectComplaintFromNotif: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  user,
  activeTab,
  setActiveTab,
  notifications,
  onSwitchToAdmin,
  onSelectComplaintFromNotif
}) => {
  // Determine greeting by time of day
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening';

  const NAV_ITEMS = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'report', label: 'Report Issue', icon: PlusCircle, highlight: true },
    { id: 'my-reports', label: 'My Reports', icon: Layers },
    { id: 'map', label: 'Road Map', icon: MapPin },
    { id: 'profile', label: 'Profile', icon: UserIcon }
  ];

  return (
    <>
      {/* Top Header Desktop & Mobile */}
      <header className="sticky top-0 z-[1000] bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo & Greeting */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveTab('home')}
              className="text-left focus:outline-none"
            >
              <Logo size="md" />
            </button>

            <div className="hidden lg:block border-l border-slate-200 pl-5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                {greeting}!
              </span>
              <span className="text-sm font-black text-[#142D4E]">
                {user.name}
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5">
            {NAV_ITEMS.map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              if (item.highlight) {
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className="px-4 py-2.5 rounded-xl font-bold text-xs bg-[#16A36A] hover:bg-[#138a59] text-white shadow-sm transition-all flex items-center gap-2 mx-1"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-slate-100 text-[#142D4E] font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-4 h-4 text-slate-400" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3">
            {/* Quick Portal Switcher (Citizen -> Admin) */}
            <button
              onClick={onSwitchToAdmin}
              className="px-3 py-1.5 rounded-xl bg-[#142D4E] hover:bg-[#0f233d] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 group"
              title="Switch to Municipal Admin Portal"
            >
              <ArrowRightLeft className="w-3.5 h-3.5 text-[#16A36A] group-hover:rotate-180 transition-transform duration-300" />
              <span className="hidden sm:inline">Admin Portal</span>
            </button>

            {/* Notification Dropdown */}
            <NotificationDropdown
              notifications={notifications}
              userRole="citizen"
              onSelectComplaint={onSelectComplaintFromNotif}
            />

            {/* User Profile Avatar */}
            <button
              onClick={() => setActiveTab('profile')}
              className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 text-[#142D4E] font-black text-sm flex items-center justify-center hover:bg-slate-200 transition-colors"
              title="Citizen Profile"
            >
              {user.name.charAt(0)}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[1000] bg-white border-t border-slate-200/90 shadow-lg px-2 py-1.5 flex items-center justify-around">
        {NAV_ITEMS.map(item => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          if (item.highlight) {
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className="flex flex-col items-center justify-center -mt-5"
              >
                <div className="w-12 h-12 rounded-full bg-[#16A36A] text-white flex items-center justify-center shadow-lg ring-4 ring-white">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-[#142D4E] mt-1">
                  Report
                </span>
              </button>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center p-1.5 min-w-[54px] rounded-lg transition-colors ${
                isActive ? 'text-[#142D4E]' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-[#16A36A]' : ''}`} />
              <span className={`text-[10px] mt-0.5 ${isActive ? 'font-bold' : 'font-medium'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
};
