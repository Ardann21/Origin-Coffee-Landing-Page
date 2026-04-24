import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Filter, Search, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BEANS } from '../data/beans';
import { useTranslation } from 'react-i18next';

export default function Catalogue() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredBeans = BEANS.filter(bean => {
    const translatedName = t(`${bean.tKey}.name`);
    const translatedRegion = t(`${bean.tKey}.region`);
    const matchesSearch = translatedName.toLowerCase().includes(search.toLowerCase()) || 
                          translatedRegion.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || bean.rarity === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="pt-[160px] pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <section className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-2xl">
             <motion.span 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="text-[10px] uppercase tracking-[0.5em] text-[#F3E5D8]/70 mb-8 block font-bold"
             >
                {t('catalogue.badge')}
             </motion.span>
             <motion.h1 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-[48px] md:text-[100px] font-medium leading-[0.9] tracking-tighter uppercase mb-8"
             >
                {t('catalogue.title')}
             </motion.h1>
             <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.3 }}
               className="text-[#F3E5D8]/80 text-lg leading-relaxed max-w-lg"
             >
                {t('catalogue.subtitle')}
             </motion.p>
          </div>

          <div className="w-full md:w-auto space-y-6">
            <div className="relative group">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-[#F3E5D8]/30 group-focus-within:text-[#F3E5D8] transition-colors" size={16} />
                <input 
                  type="text" 
                  placeholder={t('catalogue.search_placeholder')}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-transparent border-b border-white/10 py-3 pl-8 w-full md:w-[320px] focus:outline-none focus:border-[#F3E5D8] transition-all text-[11px] uppercase tracking-widest"
                />
            </div>
            <div className="flex gap-4">
               {['All', 'Standard', 'High', 'Limited', 'Exclusive'].map((filterType) => (
                  <button 
                    key={filterType}
                    onClick={() => setFilter(filterType)}
                    className={`text-[9px] uppercase tracking-widest font-bold px-4 py-2 rounded-full border transition-all ${filter === filterType ? 'bg-[#F3E5D8] text-[#0B0807] border-[#F3E5D8]' : 'border-white/10 text-[#F3E5D8]/40 hover:border-white/30'}`}
                  >
                    {t(`catalogue.filters.${filterType.toLowerCase()}`)}
                  </button>
               ))}
            </div>
          </div>
        </section>

        {/* Grid Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/5 bg-white/5">
          <AnimatePresence mode='popLayout'>
            {filteredBeans.map((bean, idx) => (
              <motion.div
                key={bean.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onMouseEnter={() => setHoveredId(bean.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative group border-r border-b border-white/5 p-12 hover:bg-[#F3E5D8] hover:text-[#0B0807] transition-all duration-700 cursor-pointer overflow-hidden flex flex-col h-full"
              >
                <Link to={`/catalogue/${bean.slug}`} className="absolute inset-0 z-10" />
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center">
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                   </div>
                </div>

                <div className="mb-12 flex justify-between items-start">
                   <div className="space-y-1">
                      <span className="text-[10px] uppercase font-mono opacity-60 group-hover:opacity-100 tracking-widest">{t(`catalogue.filters.${bean.rarity.toLowerCase()}`)} {t('home.collection.series')}</span>
                      <h2 className="text-3xl font-medium tracking-tight uppercase leading-tight">{t(`${bean.tKey}.name`)}</h2>
                   </div>
                </div>

                <div className="space-y-6 mb-12 flex-grow">
                   <div className="grid grid-cols-2 gap-4 text-[10px] uppercase tracking-widest font-bold opacity-60 group-hover:opacity-80">
                      <div>
                         <p className="mb-1">{t('catalogue.labels.origin')}</p>
                         <p className="text-[#F3E5D8] group-hover:text-black transition-colors">{t(`${bean.tKey}.region`)}</p>
                      </div>
                      <div>
                         <p className="mb-1">{t('catalogue.labels.elevation')}</p>
                         <p className="text-[#F3E5D8] group-hover:text-black transition-colors">{bean.altitude}</p>
                      </div>
                   </div>
                   
                   <div className="pt-6 border-t border-current/10">
                      <p className="text-[11px] mb-4 uppercase tracking-widest opacity-60 group-hover:opacity-80">{t('catalogue.matrix_label')}</p>
                      <div className="flex flex-wrap gap-2">
                         {t(`${bean.tKey}.profile`).split(' • ').map(note => (
                            <span key={note} className="px-3 py-1 border border-current/30 rounded-full text-[9px] uppercase tracking-widest">{note}</span>
                         ))}
                      </div>
                   </div>
                </div>

                <div className="flex justify-between items-end pt-12 border-t border-current/10">
                   <div className="space-y-1">
                      <p className="text-[9px] uppercase tracking-widest opacity-70 group-hover:opacity-100 font-bold">{t('catalogue.intensity_label')}</p>
                      <div className="flex gap-1 pt-2">
                         {[...Array(5)].map((_, i) => (
                            <div key={i} className={`w-1 h-3 ${i < bean.intensity ? 'bg-current shadow-[0_0_8px_currentColor]' : 'bg-current/10'}`} />
                         ))}
                      </div>
                   </div>
                </div>

                {/* Hover Reveal Description */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === bean.id ? 1 : 0 }}
                  className="absolute inset-0 bg-[#F3E5D8] p-12 flex flex-col justify-center gap-8 pointer-events-none"
                >
                   <p className="text-sm font-medium leading-relaxed italic text-black/80">
                     "{t(`${bean.tKey}.description`)}"
                   </p>
                   <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#0B0807]">
                      {t('catalogue.explore_cta')} <ArrowRight size={14} />
                   </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Global Footer Accent */}
        <div className="mt-32 text-center">
            <div className="w-[1px] h-[100px] bg-gradient-to-b from-[#F3E5D8]/30 to-transparent mx-auto mb-12" />
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#F3E5D8]/60 font-bold">{t('catalogue.calibration_complete')}</p>
        </div>
      </div>
    </div>
  );
}
