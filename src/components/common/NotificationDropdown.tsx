import React, { useState } from 'react';
import { Bell, Check, CheckCheck, Clock, ShieldCheck, AlertTriangle, Info } from 'lucide-react';
import { NotificationItem, UserRole } from '../../types';
import { markNotificationAsRead, markAllNotificationsRead } from '../../services/dataService';

interface NotificationDropdownProps {
  notifications: NotificationItem[];
  userRole: UserRole;
  onSelectComplaint?: (complaintId: string) => void;
}

export const NotificationDropdown: React.FC<NotificationDropdownProps> = ({
  notifications,
  userRole,
  onSelectComplaint
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const roleNotifs = notifications.filter(n => n.targetRole === userRole);
  const unreadCount = roleNotifs.filter(n => !n.read).length;

  const handleItemClick = (n: NotificationItem) => {
    markNotificationAsRead(n.id);
    if (onSelectComplaint && n.complaintId) {
      onSelectComplaint(n.complaintId);
      setIsOpen(false);
    }
  };

  const getNotifIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <ShieldCheck className="w-4 h-4 text-emerald-500" />;
      case 'alert':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-amber-500" />;
      default:
        return <Info className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <div className="relative">
      {/* Bell Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
        title="Notifications"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-black flex items-center justify-center shadow-md animate-pulse">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-[1150]"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 z-[1160] overflow-hidden animate-fade-in">
            {/* Header */}
            <div className="px-4 py-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm text-[#142D4E]">
                  Notifications
                </span>
                {unreadCount > 0 && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-700">
                    {unreadCount} new
                  </span>
                )}
              </div>
              {unreadCount > 0 && (
                <button
                  onClick={() => markAllNotificationsRead(userRole)}
                  className="text-xs font-semibold text-[#16A36A] hover:underline flex items-center gap-1"
                >
                  <CheckCheck className="w-3.5 h-3.5" />
                  <span>Mark all read</span>
                </button>
              )}
            </div>

            {/* List */}
            <div className="max-h-80 overflow-y-auto divide-y divide-slate-100">
              {roleNotifs.length > 0 ? (
                roleNotifs.map(n => (
                  <div
                    key={n.id}
                    onClick={() => handleItemClick(n)}
                    className={`p-3.5 transition-colors cursor-pointer flex gap-3 text-xs ${
                      !n.read ? 'bg-blue-50/40 hover:bg-blue-50/70' : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">{getNotifIcon(n.type)}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="font-bold text-slate-900 truncate">
                          {n.title}
                        </span>
                        {!n.read && (
                          <span className="w-2 h-2 rounded-full bg-[#16A36A] shrink-0" />
                        )}
                      </div>
                      <p className="text-slate-600 line-clamp-2 leading-relaxed text-[11px]">
                        {n.message}
                      </p>
                      <div className="mt-1 flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                        <span>{new Date(n.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        <span>•</span>
                        <span className="font-bold text-[#142D4E]">{n.complaintId}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-xs text-slate-400">
                  No notifications yet.
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-2.5 bg-slate-50 border-t border-slate-100 text-center text-[11px] text-slate-500">
              Updates in real-time as municipal engineers inspect and assign repairs.
            </div>
          </div>
        </>
      )}
    </div>
  );
};
