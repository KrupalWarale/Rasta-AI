import React, { useState } from 'react';
import { Complaint, IssueCategory } from '../../types';
import { LeafletMap } from '../common/LeafletMap';
import { MapPin, Filter, Layers, Info } from 'lucide-react';

interface AdminMapProps {
  complaints: Complaint[];
  onSelectComplaint: (complaint: Complaint) => void;
}

export const AdminMap: React.FC<AdminMapProps> = ({
  complaints,
  onSelectComplaint
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (complaint: Complaint) => {
    setSelectedId(complaint.id);
    onSelectComplaint(complaint);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#16A36A]">
            <MapPin className="w-4 h-4" />
            <span>Geographic Information System (GIS)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#142D4E] mt-1">
            Municipal Road Issues Live Map
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Geospatial representation of all reported road hazards with status telemetry and incident triage.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs bg-white p-3 rounded-2xl border border-slate-200/80 shadow-sm">
          <Info className="w-4 h-4 text-blue-600 shrink-0" />
          <span className="text-slate-600">
            Click any pin to inspect photo, details, or trigger immediate maintenance action.
          </span>
        </div>
      </div>

      <LeafletMap
        complaints={complaints}
        selectedComplaintId={selectedId}
        onSelectComplaint={handleSelect}
        height="640px"
        showFilters={true}
      />
    </div>
  );
};
