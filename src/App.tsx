import { 
  Stethoscope, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  ChevronRight, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter,
  Plus,
  Minus,
  CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-mint-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-mint-200 rounded-xl flex items-center justify-center">
            <Sparkles className="text-coral-500 w-6 h-6" />
          </div>
          <span className="font-display text-2xl font-bold tracking-tighter">LUMINA</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="hover:text-coral-500 transition-colors">Services</a>
          <a href="#gallery" className="hover:text-coral-500 transition-colors">Results</a>
          <a href="#team" className="hover:text-coral-500 transition-colors">Our Team</a>
          <a href="#faq" className="hover:text-coral-500 transition-colors">FAQ</a>
          <a href="#contact" className="bg-coral-500 text-white px-6 py-2.5 rounded-full glow-effect hover:bg-coral-600 transition-all">
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-mint-50 to-mint-100 -z-10" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 bg-mint-200 text-mint-800 text-xs font-bold tracking-widest uppercase rounded-full mb-6">
            Premium Dental Care
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8">
            Your journey to a <span className="text-coral-500">confident</span> smile starts here.
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
            Experience boutique dental care in a calming, spa-like environment. We combine state-of-the-art technology with a warm, personal touch.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-coral-500 text-white px-8 py-4 rounded-full text-lg font-semibold glow-effect hover:bg-coral-600 transition-all flex items-center gap-2">
              Book Your Appointment <ChevronRight className="w-5 h-5" />
            </button>
            <button className="bg-white border border-mint-200 text-charcoal px-8 py-4 rounded-full text-lg font-semibold hover:bg-mint-50 transition-all">
              View Our Services
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
              alt="Modern Dental Clinic Interior" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="Patient" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-sm">500+ Happy Patients</p>
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "General Dentistry",
      desc: "Comprehensive check-ups, cleanings, and preventative care for the whole family."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Cosmetic Dentistry",
      desc: "Transform your smile with professional whitening, veneers, and bonding."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Dental Implants",
      desc: "Permanent, natural-looking solutions for missing teeth using advanced technology."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Emergency Care",
      desc: "Same-day appointments for urgent dental needs and pain relief."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Exceptional Services</h2>
          <p className="text-gray-600">We offer a full range of dental treatments tailored to your unique needs and comfort.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-mint-50 hover:bg-mint-100 transition-all group cursor-default"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-coral-500">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-mint-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-4">Real Results, Real Smiles</h2>
            <p className="text-gray-600">See the transformations we've achieved for our patients. Every smile tells a story of confidence restored.</p>
          </div>
          <button className="text-coral-500 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View Full Gallery <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              <div className="relative aspect-square">
                <img 
                  src={`https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop&seed=${i}`} 
                  alt="Smile Transformation" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold">
                  {i === 1 ? "Veneers" : i === 2 ? "Whitening" : "Implants"}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 italic">Before & After</span>
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(j => <Star key={j} className="w-3 h-3 fill-current" />)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Patient since 2022",
      text: "The most relaxing dental experience I've ever had. The team is so gentle and the clinic feels like a spa. My veneers look incredibly natural!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Emergency Patient",
      text: "I had a sudden toothache and they fit me in the same day. Dr. Sarah was amazing and explained everything clearly. Highly recommend!",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Cosmetic Patient",
      text: "I've always been nervous about the dentist, but Lumina changed that. The atmosphere is so calming and the results are life-changing.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Patients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] border border-mint-100 bg-white hover:border-coral-500/30 transition-colors relative"
            >
              <div className="flex text-yellow-400 mb-6">
                {[...Array(r.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-600 mb-8 italic leading-relaxed">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-mint-100 overflow-hidden">
                  <img src={`https://picsum.photos/seed/patient${i}/100/100`} alt={r.name} referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold">{r.name}</h4>
                  <p className="text-xs text-gray-400">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const doctors = [
    {
      name: "Dr. Sarah Lumina",
      role: "Principal Dentist",
      img: "https://images.unsplash.com/photo-1559839734-2b71f153678f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Dr. James Wilson",
      role: "Implant Specialist",
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "Cosmetic Specialist",
      img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <section id="team" className="py-24 bg-mint-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Meet Our Specialists</h2>
          <p className="text-gray-600">Our highly qualified team is dedicated to providing you with the best possible care in a friendly environment.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {doctors.map((d, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center group"
            >
              <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-6 shadow-xl grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src={d.img} alt={d.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-2xl font-bold mb-1">{d.name}</h3>
              <p className="text-coral-500 font-medium">{d.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Insurance = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-mint-100 rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Insurance & Payments</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe quality dental care should be accessible. We accept most major insurance providers and offer flexible interest-free payment plans to suit your budget.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {["Bupa", "Medibank", "HCF", "NIB", "CBHS", "HBF"].map((brand) => (
                <div key={brand} className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                  <CheckCircle2 className="w-5 h-5 text-mint-500" /> {brand} Preferred
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
              <p className="text-3xl font-bold text-coral-500 mb-2">0%</p>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Interest Plans</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
              <p className="text-3xl font-bold text-coral-500 mb-2">All</p>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Major Cards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  
  const faqs = [
    {
      q: "How often should I visit the dentist?",
      a: "We generally recommend a check-up and professional cleaning every 6 months to maintain optimal oral health and catch any issues early."
    },
    {
      q: "Do you offer teeth whitening?",
      a: "Yes! We offer both in-chair professional whitening for immediate results and custom take-home kits for your convenience."
    },
    {
      q: "Are you accepting new patients?",
      a: "Absolutely! We love welcoming new members to the Lumina family. You can book your first appointment online or by calling us."
    },
    {
      q: "What should I do in a dental emergency?",
      a: "Call us immediately. We reserve daily emergency slots to ensure we can see patients in pain as quickly as possible."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border border-mint-100 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-mint-50 transition-colors"
              >
                <span className="font-bold">{f.q}</span>
                {open === i ? <Minus className="w-5 h-5 text-coral-500" /> : <Plus className="w-5 h-5 text-gray-400" />}
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 text-sm leading-relaxed">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-mint-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <p className="text-gray-600 mb-12">Have a question or ready to book? Our friendly team is here to help you achieve your dream smile.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-coral-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Our Location</h4>
                  <p className="text-gray-500 text-sm">123 Wellness Way, Suite 400<br />Modern City, MC 54321</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-coral-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-gray-500 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-coral-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-gray-500 text-sm">hello@luminadental.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-mint-50 border-none focus:ring-2 focus:ring-coral-500 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-mint-50 border-none focus:ring-2 focus:ring-coral-500 outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Service Interested In</label>
                <select className="w-full px-4 py-3 rounded-xl bg-mint-50 border-none focus:ring-2 focus:ring-coral-500 outline-none transition-all">
                  <option>General Checkup</option>
                  <option>Cosmetic Consultation</option>
                  <option>Dental Implants</option>
                  <option>Emergency Care</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-mint-50 border-none focus:ring-2 focus:ring-coral-500 outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-coral-500 text-white py-4 rounded-xl font-bold glow-effect hover:bg-coral-600 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-mint-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-mint-200 rounded-lg flex items-center justify-center">
                <Sparkles className="text-coral-500 w-5 h-5" />
              </div>
              <span className="font-display text-xl font-bold tracking-tighter">LUMINA</span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8">
              Redefining the dental experience with a focus on comfort, technology, and stunning results. Your smile is our passion.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-mint-50 rounded-full flex items-center justify-center text-gray-400 hover:text-coral-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-mint-50 rounded-full flex items-center justify-center text-gray-400 hover:text-coral-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-mint-50 rounded-full flex items-center justify-center text-gray-400 hover:text-coral-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#services" className="hover:text-coral-500 transition-colors">Our Services</a></li>
              <li><a href="#team" className="hover:text-coral-500 transition-colors">Meet the Team</a></li>
              <li><a href="#gallery" className="hover:text-coral-500 transition-colors">Before & After</a></li>
              <li><a href="#" className="hover:text-coral-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Opening Hours</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex justify-between"><span>Mon - Fri</span> <span>8:00 - 18:00</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>9:00 - 14:00</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span className="text-coral-500 font-bold">Closed</span></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center pt-10 border-t border-mint-50 text-xs text-gray-400">
          © {new Date().getFullYear()} Lumina Dental Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Team />
      <Insurance />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
