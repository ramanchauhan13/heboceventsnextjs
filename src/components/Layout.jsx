import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import useMousePosition from '../../hooks/useMousePosition';

const Layout = ({ children }) => {
  const mousePosition = useMousePosition();

  return (
    <>
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-bounce" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
