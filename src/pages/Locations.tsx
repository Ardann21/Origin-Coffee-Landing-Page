import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Clock, Phone, ArrowRight, Compass, Layers, X, Calendar, Check, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LOCATIONS = [
  {
    id: 'london',
    cityKey: "locations.cities.london",
    roleKey: "locations.data.london.role",
    address: "72 Shoreditch High St, E1 6JJ",
    hours: "08:00 — 18:00",
    phone: "+44 20 7123 4567",
    coordinates: "51.5244° N, 0.0787° W",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000",
    descriptionKey: "locations.data.london.description",
    nodeIdKey: "locations.flagship.node_id",
    equipmentKey: "locations.equipment.london"
  },
  {
    id: 'berlin',
    cityKey: "locations.cities.berlin",
    roleKey: "locations.data.berlin.role",
    address: "Pappelallee 78, 10437 Prenzlauer Berg",
    hours: "09:00 — 17:00",
    phone: "+49 30 8901 2345",
    coordinates: "52.5417° N, 13.4111° E",
    image: "https://images.unsplash.com/photo-1521017432521-f34f73817a5e?auto=format&fit=crop&q=80&w=1000",
    descriptionKey: "locations.data.berlin.description",
    nodeIdKey: "locations.data.berlin.node_id",
    equipmentKey: "locations.equipment.berlin"
  },
  {
    id: 'tokyo',
    cityKey: "locations.cities.tokyo",
    roleKey: "locations.data.tokyo.role",
    nodeIdKey: "locations.data.tokyo.node_id",
    address: "3 Chome-16-1 Shibuya, City, Tokyo",
    hours: "10:00 — 20:00",
    phone: "+81 3 5468 1234",
    coordinates: "35.6618° N, 139.7041° E",
    image: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=1000",
    descriptionKey: "locations.data.tokyo.description",
    equipmentKey: "locations.equipment.tokyo"
  }
];

