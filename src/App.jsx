import React, { useState } from 'react';
import julnarLogo from './assets/vai-logo.png'; 
import { 
  FileDown, 
  Phone, 
  MessageCircle, 
  UserPlus,
  Facebook,
  Instagram
} from 'lucide-react';

const App = () => {
  const [lang, setLang] = useState('en');
  const isRtl = lang === 'ar';

  const userData = {
    fullNameEn: "Shahd Hisham",
    fullNameAr: "شهد هشام",
    brandEn: "VAI Developments",
    roleEn: "Marketing Supervisor", 
    roleAr: "مشرف تسويق",
    phone: "+201006147950",
    whatsapp: "https://wa.me/201006147950",
    facebook: "https://www.facebook.com/share/1DP1yCaEMA/",
    instagram: "https://www.instagram.com/julnarperfume?igsh=MWtsNjlxc3lhdm5seA==",
    cvUrl: "/shahd-hisham-cv.pdf" 
  };

  const downloadVCard = () => {
    const displayName = isRtl ? userData.fullNameAr : userData.fullNameEn;
    const displayRole = isRtl ? userData.roleAr : userData.roleEn;
    
    const vcardContent = `BEGIN:VCARD
VERSION:3.0
FN:${displayName}
ORG:${userData.brandEn}
TITLE:${displayRole}
TEL;TYPE=CELL:${userData.phone}
URL:${userData.facebook}
END:VCARD`;

    const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${displayName}.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const content = {
    en: {
      name: userData.fullNameEn,
      role: `${userData.roleEn} @ ${userData.brandEn}`,
      skills: ["Team Leadership", "Market Analysis", "Campaign Management", "Brand Strategy"],
      cvBtn: "DOWNLOAD CV",
      saveBtn: "Save Contact",
      callBtn: "Direct Call",
      chatBtn: "WhatsApp",
      expertise: "SUPERVISORY FOCUS",
      status: "ONLINE NOW"
    },
    ar: {
      name: userData.fullNameAr,
      role: `${userData.roleAr} @ ${userData.brandEn}`,
      skills: ["قيادة الفريق", "تحليل السوق", "إدارة الحملات", "استراتيجية العلامة التجارية"],
      cvBtn: "تحميل السيرة الذاتية",
      saveBtn: "حفظ جهة الاتصال",
      callBtn: "اتصال مباشر",
      chatBtn: "واتساب",
      expertise: "مجال الإشراف",
      status: "متصل الآن"
    }
  };

  const t = content[lang];

  return (
    <div
      className={`min-h-screen bg-[#0a0c10] text-[#e2e3dc] p-4 md:p-12 transition-all duration-500 ${
        isRtl ? 'font-arabic' : 'font-sans'
      }`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Navbar */}
        <nav className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-2 px-4 py-2 bg-[#161a20] border border-white/10 rounded-full text-[9px] font-bold tracking-widest text-white">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            {t.status}
          </div>
          <button
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="bg-white text-black px-5 py-2 rounded-full font-black text-[10px] uppercase hover:opacity-80 transition-all shadow-md"
          >
            {lang === 'ar' ? 'English' : 'العربية'}
          </button>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Main Profile Card */}
          <div className="md:col-span-8 bg-[#111419] border border-white/5 rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center overflow-hidden">
            <div className="w-32 h-32 bg-[#0a0c10] rounded-2xl flex items-center justify-center overflow-hidden shadow-lg shrink-0 border border-white/10 relative">
              <img
                src={julnarLogo} 
                alt={userData.brandEn}
                className="w-full h-full object-cover scale-110" 
              />
            </div>

            <div className={`text-center ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white uppercase">{t.name}</h1>
              <p className="text-gray-400 font-medium text-base md:text-lg">{t.role}</p>
            </div>
          </div>

          {/* Action Column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <button
              onClick={downloadVCard}
              className="flex items-center justify-center gap-4 p-5 bg-white text-black rounded-[1.8rem] hover:bg-gray-200 transition-all shadow-xl group"
            >
              <UserPlus size={22} />
              <span className="font-bold text-lg">{t.saveBtn}</span>
            </button>

            <a
              href={`tel:${userData.phone}`}
              className="flex items-center justify-center gap-4 p-5 bg-[#161a20] border border-white/5 rounded-[1.8rem] hover:bg-white/5 transition-all text-white"
            >
              <Phone size={18} />
              <span className="font-bold text-base">{t.callBtn}</span>
            </a>

            <div className="grid grid-cols-2 gap-4">
              <a href={userData.facebook} target="_blank" rel="noreferrer" className="flex items-center justify-center p-5 bg-[#161a20] border border-white/5 rounded-[1.8rem] hover:text-[#1877F2] transition-all text-white/70">
                <Facebook size={22} />
              </a>
              <a href={userData.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-center p-5 bg-[#161a20] border border-white/5 rounded-[1.8rem] hover:text-[#E4405F] transition-all text-white/70">
                <Instagram size={22} />
              </a>
            </div>
          </div>

          {/* Skills Section */}
          <div className="md:col-span-4 bg-[#111419] border border-white/5 rounded-[2.5rem] p-8">
            <h3 className="text-[9px] font-black text-gray-500 uppercase mb-6 tracking-[0.4em]">{t.expertise}</h3>
            <div className="flex flex-col gap-2.5">
              {t.skills.map((skill) => (
                <div key={skill} className="px-5 py-3.5 bg-[#161a20] border border-white/5 rounded-xl text-[11px] font-semibold text-gray-300">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* CV Section */}
          <a 
            href={userData.cvUrl} 
            download 
            className="md:col-span-5 bg-white rounded-[2.5rem] flex flex-col items-center justify-center p-10 hover:bg-gray-200 transition-all cursor-pointer group shadow-2xl"
          >
             <FileDown size={36} className="text-black mb-3 group-hover:translate-y-1 transition-transform" />
             <span className="text-black font-black text-xl tracking-tighter uppercase">{t.cvBtn}</span>
          </a>

          {/* New WhatsApp Button Design */}
          <a 
            href={userData.whatsapp} 
            target="_blank" 
            rel="noreferrer" 
            className="md:col-span-3 bg-[#25D366] rounded-[2.5rem] flex flex-col items-center justify-center p-8 hover:scale-[1.02] transition-all group shadow-lg"
          >
            <MessageCircle size={32} className="text-white mb-2" fill="white" />
            <span className="text-white font-bold text-[10px] uppercase tracking-[0.2em]">{t.chatBtn}</span>
          </a>

        </div>

        {/* Footer */}
        <footer className="mt-16 pb-8 text-center opacity-40 text-[8px] font-bold tracking-[0.6em] uppercase text-white">
          TechNova © 2026
        </footer>
      </div>

      {/* Global Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&family=Inter:wght@400;700;900&display=swap');
        .font-arabic { font-family: 'Cairo', sans-serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        body { background-color: #0a0c10; margin: 0; }
        ::selection { background: #ffffff; color: black; }
      `}} />
    </div>
  );
};

export default App;
