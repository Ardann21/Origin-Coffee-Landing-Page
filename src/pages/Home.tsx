import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BEANS } from '../data/beans';
import { useTranslation } from 'react-i18next';
import ScrollFrames from '../components/ScrollFrames';

export default function Home() {
  const { t } = useTranslation();
  const philosophyRef = useRef(null);

  const { scrollYProgress: philosophyScroll } = useScroll({
    target: philosophyRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(philosophyScroll, [0, 1], ["-10%", "10%"]);

  return (
    <div className="flex flex-col items-center">
      {/* Section 1: Hero */}
      <section id="hero" className="flex flex-col items-center text-center px-6 min-h-screen justify-center relative w-full pt-32 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center w-full"
        >
          <div className="flex items-center gap-[12px] px-[20px] py-[8px] bg-[#F3E5D8]/5 border border-[#F3E5D8]/10 rounded-full mb-[48px] backdrop-blur-xl">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F3E5D8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-full w-full bg-[#F3E5D8]"></span>
            </span>
            <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#F3E5D8]">
              {t('home.hero.badge')}
            </p>
          </div>

          <h1 className="text-[48px] md:text-[100px] font-medium leading-[0.95] max-w-[1200px] text-gradient mb-[32px] tracking-tighter uppercase">
            {t('home.hero.title')}
          </h1>

          <p className="text-[18px] md:text-[22px] font-normal text-[#F3E5D8]/90 max-w-[720px] leading-relaxed mb-12">
            {t('home.hero.subtitle1')} <br />{t('home.hero.subtitle2')}
          </p>

          <div className="flex flex-col md:flex-row gap-6">
            <Link to="/catalogue" className="relative group transition-all duration-300 hover:scale-105">
              <div className="absolute -inset-[1px] bg-[#F3E5D8] rounded-full shadow-[0_0_30px_rgba(243,229,216,0.2)]" />
              <div className="relative px-[48px] py-[18px] bg-[#F3E5D8] rounded-full flex items-center justify-center overflow-hidden">
                <span className="text-[#0B0807] text-[12px] font-bold uppercase tracking-[0.2em]">{t('home.hero.cta_explore')}</span>
              </div>
            </Link>
            <Link to="/philosophy" className="px-[48px] py-[18px] text-[#F3E5D8] text-[12px] font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-all text-center">
              {t('home.hero.cta_guide')}
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Philosophy Preview - Sticky Container */}
      <section ref={philosophyRef} className="w-full relative h-[180vh]">
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="mt-12 lg:mt-0"
            >
              <div className="w-12 h-1 bg-[#F3E5D8] mb-6 md:mb-8" />
              <h2 className="text-[32px] md:text-[64px] font-medium leading-[1] mb-4 md:mb-6 tracking-tight uppercase">
                {t('home.philosophy.title')}
              </h2>
              <div className="space-y-4 text-[#F3E5D8]/80 text-base md:text-lg leading-relaxed max-w-lg">
                <p>{t('home.philosophy.subtitle')}</p>
                <p className="italic">"{t('home.philosophy.quote')}"</p>
              </div>
            </motion.div>

            <div className="relative aspect-square flex items-center justify-center mb-12 lg:mb-0">
              {/* Background Atmosphere */}
              <div className="absolute inset-0 bg-[#F3E5D8]/5 rounded-full blur-3xl" />

              <div id="scrolly-container" className="w-3/5 h-3/5 relative z-10 mx-auto">
                <ScrollFrames containerRef={philosophyRef} />
              </div>

              {/* Scale Marker */}
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end z-20 pointer-events-none">
                <span className="text-[7px] md:text-[8px] uppercase tracking-widest text-[#F3E5D8]/40 whitespace-nowrap mb-1">
                  {t('home.philosophy.scan_scale')}
                </span>
                <motion.span
                  style={{ opacity: useTransform(philosophyScroll, [0, 0.1, 1], [0.2, 1, 0.5]) }}
                  className="text-[10px] md:text-[12px] font-mono tabular-nums text-[#F3E5D8]/60"
                >
                  1:1.{(Math.sin(philosophyScroll.get() * 10) * 100).toFixed(0).padStart(3, '0')}
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: The Origin Map */}
      <section className="w-full pb-32 pt-16 md:pb-64 md:pt-32 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="order-2 md:order-1">
            <div className="relative aspect-square md:aspect-[4/3] bg-neutral-900 overflow-hidden border border-white/5 opacity-80 transition-opacity duration-1000">
              <img
                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1000"
                alt="World map"
                width="1000"
                height="750"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale mix-blend-luminosity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-12">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <div className="w-2 h-2 bg-[#F3E5D8] rounded-full animate-pulse" />
                      <div className="h-12 w-[1px] bg-gradient-to-b from-[#F3E5D8] to-transparent" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#F3E5D8]/60 mb-8 block font-bold">{t('home.traceability.badge')}</span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter uppercase leading-tight mb-8">{t('home.traceability.title')}</h2>
            <p className="text-[#F3E5D8]/80 text-lg leading-relaxed mb-10">
              {t('home.traceability.description')}
            </p>
            <div className="space-y-4">
              {[t('home.traceability.items.partnership'), t('home.traceability.items.integrity'), t('home.traceability.items.transit')].map((item) => (
                <div key={item} className="flex items-center gap-4 text-[11px] uppercase tracking-widest font-bold text-[#F3E5D8]/80">
                  <div className="w-8 h-[1px] bg-[#F3E5D8]/30" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Collection */}
      <section id="catalogue" className="w-full bg-[#0B0807]/80 py-[160px] border-y border-white/5 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div className="max-w-xl">
              <span className="text-[10px] uppercase tracking-[0.5em] text-[#F3E5D8]/70 mb-8 block font-bold">{t('home.collection.badge')}</span>
              <h2 className="text-[40px] md:text-[72px] font-medium tracking-tighter uppercase leading-none">{t('home.collection.title')}</h2>
            </div>
            <Link to="/catalogue" className="flex items-center gap-4 text-[12px] uppercase tracking-[0.2em] font-bold group">
              {t('home.collection.cta_catalogue')} <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5 bg-white/5 overflow-hidden">
            {BEANS.slice(0, 3).map((bean, idx) => (
              <Link to={`/catalogue/${bean.slug}`} key={idx} className="group p-12 border-r last:border-r-0 border-white/5 hover:bg-[#F3E5D8] hover:text-[#0B0807] transition-all duration-700 cursor-pointer">
                <span className="text-[10px] mb-8 block opacity-70 uppercase font-mono group-hover:opacity-100 transition-opacity">{t(`catalogue.filters.${bean.rarity.toLowerCase()}`)} {t('home.collection.series')}</span>
                <h3 className="text-2xl font-medium uppercase mb-4 group-hover:tracking-wider transition-all">{t(`${bean.tKey}.name`)}</h3>
                <p className="text-[11px] uppercase tracking-widest opacity-50 group-hover:opacity-80 mb-12">{t(`${bean.tKey}.profile`)}</p>
                <div className="flex justify-between items-center pt-8 border-t border-current/10">
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-70 group-hover:opacity-100">{t('home.collection.cta_explore_detail')}</span>
                  <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: The Ritual */}
      <section className="w-full py-32 md:py-64 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-20">
          <div className="md:col-span-8 relative">
            <div className="absolute -top-12 -left-12 text-[140px] font-black opacity-[0.03] pointer-events-none uppercase tracking-tighter">{t('home.ritual.bg_text')}</div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative aspect-video md:aspect-[16/7] bg-neutral-900 border border-white/5 overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1544787210-2213d84ad96b?auto=format&fit=crop&q=80&w=1200"
                alt="Brewing method"
                width="1200"
                height="525"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="md:col-span-4 flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#F3E5D8]/40 mb-8 block font-bold">{t('home.ritual.badge')}</span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight uppercase leading-none mb-10">{t('home.ritual.title')}</h2>
            <p className="text-[#F3E5D8]/60 leading-relaxed mb-12">
              {t('home.ritual.description')}
            </p>
            <div className="flex gap-16">
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-light">94°C</span>
                <span className="text-[9px] uppercase tracking-widest opacity-40">{t('home.ritual.temp')}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-light">18g</span>
                <span className="text-[9px] uppercase tracking-widest opacity-40">{t('home.ritual.dose')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: The Journal Excerpt */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 md:py-64 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-medium uppercase tracking-[0.2em] mb-4">{t('home.journal.title')}</h2>
            <p className="text-[11px] uppercase tracking-widest text-[#F3E5D8]/30 font-bold leading-relaxed">
              {t('home.journal.subtitle')}
            </p>
          </div>
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-12">
            {(t('home.journal.posts', { returnObjects: true }) as any[]).map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <span className="text-[10px] font-mono opacity-30 mb-6 block font-bold">{post.date}</span>
                <h3 className="text-xl font-medium uppercase mb-6 group-hover:text-[#F3E5D8]/50 transition-colors">{post.title}</h3>
                <p className="text-[#F3E5D8]/60 text-sm leading-relaxed mb-8">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold group-hover:gap-6 transition-all">
                  {t('home.journal.cta_read')} <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atmospheric Bridge Section */}
      <section className="w-full relative min-h-[70vh] flex items-center justify-center overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 grayscale brightness-[0.2]">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1600"
            alt="Atmosphere"
            width="1600"
            height="900"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <span className="text-[9px] uppercase tracking-[0.8em] text-[#F3E5D8]/40 mb-12 block">{t('home.bridge.badge')}</span>
            <h2 className="text-3xl md:text-5xl font-light italic leading-tight text-[#F3E5D8]/80">
              {t('home.bridge.quote')}
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Roastery Reserve */}
      <section className="w-full px-6 py-20 mb-32">
        <div className="max-w-7xl mx-auto bg-[#F3E5D8]/5 border border-[#F3E5D8]/10 p-12 md:p-32 rounded-sm text-center relative overflow-hidden backdrop-blur-xl">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#F3E5D8]/5 rounded-full blur-3xl" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className="text-4xl md:text-7xl font-medium tracking-tighter uppercase mb-6 leading-none">{t('home.reserve.title')}</h2>
            <p className="text-[#F3E5D8]/60 text-lg md:text-xl max-w-xl mx-auto mb-16 italic">
              {t('home.reserve.subtitle')}
            </p>

            <div className="max-w-md mx-auto relative group">
              <input
                type="email"
                placeholder={t('home.reserve.placeholder')}
                className="w-full bg-transparent border-b border-[#F3E5D8]/20 py-4 text-center focus:outline-none focus:border-[#F3E5D8] transition-colors uppercase tracking-widest text-xs"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:translate-x-2 transition-transform">
                <ArrowRight size={20} className="text-[#F3E5D8]" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>

  );
}
