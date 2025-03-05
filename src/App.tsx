import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowLeft, ArrowRight as ArrowIcon, ArrowUp, Heart } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const messageRefs = useRef([]);

  const faqCards = [
    {
      question: "¿Tengo que registrarme para hablar con Clara?",
      answer: "Having an FAQ section is a great way to present information about your training program. Using the question-and-answer format makes it more relatable for users."
    },
    {
      question: "¿Qué tipo de preguntas puedo hacerle?",
      answer: "Having an FAQ section is a great way to present information about your training program. Using the question-and-answer format makes it more relatable for users."
    },
    {
      question: "¿Guarda alguna información sobre mis interacciones?",
      answer: "Having an FAQ section is a great way to present information about your training program. Using the question-and-answer format makes it more relatable for users."
    },
    {
      question: "¿Cómo puedo sacar el máximo provecho?",
      answer: "Having an FAQ section is a great way to present information about your training program. Using the question-and-answer format makes it more relatable for users."
    }
  ];

  const testimonials = [
    {
      title: "MI CV PASÓ DE NORMAL A IMPARABLE",
      description: "Ahora mi CV refleja realmente mi potencial y me abre muchas más puertas.",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "DE ESTUDIANTE A EMPLEADO",
      description: "Clara me ayudó a enfocar mis esfuerzos para encontrar el empleo que quería.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "ENTREVISTAS SIN NERVIOS, TRABAJO CONSEGUIDO",
      description: "Las entrevistas solían ponerme nerviosa, pero Clara me preparó con simulaciones.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Set up Intersection Observer for chat message animations
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Observe all message elements
    messageRefs.current.forEach(ref => {
      if (ref) {
        // Set initial state - hidden and positioned offscreen
        ref.classList.add('opacity-0');
        observer.observe(ref);
      }
    });

    return () => {
      messageRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (faqCards.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (faqCards.length - 2)) % (faqCards.length - 2));
  };

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-amber-200 to-amber-400">
      {/* Header with Logo and Talk Button */}
      <header className="flex justify-between items-center p-8">
        <img 
          src="/upsa-logo-white.png"
          alt="Universidad Logo"
          className="h-16"
        />
        <button className="bg-white rounded-full px-6 py-3 flex items-center gap-2 font-semibold text-black hover:bg-gray-50 transition-colors">
          ¿HABLAMOS?
          <ArrowRight className="w-5 h-5" />
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex justify-between items-center max-w-7xl mx-auto px-8">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold text-navy-900 mb-4">
            Soy <span className="bg-white px-4 py-1 rounded-full">Clara</span>,
            <br />
            <span className="text-5xl">Orientadora</span>
          </h1>
          
          <p className="text-2xl mb-8 text-navy-800">
            de la Unidad de Empleabilidad<br />
            y Prácticas de la UPSA
          </p>

          <div className="space-y-4">
            <button className="bg-white rounded-full px-8 py-4 font-semibold text-black hover:bg-gray-50 transition-colors">
              AVANCEMOS JUNTOS
            </button>
            <p className="text-xl text-navy-800 ml-2">
              Camina al éxito profesional
            </p>
          </div>
        </div>
  

        <div className="relative">
        <div className="absolute top-3 left-0 w-full h-full -z-8">
  <img 
    src="/blob-haikei.png" 
    alt="Background" 
    className="w-full h-full object-cover rounded-3xl opacity-90"
  />
</div>
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-bl-[100px] -z-10" />
          <img 
            src="/clara-profile.png"
            alt="Professional Woman"
            className="relative z-10 w-[660px]"
          />
        </div>
      </section>

      {/* News Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between gap-20">
            <div className="relative w-[400px]">
              <img 
                src="/mobile-mockup.png"
                alt="Mobile App"
                className="w-full"
              />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-3 px-8">
                <div 
                  ref={el => messageRefs.current[0] = el}
                  className="bg-gray-100 rounded-2xl p-4 ml-auto max-w-[80%] transform hover:scale-105 transition-transform duration-300 translate-x-full"
                >
                  <p>Hola Clara! ¿Cómo puedes ayudarme? ❤️</p>
                </div>
                <div 
                  ref={el => messageRefs.current[1] = el}
                  className="bg-gray-100 rounded-2xl p-4 max-w-[80%] transform hover:-translate-x-2 transition-transform duration-300 -translate-x-full"
                >
                  <p>Hagamos que tu CV destaque y busquemos ofertas que encajen contigo!</p>
                </div>
                <div 
                  ref={el => messageRefs.current[2] = el}
                  className="bg-gray-100 rounded-2xl p-4 ml-auto max-w-[80%] transform hover:translate-x-2 transition-transform duration-300 translate-x-full"
                >
                  <p>¿Practicamos para tu próxima entrevista? 🗣️</p>
                </div>
                <div 
                  ref={el => messageRefs.current[3] = el}
                  className="bg-gray-100 rounded-2xl p-4 max-w-[80%] transform hover:-translate-x-2 transition-transform duration-300 -translate-x-full"
                >
                  <p>Elijamos la mejor formación para ti 👨‍🎓</p>
                </div>
                <div 
                  ref={el => messageRefs.current[4] = el}
                  className="bg-gray-100 rounded-2xl p-4 ml-auto max-w-[80%] transform hover:translate-x-2 transition-transform duration-300 translate-x-full"
                >
                  <p>Y cómo puedo empezar a buscar empleo? 🤔</p>
                </div>
                <div 
                  ref={el => messageRefs.current[5] = el}
                  className="bg-gray-100 rounded-2xl p-4 max-w-[80%] transform hover:-translate-x-2 transition-transform duration-300 -translate-x-full"
                >
                  <p>Podemos diseñar un plan de trabajo y conectar con personas de interés</p>
                </div>
                <div 
                  ref={el => messageRefs.current[6] = el}
                  className="bg-gray-100 rounded-2xl p-4 ml-auto max-w-[80%] transform hover:translate-x-2 transition-transform duration-300 translate-x-full"
                >
                  <p>¡Vamos a ello! 💪</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-5xl font-bold text-navy-900 mb-8">
                Futuro<br />
                profesional,<br />
                te acompaño
              </h2>
              <button className="bg-amber-400 rounded-full px-8 py-4 font-semibold text-black hover:bg-amber-300 transition-colors">
                COMIENZA AHORA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-white mb-16">Guía rápida</h2>
          
          <div className="relative">
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-amber-400 rounded-full p-2 hover:bg-amber-300 transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            
            <div className="flex gap-8 overflow-hidden">
              {faqCards.slice(currentSlide, currentSlide + 3).map((card, index) => (
                <div key={index} className="flex-1 bg-amber-400 rounded-3xl p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-navy-900">{card.question}</h3>
                    <div className="bg-white rounded-full p-2">
                      <ArrowIcon className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-navy-900">{card.answer}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-amber-400 rounded-full p-2 hover:bg-amber-300 transition-colors"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-amber-200 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-navy-900 mb-16">Compañeros como tú...</h2>
          
          <div className="grid grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-xl font-bold text-navy-900 mb-4">{testimonial.title}</h3>
                  <p className="text-navy-800 mb-6">{testimonial.description}</p>
                  <button className="bg-navy-900 text-white px-6 py-2 rounded-full hover:bg-navy-800 transition-colors">
                    LEER MÁS
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-center items-center gap-2">
            
            <span className="text-sm">Designed by  ❤️ TalentTools</span>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 rounded-full p-4 transition-all duration-300 ${
          showScrollButton 
            ? 'opacity-100 translate-y-0 bg-amber-400 hover:bg-amber-300' 
            : 'opacity-0 translate-y-16 bg-white hover:bg-gray-50'
        }`}
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* CSS for animation */}
      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateX(0) !important;
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;