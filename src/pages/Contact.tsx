import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, Info, Activity, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', subject: 'General Inquiry', message: '' });
      
      setTimeout(() => setIsSent(false), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: <Mail size={20} />,
      label: t('contact.sidebar.labels.dispatch'),
      value: "hello@origin-coffee.tech",
      sub: t('contact.sidebar.subs.response')
    },
    {
      icon: <Phone size={20} />,
      label: t('contact.sidebar.labels.signal'),
      value: "+44 20 7123 4567",
      sub: t('contact.sidebar.subs.hours')
    },
    {
      icon: <MapPin size={20} />,
      label: t('contact.sidebar.labels.hub'),
      value: "72 Shoreditch High St, London",
      sub: t('contact.sidebar.subs.center')
    }
  ];

  return (
    <div className="pt-[160px] pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section 1: Header */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[12px] uppercase tracking-[0.6em] text-[#F3E5D8]/70 mb-8 block font-bold">{t('contact.badge')}</span>
            <h1 className="text-[54px] md:text-[110px] font-medium leading-[0.9] tracking-tighter uppercase mb-12">
              {t('contact.title')}
            </h1>
            <p className="text-[#F3E5D8]/80 text-xl leading-relaxed max-w-2xl">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          {/* Section 2: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white/5 border border-white/5 p-8 md:p-16 relative overflow-hidden">
               {/* Background Laboratory Detail */}
               <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                  <Activity size={240} className="text-[#F3E5D8]" />
               </div>

               <AnimatePresence mode="wait">
                 {isSent ? (
                   <motion.div 
                     key="success"
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.95 }}
                     className="py-24 text-center"
                   >
                      <div className="w-20 h-20 rounded-full border border-[#F3E5D8] flex items-center justify-center mx-auto mb-8 bg-[#F3E5D8]/5">
                         <CheckCircle size={40} className="text-[#F3E5D8]" />
                      </div>
                      <h2 className="text-3xl font-medium uppercase tracking-widest mb-4">{t('contact.success_title')}</h2>
                      <p className="text-[#F3E5D8]/60 max-w-sm mx-auto uppercase text-[11px] tracking-widest leading-loose">
                        {t('contact.success_desc')}
                      </p>
                   </motion.div>
                 ) : (
                   <motion.form 
                     key="form"
                     onSubmit={handleSubmit} 
                     className="space-y-12 relative z-10"
                   >
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                           <label className="text-[10px] uppercase tracking-widest text-[#F3E5D8]/40 font-bold block ml-1">{t('contact.form.label_name')}</label>
                           <input 
                             required
                             type="text" 
                             value={formState.name}
                             onChange={(e) => setFormState({...formState, name: e.target.value})}
                             placeholder={t('contact.form.placeholder_name')}
                             className="w-full bg-transparent border-b border-white/10 py-4 text-[#F3E5D8] focus:border-[#F3E5D8] outline-none transition-colors font-mono placeholder:text-white/10 uppercase"
                           />
                        </div>
                        <div className="space-y-4">
                           <label className="text-[10px] uppercase tracking-widest text-[#F3E5D8]/40 font-bold block ml-1">{t('contact.form.label_email')}</label>
                           <input 
                             required
                             type="email" 
                             value={formState.email}
                             onChange={(e) => setFormState({...formState, email: e.target.value})}
                             placeholder={t('contact.form.placeholder_email')}
                             className="w-full bg-transparent border-b border-white/10 py-4 text-[#F3E5D8] focus:border-[#F3E5D8] outline-none transition-colors font-mono placeholder:text-white/10 uppercase"
                           />
                        </div>
                     </div>

                     <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-widest text-[#F3E5D8]/40 font-bold block ml-1">{t('contact.form.label_subject')}</label>
                        <select 
                          value={formState.subject}
                          onChange={(e) => setFormState({...formState, subject: e.target.value})}
                          className="w-full bg-transparent border-b border-white/10 py-4 text-[#F3E5D8] focus:border-[#F3E5D8] outline-none transition-colors font-mono appearance-none cursor-pointer uppercase"
                        >
                           <option value="General Inquiry" className="bg-[#0B0807]">{t('contact.form.subjects.general')}</option>
                           <option value="Wholesale Protocol" className="bg-[#0B0807]">{t('contact.form.subjects.wholesale')}</option>
                           <option value="Calibration Support" className="bg-[#0B0807]">{t('contact.form.subjects.calibration')}</option>
                           <option value="Sustainability Data" className="bg-[#0B0807]">{t('contact.form.subjects.sustainability')}</option>
                        </select>
                     </div>

                     <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-widest text-[#F3E5D8]/40 font-bold block ml-1">{t('contact.form.label_message')}</label>
                        <textarea 
                          required
                          rows={6}
                          value={formState.message}
                          onChange={(e) => setFormState({...formState, message: e.target.value})}
                          placeholder={t('contact.form.placeholder_message')}
                          className="w-full bg-transparent border-b border-white/10 py-4 text-[#F3E5D8] focus:border-[#F3E5D8] outline-none transition-colors font-mono resize-none placeholder:text-white/10 uppercase leading-loose"
                        />
                     </div>

                     <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="group flex items-center justify-center gap-4 bg-[#F3E5D8] text-[#0B0807] w-full py-8 text-[12px] font-bold uppercase tracking-[0.4em] transition-all hover:tracking-[0.6em] disabled:opacity-50"
                     >
                        {isSubmitting ? t('contact.form.submitting') : <>{t('contact.form.submit')} <Send size={16} /></>}
                     </button>
                   </motion.form>
                 )}
               </AnimatePresence>
            </div>
          </motion.div>

          {/* Section 3: Information Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 space-y-16"
          >
            {/* Global Dispatch info */}
            <div className="space-y-12">
               {contactMethods.map((method, idx) => (
                 <div key={idx} className="group cursor-crosshair">
                   <div className="flex items-center gap-6 mb-4">
                      <div className="text-[#F3E5D8]/30 group-hover:text-[#F3E5D8] transition-colors">
                        {method.icon}
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.4em] text-[#F3E5D8]/40 font-bold">{method.label}</span>
                   </div>
                   <p className="text-xl font-medium tracking-tight mb-2">{method.value}</p>
                   <p className="text-[9px] uppercase tracking-widest text-[#F3E5D8]/30 font-bold">{method.sub}</p>
                 </div>
               ))}
            </div>

            {/* Scientific Compliance Box */}
            <div className="p-8 border border-white/5 bg-white/5 relative overflow-hidden group">
               <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                     <Info size={16} className="text-[#F3E5D8]/60" />
                     <span className="text-[10px] uppercase tracking-[0.4em] text-[#F3E5D8]/70 font-bold">{t('contact.sidebar.security.badge')}</span>
                  </div>
                  <p className="text-xs text-[#F3E5D8]/60 leading-relaxed italic uppercase tracking-widest">
                    {t('contact.sidebar.security.text')}
                  </p>
               </div>
               <div className="absolute bottom-0 right-0 p-4 opacity-[0.02]">
                  <Globe size={120} />
               </div>
            </div>

            {/* Social Signal */}
            <div className="space-y-6 pt-12 border-t border-white/5">
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#F3E5D8]/40 font-bold block">{t('contact.sidebar.labels.social')}</span>
                <div className="flex gap-8">
                   <a href="#" className="hover:text-[#F3E5D8] text-[#F3E5D8]/60 transition-colors uppercase text-[11px] font-bold tracking-widest border-b border-transparent hover:border-[#F3E5D8]">Instagram</a>
                   <a href="#" className="hover:text-[#F3E5D8] text-[#F3E5D8]/60 transition-colors uppercase text-[11px] font-bold tracking-widest border-b border-transparent hover:border-[#F3E5D8]">Twitter</a>
                   <a href="#" className="hover:text-[#F3E5D8] text-[#F3E5D8]/60 transition-colors uppercase text-[11px] font-bold tracking-widest border-b border-transparent hover:border-[#F3E5D8]">LinkedIn</a>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
