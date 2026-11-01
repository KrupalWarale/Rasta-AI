import React, { useState } from 'react';
import { Logo } from '../common/Logo';
import { UserRole, User } from '../../types';
import { DEMO_USERS } from '../../services/dataService';
import {
  User as UserIcon,
  ShieldCheck,
  ArrowRight,
  Lock,
  Mail,
  Sparkles,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface LoginPageProps {
  onLogin: (user: User) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('citizen@raastaai.demo');
  const [password, setPassword] = useState('citizen123');
  const [error, setError] = useState('');

  const handleManualLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmedEmail = email.trim().toLowerCase();

    if (trimmedEmail === 'citizen@raastaai.demo' && password === 'citizen123') {
      onLogin(DEMO_USERS.citizen);
    } else if (trimmedEmail === 'admin@raastaai.demo' && password === 'admin123') {
      onLogin(DEMO_USERS.admin);
    } else {
      setError('Invalid demo credentials. Use the 1-Click login buttons below.');
    }
  };

  const handleQuickLogin = (role: UserRole) => {
    onLogin(DEMO_USERS[role]);
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex flex-col justify-between p-4 sm:p-6 lg:p-8">
      {/* Top Brand Bar */}
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between">
        <Logo size="md" showTagline={true} />
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-200/80 text-slate-700">
          Civic Tech Platform Demo
        </span>
      </div>

      {/* Main Authentication Box */}
      <div className="max-w-xl w-full mx-auto my-8 animate-fade-in">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-6 sm:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-[#16A36A] border border-emerald-200 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Report • Verify • Resolve</span>
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#142D4E]">
              Welcome to RaastaAI
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-sm mx-auto">
              Select a demo portal or sign in to experience the end-to-end civic road resolution platform.
            </p>
          </div>

          {/* 1-CLICK DEMO ACCESS BUTTONS (Fastest for Hackathon Presentation) */}
          <div className="space-y-3 mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center mb-2">
              Instant 1-Click Demo Evaluation Roles
            </div>

            {/* Quick Citizen Button */}
            <button
              type="button"
              onClick={() => handleQuickLogin('citizen')}
              className="w-full p-4 rounded-2xl border-2 border-slate-200 hover:border-[#16A36A] hover:bg-emerald-50/40 transition-all flex items-center justify-between text-left group bg-white shadow-xs"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 text-[#16A36A] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <UserIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-extrabold text-sm text-[#142D4E] group-hover:text-[#16A36A] transition-colors">
                    Log in as Citizen (Aditya Sharma)
                  </div>
                  <div className="text-xs text-slate-500 font-mono">
                    citizen@raastaai.demo • citizen123
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#16A36A] group-hover:translate-x-1 transition-transform shrink-0" />
            </button>

            {/* Quick Admin Button */}
            <button
              type="button"
              onClick={() => handleQuickLogin('admin')}
              className="w-full p-4 rounded-2xl border-2 border-slate-200 hover:border-[#142D4E] hover:bg-slate-50 transition-all flex items-center justify-between text-left group bg-white shadow-xs"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-blue-100 text-[#142D4E] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-extrabold text-sm text-[#142D4E]">
                    Log in as Municipal Officer (Rajesh Varma)
                  </div>
                  <div className="text-xs text-slate-500 font-mono">
                    admin@raastaai.demo • admin123
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#142D4E] group-hover:translate-x-1 transition-transform shrink-0" />
            </button>
          </div>

          <div className="relative my-6 text-center">
            <hr className="border-slate-200" />
            <span className="absolute left-1/2 -translate-x-1/2 -top-2.5 bg-white px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Or Manual Demo Sign In
            </span>
          </div>

          {/* Manual Form */}
          <form onSubmit={handleManualLogin} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Demo Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs font-mono focus:ring-2 focus:ring-[#142D4E] focus:outline-none"
                  placeholder="e.g. citizen@raastaai.demo"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Demo Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs font-mono focus:ring-2 focus:ring-[#142D4E] focus:outline-none"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#142D4E] hover:bg-[#0f233d] text-white text-xs font-extrabold shadow-md transition-all flex items-center justify-center gap-2 mt-2"
            >
              <span>Sign In to Platform</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Hackathon Instructions Badge */}
          <div className="mt-8 pt-6 border-t border-slate-100 bg-slate-50/70 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 p-6 rounded-b-3xl text-[11px] text-slate-500">
            <div className="font-bold text-[#142D4E] mb-1">
              End-to-End Evaluation Workflow:
            </div>
            <div>
              1. Sign in as Citizen → Submit report using sample pothole photo.
            </div>
            <div>
              2. Switch to Admin → Verify complaint, assign Team A, mark in-progress &amp; resolved.
            </div>
            <div>
              3. Return to Citizen → Inspect completed before-and-after proof.
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-slate-400 py-2">
        <p>RaastaAI • Every Road Issue Deserves a Resolution • Civic Technology Platform</p>
      </footer>
    </div>
  );
};
