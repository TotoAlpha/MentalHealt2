import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Lisa, 35",
    text: "Endlich eine Plattform, die mir gezeigt hat, wie es mir wirklich geht.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  },
  {
    name: "Mehmet, 42",
    text: "Das Quiz war der Weckruf, den ich brauchte.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    name: "Sarah, 29",
    text: "Mir hat das Angebot geholfen, meine Gefühle besser zu verstehen.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    name: "Tom, 38",
    text: "Die Statistiken sind erschreckend, aber das Quiz ist ein sanfter Einstieg.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
  },
  {
    name: "Julia, 27",
    text: "Ich fühle mich endlich verstanden und nicht mehr allein.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80"
  }
];

export default function Testimonials() {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Was andere sagen
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-soft
                       hover:shadow-lg transition-all duration-300 hover:scale-[1.02]
                       border border-gray-100"
            >
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <Quote className="h-8 w-8 text-primary-600/30 mb-6 group-hover:text-primary-600 transition-colors" />
                <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-600 font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}