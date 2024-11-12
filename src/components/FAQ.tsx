import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Wie läuft der Mental Health Check ab?",
    answer: "Der Check besteht aus wissenschaftlich validierten Fragen zu deinem Wohlbefinden. Du kannst ihn in etwa 10-15 Minuten durchführen und erhältst sofort eine erste Einschätzung deiner mentalen Gesundheit."
  },
  {
    question: "Sind meine Daten sicher?",
    answer: "Absolut. Wir nehmen Datenschutz sehr ernst. Alle Daten werden verschlüsselt übertragen und gespeichert. Deine Angaben sind anonym und werden niemals ohne deine ausdrückliche Zustimmung weitergegeben."
  },
  {
    question: "Ersetzt der Test eine professionelle Diagnose?",
    answer: "Nein, unser Test ist ein erstes Screening-Tool und ersetzt keine professionelle Diagnose. Bei Bedenken empfehlen wir immer, einen Arzt oder Therapeuten aufzusuchen."
  },
  {
    question: "Wie oft sollte ich den Test machen?",
    answer: "Wir empfehlen, den Test alle 3-4 Wochen zu wiederholen, um Veränderungen in deinem mentalen Wohlbefinden zu tracken. Premium-Nutzer können ihr Wohlbefinden auch täglich dokumentieren."
  },
  {
    question: "Was passiert nach dem Test?",
    answer: "Du erhältst eine detaillierte Auswertung mit personalisierten Empfehlungen. Premium-Nutzer bekommen zusätzlich Zugang zu einem persönlichen Psychologen für individuelle Beratung."
  },
  {
    question: "Kann ich die Premium-Mitgliedschaft jederzeit kündigen?",
    answer: "Ja, du kannst dein Premium-Abo jederzeit zum Ende der Laufzeit kündigen. Es gibt keine versteckten Kosten oder Mindestlaufzeiten."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          Häufig gestellte Fragen
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}