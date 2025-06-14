
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const KneeReplacement = () => {
  return (
    <>
      <title>Knee Replacement Surgery in Patna | Total Knee Replacement India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert knee replacement surgery in Patna by Dr. Gurudeo Kumar. Total and partial knee replacement with modern implants. Serving Bengal, North East, Nepal patients." />
      <meta name="keywords" content="knee replacement Patna, total knee replacement India, partial knee replacement Patna, Dr Gurudeo Kumar, knee replacement Bengal, knee surgery Nepal" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Knee Replacement Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advanced knee replacement surgery by Dr. Gurudeo Kumar using modern implant technology for optimal pain relief and function restoration.
            </p>
            <Button 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
            >
              Book Appointment
            </Button>
          </div>

          <div className="mb-12 rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/22a9001a-0766-4a86-b778-f8bdbe313c26.png" 
              alt="Knee replacement surgery being performed by Dr. Gurudeo Kumar at Arthros Center"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <div className="prose prose-lg max-w-none text-slate-300">
              <h2 className="text-2xl font-bold text-white mb-6">Modern Knee Replacement Surgery</h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Knee replacement surgery has revolutionized the treatment of severe knee arthritis and joint damage, providing excellent pain relief and functional restoration for millions of patients worldwide. At Arthros Center in Patna, Dr. Gurudeo Kumar specializes in both total and partial knee replacement procedures, serving patients from across India, Bengal, North East regions, and Nepal. Modern knee replacement techniques utilize advanced implant designs, computer-assisted surgery, and minimally invasive approaches to optimize outcomes and accelerate recovery.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Total knee replacement involves replacing the damaged cartilage and bone surfaces of the knee joint with prosthetic components made from high-grade metals and medical-grade plastic. Dr. Gurudeo Kumar employs the latest generation of knee implants that are designed to closely replicate natural knee anatomy and biomechanics. These modern implants offer improved durability, better range of motion, and more natural feeling knee function, with many designs lasting 20-25 years or longer with proper care and activity modification.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Patient selection for knee replacement is carefully considered by Dr. Kumar, taking into account factors such as severity of arthritis, functional limitations, pain levels, and quality of life impact. While age was traditionally a major factor, modern implant designs and surgical techniques have expanded the candidate pool to include younger, more active patients when conservative treatments have failed. Advanced imaging studies and clinical assessment help determine the optimal timing and type of knee replacement for each individual patient.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Partial knee replacement, also known as unicompartmental knee replacement, represents an excellent option for patients with arthritis limited to one compartment of the knee. Dr. Gurudeo Kumar specializes in this less invasive procedure that preserves healthy bone and ligaments while replacing only the damaged portion of the knee joint. Partial knee replacement offers faster recovery, better range of motion, and more natural knee feel compared to total knee replacement when appropriate candidates are selected.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The surgical technique for knee replacement has evolved significantly with the introduction of computer-assisted navigation and robotic surgery systems. Dr. Kumar utilizes these advanced technologies to ensure precise implant positioning, optimal alignment, and improved surgical outcomes. Computer navigation provides real-time feedback during surgery, allowing for adjustments that optimize implant placement and knee mechanics. These technologies have been shown to improve implant longevity and functional outcomes.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Minimally invasive knee replacement techniques employed by Dr. Gurudeo Kumar focus on preserving muscle and soft tissue structures around the knee while achieving the same excellent outcomes as traditional approaches. These techniques utilize smaller incisions and specialized instruments to minimize tissue trauma, reduce post-operative pain, and accelerate recovery. Patients often experience faster rehabilitation, shorter hospital stays, and quicker return to normal activities with minimally invasive approaches.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Post-operative rehabilitation following knee replacement is crucial for optimal outcomes and begins immediately after surgery. Dr. Kumar's rehabilitation protocols emphasize early mobilization, progressive strengthening, and functional training to maximize the benefits of the new knee joint. The rehabilitation process typically spans 3-6 months, with most patients achieving significant pain relief and improved function within the first few weeks. Specialized physiotherapy programs are designed to restore normal walking patterns and return patients to their desired activity levels.
              </p>

              <p className="text-lg leading-relaxed">
                Long-term outcomes following knee replacement by Dr. Gurudeo Kumar demonstrate excellent success rates with over 95% of patients experiencing significant pain relief and improved quality of life. Modern knee implants are designed to last decades with proper care, and most patients can return to low-impact activities, recreational sports, and normal daily activities. Regular follow-up monitoring ensures optimal implant function and early detection of any potential issues, ensuring the best possible long-term outcomes for patients who undergo this life-changing procedure.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-12 py-4 text-xl"
              onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
            >
              Book Your Knee Replacement Consultation
            </Button>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default KneeReplacement;
