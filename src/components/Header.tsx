
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, userProfile, signOut } = useAuth();

  const serviceCategories = [
    {
      title: "Knee Surgeries",
      items: [
        { name: "ACL Procedures", href: "/acl-procedures" },
        { name: "PCL & Multi-ligament", href: "/pcl-multi-ligament" },
        { name: "Other Knee Procedures", href: "/other-knee-procedures" },
      ]
    },
    {
      title: "Shoulder & Elbow",
      items: [
        { name: "Rotator Cuff Procedures", href: "/rotator-cuff-procedures" },
        { name: "Shoulder Instability", href: "/shoulder-instability-procedures" },
        { name: "Elbow Procedures", href: "/elbow-procedures" },
      ]
    },
    {
      title: "Hip & Pelvis",
      items: [
        { name: "Hip Replacement", href: "/hip-replacement-procedures" },
        { name: "Hip Arthroscopy", href: "/hip-arthroscopy-procedures" },
        { name: "Pelvis Procedures", href: "/pelvis-procedures" },
      ]
    },
    {
      title: "Spine Surgery",
      items: [
        { name: "Cervical Spine", href: "/cervical-spine-procedures" },
        { name: "Lumbar Spine", href: "/lumbar-spine-procedures" },
        { name: "Minimally Invasive", href: "/minimally-invasive-spine-procedures" },
      ]
    },
    {
      title: "Sports Medicine",
      items: [
        { name: "Athletic Injuries", href: "/athletic-injuries-procedures" },
        { name: "Performance", href: "/performance-procedures" },
        { name: "Specialized Care", href: "/specialized-care-procedures" },
      ]
    },
    {
      title: "Hand & Wrist",
      items: [
        { name: "Hand Surgery", href: "/hand-surgery-procedures" },
        { name: "Wrist Surgery", href: "/wrist-surgery-procedures" },
        { name: "Nerve Surgery", href: "/nerve-surgery-procedures" },
      ]
    },
    {
      title: "Foot & Ankle",
      items: [
        { name: "Foot Surgery", href: "/foot-surgery-procedures" },
        { name: "Ankle Surgery", href: "/ankle-surgery-procedures" },
        { name: "Sports Injuries", href: "/sports-injuries-procedures" },
      ]
    },
  ];

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-slate-800 text-slate-300 py-2 text-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>+91 7258065424</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>gurudeok@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>251 A Patliputra Colony, Patna, Bihar, India</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">
            Arthros <span className="text-cyan-400">Center</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-6">
                <NavigationMenuItem>
                  <Link to="/" className="text-slate-300 hover:text-cyan-400 transition-colors">
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/about-us" className="text-slate-300 hover:text-cyan-400 transition-colors">
                    About Us
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-slate-300 hover:text-cyan-400 bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[800px] lg:grid-cols-3">
                      {serviceCategories.map((category) => (
                        <div key={category.title} className="space-y-2">
                          <h4 className="text-sm font-semibold text-slate-900">{category.title}</h4>
                          <ul className="space-y-1">
                            {category.items.map((item) => (
                              <li key={item.name}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={item.href}
                                    className="block text-sm text-slate-600 hover:text-slate-900 transition-colors"
                                  >
                                    {item.name}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/blog" className="text-slate-300 hover:text-cyan-400 transition-colors">
                    Blog
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/testimonials" className="text-slate-300 hover:text-cyan-400 transition-colors">
                    Testimonials
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact-us" className="text-slate-300 hover:text-cyan-400 transition-colors">
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Auth Section */}
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-2">
                  {(userProfile?.role === 'admin' || userProfile?.role === 'editor') && (
                    <Link to="/admin">
                      <Button variant="outline" size="sm" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white">
                        Admin
                      </Button>
                    </Link>
                  )}
                  <Button onClick={signOut} variant="outline" size="sm" className="border-slate-600 text-slate-300">
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Link to="/auth">
                  <Button variant="outline" size="sm" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white">
                    Sign In
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/blog"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/testimonials"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                to="/contact-us"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Auth */}
              {user ? (
                <div className="flex flex-col space-y-2 pt-4 border-t border-slate-700">
                  {(userProfile?.role === 'admin' || userProfile?.role === 'editor') && (
                    <Link to="/admin" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" size="sm" className="w-full border-cyan-400 text-cyan-400">
                        Admin Dashboard
                      </Button>
                    </Link>
                  )}
                  <Button onClick={() => { signOut(); setIsOpen(false); }} variant="outline" size="sm" className="w-full border-slate-600 text-slate-300">
                    Sign Out
                  </Button>
                </div>
              ) : (
                <div className="pt-4 border-t border-slate-700">
                  <Link to="/auth" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" size="sm" className="w-full border-cyan-400 text-cyan-400">
                      Sign In
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
