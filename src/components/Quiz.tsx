import React, { useState } from 'react';
import { Brain, ArrowRight, ArrowLeft } from 'lucide-react';
import QuizResults from './QuizResults';
import UserForm from './UserForm';
import { trackQuizStart, trackQuizComplete } from '../utils/fbPixel';

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    value: number;
  }[];
  dimension: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: "Wie fühlst du dich gerade?",
    dimension: "Emotionale Stabilität",
    options: [
      { text: "Energisch und motiviert", value: 25 },
      { text: "Entspannt und ruhig", value: 18.75 },
      { text: "Etwas gestresst", value: 12.5 },
      { text: "Erschöpft und müde", value: 6.25 }
    ]
  },
  {
    id: 2,
    text: "Wie gut schläfst du derzeit?",
    dimension: "Schlafqualität",
    options: [
      { text: "Ich schlafe gut und fühle mich ausgeruht", value: 25 },
      { text: "Manchmal habe ich Schlafprobleme, aber meistens geht es", value: 18.75 },
      { text: "Ich schlafe unruhig oder wache oft auf", value: 12.5 },
      { text: "Mein Schlaf ist sehr schlecht oder ich habe Schlafstörungen", value: 6.25 }
    ]
  },
  {
    id: 3,
    text: "Wie ist dein Energielevel im Alltag?",
    dimension: "Energielevel",
    options: [
      { text: "Hoch – ich fühle mich voller Energie", value: 25 },
      { text: "Normal – ich fühle mich meist okay", value: 18.75 },
      { text: "Niedrig – ich habe oft wenig Energie", value: 12.5 },
      { text: "Sehr niedrig – ich fühle mich oft erschöpft", value: 6.25 }
    ]
  },
  {
    id: 4,
    text: "Wie oft nimmst du dir Zeit für dich selbst und für Dinge, die dir Freude bereiten?",
    dimension: "Selbstfürsorge",
    options: [
      { text: "Sehr oft – ich nehme mir regelmäßig Zeit für mich", value: 25 },
      { text: "Ab und zu, aber nicht so oft, wie ich es gerne würde", value: 18.75 },
      { text: "Selten, ich komme selten dazu", value: 12.5 },
      { text: "Fast nie, ich habe keine Zeit oder Energie dafür", value: 6.25 }
    ]
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showUserForm, setShowUserForm] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '' });

  React.useEffect(() => {
    if (currentQuestion === 0) {
      trackQuizStart();
    }
  }, []);

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    if (currentQuestion < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const totalScore = newAnswers.reduce((sum, val) => sum + val, 0);
      const averageScore = totalScore / questions.length;
      trackQuizComplete(averageScore);
      setAnswers(newAnswers);
      setShowUserForm(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const handleUserSubmit = (name: string, email: string) => {
    setUserData({ name, email });
    setShowResults(true);
  };

  if (showResults) {
    return <QuizResults answers={answers} questions={questions} userData={userData} />;
  }

  if (showUserForm) {
    return <UserForm onSubmit={handleUserSubmit} />;
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50/90 to-white py-24" id="quiz">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <Brain className="h-12 w-12 text-primary-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Mental Health Check
            </h2>
            <p className="text-gray-600">
              Frage {currentQuestion + 1} von {questions.length}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
              <div 
                className="bg-primary-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-6">
              {questions[currentQuestion].text}
            </h3>
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-primary-500
                    hover:bg-primary-50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span>{option.text}</span>
                    <ArrowRight className="h-5 w-5 text-primary-600 opacity-0 group-hover:opacity-100
                      transform group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {currentQuestion > 0 && (
            <button
              onClick={handlePrevious}
              className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Zurück zur vorherigen Frage
            </button>
          )}
        </div>
      </div>
    </div>
  );
}