import React from 'react';
import { Users, Heart, HeartHandshake, ArrowRight } from 'lucide-react';

export default function Community() {
  return (
    <div className="section-padding gradient-bg">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <Heart className="h-12 w-12 text-primary-600 mx-auto mb-6 animate-float" />
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Du bist nicht allein
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Millionen Menschen teilen ähnliche Erfahrungen. Gemeinsam können wir den Weg zu besserer mentaler Gesundheit gehen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Users,
              title: "Gemeinsam stark",
              description: "In Deutschland suchen jährlich über 1.9 Millionen Menschen professionelle Hilfe",
              image: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&q=80"
            },
            {
              icon: HeartHandshake,
              title: "Hilfe annehmen",
              description: "8 von 10 Menschen berichten von Verbesserungen durch professionelle Unterstützung",
              image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80"
            },
            {
              icon: Heart,
              title: "Neue Perspektiven",
              description: "Über 70% finden durch Therapie zu mehr Lebensqualität zurück",
              image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&q=80"
            }
          ].map((item, index) => (
            <div key={index} 
                 className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft card-hover
                          border border-gray-100 overflow-hidden">
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <item.icon className="h-10 w-10 mx-auto text-primary-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold 
              hover:bg-primary-50 transform hover:scale-105 transition-all duration-300
              shadow-lg hover:shadow-xl focus:ring-4 focus:ring-primary-200 focus:outline-none
              border-2 border-primary-600"
          >
            Jetzt Mental Health Check durchführen
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}