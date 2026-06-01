import React from 'react';
import { Shield, Zap, Heart, Clock } from 'lucide-react';
import {whyChooseUs } from '../data';

const WhyChooseUs = () => {

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-down" data-aos-anchor-placement="top-bottom" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Why Choose Heboc Events?
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We're more than just an event company - we're your partners in creating magic
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <div key={index} data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="group text-center p-8 bg-slate-800/30 rounded-3xl backdrop-blur-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                <item.icon className="w-8 h-8 text-purple-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">{item.title}</h3>
              <p className="text-slate-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
