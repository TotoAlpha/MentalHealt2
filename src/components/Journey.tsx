import React from 'react';
import { Compass } from 'lucide-react';

export default function Journey() {
  return (
    <div className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Compass className="h-12 w-12 text-primary-600 mx-auto mb-6 animate-float" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Wähle deinen Weg zur mentalen Gesundheit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecke, wie wir dich auf deinem persönlichen Weg unterstützen können
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Kostenlose Version",
              features: [
                "Kurzer, informativer Check-up",
                "Basis-Auswertung",
                "Allgemeine Tipps",
                "Zugang zu Ressourcen"
              ],
              cta: "Jetzt starten",
              primary: false
            },
            {
              title: "Premium-Version",
              features: [
                "Alle Features der kostenlosen Version",
                "Persönlicher Psychologe",
                "Monatliche Fortschrittsberichte",
                "Individuelle Beratung",
                "Unbegrenzte Check-ins",
                "24/7 Support"
              ],
              price: "49€ pro Monat",
              cta: "Premium wählen",
              primary: true
            }
          ].map((plan, index) => (
            <div
              key={index}
              className={`relative group bg-white rounded-2xl p-8 shadow-soft 
                ${plan.primary ? 'md:scale-105 border-2 border-primary-500' : 'border border-gray-100'}
                hover:shadow-lg transition-all duration-300`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.title}</h3>
              {plan.price && (
                <p className="text-lg text-primary-600 font-semibold mb-6">{plan.price}</p>
              )}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-500 mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors
                  ${plan.primary 
                    ? 'bg-primary-600 text-white hover:bg-primary-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}