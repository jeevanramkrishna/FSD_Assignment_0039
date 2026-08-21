import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { WORKOUT_VIDEOS } from '../data/mockData';
import { Play, Flame, Clock, Calendar, CheckCircle2, Heart, Share2, Sparkles, Dumbbell } from 'lucide-react';

export default function WorkoutDetailPage() {
  const { id } = useParams();
  const workout = WORKOUT_VIDEOS.find(w => w.id === id) || WORKOUT_VIDEOS[0];
  const [completed, setCompleted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Breadcrumb Navigation */}
      <nav className="text-xs text-gray-500 flex items-center gap-2">
        <Link to="/" className="hover:text-fb-teal">Home</Link>
        <span>/</span>
        <Link to="/videos" className="hover:text-fb-teal">Workouts</Link>
        <span>/</span>
        <span className="text-gray-900 font-semibold truncate max-w-xs">{workout.title}</span>
      </nav>

      {/* Main Video Player Container */}
      <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
        {isPlaying ? (
          <iframe
            src={`${workout.videoUrl}?autoplay=1`}
            title={workout.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
            <img src={workout.image} alt={workout.title} className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 flex flex-col justify-between p-6 md:p-10">
              
              {/* Top Tag */}
              <div className="flex items-center gap-2">
                {workout.isPlus && (
                  <span className="bg-fb-teal text-white text-xs font-bold px-3 py-1 rounded shadow flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 fill-current" /> FB PLUS EXCLUSIVE
                  </span>
                )}
                <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded backdrop-blur-md">
                  {workout.duration} Minutes
                </span>
              </div>

              {/* Center Big Play Button */}
              <div className="self-center my-auto flex flex-col items-center gap-3">
                <div className="w-20 h-20 rounded-full bg-fb-teal text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform pl-1">
                  <Play className="w-8 h-8 fill-current" />
                </div>
                <span className="text-white font-extrabold text-sm tracking-wider uppercase drop-shadow">
                  Click to Play Video
                </span>
              </div>

              {/* Bottom Title overlay */}
              <div className="text-white">
                <h1 className="text-xl md:text-3xl font-black">{workout.title}</h1>
                <p className="text-sm text-gray-200 mt-1">{workout.subtitle}</p>
              </div>

            </div>
          </div>
        )}
      </div>

      {/* Header Info & Actions Row */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gray-100">
          
          {/* Trainer Avatar & Details */}
          <div className="flex items-center gap-4">
            <img
              src={workout.trainerAvatar}
              alt={workout.trainer}
              className="w-14 h-14 rounded-full object-cover border-2 border-fb-teal"
            />
            <div>
              <h2 className="text-xl font-extrabold text-fb-dark">{workout.title}</h2>
              <p className="text-xs text-gray-500 font-medium">
                Instructed by <span className="font-bold text-fb-teal">{workout.trainer}</span> • {workout.views} views
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCompleted(!completed)}
              className={`px-5 py-2.5 rounded text-xs font-bold uppercase flex items-center gap-2 transition-colors ${
                completed
                  ? 'bg-emerald-600 text-white'
                  : 'bg-fb-teal text-white hover:bg-fb-teal-dark'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              {completed ? 'Workout Completed!' : 'Mark Complete'}
            </button>

            <button className="p-2.5 border border-gray-300 rounded text-gray-700 hover:text-fb-teal transition-colors" title="Add to Favorites">
              <Heart className="w-4 h-4" />
            </button>
            <button className="p-2.5 border border-gray-300 rounded text-gray-700 hover:text-fb-teal transition-colors" title="Share Workout">
              <Share2 className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-2">
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-xs text-gray-400 font-bold uppercase mb-1 flex items-center justify-center gap-1">
              <Clock className="w-3.5 h-3.5 text-fb-teal" /> Duration
            </div>
            <div className="text-base font-extrabold text-fb-dark">{workout.duration} Mins</div>
          </div>

          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-xs text-gray-400 font-bold uppercase mb-1 flex items-center justify-center gap-1">
              <Flame className="w-3.5 h-3.5 text-amber-500" /> Est. Burn
            </div>
            <div className="text-base font-extrabold text-fb-dark">{workout.calories} Cal</div>
          </div>

          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-xs text-gray-400 font-bold uppercase mb-1 flex items-center justify-center gap-1">
              <Dumbbell className="w-3.5 h-3.5 text-fb-teal" /> Equipment
            </div>
            <div className="text-base font-extrabold text-fb-dark">{workout.equipment}</div>
          </div>

          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-xs text-gray-400 font-bold uppercase mb-1">Difficulty</div>
            <div className="text-base font-extrabold text-fb-teal">{workout.difficulty}/5 ({workout.difficultyName})</div>
          </div>
        </div>

        {/* Overview & Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
          
          {/* Left Description */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-lg font-bold text-fb-dark border-b pb-2">Workout Description</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {workout.description}
            </p>
          </div>

          {/* Right Interval Structure */}
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-fb-dark border-b pb-2">
              Workout Structure
            </h3>
            <div className="space-y-3">
              {workout.structure ? (
                workout.structure.map((item, idx) => (
                  <div key={idx} className="bg-white p-3 rounded border border-gray-200 text-xs">
                    <div className="flex justify-between font-bold text-fb-dark mb-1">
                      <span>{item.name}</span>
                      <span className="text-fb-teal">{item.duration}</span>
                    </div>
                    <p className="text-gray-600 leading-normal">{item.detail}</p>
                  </div>
                ))
              ) : (
                <p className="text-xs text-gray-500">Standard warm-up, main routine, and cool-down stretch included.</p>
              )}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
