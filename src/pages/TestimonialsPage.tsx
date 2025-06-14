
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Star } from "lucide-react";

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Rajesh",
      condition: "ACL Reconstruction & Sports Injury",
      quote: "Rajesh slipped during a cricket match and tore his ACL. He feared he'd never play again. But Dr. Gurudeo Kumar's expert surgery and rehab plan got him back on the field in just a few months. Today, he plays like nothing ever happened. Highly recommend for sports injuries doctor in Patna.",
      rating: 5,
      category: "Sports Injury"
    },
    {
      name: "Priya",
      condition: "ACL Surgery Recovery",
      quote: "Dr. Gurudeo Kumar is a very polite doctor and took time to understand the issues. It's been 3 months since my ACL surgery, and now I can walk and even jog without any pain. I was very anxious before the operation, but he explained everything in detail and made me feel comfortable. The recovery process was smooth, and he was always available for any questions. I am grateful for his expertise and support throughout my treatment. Highly recommended for anyone facing knee problems or sports injuries.",
      rating: 5,
      category: "Knee Surgery"
    },
    {
      name: "Guddu (Wrestler)",
      condition: "Complex Trauma (Wrestling Injury)",
      quote: "गुड्डू पहलवान कुश्ती लड़ते-लड़ते घुटना खराब कर लेले हल। सभे कहलक अब ना लड़ पइब। लेकिन डॉक्टर गुरुदेव कुमार के इलाज से एक महीना में फिर से अखाड़ा में आ गेला। अइसन डॉक्टर बहुते कम मिलेला। इलाज बढ़िया आ डॉक्टर साहब बहुते बढ़िया आदमी हईं।",
      translation: "Guddu, a wrestler, injured his knee during a match. Everyone said he would never wrestle again. But with Dr. Gurudeo Kumar's treatment, he was back in the arena within a month. Such doctors are rare. The treatment was excellent and Dr. Sahib is a very good person.",
      rating: 5,
      category: "Sports Medicine"
    },
    {
      name: "Anonymous Patient",
      condition: "Ligament Tear (Football Injury)",
      quote: "I had a ligament tear from football. Dr. Gurudeo Kumar's treatment saved my career. Best sports doctor ever.",
      rating: 5,
      category: "Sports Injury"
    },
    {
      name: "Patient's Family",
      condition: "Knee Arthritis Treatment",
      quote: "Dr. Gurudeo Kumar is one of the best arthritis doctors in Patna. My mother was suffering from severe knee pain for years and was unable to walk properly. After consulting Dr. Kumar and following his treatment, she can now walk comfortably and do her daily work without any pain. He is very understanding, listens to the problem patiently, and gives the right advice. Thank you, doctor, for giving my mother a new life.",
      rating: 5,
      category: "Arthritis Treatment"
    },
    {
      name: "Anonymous Patient",
      condition: "Shoulder Dislocation",
      quote: "Mere shoulder dislocation ka best treatment Dr. Gurudeo Kumar ne diya. Ab dard bilkul nahi hai.",
      translation: "Dr. Gurudeo Kumar gave the best treatment for my shoulder dislocation. Now there is no pain at all.",
      rating: 5,
      category: "Shoulder Surgery"
    },
    {
      name: "Anonymous Patient",
      condition: "Knee Pain and Arthritis",
      quote: "मेरे घुटनों में बहुत दर्द था, डॉक्टर साहब के इलाज से अब बिना दर्द चल सकता हूँ।",
      translation: "I had a lot of pain in my knees, but after Dr. Kumar's treatment, I can now walk without pain.",
      rating: 5,
      category: "Knee Treatment"
    },
    {
      name: "Anonymous Patient",
      condition: "Back Pain",
      quote: "Back pain se pareshaan tha, Dr. Gurudeo Kumar ne theek kiya.",
      translation: "I was troubled by back pain, Dr. Gurudeo Kumar cured it.",
      rating: 5,
      category: "Spine Treatment"
    },
    {
      name: "Family Member",
      condition: "Bone Fracture (Family Testimonial)",
      quote: "डॉ. गुरुदेव कुमार ने मेरी माँ की हड्डी जोड़ दी।",
      translation: "Dr. Gurudeo Kumar fixed my mother's bone fracture.",
      rating: 5,
      category: "Fracture Treatment"
    },
    {
      name: "Anonymous Patient",
      condition: "General Recommendation",
      quote: "Very good doctor. I would suggest everyone that if there is any problem related to bone then definitely contact him.",
      rating: 5,
      category: "General"
    }
  ];

  const categories = ["All", "Sports Injury", "Knee Surgery", "Shoulder Surgery", "Spine Treatment", "Arthritis Treatment"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Patient Success Stories</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real experiences from patients who have received exceptional care at Arthros Center
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-slate-300" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-slate-400">{testimonial.condition}</div>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-cyan-400 text-2xl mb-3">"</div>
                  <p className="text-slate-300 mb-4 leading-relaxed italic flex-grow">
                    {testimonial.quote}
                  </p>
                  
                  {testimonial.translation && (
                    <p className="text-slate-400 text-sm mb-4 border-t border-slate-600 pt-3">
                      <strong>Translation:</strong> {testimonial.translation}
                    </p>
                  )}
                  
                  <div className="mt-auto">
                    <span className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs">
                      {testimonial.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Card className="bg-slate-700/50 border-slate-600 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-white mb-6">Join Our Success Stories</h3>
                <p className="text-slate-300 mb-6 text-lg">
                  Experience the same level of care and expertise that has helped thousands of patients 
                  return to their active lives pain-free.
                </p>
                <Button 
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg"
                  onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
                >
                  Book Your Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TestimonialsPage;
