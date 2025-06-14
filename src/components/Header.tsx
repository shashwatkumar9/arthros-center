import { Search, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-slate-800 text-slate-300 text-sm py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>gurudeok@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>7258065424</span>
            </div>
            <span>251 A Patliputra Colony, Patna</span>
          </div>
          <div className="flex space-x-3">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs">f</div>
            <div className="w-6 h-6 bg-blue-400 rounded flex items-center justify-center text-white text-xs">t</div>
            <div className="w-6 h-6 bg-pink-600 rounded flex items-center justify-center text-white text-xs">i</div>
            <div className="w-6 h-6 bg-blue-700 rounded flex items-center justify-center text-white text-xs">in</div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-slate-800/90 backdrop-blur-sm text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="text-2xl font-bold">Arthros Center</div>
          
          <div className="flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Input 
                placeholder="Search procedures, conditions..." 
                className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 pr-10"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            </div>
          </div>

          <nav className="flex items-center space-x-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">About Us</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Doctors</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
              Appointment
            </Button>
          </nav>
        </div>
      </header>

      {/* Services Sub-menu */}
      <div className="bg-slate-700 text-white py-3">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8 text-sm">
            <a href="#" className="hover:text-cyan-400 transition-colors flex items-center space-x-1">
              <span>Knee Surgeries</span>
              <span className="text-xs">▼</span>
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors flex items-center space-x-1">
              <span>Shoulder & Elbow</span>
              <span className="text-xs">▼</span>
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors flex items-center space-x-1">
              <span>Hip & Pelvis</span>
              <span className="text-xs">▼</span>
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors flex items-center space-x-1">
              <span>Spine</span>
              <span className="text-xs">▼</span>
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors flex items-center space-x-1">
              <span>Sports Medicine</span>
              <span className="text-xs">▼</span>
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors flex items-center space-x-1">
              <span>Hand & Wrist</span>
              <span className="text-xs">▼</span>
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors flex items-center space-x-1">
              <span>Foot & Ankle</span>
              <span className="text-xs">▼</span>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
