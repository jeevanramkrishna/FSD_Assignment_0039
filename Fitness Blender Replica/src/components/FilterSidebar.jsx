import React from 'react';
import { Filter, RotateCcw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FilterSidebar({ filters, setFilters, resetFilters, activeCount }) {
  const { t } = useLanguage();

  const trainingTypes = ['Strength Training', 'HIIT', 'Pilates', 'Cardiovascular', 'Low Impact', 'Stretching/Flexibility'];
  const bodyFocusOptions = ['Total Body', 'Upper Body', 'Lower Body', 'Core'];
  const equipmentOptions = ['Dumbbell', 'Mat', 'No Equipment'];
  const trainerOptions = ['Tasha', 'Erica', 'Nicole', 'Daniel', 'Kelli', 'Kayla'];

  const toggleArrayFilter = (key, value) => {
    setFilters(prev => {
      const current = prev[key] || [];
      const updated = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value];
      return { ...prev, [key]: updated };
    });
  };

  return (
    <aside className="w-full lg:w-72 bg-white border border-gray-200 rounded-lg p-5 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <div className="flex items-center gap-2 font-bold text-fb-dark">
          <Filter className="w-4 h-4 text-fb-teal" />
          <span>{t('filterWorkouts')}</span>
          {activeCount > 0 && (
            <span className="bg-fb-teal text-white text-xs px-2 py-0.5 rounded-full">
              {activeCount}
            </span>
          )}
        </div>
        {activeCount > 0 && (
          <button 
            onClick={resetFilters}
            className="text-xs text-gray-500 hover:text-fb-teal flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="w-3 h-3" /> {t('reset')}
          </button>
        )}
      </div>

      {/* Training Type */}
      <div>
        <h4 className="font-bold text-xs uppercase text-gray-500 tracking-wider mb-2.5">
          {t('trainingType')}
        </h4>
        <div className="space-y-1.5">
          {trainingTypes.map(type => (
            <label key={type} className="flex items-center gap-2 text-xs font-medium text-gray-700 hover:text-fb-teal cursor-pointer">
              <input
                type="checkbox"
                checked={filters.trainingType.includes(type)}
                onChange={() => toggleArrayFilter('trainingType', type)}
                className="rounded border-gray-300 text-fb-teal focus:ring-fb-teal"
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Body Focus */}
      <div>
        <h4 className="font-bold text-xs uppercase text-gray-500 tracking-wider mb-2.5">
          {t('bodyFocus')}
        </h4>
        <div className="space-y-1.5">
          {bodyFocusOptions.map(focus => (
            <label key={focus} className="flex items-center gap-2 text-xs font-medium text-gray-700 hover:text-fb-teal cursor-pointer">
              <input
                type="checkbox"
                checked={filters.bodyFocus.includes(focus)}
                onChange={() => toggleArrayFilter('bodyFocus', focus)}
                className="rounded border-gray-300 text-fb-teal focus:ring-fb-teal"
              />
              <span>{focus}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Equipment */}
      <div>
        <h4 className="font-bold text-xs uppercase text-gray-500 tracking-wider mb-2.5">
          {t('equipment')}
        </h4>
        <div className="space-y-1.5">
          {equipmentOptions.map(eq => (
            <label key={eq} className="flex items-center gap-2 text-xs font-medium text-gray-700 hover:text-fb-teal cursor-pointer">
              <input
                type="checkbox"
                checked={filters.equipment.includes(eq)}
                onChange={() => toggleArrayFilter('equipment', eq)}
                className="rounded border-gray-300 text-fb-teal focus:ring-fb-teal"
              />
              <span>{eq}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Difficulty Rating */}
      <div>
        <h4 className="font-bold text-xs uppercase text-gray-500 tracking-wider mb-2.5">
          {t('difficultyLevel')}
        </h4>
        <div className="grid grid-cols-5 gap-1">
          {[1, 2, 3, 4, 5].map(level => {
            const isSelected = filters.difficulty.includes(level);
            return (
              <button
                key={level}
                type="button"
                onClick={() => toggleArrayFilter('difficulty', level)}
                className={`py-1.5 text-xs font-bold rounded border transition-colors ${
                  isSelected
                    ? 'bg-fb-teal text-white border-fb-teal'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                {level}
              </button>
            );
          })}
        </div>
      </div>

      {/* Trainer Filter */}
      <div>
        <h4 className="font-bold text-xs uppercase text-gray-500 tracking-wider mb-2.5">
          {t('trainer')}
        </h4>
        <div className="space-y-1.5">
          {trainerOptions.map(tr => (
            <label key={tr} className="flex items-center gap-2 text-xs font-medium text-gray-700 hover:text-fb-teal cursor-pointer">
              <input
                type="checkbox"
                checked={filters.trainer.includes(tr)}
                onChange={() => toggleArrayFilter('trainer', tr)}
                className="rounded border-gray-300 text-fb-teal focus:ring-fb-teal"
              />
              <span>{tr}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Plus Content Toggle */}
      <div className="pt-2 border-t border-gray-100">
        <label className="flex items-center justify-between text-xs font-bold text-fb-dark cursor-pointer">
          <span>{t('plusOnly')}</span>
          <input
            type="checkbox"
            checked={filters.plusOnly}
            onChange={(e) => setFilters(prev => ({ ...prev, plusOnly: e.target.checked }))}
            className="rounded border-gray-300 text-fb-teal focus:ring-fb-teal w-4 h-4"
          />
        </label>
      </div>
    </aside>
  );
}
