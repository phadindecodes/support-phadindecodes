import React, { useState, useRef } from 'react';
import {
  AlertTriangle,
  ShieldCheck,
  FileText,
  Search,
  Hash,
  Shield,
  Globe,
  Clock,
  CheckCircle,
  ExternalLink,
  Phone,
  Building2,
  Briefcase,
  Heart,
  Baby,
  HeartPulse,
  Copy,
  Check,
  Facebook,
  Linkedin,
  MessageCircle,
} from 'lucide-react';

const FB_B64 = "aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21lcGhhZGlu";
const LI_B64 = "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3BoYW5pbmRyYWRhaGFsLw==";
const WA_B64 = "aHR0cHM6Ly93YS5tZS85Nzc5ODUyNjU5MzMz";
const SSF_PORTAL_B64 = "aHR0cHM6Ly9zb3N5cy5zc2YuZ292Lm5wLw==";
const SSF_INFO_B64 = "aHR0cHM6Ly93d3cuc3NmLmdvdi5ucA==";
const FEB_B64 = "aHR0cHM6Ly9mZWIuZ292Lm5wLw==";
const DOFE_B64 = "aHR0cHM6Ly9kb2ZlLmdvdi5ucA==";

const SOCIAL_FB = typeof atob !== 'undefined' ? atob(FB_B64) : 'https://www.facebook.com/mephadin';
const SOCIAL_LI = typeof atob !== 'undefined' ? atob(LI_B64) : 'https://www.linkedin.com/in/phanindradahal/';
const SOCIAL_WA = typeof atob !== 'undefined' ? atob(WA_B64) : 'https://wa.me/9779852659333';
const SSF_PORTAL = typeof atob !== 'undefined' ? atob(SSF_PORTAL_B64) : 'https://sosys.ssf.gov.np/';
const SSF_INFO = typeof atob !== 'undefined' ? atob(SSF_INFO_B64) : 'https://www.ssf.gov.np';
const FEB_LINK = typeof atob !== 'undefined' ? atob(FEB_B64) : 'https://feb.gov.np/';
const DOFE_LINK = typeof atob !== 'undefined' ? atob(DOFE_B64) : 'https://dofe.gov.np';

const LINKS = {
  shram: 'https://foreignjob.dofe.gov.np/',
  jobs: 'https://foreignjob.dofe.gov.np/',
  lot: 'https://foreignjob.dofe.gov.np/',
  ujuri: 'https://ujuri.dofe.gov.np/',
};

type UpdateItem = {
  id: string;
  title: string;
  date: string;
  tag: string;
  desc: string;
};

const INITIAL_UPDATES: UpdateItem[] = [
  { id: '1', title: 'SSF पासवर्ड रिसेट नयाँ प्रक्रिया अपडेट', date: '२०८२ असोज ३०', tag: 'SSF', desc: 'SSF ID बिर्सिएमा sosys.ssf.gov.np मा गएर Forgot Password मा SSF ID राखेर रिसेट गर्न सकिन्छ।' },
  { id: '2', title: 'FEB छात्रवृत्ति आवेदन खुला', date: '२०८२ असोज २८', tag: 'FEB', desc: 'वैदेशिक रोजगार बोर्डले श्रमिकका सन्ततिका लागि छात्रवृत्ति आवेदन खुलाएको छ।' },
  { id: '3', title: 'श्रम स्वीकृति अनलाइन जाँच सहज', date: '२०८२ असोज २५', tag: 'DOFE', desc: 'अब foreignjob.dofe.gov.np बाट सिधै श्रम स्वीकृति स्थिति जाँच गर्न सकिन्छ।' },
];

