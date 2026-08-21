import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterSidebar from '../components/FilterSidebar';
import WorkoutCard from '../components/WorkoutCard';
import { WORKOUT_VIDEOS } from '../data/mockData';
import { SlidersHorizontal, ArrowUpDown, X } from 'lucide-react';

export default function WorkoutsPage({ searchKeyword }) {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || searchKeyword || '';

  const [filters, setFilters] = useState({
    search: initialQuery,
    trainingType: [],
    bodyFocus: [],
    equipment: [],
    difficulty: [],
    trainer: [],
    plusOnly: false,
  });

  const [sortBy, setSortBy] = useState('newest');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const resetFilters = () => {
    setFilters({
      search: '',
      trainingType: [],
      bodyFocus: [],
      equipment: [],
      difficulty: [],
      trainer: [],
      plusOnly: false,
    });
  };

  // Compute active count
  const activeCount = useMemo(() => {
    let count = 0;
    if (filters.search) count++;
    count += filters.trainingType.length;
    count += filters.bodyFocus.length;
    count += filters.equipment.length;
    count += filters.difficulty.length;
    count += filters.trainer.length;
    if (filters.plusOnly) count++;
    return count;
  }, [filters]);

  // Filter & Sort video array
  const filteredWorkouts = useMemo(() => {
    return WORKOUT_VIDEOS.filter(workout => {
      // Search keyword
      if (filters.search.trim()) {
        const query = filters.search.toLowerCase();
        const matchTitle = workout.title.toLowerCase().includes(query);
        const matchDesc = workout.description.toLowerCase().includes(query);
        const matchTrainer = workout.trainer.toLowerCase().includes(query);
        if (!matchTitle && !matchDesc && !matchTrainer) return false;
      }
      // Training Type
      if (filters.trainingType.length > 0 && !filters.trainingType.includes(workout.trainingType)) {
        return false;
      }
      // Body Focus
      if (filters.bodyFocus.length > 0 && !filters.bodyFocus.includes(workout.bodyFocus)) {
        return false;
      }
      // Equipment
      if (filters.equipment.length > 0 && !filters.equipment.includes(workout.equipment)) {
        return false;
      }
      // Difficulty
      if (filters.difficulty.length > 0 && !filters.difficulty.includes(workout.difficulty)) {
        return false;
      }
      // Trainer
      if (filters.trainer.length > 0 && !filters.trainer.includes(workout.trainer)) {
        return false;
      }
      // Plus Only
      if (filters.plusOnly && !workout.isPlus) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.date) - new Date(a.date);
      if (sortBy === 'duration-asc') return a.duration - b.duration;
      if (sortBy === 'duration-desc') return b.duration - a.duration;
      if (sortBy === 'difficulty-asc') return a.difficulty - b.difficulty;
      if (sortBy === 'difficulty-desc') return b.difficulty - a.difficulty;
      return 0;
    });
  }, [filters, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Page Header Title */}
      <div className="border-b border-gray-200 pb-5">
        <h1 className="text-3xl font-black text-fb-dark tracking-tight">
          Workout Videos
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          Explore over 500+ free and FB Plus workout videos led by certified personal trainers.
        </p>
      </div>

      {/* Main Grid & Filters Container */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Desktop Sidebar */}
        <div className="hidden lg:block shrink-0 sticky top-20">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            resetFilters={resetFilters}
            activeCount={activeCount}
          />
        </div>

        {/* Mobile Filter Toggle Button */}
        <div className="lg:hidden w-full flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="flex items-center gap-2 text-sm font-bold text-fb-dark"
          >
            <SlidersHorizontal className="w-4 h-4 text-fb-teal" />
            <span>Filter Workouts {activeCount > 0 && `(${activeCount})`}</span>
          </button>
        </div>

        {/* Mobile Filter Drawer Overlay */}
        {mobileFilterOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex justify-start">
            <div className="bg-white w-80 h-full overflow-y-auto p-4 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b pb-2">
                <h3 className="font-bold text-lg text-fb-dark">Filter Options</h3>
                <button onClick={() => setMobileFilterOpen(false)} className="p-1 text-gray-500 hover:text-black">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <FilterSidebar
                filters={filters}
                setFilters={setFilters}
                resetFilters={resetFilters}
                activeCount={activeCount}
              />
            </div>
          </div>
        )}

        {/* Results Column */}
        <div className="flex-1 w-full space-y-6">
          
          {/* Controls Bar: Search & Sort */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="text-sm font-semibold text-gray-700">
              Showing <span className="font-bold text-fb-teal">{filteredWorkouts.length}</span> workouts
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold">
              <label htmlFor="sortSelect" className="text-gray-500 flex items-center gap-1">
                <ArrowUpDown className="w-3.5 h-3.5" /> Sort:
              </label>
              <select
                id="sortSelect"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-gray-300 rounded px-3 py-1.5 focus:ring-1 focus:ring-fb-teal focus:outline-none text-fb-dark font-medium"
              >
                <option value="newest">Newest First</option>
                <option value="duration-asc">Duration: Shortest</option>
                <option value="duration-desc">Duration: Longest</option>
                <option value="difficulty-asc">Difficulty: Lowest</option>
                <option value="difficulty-desc">Difficulty: Highest</option>
              </select>
            </div>
          </div>

          {/* Active Filter Chips */}
          {activeCount > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-bold text-gray-400 uppercase mr-1">Active:</span>
              {filters.search && (
                <span className="bg-fb-teal-light text-fb-teal text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                  "{filters.search}"
                  <button onClick={() => setFilters(p => ({ ...p, search: '' }))}><X className="w-3 h-3" /></button>
                </span>
              )}
              {filters.trainingType.map(t => (
                <span key={t} className="bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                  {t}
                  <button onClick={() => setFilters(p => ({ ...p, trainingType: p.trainingType.filter(x => x !== t) }))}><X className="w-3 h-3" /></button>
                </span>
              ))}
              {filters.bodyFocus.map(b => (
                <span key={b} className="bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                  {b}
                  <button onClick={() => setFilters(p => ({ ...p, bodyFocus: p.bodyFocus.filter(x => x !== b) }))}><X className="w-3 h-3" /></button>
                </span>
              ))}
              {filters.equipment.map(e => (
                <span key={e} className="bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                  {e}
                  <button onClick={() => setFilters(p => ({ ...p, equipment: p.equipment.filter(x => x !== e) }))}><X className="w-3 h-3" /></button>
                </span>
              ))}
              {filters.trainer.map(tr => (
                <span key={tr} className="bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                  With {tr}
                  <button onClick={() => setFilters(p => ({ ...p, trainer: p.trainer.filter(x => x !== tr) }))}><X className="w-3 h-3" /></button>
                </span>
              ))}
            </div>
          )}

          {/* Workout Cards Grid */}
          {filteredWorkouts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorkouts.map(workout => (
                <WorkoutCard key={workout.id} workout={workout} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-lg border border-dashed border-gray-300 space-y-4">
              <h3 className="text-lg font-bold text-fb-dark">No workouts matched your filters</h3>
              <p className="text-gray-500 text-sm max-w-sm mx-auto">
                Try removing some filters or resetting your search to explore more routines.
              </p>
              <button onClick={resetFilters} className="btn-main text-xs px-5 py-2 font-bold">
                Clear All Filters
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
