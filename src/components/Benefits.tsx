import React from 'react';
import { Shield, Brain, Users, Book, Award, Heart, Lock, Star, Zap, Crown, ArrowRight } from 'lucide-react';

const benefits = [
  { icon: Lock, title: "Diskret und sicher", description: "Test jederzeit und von überall" },
  { icon: Brain, title: "Wissenschaftlich fundiert", description: "Basierend auf aktuellen Studien" },
  { icon: Shield, title: "Anonyme Einschätzung", description: "Einfach und vertraulich" },
  { icon: Book, title: "Hilfreiche Tipps", description: "Weiterführende Informationen" },
  { icon: Users, title: "Professionelle Unterstützung", description: "Durch zertifizierte Psychologen" },
  { icon: Award, title: "Evidenzbasierte Ansätze", description: "Langfristige Unterstützung" },
  { icon: Heart, title: "Wertvolle Ressourcen", description: "Zur mentalen Gesundheit" },
  { icon: Star, title: "Userfreundliches Design", description: "Motivierend und ermutigend" },
  { icon: Zap, title: "Kostenloser Test", description: "Erste Einblicke erhalten" },
  { icon: Crown, title: "Premium-Option", description: "Für individuelle Unterstützung" }
];

export default function Benefits() {
  return (
    <div className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Deine Vorteile auf einen Blick
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl p-6 shadow-soft hover:shadow-lg 
                       transition-all duration-300 hover:scale-[1.02] border border-gray-100"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <benefit.icon className="h-6 w-6 text-primary-600 group-hover:scale-110 transition-transform" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
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