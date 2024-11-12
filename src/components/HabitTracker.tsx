import React, { useState } from 'react';
import { Smile, Meh, Frown, Calendar, TrendingUp, MessageCircle, CheckCircle } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import { trackHabitTrackerStart, trackMoodEntry } from '../utils/fbPixel';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface MoodEntry {
  date: string;
  mood: number;
  comment: string;
}

export default function HabitTracker() {
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [comment, setComment] = useState('');
  const [entries, setEntries] = useState<MoodEntry[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  React.useEffect(() => {
    trackHabitTrackerStart();
  }, []);

  const moodIcons = [
    { icon: Frown, value: 1, label: 'Nicht so gut', color: 'text-red-500' },
    { icon: Meh, value: 2, label: 'Geht so', color: 'text-yellow-500' },
    { icon: Smile, value: 3, label: 'Gut', color: 'text-green-500' }
  ];

  const handleMoodSelect = (mood: number) => {
    setSelectedMood(mood);
    setShowCommentModal(true);
  };

  const handleSubmit = () => {
    if (selectedMood !== null) {
      const newEntry = {
        date: new Date().toISOString().split('T')[0],
        mood: selectedMood,
        comment
      };
      setEntries([...entries, newEntry]);
      trackMoodEntry(selectedMood);
      setShowCommentModal(false);
      setComment('');
      setSelectedMood(null);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const chartData = {
    labels: entries.map(entry => entry.date),
    datasets: [
      {
        label: 'Stimmungsverlauf',
        data: entries.map(entry => entry.mood),
        borderColor: 'rgb(45, 116, 116)',
        backgroundColor: 'rgba(45, 116, 116, 0.5)',
        tension: 0.4
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: 4,
        ticks: {
          stepSize: 1,
          callback: (value: number) => {
            if (value === 1) return 'Nicht so gut';
            if (value === 2) return 'Geht so';
            if (value === 3) return 'Gut';
            return '';
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50/90 to-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Willkommen bei Toni, deinem Mental Health Tracker!
            </h2>
            <p className="text-xl text-gray-600">
              Wie fühlst du dich heute? Wähle einen Smiley und teile deine Gedanken.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-12">
            {moodIcons.map(({ icon: Icon, value, label, color }) => (
              <button
                key={value}
                onClick={() => handleMoodSelect(value)}
                className={`p-6 rounded-xl border-2 border-gray-200 hover:border-primary-500 
                  transition-all duration-300 group ${
                  selectedMood === value ? 'border-primary-500 bg-primary-50' : ''
                }`}
              >
                <Icon className={`h-16 w-16 mx-auto mb-4 ${color} 
                  group-hover:scale-110 transition-transform`} />
                <p className="text-center font-medium text-gray-700">{label}</p>
              </button>
            ))}
          </div>

          {entries.length > 0 && (
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Dein Stimmungsverlauf</h3>
              <div className="h-[300px]">
                <Line data={chartData} options={chartOptions} />
              </div>
            </div>
          )}

          {showCommentModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl p-8 max-w-md w-full">
                <h3 className="text-xl font-semibold mb-4">Wie geht es dir heute?</h3>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Teile deine Gedanken..."
                  className="w-full h-32 p-4 border rounded-lg mb-4 focus:ring-2 focus:ring-primary-500"
                />
                <div className="flex justify-end gap-4">
                  <button
                    onClick={() => setShowCommentModal(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Abbrechen
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                  >
                    Speichern
                  </button>
                </div>
              </div>
            </div>
          )}

          {showSuccess && (
            <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-lg 
              shadow-lg flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Super! Dein Stimmungs-Check-In ist abgeschlossen.
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <Calendar className="h-8 w-8 text-primary-600 mb-4" />
              <h4 className="font-semibold mb-2">Tägliches Tracking</h4>
              <p className="text-gray-600 text-sm">
                Erfasse täglich deine Stimmung und beobachte deine Entwicklung.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <TrendingUp className="h-8 w-8 text-primary-600 mb-4" />
              <h4 className="font-semibold mb-2">Erkenne Muster</h4>
              <p className="text-gray-600 text-sm">
                Verstehe, was deine Stimmung beeinflusst.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <MessageCircle className="h-8 w-8 text-primary-600 mb-4" />
              <h4 className="font-semibold mb-2">Reflektiere</h4>
              <p className="text-gray-600 text-sm">
                Notiere deine Gedanken und gewinne neue Erkenntnisse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}