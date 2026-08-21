import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, BarChart2 } from 'lucide-react';

export default function PlanCard({ plan }) {
  const { id, title, subtitle, weeks, minutesAvg, difficulty, isFree, category, image, tags } = plan;

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full group">
      <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 flex gap-2">
          <span className={`text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded shadow text-white ${
            isFree ? 'bg-emerald-600' : 'bg-fb-dusk'
          }`}>
            {isFree ? 'FREE CHALLENGE' : 'PLUS PROGRAM'}
          </span>
          <span className="bg-white/90 text-fb-dark text-[11px] font-bold px-2 py-0.5 rounded backdrop-blur-sm">
            {weeks} {weeks === 1 ? 'Week' : 'Weeks'}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <span className="text-xs font-bold text-fb-teal uppercase tracking-wider block mb-1">
            {category}
          </span>
          <h3 className="font-extrabold text-fb-dark text-lg leading-snug group-hover:text-fb-teal transition-colors mb-2">
            {title}
          </h3>
          <p className="text-xs text-gray-600 line-clamp-2 mb-4 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-medium text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-fb-teal" />
            <span>~{minutesAvg} Min/Day</span>
          </div>
          <div className="flex items-center gap-1">
            <BarChart2 className="w-3.5 h-3.5 text-fb-teal" />
            <span>{difficulty}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
