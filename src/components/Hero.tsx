import React from 'react';
import { Brain, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/90 via-primary-50/50 to-white"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80')] 
        opacity-10 bg-center bg-cover"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-float">
            <Brain className="h-20 w-20 mx-auto text-primary-600" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Wie geht es dir <span className="text-primary-600">wirklich</span>?<br/>
            Finde es heraus!
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Mental Health ist essenziell – über 17 Millionen Deutsche sind jedes Jahr von psychischen Erkrankungen betroffen. 
            Wie geht es dir? Mache den Test und erfahre es jetzt!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
              className="group btn-primary text-lg px-8 py-4 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Jetzt Quiz starten
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-gray-600 hover:text-primary-600 transition-colors px-8 py-4 flex items-center gap-2">
              Mehr erfahren
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}