export default function App() {
  const [updates, setUpdates] = useState<UpdateItem[]>(INITIAL_UPDATES);
  const [draftTitle, setDraftTitle] = useState('');
  const [draftDesc, setDraftDesc] = useState('');
  const [draftTag, setDraftTag] = useState('SSF');
  const [copied, setCopied] = useState(false);
  const [activeNav, setActiveNav] = useState('');

  const addDraft = () => {
    if (!draftTitle.trim()) return;
    const newItem: UpdateItem = {
      id: Date.now().toString(),
      title: draftTitle,
      desc: draftDesc || 'स्थानीय ड्राफ्ट — ब्राउजरमा मात्र देखिन्छ।',
      tag: draftTag,
      date: new Date().toLocaleDateString('ne-NP'),
    };
    setUpdates([newItem, ...updates]);
    setDraftTitle('');
    setDraftDesc('');
  };

  const copyJson = async () => {
    const text = JSON.stringify(updates, null, 2);
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (targetId: string, activeKey: string) => {
    setActiveNav(activeKey + '-' + Date.now());
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] overflow-x-clip font-[Noto_Sans_Devanagari] selection:bg-[#f97316]/30"
      style={{ paddingTop: 'var(--safe-area-inset-top)', fontFamily: '"Noto Sans Devanagari", system-ui, sans-serif' }}
    >
      <style>{'@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800&display=swap); html{scroll-behavior:smooth}'}</style>

      <div className="bg-[#0f1a3a] text-white text-[13px] leading-5">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-2.5 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <div className="flex items-start gap-2.5">
            <span className="mt-[1px] shrink-0 w-5 h-5 rounded-full bg-[#facc15] flex items-center justify-center">
              <AlertTriangle className="w-3.5 h-3.5 text-[#0f1a3a]" />
            </span>
            <span className="opacity-90">
              यो DOFE को आधिकारिक साइट होइन — आधिकारिक जानकारीको लागि{' '}
              <a href={DOFE_LINK} target="_blank" rel="noopener" className="underline decoration-[#facc15] text-[#facc15]">dofe.gov.np</a> मा जानुहोस्
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/80">@phadindecodes · 9852659333</span>
            <div className="flex items-center gap-2">
              <a href={SOCIAL_FB} target="_blank" rel="noopener" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center"><Facebook className="w-3.5 h-3.5 fill-white text-white" /></a>
              <a href={SOCIAL_LI} target="_blank" rel="noopener" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center"><Linkedin className="w-3.5 h-3.5 fill-white text-white" /></a>
              <a href={SOCIAL_WA} target="_blank" rel="noopener" className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center"><MessageCircle className="w-3.5 h-3.5 fill-white text-white" /></a>
            </div>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white border-b border-black/5" style={{ top: 'var(--safe-area-inset-top)' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 h-[72px] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[10px] bg-[#1e3a8a] flex items-center justify-center text-white font-extrabold text-[20px]">P</div>
            <div className="leading-tight">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[15px] text-[#0f1a3a]">Support | PhadinDecodes</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#f97316] text-white">V2</span>
              </div>
              <div className="text-[10px] tracking-[0.14em] text-[#64748b]">SUPPORT.PHADINDECODES.COM</div>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-2 text-[14px] font-medium">
            <button onClick={() => scrollToSection('home','home')} className="px-2.5 py-1 rounded-full hover:bg-black/5">गृहपृष्ठ</button>
            <button onClick={() => scrollToSection('services','shram')} className="px-2.5 py-1 rounded-full hover:bg-black/5">श्रम स्वीकृति</button>
            <button onClick={() => scrollToSection('ssf','ssf')} className="px-2.5 py-1 rounded-full hover:bg-black/5">SSF</button>
            <button onClick={() => scrollToSection('feb','feb')} className="px-2.5 py-1 rounded-full hover:bg-black/5">FEB</button>
            <button onClick={() => scrollToSection('helpline','helpline')} className="px-2.5 py-1 rounded-full hover:bg-black/5">हेल्पलाइन</button>
          </nav>
          <div className="flex items-center gap-2.5">
            <a href={SOCIAL_FB} target="_blank" rel="noopener" className="w-10 h-10 rounded-full bg-[#1877f2] flex items-center justify-center"><Facebook className="w-5 h-5 text-white fill-white" /></a>
            <a href={SOCIAL_LI} target="_blank" rel="noopener" className="w-10 h-10 rounded-full bg-[#0a66c2] flex items-center justify-center"><Linkedin className="w-5 h-5 text-white fill-white" /></a>
            <a href={SOCIAL_WA} target="_blank" rel="noopener" className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center"><MessageCircle className="w-5 h-5 text-white fill-white" /></a>
          </div>
        </div>
      </header>

      <section id="home" className="relative bg-gradient-to-br from-[#fefce8] to-[#eef6ff] border-b border-black/5">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border shadow-sm text-[12px] mb-6">
            <ShieldCheck className="w-4 h-4 text-[#1e3a8a]" />
            <span>आधिकारिक DOFE लिंकहरू मार्फत — सुरक्षित र भरपर्दो</span>
            <span className="ml-1 px-2.5 py-0.5 rounded-full bg-[#0f1a3a] text-white text-[10px] font-bold">VERIFIED LINKS V2</span>
          </div>
          <h1 className="text-[36px] md:text-[56px] font-extrabold leading-[1.1] text-[#0f1a3a] max-w-[680px]">वैदेशिक रोजगार<br />जानकारी विशेष</h1>
          <p className="mt-5 max-w-[680px] text-[16px] md:text-[18px] leading-7 text-[#475569]">श्रम स्वीकृति, संस्थागत माग, र लट नम्बर सजिलै जाँच गर्नुहोस् — आधिकारिक DOFE लिंकहरू मार्फत।</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={LINKS.shram} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-5 h-[44px] rounded-full bg-[#1e3a8a] text-white text-[14px] font-semibold">श्रम स्वीकृति जाँच <ExternalLink className="w-3.5 h-3.5" /></a>
            <a href={LINKS.jobs} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-5 h-[44px] rounded-full bg-white border text-[14px] font-semibold">रोजगारी खोज्नुहोस्</a>
            <a href={LINKS.lot} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-5 h-[44px] rounded-full bg-[#f97316] text-white text-[14px] font-semibold">लट नम्बर हेर्नुहोस्</a>
            <a href={LINKS.ujuri} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-5 h-[44px] rounded-full bg-[#dc2626] text-white text-[14px] font-semibold">उजुरी दर्ता <ExternalLink className="w-3.5 h-3.5" /></a>
          </div>
          <div className="mt-8 flex flex-wrap gap-5 text-[13px] text-[#64748b]">
            <span className="inline-flex items-center gap-1.5"><Globe className="w-4 h-4" /> foreignjob.dofe.gov.np</span>
            <span className="inline-flex items-center gap-1.5"><Shield className="w-4 h-4" /> ujuri.dofe.gov.np</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" /> 24hr उपलब्ध</span>
          </div>
        </div>
      </section>

      <section id="services" className="max-w-[1280px] mx-auto px-4 md:px-6 py-10">
        <h2 className="text-[22px] md:text-[28px] font-bold text-[#0f1a3a]">मुख्य सेवाहरू — ४ आधिकारिक पोर्टल</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-[16px] bg-white border p-5">
            <div className="w-10 h-10 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white"><FileText className="w-5 h-5" /></div>
            <h3 className="mt-3 font-bold">श्रम स्वीकृति जाँच</h3>
            <p className="mt-1 text-[13px] text-[#64748b]">व्यक्तिगत / संस्थागत श्रम स्वीकृति स्थिति तुरुन्त हेर्नुहोस्।</p>
            <a href={LINKS.shram} target="_blank" rel="noopener" className="mt-4 inline-flex px-4 h-9 rounded-full bg-[#0f1a3a] text-white text-[13px] font-semibold">जाँच गर्नुहोस् <ExternalLink className="w-3.5 h-3.5 ml-1" /></a>
          </div>
          <div className="rounded-[16px] bg-white border p-5">
            <div className="w-10 h-10 rounded-full bg-[#0f1a3a] flex items-center justify-center text-white"><Search className="w-5 h-5" /></div>
            <h3 className="mt-3 font-bold">रोजगारी खोजी</h3>
            <p className="mt-1 text-[13px] text-[#64748b]">देशगत माग र कम्पनी अनुसार वैदेशिक रोजगारी खोज्नुहोस्।</p>
            <a href={LINKS.jobs} target="_blank" rel="noopener" className="mt-4 inline-flex px-4 h-9 rounded-full bg-[#0f1a3a] text-white text-[13px] font-semibold">खोज्नुहोस् <ExternalLink className="w-3.5 h-3.5 ml-1" /></a>
          </div>
          <div className="rounded-[16px] bg-white border p-5">
            <div className="w-10 h-10 rounded-full bg-[#f97316] flex items-center justify-center text-white"><Hash className="w-5 h-5" /></div>
            <h3 className="mt-3 font-bold">लट नम्बर हेर्नुहोस्</h3>
            <p className="mt-1 text-[13px] text-[#64748b]">लट नम्बर अनुसार प्रक्रियाको अवस्था र अनुमतिपत्र।</p>
            <a href={LINKS.lot} target="_blank" rel="noopener" className="mt-4 inline-flex px-4 h-9 rounded-full bg-[#0f1a3a] text-white text-[13px] font-semibold">हेर्नुहोस् <ExternalLink className="w-3.5 h-3.5 ml-1" /></a>
          </div>
          <div className="rounded-[16px] bg-white border p-5">
            <div className="w-10 h-10 rounded-full bg-[#dc2626] flex items-center justify-center text-white"><Shield className="w-5 h-5" /></div>
            <h3 className="mt-3 font-bold">उजुरी दर्ता</h3>
            <p className="mt-1 text-[13px] text-[#64748b]">ठगी वा समस्या भएमा DOFE मा सिधै उजुरी दिनुहोस्।</p>
            <a href={LINKS.ujuri} target="_blank" rel="noopener" className="mt-4 inline-flex px-4 h-9 rounded-full bg-[#0f1a3a] text-white text-[13px] font-semibold">उजुरी दिनुहोस् <ExternalLink className="w-3.5 h-3.5 ml-1" /></a>
          </div>
        </div>
      </section>

      <section id="ssf" className="bg-white border-y">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10">
          <span className="px-3 py-1 rounded-full bg-[#dcfce7] text-[#166534] text-[11px] font-bold border">SSF PORTAL</span>
          <h2 className="mt-3 text-[24px] md:text-[30px] font-bold text-[#0f1a3a]">सामाजिक सुरक्षा कोष (SSF) - पासवर्ड रिसेट सहित</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-[18px] border bg-[#f8fafc] p-6">
              <div className="w-11 h-11 rounded-xl bg-[#1e3a8a] text-white flex items-center justify-center"><ShieldCheck className="w-6 h-6" /></div>
              <h3 className="mt-4 font-bold">SSF दर्ता र योगदान जाँच</h3>
              <p className="mt-2 text-[13px] text-[#64748b]">तपाईंको SSF खाता, योगदान रकम र विवरण आधिकारिक पोर्टलमा हेर्नुहोस्।</p>
              <a href={SSF_PORTAL} target="_blank" rel="noopener" className="mt-5 inline-flex h-10 px-5 rounded-full bg-[#0f1a3a] text-white text-[13px] font-semibold">पोर्टलमा जानुहोस् <ExternalLink className="w-4 h-4 ml-2" /></a>
            </div>
            <div className="rounded-[18px] border-2 border-[#16a34a] bg-gradient-to-br from-[#f0fdf4] to-white p-6">
              <span className="px-2.5 py-1 rounded-full bg-[#dc2626] text-white text-[10px] font-bold">सबैभन्दा खोजिएको</span>
              <div className="mt-3 w-11 h-11 rounded-xl bg-[#15803d] text-white flex items-center justify-center"><FileText className="w-6 h-6" /></div>
              <h3 className="mt-4 font-bold text-[#14532d]">पासवर्ड रिसेट / बिर्सिएको पासवर्ड</h3>
              <p className="mt-2 text-[13px] text-[#334155]">SSF ID पासवर्ड बिर्सिनुभयो? Reset Password मा क्लिक, Username मा SSF ID, Email मा लिंक आउँछ।</p>
              <ul className="mt-3 text-[12px] text-[#475569] list-disc ml-4 space-y-1">
                <li>sosys.ssf.gov.np खोल्नुहोस्</li>
                <li>वैदेशिक रोजगारी मेनुमा जानुस</li>
                <li>Forgot Password मा क्लिक</li>
                <li>SSF ID, पासपोर्ट नं, जन्म मिति वि.सं मा र क्याप्चा राख्नुहोस्</li>
                <li>Validate गर्नुहोस</li>
              </ul>
              <a href={SSF_PORTAL} target="_blank" rel="noopener" className="mt-5 inline-flex h-11 px-6 rounded-full bg-[#16a34a] text-white text-[14px] font-bold">पासवर्ड रिसेट गर्नुहोस् <ExternalLink className="w-4 h-4 ml-2" /></a>
            </div>
            <div className="rounded-[18px] border bg-[#f8fafc] p-6">
              <div className="w-11 h-11 rounded-xl bg-[#0f1a3a] text-white flex items-center justify-center"><Briefcase className="w-6 h-6" /></div>
              <h3 className="mt-4 font-bold">SSF सुविधा र दाबी</h3>
              <p className="mt-2 text-[13px] text-[#64748b]">औषधि उपचार, दुर्घटना, प्रसूति र पेन्सन सुविधाको जानकारी।</p>
              <a href= "https://sosys.ssf.gov.np/Modules/COLLECTION/MigrantResetPassword.aspx" target="_blank" rel="noopener" className="mt-5 inline-flex h-10 px-5 rounded-full bg-white border text-[13px] font-semibold">विवरण हेर्नुहोस् <ExternalLink className="w-4 h-4 ml-2" /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="feb" className="max-w-[1280px] mx-auto px-4 md:px-6 py-10">
        <h2 className="text-[24px] md:text-[30px] font-bold text-[#0f1a3a]">वैदेशिक रोजगार बोर्ड - कल्याणकारी कार्यहरू</h2>
        <p className="mt-2 text-[14px] text-[#475569]">वैदेशिक रोजगारीमा गएका श्रमिक र परिवारका लागि बोर्डले प्रदान गर्ने आर्थिक सहायता — <a href={FEB_LINK} target="_blank" rel="noopener" className="underline font-semibold text-[#1e3a8a]">feb.gov.np</a></p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="rounded-[16px] bg-white border p-5"><div className="w-10 h-10 rounded-xl bg-[#1e3a8a] text-white flex items-center justify-center"><Building2 className="w-5 h-5" /></div><h3 className="mt-3 font-bold text-[15px]">मृतक सहायता रू १० लाख</h3><p className="mt-1 text-[13px] text-[#64748b]">श्रम स्विकृति लिएर गएका र वैध भएमा परिवारलाई आर्थिक सहायता।</p><a href={FEB_LINK} target="_blank" rel="noopener" className="mt-4 inline-flex h-9 px-4 rounded-full bg-[#0f1a3a] text-white text-[12px] font-semibold">विवरण हेर्नुहोस्</a></div>
          <div className="rounded-[16px] bg-white border p-5"><div className="w-10 h-10 rounded-xl bg-[#dc2626] text-white flex items-center justify-center"><HeartPulse className="w-5 h-5" /></div><h3 className="mt-3 font-bold text-[15px]">अंगभंग सहायता</h3><p className="mt-1 text-[13px] text-[#64748b]">अंगभंग वा कडा बिरामीमा उपचार खर्च सहायता।</p><a href={FEB_LINK} target="_blank" rel="noopener" className="mt-4 inline-flex h-9 px-4 rounded-full bg-[#0f1a3a] text-white text-[12px] font-semibold">विवरण हेर्नुहोस्</a></div>
          <div className="rounded-[16px] bg-white border p-5"><div className="w-10 h-10 rounded-xl bg-[#f97316] text-white flex items-center justify-center"><FileText className="w-5 h-5" /></div><h3 className="mt-3 font-bold text-[15px]">छात्रवृत्ति</h3><p className="mt-1 text-[13px] text-[#64748b]">श्रमिकका छोराछोरीका लागि वार्षिक छात्रवृत्ति कार्यक्रम।</p><a href={FEB_LINK} target="_blank" rel="noopener" className="mt-4 inline-flex h-9 px-4 rounded-full bg-[#0f1a3a] text-white text-[12px] font-semibold">विवरण हेर्नुहोस्</a></div>
          <div className="rounded-[16px] bg-white border p-5"><div className="w-10 h-10 rounded-xl bg-[#0f1a3a] text-white flex items-center justify-center"><Shield className="w-5 h-5" /></div><h3 className="mt-3 font-bold text-[15px]">उद्धार र कानुनी सहायता</h3><p className="mt-1 text-[13px] text-[#64748b]">अलपत्र, जेल वा समस्या परेका श्रमिकको उद्धार।</p><a href={FEB_LINK} target="_blank" rel="noopener" className="mt-4 inline-flex h-9 px-4 rounded-full bg-[#0f1a3a] text-white text-[12px] font-semibold">विवरण हेर्नुहोस्</a></div>
        </div>
      </section>

      <section id="helpline" className="bg-[#0f1a3a] text-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10">
          <h2 className="text-[24px] md:text-[32px] font-bold">महत्वपूर्ण हेल्पलाइन नम्बरहरू</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="rounded-[20px] bg-white text-[#0f1a3a] p-5"><div className="text-[48px] font-extrabold text-[#1e40af]">1111</div><div className="font-bold">हेलो सरकार</div><div className="text-[12px] text-[#64748b]">Hello Sarkar</div><a href={'tel:1111'} className="mt-4 flex h-10 rounded-full bg-[#1e40af] text-white items-center justify-center gap-2 font-bold"><Phone className="w-4 h-4" /> कल 1111</a></div>
            <div className="rounded-[20px] bg-white text-[#0f1a3a] p-5"><div className="text-[48px] font-extrabold text-[#ea580c]">1141</div><div className="font-bold">श्रमाधान कल सेन्टर</div><div className="text-[12px] text-[#64748b]">Shramadhan</div><a href={'tel:1141'} className="mt-4 flex h-10 rounded-full bg-[#ea580c] text-white items-center justify-center gap-2 font-bold"><Phone className="w-4 h-4" /> कल 1141</a></div>
            <div className="rounded-[20px] bg-white text-[#0f1a3a] p-5"><div className="text-[48px] font-extrabold text-[#7e22ce]">1145</div><div className="font-bold">महिला आयोग</div><div className="text-[12px] text-[#64748b]">Mahila Aayog</div><a href={'tel:1145'} className="mt-4 flex h-10 rounded-full bg-[#7e22ce] text-white items-center justify-center gap-2 font-bold"><Phone className="w-4 h-4" /> कल 1145</a></div>
            <div className="rounded-[20px] bg-white text-[#0f1a3a] p-5"><div className="text-[48px] font-extrabold text-[#15803d]">1098</div><div className="font-bold">बाल हेल्पलाइन</div><div className="text-[12px] text-[#64748b]">Bal Helpline</div><a href={'tel:1098'} className="mt-4 flex h-10 rounded-full bg-[#15803d] text-white items-center justify-center gap-2 font-bold"><Phone className="w-4 h-4" /> कल 1098</a></div>
            <div className="rounded-[20px] bg-white text-[#0f1a3a] p-5"><div className="text-[48px] font-extrabold text-[#be123c]">1166</div><div className="font-bold">आत्महत्या रोकथाम</div><div className="text-[12px] text-[#64748b]">Suicide Prevention</div><a href={'tel:1166'} className="mt-4 flex h-10 rounded-full bg-[#be123c] text-white items-center justify-center gap-2 font-bold"><Phone className="w-4 h-4" /> कल 1166</a></div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0f1a3a] text-white border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-[10px] bg-white text-[#0f1a3a] flex items-center justify-center font-extrabold">P</div><div><div className="font-bold">Support | PhadinDecodes V2</div><div className="text-[11px] text-white/50">SUPPORT.PHADINDECODES.COM</div></div></div>
            <p className="mt-4 text-[13px] text-white/60 max-w-[380px]">यो साइट DOFE को आधिकारिक साइट होइन। आधिकारिक जानकारीको लागि सधैं dofe.gov.np हेर्नुहोस्।</p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <a href={SOCIAL_FB} target="_blank" rel="noopener" className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-[#1877f2] text-white font-semibold"><Facebook className="w-5 h-5 fill-white" /> Facebook</a>
            <a href={SOCIAL_LI} target="_blank" rel="noopener" className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-[#0a66c2] text-white font-semibold"><Linkedin className="w-5 h-5 fill-white" /> LinkedIn</a>
            <a href={SOCIAL_WA} target="_blank" rel="noopener" className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-[#25D366] text-white font-semibold"><MessageCircle className="w-5 h-5 fill-white" /> WhatsApp 9852659333</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
