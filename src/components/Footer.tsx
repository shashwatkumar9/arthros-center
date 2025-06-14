
const Footer = () => {
  const quickLinks = [
    "Home",
    "About Us", 
    "Services",
    "Our Doctors",
    "Testimonials",
    "Contact Us"
  ];

  const procedures = [
    "ACL Reconstruction",
    "Rotator Cuff Repair",
    "Hip Replacement",
    "Knee Replacement",
    "Sports Medicine",
    "Trauma Care"
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Arthros Center</h3>
            <p className="mb-6 leading-relaxed">
              Advanced orthopedic care for active lives. 
              Specialized treatments and personalized care for 
              every orthopedic condition.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">f</div>
              <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center text-white">t</div>
              <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center text-white">i</div>
              <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white">in</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-cyan-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Procedures */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Popular Procedures</h4>
            <ul className="space-y-3">
              {procedures.map((procedure, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-cyan-400 transition-colors">{procedure}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-cyan-400">📍</span>
                <span>251 A Patliputra Colony, Patna, Bihar, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-cyan-400">📞</span>
                <span>+91 7258065424</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-cyan-400">✉️</span>
                <span>[email protected]</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-cyan-400">🕒</span>
                <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex justify-between items-center text-sm">
            <div>
              <span>© 2023 Arthros Center. All rights reserved.</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
