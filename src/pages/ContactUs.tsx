
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Calendar, Building2 } from "lucide-react";

const ContactUs = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "251 A Patliputra Colony, Patna, Bihar, India",
      color: "text-red-400"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 7258065424",
      action: "tel:+917258065424",
      color: "text-green-400"
    },
    {
      icon: Mail,
      title: "Email",
      content: "gurudeok@gmail.com",
      action: "mailto:gurudeok@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: Clock,
      title: "OPD Hours",
      content: "Mon-Sat: 10:00 AM - 2:00 PM & 6:00 PM - 8:00 PM",
      color: "text-purple-400"
    }
  ];

  const hospitals = [
    {
      name: "Mediversal Multi Super Specialty Hospital",
      location: "Kankarbagh, Patna, Bihar",
      position: "HOD, Orthopaedics and Sports Medicine",
      phone: "8035240555",
      features: ["24x7 Hospital Services", "Online Appointment Booking", "Emergency Care"],
      timing: "24x7 Available"
    },
    {
      name: "Modern Multispecialty Hospital and Research Centre Private Limited",
      location: "Patna, Bihar",
      position: "Consultant Orthopaedic Surgeon",
      timing: "Monday–Saturday: 10:00 AM – 2:00 PM & 6:00 PM – 8:00 PM",
      features: ["OPD Consultations", "Specialized Care", "Follow-up Services"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get in touch with Dr. Gurudeo Kumar and our team for world-class orthopedic care
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-slate-700/50 border-slate-600">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-full bg-slate-600 flex items-center justify-center ${info.color}`}>
                          <info.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white">{info.title}</h3>
                          {info.action ? (
                            <a 
                              href={info.action}
                              className="text-slate-300 hover:text-cyan-400 transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-slate-300">{info.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Quick Actions</h2>
              <div className="space-y-4">
                <Button 
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 text-lg"
                  onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Online Appointment
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white py-4 text-lg"
                  onClick={() => window.location.href = 'tel:+917258065424'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +91 7258065424
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white py-4 text-lg"
                  onClick={() => window.location.href = 'mailto:gurudeok@gmail.com'}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Hospital Locations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {hospitals.map((hospital, index) => (
                <Card key={index} className="bg-slate-700/50 border-slate-600">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <Building2 className="w-8 h-8 text-cyan-400 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{hospital.name}</h3>
                        <p className="text-cyan-400 font-semibold mb-2">{hospital.position}</p>
                        <div className="flex items-center text-slate-300 mb-2">
                          <MapPin className="w-4 h-4 mr-2" />
                          {hospital.location}
                        </div>
                        <div className="flex items-center text-slate-300 mb-4">
                          <Clock className="w-4 h-4 mr-2" />
                          {hospital.timing}
                        </div>
                        {hospital.phone && (
                          <div className="flex items-center text-slate-300 mb-4">
                            <Phone className="w-4 h-4 mr-2" />
                            <a href={`tel:${hospital.phone}`} className="hover:text-cyan-400 transition-colors">
                              {hospital.phone}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Services Available:</h4>
                      <ul className="space-y-1">
                        {hospital.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-slate-300 flex items-center">
                            <span className="text-cyan-400 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-slate-700/50 border-slate-600">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">Emergency Care</h3>
              <p className="text-slate-300 mb-6 text-lg">
                For urgent orthopedic emergencies, please contact us immediately or visit our 24x7 emergency services 
                at Mediversal Multi Super Specialty Hospital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => window.location.href = 'tel:8035240555'}
                >
                  Emergency: 8035240555
                </Button>
                <Button 
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
                  onClick={() => window.location.href = 'tel:+917258065424'}
                >
                  Direct Contact: +91 7258065424
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
