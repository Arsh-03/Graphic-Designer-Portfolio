import { useState, useEffect } from 'react';
import { Maximize2, X, Menu, Layout, Shirt, Trophy, PartyPopper, Phone } from 'lucide-react';
import ccJacketsImage480 from './assets/CC_JACKETS_480.webp';
import ccJacketsImage960 from './assets/CC_JACKETS_960.webp';
import hackathonImage480 from './assets/Hackathon_480.webp';
import hackathonImage960 from './assets/Hackathon_960.webp';
import siliconManthanImage480 from './assets/Silicon_Manthan_480.webp';
import siliconManthanImage960 from './assets/Silicon_Manthan_960.webp';
import codeCookiesImage480 from './assets/Code_Cookies_480.webp';
import codeCookiesImage960 from './assets/Code_Cookies_960.webp';
import freshersFiestaImage480 from './assets/Freshers_Fiesta_480.webp';
import freshersFiestaImage960 from './assets/Freshers_Fiesta_960.webp';

type Project = {
  id: number;
  title: string;
  category: 'Apparel Design' | 'Event Identity';
  description: string;
  image: string;
  imageSrcSet: string;
  modalImage: string;
  tags: string[];
  award?: string;
};

const App = () => {
  const [selectedImage, setSelectedImage] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImage]);

  const projects: Project[] = [
    {
      id: 1,
      title: "Club Merch: Web & Pro Edition",
      category: "Apparel Design",
      description: "Custom T-shirt graphics designed for the CodeChef club. Featuring stylized character mascots tailored for screen-printing on hoodies and tees.",
      image: ccJacketsImage480,
      imageSrcSet: `${ccJacketsImage480} 480w, ${ccJacketsImage960} 960w`,
      modalImage: ccJacketsImage960,
      tags: ["Apparel", "Vector Art", "Club Merch"]
    },
    {
      id: 2,
      title: "Hackathon Series: Volunteers Edition",
      category: "Apparel Design",
      description: "Themed hackathon merchandise designs for core team members, optimized for high-quality fabric printing.",
      image: hackathonImage480,
      imageSrcSet: `${hackathonImage480} 480w, ${hackathonImage960} 960w`,
      modalImage: hackathonImage960,
      tags: ["Merchandise", "Character Branding"]
    },
    {
      id: 3,
      title: "Silicon Manthan",
      category: "Event Identity",
      award: "🏆 1st Place Winner",
      description: "Award-winning poster design blending mythology with modern cybersecurity. Won 1st Prize in the campus-wide Poster Making Competition.",
      image: siliconManthanImage480,
      imageSrcSet: `${siliconManthanImage480} 480w, ${siliconManthanImage960} 960w`,
      modalImage: siliconManthanImage960,
      tags: ["Competition Winner", "Visual Storytelling", "Cybersecurity"]
    },
    {
      id: 4,
      title: "Code & Cookies",
      category: "Event Identity",
      description: "Full visual identity suite for the Google Student Ambassador AI workshop. Managed both digital promotion and physical print assets.",
      image: codeCookiesImage480,
      imageSrcSet: `${codeCookiesImage480} 480w, ${codeCookiesImage960} 960w`,
      modalImage: codeCookiesImage960,
      tags: ["Google Gemini", "AI Workshop", "Branding"]
    },
    {
      id: 5,
      title: "Freshers Fiesta",
      category: "Event Identity",
      description: "Dynamic and high-energy promotional graphics for the annual freshman orientation party. Focused on vibrant colors and youthful typography.",
      image: freshersFiestaImage480,
      imageSrcSet: `${freshersFiestaImage480} 480w, ${freshersFiestaImage960} 960w`,
      modalImage: freshersFiestaImage960,
      tags: ["Social Media", "Print Design", "Campus Life"]
    },
  ];

  const categories = ['All', 'Apparel Design', 'Event Identity'] as const;

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-purple-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold tracking-tighter bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            ARSH.DESIGN
          </div>
          <div className="hidden sm:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#work" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#about" className="hover:text-white transition-colors">Services</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="sm:hidden p-2 rounded-xl border border-white/10 bg-white/5 text-gray-200 hover:text-white hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-white/10 bg-black/95 backdrop-blur-md px-4 py-4">
            <div className="flex flex-col gap-3 text-sm font-medium text-gray-300">
              <a href="#work" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-white transition-colors">Portfolio</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-white transition-colors">Services</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-28 sm:pt-36 lg:pt-48 pb-16 sm:pb-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Available for Hire</span>
          </div>
          <h1 className="text-[clamp(2.25rem,11vw,6.25rem)] font-bold tracking-tight mb-7 sm:mb-10 leading-[0.92]">
            Branding <span className="text-gray-600 italic font-serif">beyond</span> <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              the digital screen.
            </span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed font-light">
            Graphic Designer at CodeChef. I transform concepts into award-winning posters and premium club merchandise.
          </p>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-gray-500 mb-4">Selected Works</h2>
              <h3 className="text-3xl sm:text-4xl font-bold italic">Featured Projects</h3>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 sm:px-8 py-2.5 sm:py-3 rounded-full border text-xs sm:text-sm font-medium transition-all ${
                    activeFilter === cat 
                    ? 'bg-white text-black border-white' 
                    : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group flex flex-col bg-[#111] rounded-[32px] overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedImage(project)}
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    srcSet={project.imageSrcSet}
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 46vw, 92vw"
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
                  />
                  {project.award && (
                    <div className="absolute top-6 left-6 px-4 py-2 bg-yellow-500 text-black text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-2 z-20 shadow-xl">
                      <Trophy size={14} /> {project.award}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <div className="p-6 bg-white text-black rounded-full scale-50 group-hover:scale-100 transition-all duration-500">
                      <Maximize2 size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-[1px] bg-blue-500"></span>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">{project.category}</p>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] px-3 py-1.5 rounded-full bg-white/5 text-gray-400 uppercase font-bold tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="about" className="py-16 sm:py-24 lg:py-32 bg-white text-black px-4 sm:px-6 rounded-t-[32px] sm:rounded-t-[60px]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 sm:gap-20">
            <div className="md:w-1/3">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-8 leading-tight">My Design <br />Philosophy.</h2>
              <div className="h-1 w-20 bg-black"></div>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              <div className="space-y-4">
                <Shirt className="text-blue-600" size={40} />
                <h4 className="text-xl sm:text-2xl font-bold tracking-tight">Apparel Production</h4>
                <p className="text-gray-600 leading-relaxed">I design graphics specifically for screen-printing and embroidery, ensuring club merchandise is not just aesthetic but production-ready.</p>
              </div>
              <div className="space-y-4">
                <Trophy className="text-purple-600" size={40} />
                <h4 className="text-xl sm:text-2xl font-bold tracking-tight">Award-Winning Posters</h4>
                <p className="text-gray-600 leading-relaxed">Winner of Silicon Manthan. I specialize in high-concept posters that use visual hierarchy to tell complex stories effectively.</p>
              </div>
              <div className="space-y-4">
                <PartyPopper className="text-pink-600" size={40} />
                <h4 className="text-xl sm:text-2xl font-bold tracking-tight">Event Curation</h4>
                <p className="text-gray-600 leading-relaxed">From Freshers Fiesta to Tech Summits, I build cohesive visual identities that define the vibe and professionality of an event.</p>
              </div>
              <div className="space-y-4">
                <Layout className="text-green-600" size={40} />
                <h4 className="text-xl sm:text-2xl font-bold tracking-tight">Brand Systems</h4>
                <p className="text-gray-600 leading-relaxed">Maintaining visual consistency across digital social media, print flyers, and physical merchandise.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 sm:py-24 lg:py-32 bg-[#0a0a0a] px-4 sm:px-6 text-white border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-10 tracking-tighter italic">Let's create together.</h2>
            <div className="space-y-6">
              <a href="mailto:mohammedarshkotwal@gmail.com" className="block text-lg sm:text-2xl md:text-4xl text-blue-500 hover:text-white transition-all underline underline-offset-8 break-all">
                mohammedarshkotwal@gmail.com
              </a>
              <a href="tel:+919663454301" className="block text-lg sm:text-xl md:text-3xl text-gray-400 hover:text-white transition-all flex flex-wrap items-center justify-center gap-3">
                <Phone size={24} /> +91 9663454301
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-10 pt-12 sm:pt-20 border-t border-white/10">
            <div className="text-xl sm:text-2xl font-black tracking-tighter">ARSH.DESIGN</div>
            <div className="text-xs font-bold tracking-[0.2em] text-gray-600 uppercase">
              Graphic Designer • Portfolio 2025
            </div>
          </div>
        </div>
      </footer>

      {/* Improved Modal Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center overflow-y-auto p-3 sm:p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button - Fixed to top right */}
          <button 
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            className="fixed top-[max(0.75rem,env(safe-area-inset-top))] right-[max(0.75rem,env(safe-area-inset-right))] z-[110] p-2.5 sm:p-3 text-white bg-white/10 hover:bg-white/20 rounded-full transition-all border border-white/10"
          >
            <X size={28} />
          </button>

          {/* Modal Container */}
          <div 
            className="relative max-w-6xl w-full max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-2rem)] bg-[#111] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 flex flex-col lg:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image side */}
            <div className="w-full lg:w-3/5 bg-black flex items-center justify-center relative min-h-[220px] sm:min-h-[300px]">
              {selectedImage.award && (
                 <div className="absolute top-3 left-3 sm:top-6 sm:left-6 px-3 sm:px-6 py-2 sm:py-3 bg-yellow-500 text-black font-black uppercase rounded-lg shadow-2xl rotate-[-3deg] z-10 text-[10px] md:text-sm">
                   {selectedImage.award}
                 </div>
              )}
              <img 
                src={selectedImage.modalImage} 
                srcSet={selectedImage.imageSrcSet}
                sizes="(min-width: 1024px) 60vw, 100vw"
                alt={selectedImage.title}
                decoding="async"
                className="w-full h-full object-contain max-h-[80vh]"
              />
            </div>

            {/* Content side */}
            <div className="w-full lg:w-2/5 p-5 sm:p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-md text-[10px] font-black uppercase tracking-widest">
                  {selectedImage.category}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight tracking-tighter">{selectedImage.title}</h2>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                {selectedImage.description}
              </p>
              
              <div className="pt-6 sm:pt-8 border-t border-white/5">
                <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] mb-4">Project Discipline</p>
                <div className="flex flex-wrap gap-2">
                  {selectedImage.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-medium text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => setSelectedImage(null)}
                className="mt-10 lg:hidden w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;