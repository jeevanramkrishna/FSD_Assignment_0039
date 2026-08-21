import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import PlanCard from '../components/PlanCard';
import { PROGRAMS } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-12 pb-16">
      
      {/* Hero Unit Section */}
      <section className="bg-fb-teal text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Hero Content */}
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight whitespace-pre-line">
                {t('heroTitle')}
              </h1>
              <p className="text-base md:text-lg text-teal-50 font-normal max-w-xl leading-relaxed mx-auto lg:mx-0">
                {t('heroSubtitle')}
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link to="/membership" className="btn-white text-base font-bold px-8 py-3.5 shadow-md">
                  {t('joinNow')}
                </Link>
                <Link to="/videos" className="text-white hover:text-teal-200 font-bold text-sm flex items-center gap-1">
                  {t('browseFree')} &rarr;
                </Link>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="relative flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src="https://cloudfront.fitnessblender.com/assets/img/homepage/team-2024-1440.png"
                  alt="Fitness Blender trainer group picture"
                  className="w-full max-w-lg object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2x3 Grid Feature Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Block 1: Trainer Series */}
          <div className="bg-[#f2ebe5] rounded-xl p-8 flex flex-col justify-between overflow-hidden relative min-h-[360px] group border border-amber-100">
            <div className="space-y-3 z-10 max-w-md">
              <h2 className="text-3xl font-black text-fb-dark">{t('trainerSeriesTitle')}</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                {t('trainerSeriesDesc')}
              </p>
              <div className="pt-2">
                <Link to="/plans" className="btn-outline font-bold text-xs uppercase px-5 py-2.5">
                  {t('viewSeries')}
                </Link>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <img
                src="https://cloudfront.fitnessblender.com/assets/img/homepage/trainer-series-1440.png"
                alt="Trainer Series Erica"
                className="w-full max-w-sm rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Block 2: Earn Free Plus Membership */}
          <div className="bg-fb-dusk text-white rounded-xl p-8 flex flex-col justify-between overflow-hidden relative min-h-[360px] group">
            <div className="space-y-3 z-10 max-w-md">
              <span className="bg-fb-teal text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded tracking-wide">REWARDS</span>
              <h2 className="text-3xl font-black">{t('rewardsTitle')}</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t('rewardsDesc')}
              </p>
              <div className="pt-2">
                <Link to="/membership" className="btn-white text-xs font-bold uppercase px-5 py-2.5">
                  {t('learnRewards')}
                </Link>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <img
                src="https://cloudfront.fitnessblender.com/assets/img/about/reward-1440.png"
                alt="Referral rewards QR code"
                className="w-full max-w-sm rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Block 3: PowerBlock Dumbbells Banner */}
          <div className="bg-gray-100 rounded-xl p-8 flex flex-col justify-between overflow-hidden relative min-h-[360px] group border border-gray-200">
            <div className="space-y-3 z-10 max-w-md">
              <h2 className="text-3xl font-black text-fb-dark">{t('powerblockTitle')}</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                {t('powerblockDesc')}
              </p>
              <div className="pt-2">
                <a href="/membership" className="btn-main text-xs font-bold uppercase px-5 py-2.5">
                  {t('shopPowerblock')}
                </a>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <img
                src="https://cloudfront.fitnessblender.com/assets/img/homepage/pb-50-1440.png"
                alt="PowerBlock Dumbbells"
                className="w-full max-w-sm rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Block 4: Specialty Content */}
          <div className="bg-[#e8f3ee] rounded-xl p-8 flex flex-col justify-between overflow-hidden relative min-h-[360px] group border border-emerald-100">
            <div className="space-y-3 z-10 max-w-md">
              <h2 className="text-3xl font-black text-fb-dark">{t('specialtyTitle')}</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                {t('specialtyDesc')}
              </p>
              <div className="pt-2">
                <Link to="/plans" className="btn-main text-xs font-bold uppercase px-5 py-2.5">
                  {t('browsePilot')}
                </Link>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <img
                src="https://cloudfront.fitnessblender.com/assets/img/homepage/pilot-programs-1440.png"
                alt="Pilot programs Nicole"
                className="w-full max-w-sm rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Block 5: Workout Videos */}
          <div className="bg-[#384351] text-white rounded-xl p-8 flex flex-col justify-between overflow-hidden relative min-h-[360px] group">
            <div className="space-y-3 z-10 max-w-md">
              <h2 className="text-3xl font-black">{t('workoutVideosTitle')}</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t('workoutVideosDesc')}
              </p>
              <div className="pt-2">
                <Link to="/videos" className="btn-white text-xs font-bold uppercase px-5 py-2.5">
                  {t('findWorkout')}
                </Link>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <img
                src="https://cloudfront.fitnessblender.com/assets/img/homepage/workouts-1440.png"
                alt="Tasha Workout Videos"
                className="w-full max-w-sm rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Block 6: Supportive Community */}
          <div className="bg-[#e9f0f8] rounded-xl p-8 flex flex-col justify-between overflow-hidden relative min-h-[360px] group border border-blue-100">
            <div className="space-y-3 z-10 max-w-md">
              <h2 className="text-3xl font-black text-fb-dark">{t('communityTitle')}</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                {t('communityDesc')}
              </p>
              <div className="pt-2">
                <Link to="/healthy-living" className="btn-outline text-xs font-bold uppercase px-5 py-2.5">
                  {t('visitCommunity')}
                </Link>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <img
                src="https://cloudfront.fitnessblender.com/assets/img/homepage/community-1440.png"
                alt="Supportive community outdoor hike"
                className="w-full max-w-sm rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Program Carousel Section: "Not sure where to start?" */}
      <section className="bg-fb-sand py-16 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-fb-dark mb-3">
              {t('notSureWhereToStart')}
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              {t('notSureSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMS.map(program => (
              <PlanCard key={program.id} plan={program} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/plans" className="inline-flex items-center gap-2 font-bold text-fb-teal hover:text-fb-teal-dark text-base">
              <span>{t('viewAllPrograms')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
