import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import LogoPlaceholder from '../imports/LogoPlaceholder';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('首页');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', href: '#home' },
    { name: '剧本解析', href: '#analysis' },
    { name: '角色引擎', href: '#character' },
    { name: '漫剧生成', href: '#production' },
    { name: '高级配置', href: '#assets' },
    { name: '任务中心', href: '#system' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer w-[151px]" onClick={() => window.scrollTo(0,0)}>
             <div className="origin-left transform scale-[0.25] w-[150px] overflow-visible">
               <div className="w-[450px]"> 
                 <LogoPlaceholder />
               </div>
             </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center flex-1">
             <div className="flex items-center gap-[32px]">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveTab(link.name)}
                    className={`px-[16px] py-[8px] rounded-[6.8px] text-[16px] font-medium whitespace-nowrap transition-all duration-200 ${
                      activeTab === link.name 
                        ? 'bg-[rgba(255,255,255,0.1)] text-white' 
                        : 'text-[#d1d5dc] hover:bg-[rgba(255,255,255,0.1)] hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
             </div>
          </div>

          {/* Right Button */}
          <div className="hidden md:block w-[104px] flex justify-end">
             <button 
               className="h-[36px] px-[20px] rounded-[100px] text-[14px] font-medium text-white transition-all duration-200 transform hover:scale-105 active:scale-95 hover:shadow-[0_0_15px_rgba(57,117,254,0.5)] flex items-center justify-center whitespace-nowrap"
               style={{
                 backgroundImage: "linear-gradient(151.726deg, rgb(48, 58, 255) 8.3445%, rgb(76, 164, 255) 75.66%), linear-gradient(90deg, rgb(57, 117, 254) 0%, rgb(57, 117, 254) 100%)",
                 boxShadow: "0px 10px 21px 0px rgba(0,0,0,0.14), 0px 38px 38px 0px rgba(0,0,0,0.12)"
               }}
             >
                立即开始
             </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveTab(link.name);
                    setIsOpen(false);
                  }}
                  className={`block px-4 py-3 rounded-lg text-base font-medium ${
                    activeTab === link.name 
                      ? 'bg-white/10 text-white' 
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                 <button 
                    className="w-full text-white px-6 py-3 rounded-full text-base font-medium active:scale-95 transition-transform"
                    style={{
                      backgroundImage: "linear-gradient(151.726deg, rgb(48, 58, 255) 8.3445%, rgb(76, 164, 255) 75.66%), linear-gradient(90deg, rgb(57, 117, 254) 0%, rgb(57, 117, 254) 100%)"
                    }}
                 >
                    立即开始
                 </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
