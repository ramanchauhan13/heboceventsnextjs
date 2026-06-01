'use client'
import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data'; // Assuming you have a testimonials data file

const ClientTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-down" data-aos-anchor-placement="top-bottom" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl lg:p-12 p-8 backdrop-blur-xl border border-slate-700/50">
            <div className="flex items-center gap-1 justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <blockquote className="text-2xl md:text-3xl text-center font-light text-white mb-8 leading-relaxed">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              {/* <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover"
              /> */}
              <div className="text-center">
                <div className="font-bold text-white text-lg">{testimonials[currentTestimonial].name}</div>
                <div className="text-purple-400">{testimonials[currentTestimonial].role}</div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-purple-400' : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
