import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Info, Activity, Thermometer, Droplets } from 'lucide-react';
import { BEANS } from '../data/beans';
import { useTranslation } from 'react-i18next';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const bean = BEANS.find(b => b.slug === slug);

  useEffect(() => {
    if (!bean) {
      navigate('/catalogue');
    }
    window.scrollTo(0, 0);
  }, [bean, navigate]);

  if (!bean) return null;

  return (
    <div className="pt-32 md:pt-[160px] pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Navigation / Back */}
        <Link 
          to="/catalogue" 
          className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] text-[#F3E5D8]/70 hover:text-[#F3E5D8] transition-colors mb-12 md:mb-16 font-bold group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> {t('product.back_cta')}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start">
          {/* Visual Presentation */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-square md:aspect-[4/5] bg-white/5 border border-white/5 p-8 md:p-12 overflow-hidden group"
          >
             <div className="absolute inset-0 radial-atmosphere opacity-20" />
             
             {/* Abstract Coffee Representation */}
             <div className="relative h-full flex flex-col justify-center items-center">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-[#F3E5D8]/20 flex items-center justify-center p-6 md:p-8"
                >
                   <div className="w-full h-full rounded-full border border-[#F3E5D8]/40 border-dashed animate-spin-slow" />
                </motion.div>
                
                <div className="mt-8 md:mt-12 text-center">
                   <span className="text-[10px] uppercase tracking-[1em] text-[#F3E5D8]/60 block mb-4">{t('product.lab_spec')}</span>
                   <h2 className="text-xl md:text-2xl font-mono opacity-60">#{bean.id.toString().padStart(4, '0')}</h2>
                </div>
             </div>

             {/* Corner Labels - Adjusted for mobile */}
             <div className="absolute top-6 left-6 md:top-12 md:left-12">
                <span className="text-[9px] uppercase tracking-widest text-[#F3E5D8]/60">{t('product.series')}</span>
                <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest">{t(`catalogue.filters.${bean.rarity.toLowerCase()}`)}</p>
             </div>
             <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 text-right">
                <span className="text-[9px] uppercase tracking-widest text-[#F3E5D8]/60">{t('product.arrival')}</span>
                <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest">{t(`${bean.tKey}.harvest`)}</p>
             </div>
          </motion.div>

          {/* Configuration / Info */}
           <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col"
          >
             <div className="mb-10 md:mb-12">
                <span className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-[#F3E5D8]/70 mb-4 block font-bold">{t(`${bean.tKey}.region`)}</span>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tighter uppercase mb-6 md:mb-8 leading-none">
                  {t(`${bean.tKey}.name`)}
                </h1>
                <p className="text-lg md:text-xl text-[#F3E5D8]/90 leading-relaxed max-w-xl">
                  {t(`${bean.tKey}.longDescription`)}
                </p>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
                <div className="space-y-6 md:space-y-8">
                   <div>
                      <div className="flex items-center gap-3 text-[#F3E5D8]/60 mb-2 md:mb-3">
                         <Droplets size={14} />
                         <span className="text-[10px] uppercase font-bold tracking-widest">{t('product.process')}</span>
                      </div>
                      <p className="text-md md:text-lg uppercase tracking-tight">{t(`${bean.tKey}.process`)}</p>
                   </div>
                   <div>
                      <div className="flex items-center gap-3 text-[#F3E5D8]/60 mb-2 md:mb-3">
                         <Activity size={14} />
                         <span className="text-[10px] uppercase font-bold tracking-widest">{t('product.roast_level')}</span>
                      </div>
                      <p className="text-md md:text-lg uppercase tracking-tight">{t(`${bean.tKey}.roastLevel`)}</p>
                   </div>
                </div>
                <div className="space-y-6 md:space-y-8">
                   <div>
                      <div className="flex items-center gap-3 text-[#F3E5D8]/60 mb-2 md:mb-3">
                         <Thermometer size={14} />
                         <span className="text-[10px] uppercase font-bold tracking-widest">{t('product.acidity')}</span>
                      </div>
                      <p className="text-md md:text-lg uppercase tracking-tight">{t(`${bean.tKey}.acidity`)}</p>
                   </div>
                   <div>
                      <div className="flex items-center gap-3 text-[#F3E5D8]/60 mb-2 md:mb-3">
                         <Info size={14} />
                         <span className="text-[10px] uppercase font-bold tracking-widest">{t('product.altitude')}</span>
                      </div>
                      <p className="text-md md:text-lg uppercase tracking-tight">{bean.altitude}</p>
                   </div>
                </div>
             </div>

             {/* Sensory Profile Matrix */}
             <div className="p-6 md:p-8 border border-white/5 bg-white/5 mb-12 md:mb-16">
                <span className="text-[9px] uppercase tracking-[0.4em] text-[#F3E5D8]/30 mb-6 block font-bold">{t('product.flavor_matrix')}</span>
                <div className="flex flex-wrap gap-2 md:gap-4">
                   {t(`${bean.tKey}.profile`).split(' • ').map(note => (
                      <div key={note} className="px-4 py-2 md:px-6 md:py-3 border border-[#F3E5D8]/10 rounded-full text-[10px] md:text-[11px] uppercase tracking-[0.2em] hover:bg-[#F3E5D8] hover:text-[#0B0807] transition-all cursor-crosshair">
                        {note}
                      </div>
                   ))}
                </div>
             </div>

             {/* Informational Accent */}
             <div className="pt-8 md:pt-12 border-t border-white/5">
                <div className="flex flex-col gap-4">
                   <span className="text-[10px] uppercase tracking-[0.5em] text-[#F3E5D8]/50 font-bold">{t('product.calibration_verified')}</span>
                   <p className="text-sm text-[#F3E5D8]/60 leading-relaxed italic">
                     {t('product.calibration_text')}
                   </p>
                </div>
             </div>
          </motion.div>
        </div>

        {/* Technical Specifications Section */}
        <section className="mt-24 md:mt-48 pt-16 md:pt-32 border-t border-white/5">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              <div>
                 <h3 className="text-lg md:text-xl uppercase tracking-tighter mb-4 md:mb-6">{t('product.tech_specs.thermal.title')}</h3>
                 <p className="text-sm text-[#F3E5D8]/40 leading-relaxed">
                   {t('product.tech_specs.thermal.desc')}
                 </p>
              </div>
              <div>
                 <h3 className="text-lg md:text-xl uppercase tracking-tighter mb-4 md:mb-6">{t('product.tech_specs.ethics.title')}</h3>
                 <p className="text-sm text-[#F3E5D8]/40 leading-relaxed">
                   {t('product.tech_specs.ethics.desc')}
                 </p>
              </div>
              <div>
                 <h3 className="text-lg md:text-xl uppercase tracking-tighter mb-4 md:mb-6">{t('product.tech_specs.freshness.title')}</h3>
                 <p className="text-sm text-[#F3E5D8]/40 leading-relaxed">
                   {t('product.tech_specs.freshness.desc')}
                 </p>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}
