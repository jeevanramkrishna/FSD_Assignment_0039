import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import WorkoutsPage from './pages/WorkoutsPage';
import WorkoutDetailPage from './pages/WorkoutDetailPage';
import ProgramsPage from './pages/ProgramsPage';
import MembershipPage from './pages/MembershipPage';
import HealthyLivingPage from './pages/HealthyLivingPage';

export default function App() {
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-fb-dark">
      <Header searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
      
      <main className="grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos" element={<WorkoutsPage searchKeyword={searchKeyword} />} />
          <Route path="/videos/:id" element={<WorkoutDetailPage />} />
          <Route path="/plans" element={<ProgramsPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/healthy-living" element={<HealthyLivingPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
