import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Facebook, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-fb-dusk text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Header & Tagline */}
        <div className="mb-12 border-b border-gray-700/60 pb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <Link to="/" className="text-2xl font-black tracking-tight text-white hover:text-fb-teal-light transition-colors">
              FITNESS BLENDER
            </Link>
            <p className="text-xs uppercase font-bold tracking-widest text-fb-teal-light mt-1">
              {t('tagline')}
            </p>
          </div>
          <p className="text-gray-400 text-xs md:text-sm max-w-md">
            At-home workout videos, total body fitness plans, healthy nutrition advice, and a supportive health community.
          </p>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12 text-sm">
          {/* Column 1: Workouts */}
          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-4 border-b border-fb-teal/50 pb-1 inline-block">
              {t('workouts')}
            </h4>
            <ul className="space-y-2.5 text-gray-300 text-xs">
              <li><Link to="/videos" className="hover:text-fb-teal-light transition-colors">{t('workoutVideos')}</Link></li>
              <li><Link to="/videos?filter=custom" className="hover:text-fb-teal-light transition-colors">{t('customWorkouts')}</Link></li>
            </ul>
          </div>

          {/* Column 2: Programs */}
          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-4 border-b border-fb-teal/50 pb-1 inline-block">
              {t('programs')}
            </h4>
            <ul className="space-y-2.5 text-gray-300 text-xs">
              <li><Link to="/plans" className="hover:text-fb-teal-light transition-colors">{t('workoutPrograms')}</Link></li>
              <li><Link to="/plans?type=meal" className="hover:text-fb-teal-light transition-colors">{t('mealPlans')}</Link></li>
              <li><Link to="/plans?type=pilot" className="hover:text-fb-teal-light transition-colors">{t('pilotPrograms')}</Link></li>
              <li><Link to="/plans?type=routines" className="hover:text-fb-teal-light transition-colors">{t('routines')}</Link></li>
            </ul>
          </div>

          {/* Column 3: Healthy Living */}
          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-4 border-b border-fb-teal/50 pb-1 inline-block">
              {t('healthyLiving')}
            </h4>
            <ul className="space-y-2.5 text-gray-300 text-xs">
              <li><Link to="/healthy-living" className="hover:text-fb-teal-light transition-colors">{t('expertArticles')}</Link></li>
              <li><Link to="/healthy-living?cat=recipes" className="hover:text-fb-teal-light transition-colors">{t('healthyRecipes')}</Link></li>
              <li><Link to="/healthy-living?cat=wellness" className="hover:text-fb-teal-light transition-colors">{t('wellnessVideos')}</Link></li>
            </ul>
          </div>

          {/* Column 4: Community */}
          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-4 border-b border-fb-teal/50 pb-1 inline-block">
              {t('community')}
            </h4>
            <ul className="space-y-2.5 text-gray-300 text-xs">
              <li><Link to="/healthy-living" className="hover:text-fb-teal-light transition-colors">{t('blog')}</Link></li>
              <li><Link to="/membership" className="hover:text-fb-teal-light transition-colors">{t('referralRewards')}</Link></li>
            </ul>
          </div>

          {/* Column 5: Membership */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-4 border-b border-fb-teal/50 pb-1 inline-block">
              {t('membership')}
            </h4>
            <ul className="space-y-2.5 text-gray-300 text-xs">
              <li><Link to="/membership" className="text-fb-teal-light font-semibold hover:underline">{t('membership')}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & Social Icons */}
        <div className="pt-8 border-t border-gray-700/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>{t('copyright')} <Link to="/" className="underline hover:text-white ml-2">{t('terms')}</Link> | <Link to="/" className="underline hover:text-white ml-1">{t('privacy')}</Link></p>
          <div className="flex items-center gap-4">
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="p-2 bg-gray-800 hover:bg-fb-teal rounded-full transition-colors">
              <Youtube className="w-4 h-4 text-white" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="p-2 bg-gray-800 hover:bg-fb-teal rounded-full transition-colors">
              <Instagram className="w-4 h-4 text-white" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="p-2 bg-gray-800 hover:bg-fb-teal rounded-full transition-colors">
              <Facebook className="w-4 h-4 text-white" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="p-2 bg-gray-800 hover:bg-fb-teal rounded-full transition-colors">
              <Twitter className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
