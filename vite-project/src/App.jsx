import React, { useState, useEffect } from "react";

export default function SoftSell() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    license: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  // Animation for the How It Works section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 3);
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.company) newErrors.company = "Company is required";
    if (!formData.license) newErrors.license = "License type is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", company: "", license: "", message: "" });
    }
  };

  // Icons as simple SVG components for better compatibility
  const IconUpload = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="17 8 12 3 7 8"></polyline>
      <line x1="12" y1="3" x2="12" y2="15"></line>
    </svg>
  );

  const IconChart = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 2a10 10 0 0 1 10 10"></path>
      <path d="M12 12 7 7"></path>
    </svg>
  );

  const IconDollar = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
      <line x1="12" y1="1" x2="12" y2="23"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  );

  const IconTrending = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  );

  const IconShield = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );

  const IconUsers = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  );

  const IconCheck = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  const IconMenu = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );

  const IconX = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setNavMenuOpen(false);
  };

  const howItWorksSteps = [
    { 
      title: "Upload License", 
      icon: <IconUpload />,
      description: "Securely upload your unused software licenses to our platform"
    },
    { 
      title: "Get Valuation", 
      icon: <IconChart />,
      description: "Our AI algorithm evaluates your license for maximum market value"
    },
    { 
      title: "Get Paid", 
      icon: <IconDollar />,
      description: "Receive instant payment through your preferred payment method"
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-95 text-white z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <svg className="text-blue-500" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              <span className="font-bold text-xl">SoftSell</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a onClick={() => scrollToSection('home')} className="hover:text-blue-400 cursor-pointer transition-colors duration-300">Home</a>
              <a onClick={() => scrollToSection('how-it-works')} className="hover:text-blue-400 cursor-pointer transition-colors duration-300">How It Works</a>
              <a onClick={() => scrollToSection('why-choose-us')} className="hover:text-blue-400 cursor-pointer transition-colors duration-300">Why Us</a>
              <a onClick={() => scrollToSection('testimonials')} className="hover:text-blue-400 cursor-pointer transition-colors duration-300">Testimonials</a>
              <a onClick={() => scrollToSection('contact')} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-300">Get Started</a>
            </div>
            
            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button onClick={() => setNavMenuOpen(!navMenuOpen)} className="focus:outline-none">
                {navMenuOpen ? <IconX /> : <IconMenu />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          {navMenuOpen && (
            <div className="md:hidden pb-6 pt-2 space-y-4">
              <a onClick={() => scrollToSection('home')} className="block hover:text-blue-400 cursor-pointer py-2 transition-colors duration-300">Home</a>
              <a onClick={() => scrollToSection('how-it-works')} className="block hover:text-blue-400 cursor-pointer py-2 transition-colors duration-300">How It Works</a>
              <a onClick={() => scrollToSection('why-choose-us')} className="block hover:text-blue-400 cursor-pointer py-2 transition-colors duration-300">Why Us</a>
              <a onClick={() => scrollToSection('testimonials')} className="block hover:text-blue-400 cursor-pointer py-2 transition-colors duration-300">Testimonials</a>
              <a onClick={() => scrollToSection('contact')} className="block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-300 w-full text-center">Get Started</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with animated gradient background */}
      <section id="home" className="relative pt-32 pb-20 px-6 text-center overflow-hidden bg-blue-600">
        {/* Animated circles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-white opacity-20"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 20}%`,
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <svg className="mx-auto mb-6 text-white" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Sell Your Unused Software Licenses <span className="italic">Instantly</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            SoftSell uses cutting-edge AI to maximize value from your unused digital assets
          </p>
          <div className="inline-block relative group">
            <button onClick={() => scrollToSection('contact')} className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              Get a Free Valuation Now
            </button>
          </div>
        </div>
        
        {/* Wave shape at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24 text-white fill-current">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      </section>

      {/* How It Works - Interactive and Animated */}
      <section id="how-it-works" className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">How It Works</h2>
          
          <div className="relative">
            {/* Progress Bar */}
            <div className="hidden md:block absolute top-24 left-0 w-full h-1 bg-gray-700">
              <div 
                className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-500 ease-in-out"
                style={{ width: `${((currentStep + 1) / 3) * 100}%` }}
              ></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howItWorksSteps.map((step, i) => (
                <div 
                  key={i} 
                  className={`bg-gray-800 rounded-xl p-8 text-center transform transition-all duration-500 ${
                    i === currentStep ? "scale-105 ring-2 ring-blue-500" : "opacity-80"
                  } ${isAnimating && i === currentStep ? "animate-pulse" : ""}`}
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 flex items-center justify-center bg-gray-700 rounded-full">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Manual Controls */}
          <div className="flex justify-center space-x-4 mt-12">
            {howItWorksSteps.map((_, i) => (
              <button 
                key={i}
                onClick={() => {
                  setCurrentStep(i);
                  setIsAnimating(true);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  i === currentStep ? "bg-blue-500 scale-125" : "bg-gray-600"
                }`}
                aria-label={`Step ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-16 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <IconTrending />, text: "AI-Powered Valuations", desc: "Get the best market price through our proprietary algorithms" },
              { icon: <IconShield />, text: "Secure Blockchain Transactions", desc: "Every transaction is secure and immutable" },
              { icon: <IconUsers />, text: "24/7 Expert Support", desc: "Our team of licensing experts is always available" },
              { icon: <IconCheck />, text: "Instant Payouts", desc: "Get paid immediately after license verification" },
            ].map((item, i) => (
              <div key={i} className="bg-gray-700 bg-opacity-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="text-blue-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.text}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Card Carousel Feel */}
      <section id="testimonials" className="py-16 bg-gray-800 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">What Our Customers Say</h2>
          
          <div className="flex flex-wrap md:flex-nowrap overflow-x-auto pb-8 space-x-0 md:space-x-6">
            {[
              { name: "John Doe", role: "IT Manager", company: "TechNova Inc.", avatar: "JD", review: "SoftSell's AI valuations gave us 40% more than competitors offered for our unused licenses." },
              { name: "Jane Smith", role: "Procurement Lead", company: "AlphaTech", avatar: "JS", review: "The blockchain verification process gave us confidence in the security of our transaction." },
              { name: "Michael Chen", role: "CTO", company: "FutureSoft", avatar: "MC", review: "From upload to payment took less than 15 minutes. Absolutely incredible service!" },
              { name: "Alex Johnson", role: "Finance Director", company: "InnovateCorp", avatar: "AJ", review: "Their instant payout system helped us recoup costs immediately during our budget crunch." },
            ].map((review, i) => (
              <div 
                key={i} 
                className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 md:mb-0 flex-shrink-0"
              >
                <div className="bg-gray-700 bg-opacity-50 p-8 rounded-xl shadow-lg h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500 mr-4">
                      {review.avatar}
                    </div>
                    <div>
                      <p className="font-bold">{review.name}</p>
                      <p className="text-sm text-gray-400">{review.role}, {review.company}</p>
                    </div>
                  </div>
                  <p className="italic">"{review.review}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form with Glass Morphism */}
      <section id="contact" className="py-16 bg-gray-900 relative">
        <div className="absolute inset-0 opacity-10 bg-blue-900"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Get Started Now</h2>
          
          <form onSubmit={handleSubmit} className="bg-gray-800 bg-opacity-70 p-10 rounded-2xl shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-blue-300 mb-2 text-sm">Name</label>
                <input 
                  name="name" 
                  type="text" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white" 
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label className="block text-blue-300 mb-2 text-sm">Email</label>
                <input 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white" 
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label className="block text-blue-300 mb-2 text-sm">Company</label>
                <input 
                  name="company" 
                  type="text" 
                  value={formData.company} 
                  onChange={handleChange} 
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white" 
                />
                {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
              </div>
              
              <div>
                <label className="block text-blue-300 mb-2 text-sm">License Type</label>
                <select 
                  name="license" 
                  value={formData.license} 
                  onChange={handleChange} 
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white"
                >
                  <option value="">Select License Type</option>
                  <option value="Windows">Windows</option>
                  <option value="Office">Microsoft Office</option>
                  <option value="Adobe">Adobe Creative Cloud</option>
                  <option value="Antivirus">Antivirus/Security</option>
                  <option value="Enterprise">Enterprise Software</option>
                  <option value="Other">Other</option>
                </select>
                {errors.license && <p className="text-red-400 text-sm mt-1">{errors.license}</p>}
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-blue-300 mb-2 text-sm">Message</label>
              <textarea 
                name="message" 
                rows="4" 
                value={formData.message} 
                onChange={handleChange} 
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white"
              />
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
            </div>
            
            <div className="mt-8">
              <button 
                type="submit" 
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                Get Your Instant Valuation
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer with Animation */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">SoftSell</h3>
            <p>Revolutionizing the software license marketplace with blockchain and AI technologies.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "How It Works", "FAQs", "Privacy Policy"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-300">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              {["Twitter", "LinkedIn", "Facebook", "Instagram"].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} SoftSell. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button 
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors duration-300 z-40"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </div>
  );
}