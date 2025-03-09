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
    
    <div className="min-h-screen bg-gradient-to-br from-[#fee4a9] to-[#f1b435]">
      {/* Header with Logo and Talk Button */}
      <header className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto p-4 md:p-8">
        <img 
          src="/upsa-logo-white.png"
          alt="Universidad Logo"
          className="h-10 md:h-16 header-logo"
        />
        <div className="bg-white rounded-full flex items-center px-6 py-2">
          <span className="text-[#f1b435] font-bold mr-2">¿HABLAMOS?</span>
          <button className="bg-[#f1b435] rounded-full p-2 hover:opacity-90 transition-opacity">
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4 md:px-8 ">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-[72px] md:text-[82px] text-[#202A45] mb-4 font-custom leading-none">
            <span className="inline-flex items-center gap-3">
              Soy <span className="bg-white px-4 py-1 rounded-full">Clara,</span>
            </span>
            <span className="text-[64px] md:text-[72px] block mt-2">tu orientadora</span>
          </h1>
          
          <p className="text-2xl md:text-3xl mb-8 text-[#202A45] font-custom">
            de la Unidad de Empleabilidad<br />
            y Prácticas de la <span className='text font-bold'>UPSA</span>  
          </p>

          <div className="space-y-4">
            <button className="bg-white text-[#202A45] rounded-full px-6 py-3 md:px-8 md:py-4 text-xl md:text-2xl font-semibold hover:opacity-90 transition-opacity font-custom">
              AVANCEMOS JUNTOS
            </button>
            <p className="text-lg md:text-xl text-white ml-2 font-custom sub-heading">
            En tu camino al éxito profesional 
            </p>
          </div>
        </div>
  
        <div className="relative w-full md:w-auto overflow-hidden">
          <div className="absolute inset-0 -z-8">
            <img 
              src="/bg-image.png" 
              alt="Background" 
              className="w-full h-full object-contain rounded-3xl opacity-90 bg-image"
            />
          </div>
          <div className="absolute inset-0 md:w-[800px] md:h-[800px] bg-white rounded-bl-[50px] -z-10" />
          <img 
            src="/clara-profile.png"
            alt="Professional Woman"
            className="relative z-10 w-full  max-w-[400px] md:max-w-[700px] transform scale-x-[-1]"
          />
        </div>
      </section>

      {/* News Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
            <div className="relative w-full max-w-[800px] md:w-[800px]">
              <img 
                src="/mobile-mockup.png"
                alt="Mobile App"
                className="w-full mobile-mockup"
              />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-6 px-6 md:px-8 mobile-content">
                <div 
                  ref={el => messageRefs.current[0] = el}
                  className="bg-gray-100 rounded-2xl p-3 md:p-4 ml-auto max-w-[80%] transform hover:scale-105 transition-transform duration-300 translate-x-full"
                >
                  <p className="text-xs md:text-base">Hola Clara! ¿Cómo puedes ayudarme? ❤️</p>
                </div>
                <div 
                  ref={el => messageRefs.current[1] = el}
                  className="bg-gray-100 rounded-2xl p-3 md:p-4 max-w-[80%] transform hover:-translate-x-2 transition-transform duration-300 -translate-x-full"
                >
                  <p className="text-xs md:text-base">Hagamos que tu CV destaque y busquemos ofertas que encajen contigo!</p>
                </div>
                <div 
                  ref={el => messageRefs.current[2] = el}
                  className="bg-gray-100 rounded-2xl p-3 md:p-4 ml-auto max-w-[80%] transform hover:translate-x-2 transition-transform duration-300 translate-x-full"
                >
                  <p className="text-xs md:text-base">¿Practicamos para tu próxima entrevista? 🗣️</p>
                </div>
                <div 
                  ref={el => messageRefs.current[3] = el}
                  className="bg-gray-100 rounded-2xl p-3 md:p-4 max-w-[80%] transform hover:-translate-x-2 transition-transform duration-300 -translate-x-full"
                >
                  <p className="text-xs md:text-base">Elijamos la mejor formación para ti 👨‍🎓</p>
                </div>
                <div 
                  ref={el => messageRefs.current[4] = el}
                  className="bg-gray-100 rounded-2xl p-3 md:p-4 ml-auto max-w-[80%] transform hover:translate-x-2 transition-transform duration-300 translate-x-full"
                >
                  <p className="text-xs md:text-base">Y cómo puedo empezar a buscar empleo? 🤔</p>
                </div>
                <div 
                  ref={el => messageRefs.current[5] = el}
                  className="bg-gray-100 rounded-2xl p-3 md:p-4 max-w-[80%] transform hover:-translate-x-2 transition-transform duration-300 -translate-x-full"
                >
                  <p className="text-xs md:text-base">Podemos diseñar un plan de trabajo y conectar con personas de interés</p>
                </div>
                <div 
                  ref={el => messageRefs.current[6] = el}
                  className="bg-gray-100 rounded-2xl p-3 md:p-4 ml-auto max-w-[80%] transform hover:translate-x-2 transition-transform duration-300 translate-x-full"
                >
                  <p className="text-xs md:text-base">¡Vamos a ello! 💪</p>
                </div>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-6xl md:text-8xl text-[#202A45] mb-6 md:mb-8">
                Futuro<br />
                profesional,<br />
                te acompaño
              </h2>
            
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#202a45] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-[#F1B435] mb-8 md:mb-16 text-white">Guía rápida</h2>
          
          <div className="relative">
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-amber-400 rounded-full p-2 hover:bg-amber-300 transition-colors z-10"
            >
              <ArrowLeft className="w-4 h-4 md:w-6 md:h-6" />
            </button>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 overflow-hidden">
              {faqCards.slice(currentSlide, currentSlide + (window.innerWidth >= 768 ? 3 : 1)).map((card, index) => (
                <div key={index} className="flex-1 bg-amber-400 rounded-3xl p-6 md:p-8">
                  <div className="flex justify-between items-start mb-4 md:mb-6">
                    <h3 className="text-2xl font-bold text-white font-custom text-blue">{card.question}</h3>
                    <div className="bg-white rounded-full p-1 md:p-2">
                      <ArrowIcon className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-navy-900">{card.answer}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-amber-400 rounded-full p-2 hover:bg-amber-300 transition-colors z-10"
            >
              <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#fee4a9] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-[#202A45] mb-8 md:mb-16">Compañeros como tú...</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.title}
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-bold text-navy-900 mb-3 md:mb-4 test-title">{testimonial.title}</h3>
                  <p className="text-sm md:text-base text-navy-800 mb-4 md:mb-6">{testimonial.description}</p>
                  <button className="bg-navy-900 text-white px-4 py-2 md:px-6 md:py-2 rounded-full text-sm md:text-base hover:bg-navy-800 transition-colors">
                    LEER MÁS
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-center items-center gap-2">
            <span className="text-xs md:text-sm">Designed by  ❤️ TalentTools</span>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 rounded-full p-3 md:p-4 transition-all duration-300 ${
          showScrollButton 
            ? 'opacity-100 translate-y-0 bg-amber-400 hover:bg-amber-300' 
            : 'opacity-0 translate-y-16 bg-white hover:bg-gray-50'
        }`}
      >
        <ArrowUp className="w-4 h-4 md:w-6 md:h-6" />
      </button>

      {/* CSS for animation */}
      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateX(0) !important;
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .bg-gray-100 {
          position: relative;
        }
        
        .bg-gray-100::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 20px;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid #f3f4f6;
        }
        
        .ml-auto::after {
          left: auto;
          right: 20px;
        }
      `}</style>
    </div>
  );
}

export default App;