
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, CheckCircle, Star, Heart, Users, Zap, Clock, Shield, Gift, Volume2 } from 'lucide-react';
import { services, portfolioItems, testimonials, achievements } from '@/data';

// Import the separate components
const EventsWeSpecialize = dynamic(() => import('@/components/EventsWeSpecialize'));
const ClientTestimonials = dynamic(() => import('@/components/ClientTestimonials'));
const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'));
const AchievementStats = dynamic(() => import('@/components/AchievementStats'));


const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Enhanced Hero Section */}
      <section className="relative lg:min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-6xl mx-auto">
          <div className="mb-2">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm backdrop-blur-xl">
              ✨ India's Premier Event Production Company
            </span>
          </div>
          
          <h1 data-aos="fade-right" className="text-5xl md:text-7xl lg:mt-0 mt-8 font-bold mb-2 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Creating
            </span>
            <br />
            <span className="text-white">Unforgettable</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>
          
          <p data-aos="fade-left" className="text-xl md:text-2xl text-slate-300 mb-5 max-w-4xl mx-auto leading-snug">
            Transform your vision into reality with our services. 
            From intimate celebrations to grand spectacles, we create moments that last a lifetime.
          </p>
          
          {/* Key Features */}
          <div data-aos="fade-left"  className="flex flex-wrap justify-center gap-6 mb-5 text-sm">
            {['Expert Sound & Lighting', 'On-Time Execution', 'Customized Packages','Experienced Vendors', 'Luxurious Venues'].map((feature, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full backdrop-blur-xl border border-slate-700/50">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:mt-0 mt-8 items-center mb-16">
            <Link
              href="/services"
              data-aos="fade-right"
               data-aos-anchor-placement="top-bottom"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <Link 
              href="/portfolio"
              data-aos="fade-left"
               data-aos-anchor-placement="top-bottom"
              className="px-8 py-4 border-2 border-slate-600 rounded-full font-semibold text-lg hover:border-purple-400 hover:text-purple-400 transition-all duration-300 hover:bg-slate-800/50 flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              View Our Work
            </Link>
          </div>
          
         
        </div>
      </section>

      <AchievementStats />

      {/* Featured Services Preview */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div data-aos="fade-down" data-aos-anchor-placement="top-bottom" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Expert Services
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive event solutions designed to exceed your expectations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                data-aos={service.animateStyle}
                data-aos-anchor-placement="top-bottom"
                className="group relative bg-slate-800/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{service.shortDesc}</p>
                <div className="flex items-center text-purple-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Use the separate EventsWeSpecialize component */}
      <EventsWeSpecialize />

      {/* Recent Work Showcase */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div data-aos="fade-down" data-aos-anchor-placement="top-bottom" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Recent Success Stories
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Take a look at some of our most memorable events
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.slice(0, 3).map((item, index) => (
              <Link
                key={item.id}
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                href={`/portfolio/${item.id}`}
                className="group relative bg-slate-800/50 rounded-3xl overflow-hidden backdrop-blur-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105"
              >
                <div className="aspect-video overflow-hidden">
                 <Image
  src={item.image}
  alt={item.title}
  fill
  className="object-cover group-hover:scale-110 transition-transform duration-500"
/>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                      {item.category}
                    </span>
                    <span className="text-slate-400 text-sm">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                  
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-purple-400" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Use the separate ClientTestimonials component */}
      <ClientTestimonials />

      {/* Use the separate WhyChooseUs component */}
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and turn it into an unforgettable reality. 
            Get in touch with our team today for a free consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg hover:scale-105 transition-transform"
            >
              Get Free Quote
            </Link>
            <div
              to="/contact"
              className="px-8 py-4 lg:text-lg border-2 border-white/20 rounded-full font-semibold text-md hover:bg-white/10 transition-all flex items-center gap-2 justify-center"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Call Now: <a href="tel:+919319428835" className='cursor-pointer hover:underline'>+91 9319428835</a>|
              <a href="tel:+919193380604" className='cursor-pointer hover:underline'>+91 9193380604</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
