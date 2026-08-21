import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Flame, Heart, Sparkles, Play } from 'lucide-react';

export default function WorkoutCard({ workout }) {
  const { id, title, duration, difficulty, calories, bodyFocus, equipment, trainer, image, isPlus } = workout;

  // Render difficulty rating bars (1 to 5)
  const renderDifficultyBars = (level) => {
    return (
      <div className="flex items-center gap-0.5" title={`Difficulty level ${level}/5`}>
        {[1, 2, 3, 4, 5].map((bar) => (
          <div
            key={bar}
            className={`w-1.5 h-3.5 rounded-sm ${
              bar <= level ? 'bg-fb-teal' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full">
      {/* Thumbnail Container */}
      <div className="relative aspect-video bg-gray-100 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-fb-teal text-fb-dark group-hover:text-white flex items-center justify-center shadow-lg transition-colors pl-0.5">
            <Play className="w-5 h-5 fill-current" />
          </div>
        </div>

        {/* Top Badges */}
        <div className="absolute top-2 left-2 flex items-center gap-1.5">
          {isPlus && (
            <span className="bg-fb-teal text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded shadow flex items-center gap-1">
              <Sparkles className="w-3 h-3 fill-current" /> PLUS
            </span>
          )}
          <span className="bg-black/70 text-white text-xs font-semibold px-2 py-0.5 rounded backdrop-blur-sm">
            {duration} Min
          </span>
        </div>

        {/* Favorite heart icon */}
        <button 
          className="absolute top-2 right-2 p-1.5 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
          aria-label="Add to favorites"
        >
          <Heart className="w-4 h-4" />
        </button>
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          {/* Metadata Row: Body Focus & Difficulty */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
            <span className="font-semibold text-fb-teal uppercase tracking-wider">{bodyFocus}</span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-medium text-gray-400">Diff {difficulty}/5</span>
              {renderDifficultyBars(difficulty)}
            </div>
          </div>

          {/* Title */}
          <Link to={`/videos/${id}`} className="block">
            <h3 className="font-bold text-gray-900 group-hover:text-fb-teal text-base leading-snug line-clamp-2 transition-colors mb-2">
              {title}
            </h3>
          </Link>
        </div>

        {/* Footer info: Trainer, Calorie Burn, Equipment */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span className="font-medium text-gray-700 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-fb-teal inline-block"></span>
            With {trainer}
          </span>
          <div className="flex items-center gap-1 text-gray-600 font-medium">
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            <span>{calories} Cal</span>
          </div>
        </div>
      </div>
    </div>
  );
}
