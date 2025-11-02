import React, { useState } from 'react';

const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Workshops', href: '/workshops' },
    { name: 'Team', href: '/team' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Sponsors', href: '/sponsors' },
    { name: 'Contact', href: '/contact' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Tournament', href: '/tournament' }
  ];

  return (
    <>
      <nav className="xl:hidden relative z-50">
        <div className="fixed top-6 right-6 z-60">
          {/* Simple Menu Button with Blur Effect */}
          <button
            onClick={toggleMenu}
            className="group relative w-14 h-14 bg-gray-800/80 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400/50"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            
            {/* Simple Hamburger Icon */}
            <div className="relative flex flex-col items-center justify-center w-full h-full">
              <span 
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1.5'
                }`}
              />
              <span 
                className={`block w-6 h-0.5 bg-white transition-all duration-200 ease-in-out ${
                  isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}
              />
              <span 
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1.5'
                }`}
              />
            </div>
          </button>

          {/* Floating Menu Panel with Enhanced Animations */}
          <div className={`absolute top-20 right-0 transition-all duration-500 ease-out ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0 scale-100 rotate-0' 
              : 'opacity-0 -translate-y-4 scale-75 rotate-3 pointer-events-none'
          }`}>
            <div className="relative bg-gray-900/95 backdrop-blur-2xl border border-gray-600/40 rounded-2xl shadow-2xl w-72 max-h-[500px] overflow-hidden parent-container">
              
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/8 via-purple-500/8 to-pink-500/8 animate-gradient-shift"></div>
              
              {/* Header with Animation */}
              <div className={`p-4 border-b border-gray-700/50 text-center transition-all duration-700 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
              }`}>
                <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-text-shimmer">
                  Navigation
                </h3>
              </div>

              {/* Scrollable Menu Items Container */}
              <div className="relative">
                {/* Scroll Indicator Top */}
                <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-gray-900/50 to-transparent z-10 pointer-events-none"></div>
                
                {/* Menu Items with Custom Scrollbar */}
                <div className="p-3 space-y-2 max-h-80 overflow-y-auto custom-scrollbar">
                  {menuItems.map((item, index) => (
                    <div
                      key={item.name}
                      className={`menu-item-parent transition-all duration-300 ${
                        isMenuOpen ? 'animate-slide-in-stagger' : ''
                      }`}
                      style={{
                        animationDelay: `${index * 60}ms`
                      }}
                    >
                      <a
                        href={item.href}
                        className="menu-item-child relative flex items-center justify-center px-5 py-3 text-gray-300 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden group/item hover:shadow-lg transform hover:-translate-y-1 border border-transparent hover:border-gray-600/30"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {/* Animated background layers */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover/item:from-cyan-500/20 group-hover/item:via-purple-500/20 group-hover/item:to-pink-500/20 transition-all duration-500 rounded-xl"></div>
                        
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/80 via-purple-500/80 to-pink-500/80 translate-x-[-110%] group-hover/item:translate-x-0 transition-transform duration-500 ease-out rounded-xl"></div>
                        
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl"></div>
                        
                        {/* Menu item text with center alignment */}
                        <span className="relative z-10 group-hover/item:text-white transition-all duration-300 group-hover/item:font-semibold group-hover/item:scale-105 text-center w-full">
                          {item.name}
                        </span>
                        
                        {/* Hover indicator */}
                        <div className="absolute right-3 opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform scale-0 group-hover/item:scale-100">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-lg"></div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
                
                {/* Scroll Indicator Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-gray-900/50 to-transparent z-10 pointer-events-none"></div>
              </div>

              {/* Footer with pulse animation */}
              <div className={`p-3 border-t border-gray-700/50 text-center transition-all duration-700 delay-300 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}>
                <div className="flex items-center justify-center space-x-1">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce-delay-1"></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce-delay-2"></div>
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce-delay-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Backdrop */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 transition-all duration-500 animate-fade-in"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </nav>

      {/* Enhanced Custom CSS for animations */}
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(99, 102, 241, 0.5) rgba(0, 0, 0, 0.1);
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #8b5cf6, #ec4899);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #7c3aed, #db2777);
          transform: scale(1.1);
        }

        @keyframes slide-in-stagger {
          0% {
            opacity: 0;
            transform: translateX(-30px) translateY(-10px) scale(0.9) rotateY(-10deg);
          }
          50% {
            opacity: 0.7;
            transform: translateX(-10px) translateY(-3px) scale(0.95) rotateY(-3deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0) scale(1) rotateY(0);
          }
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes text-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes fade-in {
          from { 
            opacity: 0;
            backdrop-filter: blur(0px);
          }
          to { 
            opacity: 1;
            backdrop-filter: blur(8px);
          }
        }

        @keyframes bounce-delay-1 {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.7; }
          40% { transform: scale(1.2); opacity: 1; }
        }

        @keyframes bounce-delay-2 {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.7; }
          40% { transform: scale(1.2); opacity: 1; }
        }

        @keyframes bounce-delay-3 {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.7; }
          40% { transform: scale(1.2); opacity: 1; }
        }

        .animate-slide-in-stagger {
          animation: slide-in-stagger 0.8s ease-out forwards;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }

        .animate-text-shimmer {
          background-size: 200% auto;
          animation: text-shimmer 3s linear infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animate-bounce-delay-1 {
          animation: bounce-delay-1 1.4s infinite;
          animation-delay: 0s;
        }

        .animate-bounce-delay-2 {
          animation: bounce-delay-2 1.4s infinite;
          animation-delay: 0.2s;
        }

        .animate-bounce-delay-3 {
          animation: bounce-delay-3 1.4s infinite;
          animation-delay: 0.4s;
        }

        .parent-container:hover .menu-item-child {
          transform: scale(0.98);
        }

        .menu-item-parent:hover .menu-item-child {
          transform: scale(1.02) translateY(-2px);
        }

        .menu-item-child:hover {
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 20px rgba(99, 102, 241, 0.2);
        }
      `}</style>
    </>
  );
};

export default MenuBar;