import React from 'react';
import { motion } from 'motion/react';
import { Quote, ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Philosophy() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-32">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2 }}
           className="max-w-4xl"
        >
          <span className="text-[10px] uppercase tracking-[0.6em] text-[#F3E5D8]/70 mb-10 block">{t('philosophy_page.badge')}</span>
          <h1 className="text-[54px] md:text-[120px] font-medium leading-none tracking-tighter uppercase mb-12">
            {t('philosophy_page.title')}
          </h1>
          <p className="text-[#F3E5D8]/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {t('philosophy_page.subtitle')}
          </p>
        </motion.div>
      </section>

      {/* Narrative Section 1: The Soil */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 md:py-64">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[16/9] bg-neutral-900 overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1524350303350-988363765955?auto=format&fit=crop&q=80&w=1200" 
                alt="Coffee plantation" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale brightness-40 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
              />
              <div className="absolute top-8 left-8">
                 <span className="text-[9px] font-mono uppercase bg-[#F3E5D8] text-[#0B0807] px-2 py-1">{t('philosophy_page.chapter1')}</span>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center">
             <h2 className="text-4xl md:text-6xl font-medium uppercase mb-8 tracking-tight">{t('philosophy_page.terroir.title')}</h2>
             <p className="text-[#F3E5D8]/60 text-lg leading-relaxed mb-8">
                {t('philosophy_page.terroir.subtitle')}
             </p>
             <div className="border-l border-[#F3E5D8]/20 pl-8">
                <Quote className="text-[#F3E5D8]/40 mb-4" size={24} />
                <p className="italic text-xl text-[#F3E5D8]/80 leading-relaxed">
                   "{t('philosophy_page.terroir.quote')}"
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Narrative Section 2: The Laboratory */}
      <section className="w-full bg-[#F3E5D8] py-32 md:py-64 text-[#0B0807]">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-24">
               <span className="text-[10px] uppercase tracking-[0.5em] opacity-40 mb-10 block font-bold">{t('philosophy_page.science.badge')}</span>
               <h2 className="text-[48px] md:text-[90px] font-medium tracking-tighter uppercase leading-none mb-12">{t('philosophy_page.science.title')}</h2>
               <p className="text-lg md:text-xl opacity-70 leading-relaxed">
                  {t('philosophy_page.science.subtitle')}
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { title: t('philosophy_page.science.items.control.title'), desc: t('philosophy_page.science.items.control.desc') },
                 { title: t('philosophy_page.science.items.analysis.title'), desc: t('philosophy_page.science.items.analysis.desc') },
                 { title: t('philosophy_page.science.items.extraction.title'), desc: t('philosophy_page.science.items.extraction.desc') }
               ].map((item, idx) => (
                 <div key={idx} className="border-t border-black/10 pt-8">
                    <span className="text-4xl font-light mb-6 block">0{idx + 1}</span>
                    <h3 className="text-2xl font-bold uppercase mb-4">{item.title}</h3>
                    <p className="opacity-60 leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Narrative Section 3: The Direct Link */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 md:py-64">
        <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-24 items-center">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <img 
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=1000" 
                alt="Direct trade" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale brightness-50"
              />
              <div className="absolute inset-0 border-[1px] border-[#F3E5D8]/10 m-6" />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
             <span className="text-[10px] uppercase tracking-[0.6em] text-[#F3E5D8]/40 mb-10 block font-bold">{t('philosophy_page.human_link.badge')}</span>
             <h2 className="text-[42px] md:text-[72px] font-medium leading-[0.9] tracking-tighter uppercase mb-12">{t('philosophy_page.human_link.title')}</h2>
             <p className="text-[#F3E5D8]/60 text-lg leading-relaxed mb-10 max-w-md">
                {t('philosophy_page.human_link.subtitle')}
             </p>
             <button className="text-[11px] uppercase tracking-[.3em] font-bold border-b border-[#F3E5D8]/30 pb-2 hover:border-[#F3E5D8] transition-colors">
                {t('philosophy_page.human_link.cta')}
             </button>
          </div>
        </div>
      </section>

      {/* Narrative Section 4: The Cupping Table */}
      <section className="w-full py-32 md:py-64 bg-black/40 overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
               <h2 className="text-3xl md:text-5xl font-medium uppercase tracking-tight mb-8">{t('philosophy_page.cupping.title')}</h2>
               <p className="text-[#F3E5D8]/50 text-base leading-relaxed">
                  {t('philosophy_page.cupping.subtitle')}
               </p>
            </div>
            <div className="md:col-span-8">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=500",
                    "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=500",
                    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=500",
                    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=500"
                  ].map((src, i) => (
                    <motion.img 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      src={src} 
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-crosshair scale-100 hover:scale-105"
                    />
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Narrative Section 5: The Shared Pulse */}
      <section className="w-full py-32 md:py-64 px-6 text-center">
          <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="max-w-5xl mx-auto"
         >
            <span className="text-[10px] uppercase tracking-[1em] text-[#F3E5D8]/40 mb-14 block font-bold">{t('philosophy_page.pulse.badge')}</span>
            <h2 className="text-[50px] md:text-[110px] font-medium tracking-tighter uppercase leading-[0.8] mb-16">
               {t('philosophy_page.pulse.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left border-t border-[#F3E5D8]/10 pt-16">
               <div>
                  <h3 className="text-xl font-bold uppercase mb-6 tracking-widest">{t('philosophy_page.pulse.items.intent.title')}</h3>
                  <p className="text-[#F3E5D8]/60 leading-relaxed">
                     {t('philosophy_page.pulse.items.intent.desc')}
                  </p>
               </div>
               <div>
                  <h3 className="text-xl font-bold uppercase mb-6 tracking-widest">{t('philosophy_page.pulse.items.community.title')}</h3>
                  <p className="text-[#F3E5D8]/60 leading-relaxed">
                     {t('philosophy_page.pulse.items.community.desc')}
                  </p>
               </div>
            </div>
         </motion.div>
      </section>

      {/* Manifesto Call to Action */}
      <section className="w-full py-32 md:py-64 px-6 text-center">
         <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="max-w-4xl mx-auto"
         >
            <h2 className="text-[40px] md:text-[80px] font-medium tracking-tighter uppercase leading-[0.9] mb-12">
               {t('philosophy_page.manifesto.title')}
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
               <div className="w-[1px] h-20 bg-[#F3E5D8]/20 hidden md:block" />
               <p className="text-[#F3E5D8]/60 text-lg uppercase tracking-widest max-w-xs">
                  {t('philosophy_page.manifesto.subtitle')}
               </p>
            </div>
         </motion.div>
      </section>
    </div>
  );
}