export default function Locations() {
  const { t } = useTranslation();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingData, setBookingData] = useState({
    date: '',
    tier: 'Sensory',
    attendees: '1'
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsBookingOpen(false);
      setIsSuccess(false);
    }, 2500);
  };

  return (
    <div className="pt-[160px] pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section 1: Hero */}
        <section className="mb-32">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[12px] uppercase tracking-[0.5em] text-[#F3E5D8]/70 mb-8 block font-bold"
          >
            {t('locations.badge')}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[54px] md:text-[110px] font-medium leading-[0.9] tracking-tighter uppercase mb-12"
          >
            {t('locations.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#F3E5D8]/90 text-xl leading-relaxed max-w-2xl"
          >
            {t('locations.subtitle')}
          </motion.p>
        </section>

        {/* Section 2: Flagship Spotlight */}
        <section className="mb-[240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative aspect-[4/5] overflow-hidden group"
             >
                <img 
                  src={LOCATIONS[0].image} 
                  alt={t(LOCATIONS[0].cityKey)} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-90 transition-all duration-1000"
                />
                <div className="absolute inset-0 border border-white/10 m-8" />
                <div className="absolute bottom-16 left-16">
                   <span className="text-[10px] uppercase font-mono tracking-widest text-white/40 mb-2 block">{t('locations.flagship.log')}</span>
                   <p className="text-xl font-bold uppercase tracking-widest text-white">{t(LOCATIONS[0].nodeIdKey || '')}</p>
                </div>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-12"
             >
                <div>
                   <span className="text-[10px] uppercase tracking-[0.8em] text-[#F3E5D8]/60 mb-2 block font-bold">{t('locations.flagship.badge')}</span>
                   <span className="text-[9px] font-mono text-[#F3E5D8]/30 mb-6 block tracking-[0.2em]">{t('locations.flagship.node_id')}</span>
                   <h2 className="text-6xl font-medium tracking-tighter uppercase mb-8">{t(LOCATIONS[0].cityKey)}</h2>
                   <p className="text-lg text-[#F3E5D8]/80 leading-relaxed mb-8">
                     {t(LOCATIONS[0].descriptionKey)}
                   </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12 border-t border-white/5">
                   <div className="flex items-start gap-4">
                      <Compass size={18} className="text-[#F3E5D8]/40 mt-1" />
                      <div className="space-y-1">
                         <span className="text-[9px] uppercase tracking-widest text-[#F3E5D8]/40 font-bold">{t('locations.flagship.coordinates_label')}</span>
                         <p className="text-sm font-mono opacity-90">{LOCATIONS[0].coordinates}</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <Layers size={18} className="text-[#F3E5D8]/40 mt-1" />
                      <div className="space-y-1">
                         <span className="text-[9px] uppercase tracking-widest text-[#F3E5D8]/40 font-bold">{t('locations.flagship.equipment_label')}</span>
                         <p className="text-sm font-mono opacity-90">{t(LOCATIONS[0].equipmentKey)}</p>
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>
        </section>

        {/* Booking Modal Overlay */}
        <AnimatePresence>
          {isBookingOpen && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsBookingOpen(false)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-lg bg-[#0B0807] border border-white/10 p-12 overflow-hidden"
              >
                <button 
                  onClick={() => setIsBookingOpen(false)}
                  className="absolute top-8 right-8 text-[#F3E5D8]/40 hover:text-[#F3E5D8] transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="relative z-10">
                  {isSuccess ? (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 rounded-full border border-[#F3E5D8] flex items-center justify-center mx-auto mb-8">
                         <Check size={40} className="text-[#F3E5D8]" />
                      </div>
                      <h3 className="text-2xl uppercase tracking-widest mb-4">{t('locations.booking.success_title')}</h3>
                      <p className="text-[#F3E5D8]/60 text-sm">{t('locations.booking.success_desc')}</p>
                    </motion.div>
                  ) : (
                    <>
                      <span className="text-[10px] uppercase tracking-[0.5em] text-[#F3E5D8]/40 mb-4 block font-bold">{t('locations.booking.badge')}</span>
                      <h2 className="text-4xl font-medium tracking-tighter uppercase mb-12">{t('locations.booking.title_part1')} <br/><span className="italic font-light">{t('locations.booking.title_part2')}</span></h2>
                      
                      <form onSubmit={handleBookingSubmit} className="space-y-8">
                        <div>
                           <label className="flex items-center gap-3 text-[9px] uppercase tracking-widest text-[#F3E5D8]/40 mb-4 font-bold">
                              <Calendar size={14} /> {t('locations.booking.date_label')}
                           </label>
                           <input 
                             type="date"
                             required
                             value={bookingData.date}
                             onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                             className="w-full bg-white/5 border border-white/10 px-6 py-4 text-[#F3E5D8] focus:outline-none focus:border-[#F3E5D8] transition-colors uppercase text-[11px] tracking-widest"
                           />
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                          <div>
                             <label className="flex items-center gap-3 text-[9px] uppercase tracking-widest text-[#F3E5D8]/40 mb-4 font-bold">
                                <Users size={14} /> {t('locations.booking.attendees_label')}
                             </label>
                             <select 
                               value={bookingData.attendees}
                               onChange={(e) => setBookingData({...bookingData, attendees: e.target.value})}
                               className="w-full bg-white/5 border border-white/10 px-6 py-4 text-[#F3E5D8] focus:outline-none focus:border-[#F3E5D8] transition-colors uppercase text-[11px] tracking-widest"
                             >
                               {[1, 2, 3, 4].map(n => <option key={n} value={n} className="bg-[#0B0807]">{n}</option>)}
                             </select>
                          </div>
                          <div>
                             <label className="flex items-center gap-3 text-[9px] uppercase tracking-widest text-[#F3E5D8]/40 mb-4 font-bold">
                                <Layers size={14} /> {t('locations.booking.tier_label')}
                             </label>
                             <select 
                               value={bookingData.tier}
                               onChange={(e) => setBookingData({...bookingData, tier: e.target.value})}
                               className="w-full bg-white/5 border border-white/10 px-6 py-4 text-[#F3E5D8] focus:outline-none focus:border-[#F3E5D8] transition-colors uppercase text-[11px] tracking-widest"
                             >
                               <option value="Sensory" className="bg-[#0B0807]">{t('locations.booking.tier_sensory')}</option>
                               <option value="Technical" className="bg-[#0B0807]">{t('locations.booking.tier_technical')}</option>
                             </select>
                          </div>
                        </div>

                        <button 
                          type="submit"
                          className="w-full bg-[#F3E5D8] text-[#0B0807] font-bold uppercase tracking-[0.2em] text-[12px] py-6 shadow-[0_0_30px_rgba(243,229,216,0.1)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                        >
                          {t('locations.booking.submit')}
                        </button>
                      </form>
                    </>
                  )}
                </div>

                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        <section className="mb-32">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl">
                 <span className="text-[11px] uppercase tracking-[0.6em] text-[#F3E5D8]/60 mb-6 block font-bold">{t('locations.network.badge')}</span>
                 <h2 className="text-4xl md:text-5xl font-medium tracking-tighter uppercase">{t('locations.network.title')}</h2>
                 <span className="text-[9px] font-mono text-[#F3E5D8]/30 mt-4 block tracking-[0.3em]">{t('locations.network.status')}</span>
              </div>
              <p className="text-[#F3E5D8]/50 text-sm max-w-xs leading-relaxed italic">
                 {t('locations.network.description')}
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
              {LOCATIONS.slice(1).map((loc, idx) => (
                <div 
                  key={idx}
                  className="relative p-12 bg-[#0B0807] group hover:bg-neutral-900 transition-colors duration-700"
                >
                   <div className="flex flex-col h-full gap-12">
                      <div className="flex justify-between items-start">
                         <div className="space-y-2">
                            <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-[#F3E5D8]/40 group-hover:text-[#F3E5D8] transition-colors">{t(loc.roleKey)}</span>
                             {loc.nodeIdKey && (
                               <span className="text-[8px] font-mono text-[#F3E5D8]/20 block">{t(loc.nodeIdKey)}</span>
                             )}
                            <h3 className="text-4xl font-medium uppercase tracking-tight">{t(loc.cityKey)}</h3>
                         </div>
                         <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <MapPin size={16} />
                         </div>
                      </div>

                      <p className="text-[#F3E5D8]/60 text-sm leading-relaxed max-w-xs">
                         {t(loc.descriptionKey)}
                      </p>

                      <div className="mt-auto space-y-4 pt-10 border-t border-white/5">
                         <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-[#F3E5D8]/70">
                            <Clock size={14} className="opacity-40" /> {loc.hours}
                         </div>
                         <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-[#F3E5D8]/70">
                            <MapPin size={14} className="opacity-40" /> {loc.address}
                         </div>
                         <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-[#F3E5D8]/70">
                            <Phone size={14} className="opacity-40" /> {loc.phone}
                         </div>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* Section 4: Operational Values */}
        <section className="mt-[200px] text-center max-w-3xl mx-auto">
            <div className="w-[1px] h-32 bg-gradient-to-b from-[#F3E5D8]/20 to-transparent mx-auto mb-16" />
            <span className="text-[8px] font-mono text-[#F3E5D8]/20 mb-8 block tracking-[0.5em]">{t('locations.values.verifying')}</span>
            <h2 className="text-3xl font-light italic text-[#F3E5D8] mb-12">
               "{t('locations.values.quote')}"
            </h2>
            <div className="flex justify-center gap-[40px]">
               <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl font-mono">100%</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#F3E5D8]/40">{t('locations.values.renewable')}</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl font-mono">±0.1%</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#F3E5D8]/40">{t('locations.values.precision')}</span>
               </div>
            </div>
        </section>
      </div>
    </div>
  );
}
