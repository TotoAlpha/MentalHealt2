import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Community from './components/Community';
import Awareness from './components/Awareness';
import Quiz from './components/Quiz';
import MentalHealthFacts from './components/MentalHealthFacts';
import HabitTracker from './components/HabitTracker';

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Community />
      <MentalHealthFacts />
      <Benefits />
      <Awareness />
      <Testimonials />
      <Quiz />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/habit-tracker" element={<HabitTracker />} />
        </Routes>
        
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">© 2024 Mental Health Platform. Alle Rechte vorbehalten.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;