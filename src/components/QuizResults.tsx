import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { AlertTriangle, Activity, ArrowRight, Sparkles, Target, Lightbulb } from 'lucide-react';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    value: number;
  }[];
  dimension: string;
}

interface QuizResultsProps {
  answers: number[];
  questions: Question[];
  userData: {
    name: string;
    email: string;
  };
}

const QuizResults: React.FC<QuizResultsProps> = ({ answers, questions, userData }) => {
  const navigate = useNavigate();
  const totalScore = answers.reduce((sum, value) => sum + value, 0);
  const percentage = (totalScore / (questions.length * 25)) * 100;

  const data = {
    labels: questions.map(q => q.dimension),
    datasets: [
      {
        label: 'Deine Werte',
        data: answers,
        backgroundColor: 'rgba(45, 116, 116, 0.2)',
        borderColor: 'rgba(45, 116, 116, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true
        },
        suggestedMin: 0,
        suggestedMax: 25,
        ticks: {
          stepSize: 5,
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    maintainAspectRatio: false
  };

  const getScoreCategory = (score: number) => {
    if (score >= 100) return "exzellent";
    if (score >= 76) return "stabil";
    if (score >= 51) return "einige Herausforderungen";
    if (score >= 30) return "herausfordernd";
    return "starke Belastung";
  };

  const getFeedback = (score: number) => {
    switch (getScoreCategory(score)) {
      case "exzellent":
        return `${userData.name}, gratuliere! Deine mentale Gesundheit sieht sehr gut aus. Wenn du langfristig so glücklich bleiben willst, probiere unseren Mental Health Tracker.`;
      case "stabil":
        return `${userData.name}, du machst einen stabilen Eindruck, aber kleine Verbesserungen sind möglich. Nutze unseren Mental Health Tracker für tiefere Einblicke.`;
      case "einige Herausforderungen":
        return `${userData.name}, es gibt Bereiche, in denen du dir mehr Aufmerksamkeit schenken könntest. Der Mental Health Tracker kann dir dabei helfen.`;
      case "herausfordernd":
        return `${userData.name}, du scheinst momentan mit einigen Herausforderungen konfrontiert zu sein. Unser Mental Health Tracker kann dir helfen, deine Stimmungen zu beobachten.`;
      default:
        return `${userData.name}, deine mentale Gesundheit verdient besondere Aufmerksamkeit. Zögere nicht, dir Unterstützung zu suchen.`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50/90 to-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Deine Ergebnisse</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center">
                Dein persönliches Profil
              </h3>
              <div className="h-[300px] mb-8">
                <Radar data={data} options={options} />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-center">
                Fakten zur mentalen Gesundheit
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="h-6 w-6 text-primary-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Weit verbreitet</h4>
                      <p className="text-gray-600 text-sm">
                        27,8% der erwachsenen Bevölkerung in Deutschland sind jährlich von einer psychischen Erkrankung betroffen.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <Activity className="h-6 w-6 text-primary-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Symptome erkennen</h4>
                      <p className="text-gray-600 text-sm">
                        20% der Bevölkerung leiden an depressiven Symptomen, etwa 12-15% an Angstsymptomen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold mb-4">Deine Gesamtbewertung</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-3xl font-bold text-primary-600">
                {percentage.toFixed(1)}%
              </div>
              <div className="text-gray-600">
                {getScoreCategory(percentage)}
              </div>
            </div>
            <p className="text-gray-600 mb-6">{getFeedback(percentage)}</p>
          </div>

          <div className="bg-primary-50 rounded-xl p-8 mb-8">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Verstehe deine mentale Gesundheit besser – Toni, unser Mental Health Tracker hilft dir, 
                Stimmungen und Auslöser zu erkennen.
              </h3>
              
              <p className="text-gray-700 mb-8 text-center">
                Der erste Schritt zu mehr Wohlbefinden ist das Verstehen deiner eigenen Gefühlswelt. 
                Mit unserem kostenlosen Tool beginnst du heute noch deinen Weg zu mehr Klarheit und 
                innerer Balance.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <Target className="h-8 w-8 text-primary-600 mb-4" />
                  <h4 className="font-semibold mb-2">Erkenne Muster</h4>
                  <p className="text-gray-600 text-sm">
                    Verstehe, was deine Stimmung beeinflusst und wie du sie positiv gestalten kannst.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <Sparkles className="h-8 w-8 text-primary-600 mb-4" />
                  <h4 className="font-semibold mb-2">Finde Auslöser</h4>
                  <p className="text-gray-600 text-sm">
                    Entdecke, was dir guttut – und was nicht. Entwickle Strategien für mehr Wohlbefinden.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <Lightbulb className="h-8 w-8 text-primary-600 mb-4" />
                  <h4 className="font-semibold mb-2">Gewinne Einblicke</h4>
                  <p className="text-gray-600 text-sm">
                    Erhalte wertvolle Erkenntnisse für ein bewussteres und zufriedeneres Leben.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-700 mb-6">
                  Warte nicht darauf, dass es dir besser geht – starte jetzt deinen Weg zu mehr Wohlbefinden.
                </p>
                <button 
                  onClick={() => navigate('/habit-tracker')}
                  className="group inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 
                    rounded-lg font-semibold hover:bg-primary-700 transform hover:scale-105 
                    transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                >
                  Kostenlos testen
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => window.location.reload()}
              className="group inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Quiz erneut starten
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;