import React, { useState } from 'react';
import { ARTICLES } from '../data/mockData';
import { BookOpen, Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HealthyLivingPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Fitness', 'Health', 'Nutrition'];

  const filteredArticles = ARTICLES.filter(art => {
    if (activeCategory === 'All') return true;
    return art.category === activeCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="border-b border-gray-200 pb-5">
        <h1 className="text-3xl font-black text-fb-dark tracking-tight">
          Healthy Living & Articles
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          Evidence-based articles on strength training, injury prevention, nutrition, and mental health.
        </p>
      </div>

      {/* Categories */}
      <div className="flex items-center gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 text-xs font-bold rounded-full transition-colors ${
              activeCategory === cat
                ? 'bg-fb-teal text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredArticles.map(article => (
          <article key={article.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 space-y-3">
                <span className="text-xs font-extrabold text-fb-teal uppercase tracking-wider">
                  {article.category}
                </span>
                <h3 className="text-lg font-bold text-fb-dark group-hover:text-fb-teal transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </div>

            <div className="px-5 pb-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1 text-gray-600 font-medium">
                <User className="w-3.5 h-3.5 text-fb-teal" /> {article.author}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {article.readTime}
              </span>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}
