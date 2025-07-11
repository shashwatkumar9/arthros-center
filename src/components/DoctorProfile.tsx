
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const DoctorProfile = () => {
  const qualifications = [
    "MBBS, MS (ORTHO)",
    "FELLOWSHIP (TRAUMA, ATHROSCOPY, SPORTS & JOINT RECONSTRUCTIVE SURGERY)",
    "FELLOWSHIP (SHOULDER, ELBOW & SPORTS INJURIES)",
    "FELLOWSHIP (KNEE SURGERY & SPORTS MEDICINE)",
    "FELLOWSHIP (SPORTS MEDICINE)"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-12">
          <div className="flex-1">
            <div className="relative">
              <div className="w-96 h-96 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img 
                    src="/lovable-uploads/74ef67d4-adc4-4766-b6ea-058397eff73b.png" 
                    alt="Dr. Gurudeo Kumar" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-4xl font-bold text-white mb-2">Dr. Gurudeo Kumar</h2>
            <p className="text-xl text-cyan-400 mb-8">HOD, Orthopedics And Sports Medicine</p>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Qualifications</h3>
              <div className="space-y-3">
                {qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-slate-300">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-8">
              Dr. Gurudeo Kumar is a highly specialized orthopedic surgeon with extensive training in sports medicine, arthroscopy, and joint 
              reconstruction. With his multiple fellowships and years of experience, he provides exceptional care for patients with a wide range of 
              orthopedic conditions. Dr. Kumar is dedicated to using the latest techniques and technologies to help his patients recover quickly and 
              return to their active lives.
            </p>

            <div className="flex space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Book Appointment
              </Button>
              <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3">
                View Full Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
