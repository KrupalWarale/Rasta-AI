import React from 'react';
import { User, Complaint } from '../../types';
import { ShieldCheck, Award, MapPin, Mail, Phone, Calendar, ArrowRight, UserCheck } from 'lucide-react';

interface CitizenProfileProps {
  user: User;
  complaints: Complaint[];
  onSwitchToAdmin: () => void;
  onLogout: () => void;
}

export const CitizenProfile: React.FC<CitizenProfileProps> = ({
  user,
  complaints,
  onSwitchToAdmin,
  onLogout
}) => {
  const myReports = complaints.filter(
    c => c.citizenId === user.id || c.citizenEmail === user.email || c.citizenEmail === 'citizen@raastaai.demo'
  );
  const resolved = myReports.filter(c => c.status === 'Resolved').length;
  const inProgress = myReports.filter(c => c.status === 'In Progress' || c.status === 'Assigned').length;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 animate-fade-in space-y-6">
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-100">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#142D4E] to-[#1E3A8A] text-white flex items-center justify-center text-3xl font-extrabold shadow-lg shrink-0">
            {user.name.charAt(0)}
          </div>
          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h1 className="text-2xl font-extrabold text-[#142D4E]">{user.name}</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                Verified Citizen
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Active Member since October 2026 • Mumbai Municipal Corporation Ward Zone K-East
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-600">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{user.email}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{user.phone || '+91 98201 45890'}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>BKC / Andheri, Mumbai</span>
              </span>
            </div>
          </div>
        </div>

        {/* Civic Impact Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
              Total Reports Filed
            </div>
            <div className="text-2xl font-black text-[#142D4E] mt-1">{myReports.length}</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Contributing to civic road data</div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
            <div className="text-xs text-emerald-700 font-semibold uppercase tracking-wider">
              Resolved Roads
            </div>
            <div className="text-2xl font-black text-emerald-800 mt-1">{resolved}</div>
            <div className="text-[11px] text-emerald-600 mt-0.5">Successfully repaired & verified</div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100">
            <div className="text-xs text-amber-700 font-semibold uppercase tracking-wider">
              Work In Progress
            </div>
            <div className="text-2xl font-black text-amber-800 mt-1">{inProgress}</div>
            <div className="text-[11px] text-amber-600 mt-0.5">Active field repairs assigned</div>
          </div>
        </div>
      </div>

      {/* Demo Quick Switch Card */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-6 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wider">
            <UserCheck className="w-4 h-4 text-blue-600" />
            <span>Hackathon Evaluation Shortcut</span>
          </div>
          <h3 className="text-base font-bold text-[#142D4E] mt-1">
            Need to verify this report as Municipal Authority?
          </h3>
          <p className="text-xs text-slate-600 mt-0.5">
            Switch directly to Municipal Officer Rajesh Varma with full administrative powers.
          </p>
        </div>
        <button
          onClick={onSwitchToAdmin}
          className="px-5 py-2.5 rounded-xl bg-[#142D4E] hover:bg-[#0f233d] text-white text-xs font-bold shadow-md transition-all flex items-center gap-2 shrink-0"
        >
          <span>Switch to Admin Portal</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Badges & Recognition */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
        <h3 className="text-base font-bold text-[#142D4E] mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-500" />
          <span>Civic Badges &amp; Recognition</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl border border-emerald-200 bg-emerald-50/50 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#16A36A] text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-sm text-[#142D4E]">Pothole Vigilante</div>
              <div className="text-xs text-slate-500">Reported multiple high-severity road hazards</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-blue-200 bg-blue-50/50 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-sm text-[#142D4E]">Neighborhood Guardian</div>
              <div className="text-xs text-slate-500">Active geofence reporting in BKC & Andheri</div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-100 flex justify-end">
          <button
            onClick={onLogout}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors"
          >
            Sign Out of Citizen Session
          </button>
        </div>
      </div>
    </div>
  );
};
