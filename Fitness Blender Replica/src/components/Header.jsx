import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, ChevronDown, User, Sparkles, Globe, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Header({ searchKeyword, setSearchKeyword }) {
  const [showBanner, setShowBanner] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const { language, setLanguage, t, languages, currentLangObj } = useLanguage();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchOpen(false);
    navigate(`/videos?q=${encodeURIComponent(searchKeyword)}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top Announcement Banner */}
      {showBanner && (
        <div className="bg-fb-dusk text-white text-xs md:text-sm py-2 px-4 flex items-center justify-between text-center transition-all">
          <div className="mx-auto flex flex-wrap items-center justify-center gap-2">
            <span>{t('announcement')}</span>
            <Link to="/plans" className="underline hover:text-gray-200 font-bold ml-1">
              {t('viewProgram')} &rarr;
            </Link>
          </div>
          <button 
            onClick={() => setShowBanner(false)}
            className="text-gray-400 hover:text-white p-1"
            aria-label="Close Announcement"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex flex-col group">
            <span className="text-xl md:text-2xl font-black tracking-tight text-fb-dark group-hover:text-fb-teal transition-colors">
              FITNESS BLENDER
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-fb-dark">
            {/* Workouts Dropdown */}
            <div className="relative group py-5">
              <button className="flex items-center gap-1 hover:text-fb-teal transition-colors">
                {t('workouts')} <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="nav-dropdown">
                <div className="p-2 space-y-1">
                  <Link to="/videos" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-fb-teal-light hover:text-fb-teal rounded-md transition-colors">
                    <span className="w-2 h-2 rounded-full bg-fb-teal"></span>
                    {t('workoutVideos')}
                  </Link>
                  <Link to="/videos?filter=custom" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-fb-teal-light hover:text-fb-teal rounded-md transition-colors">
                    <span className="w-2 h-2 rounded-full bg-fb-aqua"></span>
                    {t('customWorkouts')}
                  </Link>
                </div>
              </div>
            </div>

            {/* Programs Dropdown */}
            <div className="relative group py-5">
              <button className="flex items-center gap-1 hover:text-fb-teal transition-colors">
                {t('programs')} <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="nav-dropdown">
                <div className="p-2 space-y-1">
                  <Link to="/plans" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-fb-teal-light hover:text-fb-teal rounded-md transition-colors">
                    {t('workoutPrograms')}
                  </Link>
                  <Link to="/plans?type=meal" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-fb-teal-light hover:text-fb-teal rounded-md transition-colors">
                    {t('mealPlans')}
                  </Link>
                  <Link to="/plans?type=pilot" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-fb-teal-light hover:text-fb-teal rounded-md transition-colors">
                    {t('pilotPrograms')}
                  </Link>
                  <Link to="/plans?type=routines" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-fb-teal-light hover:text-fb-teal rounded-md transition-colors">
                    {t('routines')}
                  </Link>
                </div>
              </div>
            </div>

            {/* Healthy Living */}
            <div className="relative group py-5">
              <button className="flex items-center gap-1 hover:text-fb-teal transition-colors">
                {t('healthyLiving')} <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="nav-dropdown">
                <div className="p-2 space-y-1">
                  <Link to="/healthy-living" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-fb-teal-light hover:text-fb-teal rounded-md transition-colors">
                    {t('expertArticles')}
                  </Link>
                  <Link to="/healthy-living?cat=recipes" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-fb-teal-light hover:text-fb-teal rounded-md transition-colors">
                    {t('healthyRecipes')}
                  </Link>
                  <Link to="/healthy-living?cat=wellness" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-fb-teal-light hover:text-fb-teal rounded-md transition-colors">
                    {t('wellnessVideos')}
                  </Link>
                </div>
              </div>
            </div>

            {/* Community */}
            <div className="relative group py-5">
              <button className="flex items-center gap-1 hover:text-fb-teal transition-colors">
                {t('community')} <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="nav-dropdown">
                <div className="p-2 space-y-1">
                  <Link to="/healthy-living" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-fb-teal-light hover:text-fb-teal rounded-md transition-colors">
                    {t('blog')}
                  </Link>
                  <Link to="/membership" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-fb-teal-light hover:text-fb-teal rounded-md transition-colors">
                    {t('referralRewards')}
                  </Link>
                </div>
              </div>
            </div>

            {/* Membership Link */}
            <Link to="/membership" className="flex items-center gap-1 text-fb-teal font-bold hover:text-fb-teal-dark transition-colors">
              <Sparkles className="w-4 h-4 text-fb-teal fill-fb-teal" />
              {t('membership')}
            </Link>
          </nav>
        </div>

        {/* Right Nav Utilities */}
        <div className="flex items-center gap-3">
          
          {/* Clickable Multi-Language Selection Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-gray-200 hover:border-fb-teal bg-gray-50 text-xs font-bold text-fb-dark transition-colors"
              title="Select Language"
            >
              <Globe className="w-4 h-4 text-fb-teal" />
              <span className="hidden sm:inline">{currentLangObj.flag} {currentLangObj.nativeName}</span>
              <span className="sm:hidden">{currentLangObj.code.toUpperCase()}</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-1.5 border-b border-gray-100 text-[10px] font-extrabold uppercase tracking-wider text-gray-400">
                  Select Language / भाषा चुनें
                </div>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left font-medium transition-colors ${
                      language === lang.code
                        ? 'bg-fb-teal-light text-fb-teal font-bold'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-fb-teal'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span>{lang.nativeName} ({lang.name})</span>
                    </span>
                    {language === lang.code && <Check className="w-3.5 h-3.5 text-fb-teal" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Button */}
          <button 
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 text-gray-600 hover:text-fb-teal transition-colors relative"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Shopping Cart */}
          <Link to="/membership" className="p-2 text-gray-600 hover:text-fb-teal transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-fb-teal text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              0
            </span>
          </Link>

          {/* User Sign In Menu */}
          <div className="relative">
            <button 
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-300 hover:border-fb-teal transition-colors text-xs font-semibold text-fb-dark"
            >
              <User className="w-4 h-4 text-gray-500" />
              <span>{t('signIn')}</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </button>

            {userDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 p-4 z-50">
                <h3 className="font-bold text-xs uppercase text-gray-400 tracking-wider mb-2">Fitness Blender</h3>
                <p className="text-xs text-gray-600 mb-4">
                  Join for free to track workouts, customize programs, and connect with our community!
                </p>
                <div className="space-y-2">
                  <Link 
                    to="/membership" 
                    className="block w-full text-center bg-fb-teal text-white py-2 rounded text-xs font-bold hover:bg-fb-teal-dark transition-colors"
                  >
                    {t('joinFree')}
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-fb-teal"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Expanded Search Bar Drawer */}
      {searchOpen && (
        <div className="bg-gray-50 border-t border-b border-gray-200 py-4 px-4 transition-all">
          <form onSubmit={handleSearchSubmit} className="max-w-3xl mx-auto flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder={t('searchPlaceholder')}
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fb-teal text-sm font-medium"
                autoFocus
              />
            </div>
            <button type="submit" className="bg-fb-teal text-white px-6 py-2.5 rounded-md text-sm font-bold hover:bg-fb-teal-dark transition-colors">
              {t('search')}
            </button>
          </form>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-6 space-y-4 shadow-lg">
          <div className="space-y-3 font-semibold text-gray-800">
            <Link to="/videos" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base hover:text-fb-teal">{t('workouts')}</Link>
            <Link to="/plans" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base hover:text-fb-teal">{t('programs')}</Link>
            <Link to="/membership" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base text-fb-teal font-bold">{t('membership')}</Link>
            <Link to="/healthy-living" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base hover:text-fb-teal">{t('healthyLiving')}</Link>
          </div>
        </div>
      )}
    </header>
  );
}
