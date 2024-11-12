import React from 'react';
import { Brain, Heart, AlertTriangle, Activity, ArrowRight } from 'lucide-react';

export default function MentalHealthFacts() {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Brain className="h-12 w-12 text-primary-600 mx-auto mb-6 animate-float" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Mentale Gesundheit verstehen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Viele Menschen spüren, dass etwas nicht stimmt, können es aber nicht einordnen. 
            Die Fakten zeigen: Du bist damit nicht allein.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80" 
              alt="Menschen im Gespräch"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 text-white mb-2">
                <AlertTriangle className="h-6 w-6" />
                <span className="text-2xl font-bold">27.8%</span>
              </div>
              <p className="text-white/90">
                der erwachsenen Bevölkerung in Deutschland sind jährlich von einer psychischen Erkrankung betroffen
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&q=80" 
              alt="Entspannung und Meditation"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 text-white mb-2">
                <Heart className="h-6 w-6" />
                <span className="text-2xl font-bold">81.1%</span>
              </div>
              <p className="text-white/90">
                der Betroffenen suchen keine professionelle Hilfe – oft aus Unsicherheit oder Scham
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Activity className="h-8 w-8 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Symptomerkennung</h3>
              <p className="text-gray-600">20% der Menschen leiden an depressiven Symptomen, ohne es zu wissen</p>
            </div>
            <div className="text-center">
              <AlertTriangle className="h-8 w-8 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Lebensqualität</h3>
              <p className="text-gray-600">Psychische Erkrankungen können die Lebenserwartung um bis zu 10 Jahre verkürzen</p>
            </div>
            <div className="text-center">
              <Heart className="h-8 w-8 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Heilungschancen</h3>
              <p className="text-gray-600">Mit professioneller Hilfe erreichen 80% eine deutliche Verbesserung</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 
              rounded-lg font-semibold hover:bg-primary-700 transform hover:scale-105 
              transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            Jetzt Mental Health Check starten
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}