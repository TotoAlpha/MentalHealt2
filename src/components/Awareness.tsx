import React from 'react';
import { Sparkles, Scale, Lightbulb, ArrowRight } from 'lucide-react';

export default function Awareness() {
  return (
    <div className="section-padding bg-gradient-to-b from-blue-50/30 to-white/80">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="max-w-3xl mx-auto">
          <Scale className="h-12 w-12 text-primary-600 mx-auto mb-6 animate-float" />
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Der erste Schritt zur Veränderung
          </h2>
          
          <div className="relative overflow-hidden rounded-2xl mb-12">
            <img 
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80" 
              alt="Menschen im Gespräch"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="text-xl leading-relaxed">
                Stell dir vor, wie großartig das Leben sein könnte – mehr Freude, tiefere Beziehungen, 
                erfüllendere Momente.
              </p>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft p-8 mb-12
                        border border-gray-100 card-hover">
            <Sparkles className="h-8 w-8 text-primary-600 mx-auto mb-6" />
            <p className="text-gray-800 mb-6 text-lg text-center">
              Von den etwa 17,8 Millionen Betroffenen in Deutschland nehmen nur 18,9% professionelle Hilfe in Anspruch.
            </p>
            <p className="text-gray-600 leading-relaxed text-center">
              Das bedeutet: Viele Menschen tragen ihre Sorgen still mit sich, ohne zu wissen, 
              dass Unterstützung der Schlüssel zu einem erfüllteren Leben sein könnte.
            </p>
          </div>

          <div className="space-y-6 text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              Wie geht es dir wirklich? Diese Frage ist der erste Schritt zu mehr Lebensqualität.
            </p>
            <button 
              onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center justify-center gap-2 btn-primary text-lg px-10 py-4"
            >
              Starte jetzt deinen Check
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}