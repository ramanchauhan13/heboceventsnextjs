import React from 'react';
import { Heart, Users, Gift, Volume2 } from 'lucide-react';
import Link from 'next/link';

const EventsWeSpecialize = () => {
  const eventTypes = [
    { 
      name: "Weddings", 
      icon: Heart, 
      count: "50+", 
      animation: "fade-right",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300",
      description: "From intimate ceremonies to grand celebrations, we create magical wedding experiences that last a lifetime."
    },
    { 
      name: "Corporate Events", 
      icon: Users, 
      count: "150+", 
      animation: "fade-left",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=300",
      description: "Professional corporate events, product launches, conferences, and business celebrations with modern technology."
    },
       { 
      name: "Concerts & Shows", 
      icon: Volume2, 
      animation: "fade-left",
      count: "200+", 
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300",
      description: "Large-scale concerts, festivals, and entertainment events with professional-grade sound and lighting."
    },
    { 
      name: "Parties", 
      icon: Gift, 
      animation: "fade-right",
      count: "100+", 
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=300",
      description: "Memorable birthday celebrations for all ages with personalized themes and creative decorations."
    },
 
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-down" data-aos-anchor-placement="top-bottom" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Events We Specialize In
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we handle it all with expertise and creativity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 px-4 gap-8 mb-12">
          {eventTypes.map((eventType, index) => (
            <div key={index} data-aos="fade-up" className="group relative overflow-hidden rounded-3xl hover:scale-105 transition-transform duration-500">
              <div className="aspect-square relative">
                <img
                  src={eventType.image}
                  alt={eventType.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-2">
                  <eventType.icon className="w-6 h-6 text-purple-400" />
                  <span className="text-purple-400 font-semibold">{eventType.count}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{eventType.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Event Types */}
        <div className="grid md:grid-cols-2 gap-8">
          {eventTypes.map((eventType, index) => (
            <div key={index} data-aos={eventType.animation} data-aos-anchor-placement="top-bottom" className="bg-slate-800/30 rounded-3xl p-8 backdrop-blur-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <eventType.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{eventType.name}</h3>
                  <p className="text-purple-400 font-semibold">{eventType.count} Events Completed</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">{eventType.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl p-8 backdrop-blur-xl border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">Don't See Your Event Type?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              We handle all types of events! From small intimate gatherings to large-scale productions. 
              Contact us to discuss your unique requirements.
            </p>
          
<Link href="/contact">
  <button className="px-8 py-3 cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:scale-105 transition-transform">
    Discuss Your Event
  </button>
</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsWeSpecialize;
    