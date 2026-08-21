import React, { useState } from 'react';
import PlanCard from '../components/PlanCard';
import { PROGRAMS } from '../data/mockData';
import { Calendar, Filter, Sparkles } from 'lucide-react';

export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredPrograms = PROGRAMS.filter(p => {
    if (activeTab === 'free') return p.isFree;
    if (activeTab === 'plus') return !p.isFree;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Hero Banner */}
      <div className="bg-fb-dusk text-white rounded-xl p-8 md:p-12 space-y-4 text-center md:text-left relative overflow-hidden">
        <div className="max-w-2xl space-y-3 z-10 relative">
          <span className="bg-fb-teal text-white text-xs font-extrabold uppercase px-3 py-1 rounded">
            GUIDED FITNESS PLANS
          </span>
          <h1 className="text-3xl md:text-5xl font-black">Workout Programs & Challenges</h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Follow expert-designed, day-by-day workout calendars built by physical therapists and certified trainers to achieve long-term strength, mobility, and confidence.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-bold rounded-md transition-colors ${
              activeTab === 'all' ? 'bg-fb-teal text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Programs ({PROGRAMS.length})
          </button>
          <button
            onClick={() => setActiveTab('free')}
            className={`px-4 py-2 text-xs font-bold rounded-md transition-colors ${
              activeTab === 'free' ? 'bg-fb-teal text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Free Challenges
          </button>
          <button
            onClick={() => setActiveTab('plus')}
            className={`px-4 py-2 text-xs font-bold rounded-md transition-colors flex items-center gap-1 ${
              activeTab === 'plus' ? 'bg-fb-teal text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Sparkles className="w-3 h-3 text-amber-300 fill-current" />
            FB Plus Exclusive
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPrograms.map(program => (
          <PlanCard key={program.id} plan={program} />
        ))}
      </div>

    </div>
  );
}
