
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Users, Clock } from "lucide-react";

const AboutUs = () => {
  const qualifications = [
    "MBBS, MS (Orthopaedics)",
    "Fellowship in Trauma, Arthroscopy, Sports & Joint Reconstructive Surgery",
    "Fellowship in Shoulder, Elbow & Sports Injuries",
    "Fellowship in Knee Surgery & Sports Medicine",
    "Fellowship in Sports Medicine"
  ];

  const expertise = [
    "Knee and shoulder ligament surgeries",
    "Arthroscopy and minimally invasive joint procedures",
    "Sports injury management and rehabilitation",
    "Trauma and reconstructive orthopaedics",
    "Complex joint reconstruction",
    "Sports medicine and performance optimization"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">About Dr. Gurudeo Kumar</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Leading orthopaedic surgeon in Patna, renowned for expertise in knee and shoulder surgeries, 
              arthroscopy, and sports medicine
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="relative">
                <div className="w-96 h-96 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1 mx-auto">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <img 
                      src="/lovable-uploads/74ef67d4-adc4-4766-b6ea-058397eff73b.png" 
                      alt="Dr. Gurudeo Kumar" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-slate-700/50 border-slate-600">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Professional Excellence</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Dr. Gurudeo Kumar is a leading orthopaedic surgeon in Patna with extensive training from 
                    premier institutions in India, South Korea, the USA, and Germany. He brings advanced 
                    surgical techniques and compassionate care to his patients, specializing in minimally 
                    invasive procedures, sports injury management, and complex trauma reconstruction.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-700/50 border-slate-600">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Current Positions</h3>
                  <ul className="text-slate-300 space-y-2">
                    <li>• HOD, Orthopaedics and Sports Medicine, Mediversal Multi Super Specialty Hospital, Patna</li>
                    <li>• Consultant Orthopaedic Surgeon, Modern Multispecialty Hospital and Research Centre Private Limited, Patna</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="bg-slate-700/50 border-slate-600 text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">15000+</h3>
                <p className="text-slate-300">Successful Surgeries</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-700/50 border-slate-600 text-center">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">20+</h3>
                <p className="text-slate-300">Years Experience</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-700/50 border-slate-600 text-center">
              <CardContent className="p-6">
                <GraduationCap className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">Multiple</h3>
                <p className="text-slate-300">International Fellowships</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-700/50 border-slate-600 text-center">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">Expert</h3>
                <p className="text-slate-300">Sports Medicine</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Qualifications & Training</h3>
                <ul className="space-y-3">
                  {qualifications.map((qualification, index) => (
                    <li key={index} className="text-slate-300 flex items-start">
                      <span className="text-cyan-400 mr-3">•</span>
                      {qualification}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-400 mt-4 text-sm">
                  Advanced training received in India, South Korea, USA, and Germany
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Areas of Expertise</h3>
                <ul className="space-y-3">
                  {expertise.map((area, index) => (
                    <li key={index} className="text-slate-300 flex items-start">
                      <span className="text-cyan-400 mr-3">•</span>
                      {area}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Button 
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg"
              onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
