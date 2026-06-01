import React from 'react';
import { Star } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="relative bg-slate-900/80 backdrop-blur-xl border-t border-slate-700/50 pb-6 pt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
             <div className="h-18 rounded-lg flex items-center justify-center overflow-hidden">
               <img
                 src={logo} 
                 alt="Logo"
                 className="w-full h-full object-contain"
               />
             </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                HEBOC EVENTS
              </span>
            </div>
            <p className="text-slate-400 mb-4">
              Creating extraordinary moments, one event at a time.
            </p>
            {/* <div className="flex space-x-4">
              <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <span className="text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <span className="text-xs">t</span>
              </div>
              <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <span className="text-xs">i</span>
              </div>
            </div> */}
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-purple-400 cursor-pointer transition-colors">Professional Sound</li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">Dynamic Lighting</li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">Creative Decoration</li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">Event Photography</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-purple-400 cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">Our Team</li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">Portfolio</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 flex flex-col text-slate-400">
              <div className='flex gap-2'>
              <a href='tel:+919319428835' className='hover:underline hover:text-white'>+91 9319428835</a>|
              <a href='tel:+919193380604' className='hover:underline hover:text-white'>+91 9193380604</a>
               </div>
              <a href="mailto:hebocofficial@gmail.com" className='hover:underline hover:text-white'>hebocofficial@gmail.com</a>
              <a
                  href="https://maps.app.goo.gl/JNR2H6enwMb6rXaX8?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='hover:underline hover:text-white'
                >
                  Deen Dayal Nagar-II, Moradabad, UP, India
                </a>
            </ul>
          </div>
        </div>

        {/* Copyright + Developer Info */}
        <div className="border-t border-slate-700/50 pt-8 text-center text-slate-400 space-y-2">
          <p>
            © 2025 Heboc Events. All rights reserved. Creating extraordinary moments, one event at a time.
          </p>

         <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl px-6 py-2 shadow-lg">

<p className="text-sm md:text-base flex flex-col lg:flex-row items-center justify-center lg:gap-2 gap-1 text-slate-300 text-center">
  Developed by <span className="text-purple-400 font-semibold">ThinkSync Solutions —</span>
  <a href="mailto:team.thinksyncsolutions@gmail.com" className="text-pink-400 hover:underline">
    team.thinksyncsolutions@gmail.com
  </a>
  <span className="hidden lg:inline text-slate-400">|</span>
  <a href="tel:+918979937257" className="text-pink-400 hover:underline">
    +91 89799 37257
  </a>
</p>


</div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
