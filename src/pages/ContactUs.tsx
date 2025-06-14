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
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Location</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Card className="bg-slate-700/50 border-slate-600">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <Building2 className="w-8 h-8 text-cyan-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Arthros Center</h3>
                      <p className="text-cyan-400 font-semibold mb-2">Dr. Gurudeo Kumar - Orthopedic Surgeon</p>
                      <div className="flex items-center text-slate-300 mb-2">
                        <MapPin className="w-4 h-4 mr-2" />
                        251 A Patliputra Colony, Patna, Bihar, India
                      </div>
                      <div className="flex items-center text-slate-300 mb-4">
                        <Clock className="w-4 h-4 mr-2" />
                        Mon-Sat: 10:00 AM - 2:00 PM & 6:00 PM - 8:00 PM
                      </div>
                      <div className="flex items-center text-slate-300 mb-4">
                        <Phone className="w-4 h-4 mr-2" />
                        <a href="tel:+917258065424" className="hover:text-cyan-400 transition-colors">
                          +91 7258065424
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Services Available:</h4>
                    <ul className="space-y-1">
                      <li className="text-slate-300 flex items-center">
                        <span className="text-cyan-400 mr-2">•</span>
                        Knee & Shoulder Surgery
                      </li>
                      <li className="text-slate-300 flex items-center">
                        <span className="text-cyan-400 mr-2">•</span>
                        Arthroscopy & Sports Medicine
                      </li>
                      <li className="text-slate-300 flex items-center">
                        <span className="text-cyan-400 mr-2">•</span>
                        Joint Reconstruction
                      </li>
                      <li className="text-slate-300 flex items-center">
                        <span className="text-cyan-400 mr-2">•</span>
                        Trauma Care
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <div className="h-96 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.3177651959!2d85.11126167594007!3d25.627577114133384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed592d19b8db6d%3A0x34e25f4d54fe870!2sDr%20Gurudeo%2FArthros%20Clinic%2FBest%20Arthroscopic%20Surgeon%20in%20patna!5e0!3m2!1sen!2sin!4v1749911922747!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
