import React from 'react';
import { Brain, AlertCircle, Heart, ArrowRight } from 'lucide-react';

const stats = [
  { 
    icon: Brain,
    title: "27.8%",
    description: "der deutschen Erwachsenen sind jährlich betroffen",
    color: "from-primary-50 to-primary-100/50"
  },
  {
    icon: AlertCircle,
    title: "10+ Jahre",
    description: "können psychische Erkrankungen das Leben verkürzen",
    color: "from-secondary-50 to-secondary-100/50"
  },
  {
    icon: Heart,
    title: "2x höher",
    description: "sind depressive Symptome in den letzten Jahren gestiegen",
    color: "from-accent-50 to-accent-100/50"
  }
];

export default function Stats() {
  return (
    <div className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-white"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Psychische Gesundheit betrifft uns alle – die Zahlen sprechen für sich
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl 
                transform group-hover:scale-105 transition-transform duration-300`}></div>
              <div className="relative p-8 text-center">
                <div className="mb-6">
                  <stat.icon className="h-12 w-12 mx-auto text-primary-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-4">{stat.title}</div>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold 
              hover:bg-primary-700 transform hover:scale-105 transition-all duration-300
              shadow-lg hover:shadow-xl focus:ring-4 focus:ring-primary-200 focus:outline-none"
          >
            Kostenfreien Mental Health Check starten
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}