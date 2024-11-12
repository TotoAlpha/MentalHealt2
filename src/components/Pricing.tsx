import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Kostenlose Version",
    price: "0€",
    features: [
      "Kurzer, informativer Check-up",
      "Basis-Auswertung",
      "Allgemeine Tipps",
      "Zugang zu Ressourcen"
    ]
  },
  {
    name: "Premium-Version",
    price: "49€",
    period: "pro Monat",
    features: [
      "Alle Features der kostenlosen Version",
      "Persönlicher Psychologe",
      "Monatliche Fortschrittsberichte",
      "Individuelle Beratung",
      "Unbegrenzte Check-ins",
      "24/7 Support"
    ]
  }
];

export default function Pricing() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          Wähle deinen Weg zur mentalen Gesundheit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 ${
              index === 1 ? 'border-2 border-blue-500' : ''
            }`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-lg font-semibold ${
                index === 1 
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              } transition-colors`}>
                {index === 0 ? 'Kostenlos starten' : 'Premium wählen'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}