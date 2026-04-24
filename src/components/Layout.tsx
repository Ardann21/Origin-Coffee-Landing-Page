import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Instagram, Twitter, Mail, Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = useMemo(() => [
    { name: t('nav.philosophy'), path: "/philosophy" },
    { name: t('nav.catalogue'), path: "/catalogue" },
    { name: t('nav.locations'), path: "/locations" },
    { name: t('nav.contact'), path: "/contact" }
  ], [t]);

  const toggleLanguage = useCallback(() => {
    const nextLang = i18n.language === 'en' ? 'tr' : 'en';
    i18n.changeLanguage(nextLang);
  }, [i18n]);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [pathname]);

  return (
    <div className="relative min-h-screen bg-[#0B0807] overflow-x-hidden font-sans selection:bg-[#F3E5D8]/30 text-[#F3E5D8] scroll-smooth">
      {/* Shared Background Layer */}
      <div className="fixed inset-0 z-0">
        <motion.div style={{ y }} className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-90 scale-115"
          >
            <source src="/Video_Ready_After_Subscription.mp4" type="video/mp4" />
            <source src="https://drive.google.com/uc?id=1Mke-5tFLM4AKd40fHP0mL-uHHK_LLCJ3&export=download" type="video/mp4" />
          </video>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-[#0B0807] z-10" />
        <div className="absolute inset-0 opacity-40 radial-atmosphere z-5" />
      </div>

      {/* Sticky Premium Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-[80px] py-[24px] backdrop-blur-xl bg-black/10 border-b border-white/5">
        <div className="flex items-center gap-[40px] md:gap-[60px]">
          <Link to="/" className="flex items-center justify-center group h-8">
             <span className="text-2xl font-bold tracking-[0.4em] text-[#F3E5D8] uppercase leading-none transition-all group-hover:tracking-[0.6em]">Origin</span>
          </Link>

          <div className="hidden md:flex items-center gap-[40px]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`group relative text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${pathname === link.path ? 'text-[#F3E5D8]' : 'text-[#F3E5D8]/60 hover:text-[#F3E5D8]'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-[#F3E5D8] transition-all duration-300 ${pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 border border-white/5 bg-white/5 hover:border-[#F3E5D8]/30 transition-all rounded-md group"
            aria-label={`Switch language. Current: ${i18n.language.toUpperCase()}`}
          >
            <Globe size={14} className="text-[#F3E5D8]/40 group-hover:text-[#F3E5D8] transition-colors" />
            <span className="text-[10px] uppercase font-bold tracking-widest">{i18n.language.toUpperCase()}</span>
          </button>

          <button 
            className="md:hidden p-2 text-[#F3E5D8]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <Link 
            to="/contact"
            className="hidden sm:block relative group transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="absolute -inset-[1px] bg-gradient-to-r from-[#F3E5D8]/50 to-[#3A261D]/50 rounded-full opacity-40 group-hover:opacity-100 transition-opacity" />
            <div className="relative px-[24px] py-[10px] bg-black/40 rounded-full flex items-center justify-center overflow-hidden border border-[#F3E5D8]/10 backdrop-blur-sm">
               <span className="text-[#F3E5D8] text-[10px] font-bold uppercase tracking-widest">{t('nav.where')}</span>
            </div>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] bg-[#0B0807] flex flex-col pt-32 px-10 md:hidden"
          >
            <div className="flex flex-col gap-10">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`text-4xl font-medium uppercase tracking-tighter ${pathname === link.path ? 'text-[#F3E5D8]' : 'text-[#F3E5D8]/40'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto mb-20">
               <div className="h-[1px] w-full bg-white/5 mb-10" />
               <div className="flex gap-10 text-[#F3E5D8]/40">
                  <Instagram size={20} />
                  <Twitter size={20} />
                  <Mail size={20} />
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <main className="relative z-10">
        {children}

        {/* Footer (Shared) */}
        <footer className="w-full bg-[#0B0807] py-16 px-6 border-t border-white/5 mt-20">
           <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
              <div className="flex flex-col gap-8">
                 <span className="text-3xl font-bold tracking-[0.4em] text-[#F3E5D8] uppercase opacity-40">Origin</span>
                 <p className="text-[#F3E5D8]/50 text-[10px] max-w-sm font-bold leading-relaxed uppercase tracking-widest">
                   {t('footer.description')}
                 </p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-8">
                 <div className="flex gap-12 text-[9px] uppercase tracking-[0.3em] font-bold text-white/60">
                   <a href="#" className="hover:text-[#F3E5D8] transition-colors">{t('footer.privacy')}</a>
                   <a href="#" className="hover:text-[#F3E5D8] transition-colors">{t('footer.sustainability')}</a>
                   <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
                 </div>
                 <span className="text-[9px] uppercase tracking-[0.1em] text-white/40">© 2026 Origin Coffee Roasters. {t('footer.rights')}</span>
              </div>
           </div>
        </footer>
      </main>
    </div>
  );
}
