import React, { useState, useEffect } from 'react';

const IconBase = ({ size = 24, strokeWidth = 2, color = 'currentColor', className = '', children, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {children}
  </svg>
);

const Menu = (props) => (
  <IconBase {...props}>
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </IconBase>
);

const X = (props) => (
  <IconBase {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </IconBase>
);

const Calendar = (props) => (
  <IconBase {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </IconBase>
);

const MapPin = (props) => (
  <IconBase {...props}>
    <path d="M21 10c0 5-9 12-9 12S3 15 3 10a9 9 0 1 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </IconBase>
);

const Clock = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </IconBase>
);

const FileText = (props) => (
  <IconBase {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="14" y2="17" />
  </IconBase>
);

const Users = (props) => (
  <IconBase {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </IconBase>
);

const ChevronDown = (props) => (
  <IconBase {...props}>
    <polyline points="6 9 12 15 18 9" />
  </IconBase>
);

const Award = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="8" r="5" />
    <path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.11" />
  </IconBase>
);

const PlayCircle = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </IconBase>
);

const ImageIcon = (props) => (
  <IconBase {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="m21 15-4.5-4.5L5 21" />
  </IconBase>
);

const MDXOnePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar transparency effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'หน้าแรก', id: 'home' },
    { name: 'กำหนดการ', id: 'agenda' },
    { name: 'วิทยากร', id: 'speakers' },
    { name: 'เอกสาร/สไลด์', id: 'materials' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* --- Navigation Bar --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            {/* Logo Placeholder */}
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
              M
            </div>
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              MDX<span className="text-cyan-500">1</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium hover:text-cyan-500 transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${scrolled ? 'text-slate-800' : 'text-white'}`}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute w-full shadow-xl border-t border-slate-100">
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-slate-700 font-medium hover:text-cyan-600"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* --- Hero Section (Home) --- */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Background Image Overlay with Gradient */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Digital Health Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="inline-block px-3 py-1 mb-4 border border-cyan-500/50 rounded-full bg-cyan-500/10 backdrop-blur-sm">
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Session 4: Digital Innovation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            หลักสูตรผู้บริหาร<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              ดิจิทัลทางการแพทย์ รุ่นที่ 1
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl font-light">
            Digital Innovation in Modern Healthcare, Design Thinking & AI Governance<br/>
            เตรียมพร้อมสู่การเปลี่ยนแปลงระบบสาธารณสุขไทยด้วยเทคโนโลยี
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={() => scrollToSection('agenda')}
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-full shadow-lg shadow-cyan-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              ดูรายละเอียดกำหนดการ <ChevronDown size={20}/>
            </button>
            <button 
              onClick={() => scrollToSection('materials')}
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 font-medium rounded-full transition-all flex items-center justify-center gap-2"
            >
              <FileText size={20}/> เอกสารประกอบการเรียน
            </button>
          </div>

          <div className="mt-12 flex flex-col md:flex-row gap-6 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="text-cyan-500" size={18} />
              <span>เสาร์ที่ 29 พฤศจิกายน 2568</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-cyan-500" size={18} />
              <span>08:30 - 16:30 น.</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-cyan-500" size={18} />
              <span>ห้องประชุมวชิรเวช อาคารมหิตลาธิเบศร</span>
            </div>
          </div>
        </div>

        {/* Decorative Tech Elements */}
        <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-gradient-to-tl from-cyan-500/10 to-transparent blur-3xl rounded-full pointer-events-none"></div>
      </section>

      {/* --- Agenda Section --- */}
      <section id="agenda" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">กำหนดการเรียนการสอน</h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4">เจาะลึกนวัตกรรมและธรรมาภิบาล AI สำหรับผู้บริหาร</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
            
            {/* Timeline Item 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-slate-500">
                <Clock size={18}/>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-lg border-l-4 border-cyan-500 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-cyan-600">08.30 - 09.00 น.</span>
                  <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">Med Talk</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">Digital Innovation in Modern Healthcare</h3>
                <p className="text-slate-600 text-sm">โดย ดร.ชวพล จริยาวิโรจน์</p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-slate-500">
                <Clock size={18}/>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-blue-600">09.00 - 12.00 น.</span>
                  <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">Workshop</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">Applying Design Thinking to Healthcare Challenges</h3>
                <p className="text-slate-600 text-sm">โดย ดร.อรชร อิงคานุวัฒน์ และคุณณัชชา โรจน์วิโรจน์</p>
              </div>
            </div>

             {/* Timeline Item 3 */}
             <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-slate-500">
                <Clock size={18}/>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-lg border-l-4 border-indigo-500 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-indigo-600">13.00 - 13.30 น.</span>
                  <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">Non-Med Talk</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">AI Governance</h3>
                <p className="text-slate-600 text-sm">โดย ดร.ศักดิ์ เสกขุนทด</p>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-slate-500">
                <Clock size={18}/>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-purple-600">13.30 - 15.00 น.</span>
                  <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">Lecture</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">Healthcare Insurance System & Digital Transformation</h3>
                <p className="text-slate-600 text-sm">โดย คุณสาระ ล่ำซำ และคณะ</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Speakers Section --- */}
      <section id="speakers" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">วิทยากรทรงคุณวุฒิ</h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Speaker Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="h-64 bg-slate-200 relative overflow-hidden">
                {/* Replace src with actual image */}
                <img src="/api/placeholder/400/500" alt="ดร.ชวพล" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider">Digital Innovation</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-800">ดร.ชวพล จริยาวิโรจน์</h3>
                <p className="text-sm text-slate-500 mt-1">กรรมการผู้จัดการ บริษัท หัวเว่ย เทคโนโลยี่ (ประเทศไทย) จำกัด</p>
              </div>
            </div>

            {/* Speaker Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="h-64 bg-slate-200 relative overflow-hidden">
                <img src="/api/placeholder/400/500" alt="ดร.ศักดิ์" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                   <p className="text-indigo-400 text-xs font-bold uppercase tracking-wider">AI Governance</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-800">ดร.ศักดิ์ เสกขุนทด</h3>
                <p className="text-sm text-slate-500 mt-1">ที่ปรึกษาอาวุโส ETDA</p>
              </div>
            </div>

            {/* Speaker Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="h-64 bg-slate-200 relative overflow-hidden">
                <img src="/api/placeholder/400/500" alt="ดร.อรชร" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-blue-400 text-xs font-bold uppercase tracking-wider">Design Thinking</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-800">ดร.อรชร อิงคานุวัฒน์</h3>
                <p className="text-sm text-slate-500 mt-1">ผู้เชี่ยวชาญด้าน Design Thinking</p>
              </div>
            </div>

             {/* Speaker Card 4 */}
             <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="h-64 bg-slate-200 relative overflow-hidden">
                <img src="/api/placeholder/400/500" alt="คุณสาระ" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-purple-400 text-xs font-bold uppercase tracking-wider">Insurance Tech</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-800">คุณสาระ ล่ำซำ</h3>
                <p className="text-sm text-slate-500 mt-1">CEO เมืองไทยประกันชีวิต</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Materials & Embed Section --- */}
      <section id="materials" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">สื่อการเรียนรู้ (Materials)</h2>
              <p className="text-slate-400">สไลด์ประกอบการบรรยายและ Infographic สรุปสาระสำคัญ</p>
            </div>
            <button className="mt-4 md:mt-0 px-6 py-2 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors flex items-center gap-2">
              <Award size={18}/>
              <span>Download All Files</span>
            </button>
          </div>

          <div className="space-y-12">
            {/* Section 1: Digital Intelligence Architecture */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                  <PlayCircle size={20}/>
                  <h3>Digital Intelligence Architecture Blueprint</h3>
                </div>
                <div style={{position: 'relative', width: '100%', height: 0, paddingTop: '55.8342%', paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform'}}>
                  <iframe loading="lazy" style={{position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0}}
                    src="https://www.canva.com/design/DAG6HHCvQnI/ht9L1oOTnCNOaPAsmHtFfg/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                  </iframe>
                </div>
                <p className="text-sm text-slate-500">
                  สไลด์ประกอบการบรรยาย: Digital Intelligence Architecture Blueprint โดย ดร.ชวพล จริยาวิโรจน์
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-pink-400 font-semibold">
                  <ImageIcon size={20}/>
                  <h3>Huawei Smart City Infographic</h3>
                </div>
                <div className="w-full aspect-video bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                  <a href="https://postimg.cc/CB5fwyDG" target="_blank" rel="noopener noreferrer">
                    <img src="https://i.postimg.cc/pTYQYRL6/smart_city.png" alt="smart_city" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
                  </a>
                </div>
                <p className="text-sm text-slate-500">
                  Infographic: Huawei Smart City - สรุปนวัตกรรม Smart City Technology
                </p>
              </div>
            </div>

            {/* Section 2: Design Thinking */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-blue-400 font-semibold">
                  <PlayCircle size={20}/>
                  <h3>Human-Centered Design Thinking for Healthcare</h3>
                </div>
                <div style={{position: 'relative', width: '100%', height: 0, paddingTop: '55.8342%', paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform'}}>
                  <iframe loading="lazy" style={{position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0}}
                    src="https://www.canva.com/design/DAG6I3wvNvc/XzbQr0CrI_bIeBKyYhSsqw/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                  </iframe>
                </div>
                <p className="text-sm text-slate-500">
                  สไลด์ประกอบการบรรยาย: Design Thinking for Healthcare โดย ดร.อรชร อิงคานุวัฒน์
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-pink-400 font-semibold">
                  <ImageIcon size={20}/>
                  <h3>Design Thinking Infographic</h3>
                </div>
                <div className="w-full aspect-video bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                  <a href="https://postimg.cc/TL1WT8mc" target="_blank" rel="noopener noreferrer">
                    <img src="https://i.postimg.cc/V6B9Bmk2/design_thinking.png" alt="design_thinking" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
                  </a>
                </div>
                <p className="text-sm text-slate-500">
                  Infographic: Design Thinking Process - ขั้นตอนการประยุกต์ใช้ใน Healthcare
                </p>
              </div>
            </div>

            {/* Section 3: AI Governance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold">
                  <PlayCircle size={20}/>
                  <h3>GenAI Trust Architecture</h3>
                </div>
                <div style={{position: 'relative', width: '100%', height: 0, paddingTop: '55.8342%', paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform'}}>
                  <iframe loading="lazy" style={{position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0}}
                    src="https://www.canva.com/design/DAG6JMngC2Y/dbO6Q4TMA14m1USoNHLFJQ/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                  </iframe>
                </div>
                <p className="text-sm text-slate-500">
                  สไลด์ประกอบการบรรยาย: GenAI Trust Architecture โดย ดร.ศักดิ์ เสกขุนทด
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-pink-400 font-semibold">
                  <ImageIcon size={20}/>
                  <h3>AI Governance Infographic</h3>
                </div>
                <div className="w-full aspect-video bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                  <a href="https://postimg.cc/34ND3Mp1" target="_blank" rel="noopener noreferrer">
                    <img src="https://i.postimg.cc/50q5qb2h/ai_governance.png" alt="ai_governance" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
                  </a>
                </div>
                <p className="text-sm text-slate-500">
                  Infographic: AI Governance - หลักการควบคุมและจริยธรรม AI
                </p>
              </div>
            </div>

            {/* Section 4: Health Insurance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-purple-400 font-semibold">
                  <PlayCircle size={20}/>
                  <h3>Thai Health Insurance Risk Cost Digital</h3>
                </div>
                <div style={{position: 'relative', width: '100%', height: 0, paddingTop: '55.8342%', paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform'}}>
                  <iframe loading="lazy" style={{position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0}}
                    src="https://www.canva.com/design/DAG6JjQAgFY/zP2idNoCwBE0142RGhtHlQ/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                  </iframe>
                </div>
                <p className="text-sm text-slate-500">
                  สไลด์ประกอบการบรรยาย: Thai Health Insurance Digital Transformation โดย คุณสาระ ล่ำซำ
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-pink-400 font-semibold">
                  <ImageIcon size={20}/>
                  <h3>Health Insurance Infographic</h3>
                </div>
                <div className="w-full aspect-video bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                  <a href="https://postimg.cc/yJvZq6Jq" target="_blank" rel="noopener noreferrer">
                    <img src="https://i.postimg.cc/63NLvytQ/health_insurance.png" alt="health_insurance" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
                  </a>
                </div>
                <p className="text-sm text-slate-500">
                  Infographic: Health Insurance Digital - การเปลี่ยนแปลงระบบประกันสุขภาพสู่ดิจิทัล
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-slate-950 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h4 className="text-white font-bold text-lg">MDX Class 1</h4>
              <p className="text-slate-500 text-sm">หลักสูตรประกาศนียบัตรผู้บริหารดิจิทัลทางการแพทย์</p>
            </div>
            <div className="text-slate-500 text-sm text-center md:text-right">
              <p>จัดทำโดย ภก.วิรุณ เวชศิริ (Pharm Connection)</p>
              <p>Ph.D. Candidate in Information Technology</p>
              <p className="mt-2 text-xs text-slate-600">© 2025 All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default MDXOnePage;
