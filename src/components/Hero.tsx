
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Advanced Orthopedic Care for{" "}
              <span className="text-cyan-400">Active Lives</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Specialized treatments and personalized care for every 
              orthopedic condition by Dr. Gurudeo Kumar and his 
              expert team.
            </p>
            <div className="flex justify-end">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg">
                Book Appointment
              </Button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-end">
            <div className="relative">
              <div className="w-96 h-96 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img 
                    src="/lovable-uploads/276003e9-a200-45ae-b1f5-b39c6ae3f1eb.png" 
                    alt="Dr. Gurudeo Kumar" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
