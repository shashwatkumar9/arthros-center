
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const PCLReconstruction = () => {
  return (
    <>
      <title>PCL Reconstruction Surgery in Patna | PCL Surgery India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert PCL reconstruction surgery in Patna by Dr. Gurudeo Kumar. Advanced posterior cruciate ligament reconstruction. Serving Bengal, North East, Nepal patients." />
      <meta name="keywords" content="PCL reconstruction Patna, PCL surgery India, posterior cruciate ligament surgery, Dr Gurudeo Kumar, PCL reconstruction Bengal" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              PCL Reconstruction Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advanced PCL reconstruction surgery by Dr. Gurudeo Kumar using specialized techniques for posterior cruciate ligament injuries and optimal knee stability.
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
              alt="Dr. Gurudeo Kumar performing PCL reconstruction surgery at Arthros Center Patna"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <div className="prose prose-lg max-w-none text-slate-300">
              <h2 className="text-2xl font-bold text-white mb-6">Understanding PCL Reconstruction Surgery</h2>
              
              <p className="text-lg leading-relaxed mb-6">
                PCL reconstruction surgery is a highly specialized procedure designed to restore function to the posterior cruciate ligament, the strongest and most complex ligament in the knee joint. At Arthros Center in Patna, Dr. Gurudeo Kumar brings extensive expertise in PCL reconstruction, serving patients from across India, Bengal, North East regions, and Nepal who have sustained these challenging injuries. The PCL is crucial for knee stability, particularly during activities involving knee flexion and preventing backward movement of the tibia relative to the femur.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                PCL injuries are significantly less common than <a href="/acl-reconstruction" className="text-cyan-400 hover:text-cyan-300">ACL injuries</a> but are often more complex to diagnose and treat due to the ligament's deep anatomical position and poor healing characteristics. Dr. Gurudeo Kumar's approach to PCL reconstruction involves comprehensive evaluation using advanced imaging techniques including MRI and stress radiographs to assess the extent of injury and plan the optimal surgical approach. The decision for surgical intervention depends on factors such as degree of instability, associated injuries, patient activity level, and functional limitations.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The surgical technique for PCL reconstruction is technically demanding due to the ligament's anatomical location and the challenges of achieving optimal graft positioning. Dr. Kumar utilizes arthroscopic techniques combined with specialized instrumentation designed specifically for PCL reconstruction. The procedure involves creating precise bone tunnels in both the tibia and femur, with particular attention to achieving anatomical placement that restores the PCL's complex fiber orientation and biomechanical function.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Graft selection for PCL reconstruction requires careful consideration of the high forces transmitted through this ligament. Dr. Gurudeo Kumar typically utilizes Achilles tendon allograft or hamstring autograft, depending on individual patient factors and preferences. The Achilles tendon allograft provides excellent strength characteristics and bone block fixation, while hamstring autograft avoids donor site morbidity from allograft tissue. The choice is individualized based on patient age, activity level, and associated injuries requiring treatment.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The surgical procedure at Arthros Center utilizes state-of-the-art arthroscopic equipment and specialized PCL reconstruction instruments. Dr. Kumar employs transtibial tunnel techniques with careful attention to avoiding neurovascular structures and achieving optimal graft angles. The procedure often includes treatment of associated injuries such as <a href="/multi-ligament-reconstruction" className="text-cyan-400 hover:text-cyan-300">multi-ligament reconstructions</a> or meniscus repairs, as PCL injuries frequently occur as part of complex knee trauma requiring comprehensive surgical management.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Post-operative rehabilitation following PCL reconstruction is crucial for achieving optimal outcomes and differs significantly from ACL rehabilitation protocols. Dr. Gurudeo Kumar's rehabilitation program emphasizes early protected weight-bearing and range of motion while avoiding exercises that stress the healing PCL graft. The program includes specialized strengthening exercises for the quadriceps and hamstring muscles, with particular attention to restoring normal movement patterns and preventing complications such as arthrofibrosis.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The rehabilitation process typically spans 6-9 months, with gradual progression through phases of healing and functional restoration. For patients traveling from Bengal, North East India, and Nepal, Dr. Kumar's team provides comprehensive rehabilitation protocols and coordinates with local physiotherapy providers to ensure optimal care throughout the recovery period. Regular follow-up appointments and functional assessments monitor progress and adjust rehabilitation programs as needed.
              </p>

              <p className="text-lg leading-relaxed">
                Long-term outcomes following PCL reconstruction by Dr. Gurudeo Kumar demonstrate excellent results in appropriately selected patients, with significant improvement in knee stability and function. The success of PCL reconstruction depends on proper surgical technique, appropriate graft selection, and dedicated rehabilitation. Dr. Kumar's expertise in complex knee surgery and comprehensive approach to patient care ensures optimal outcomes for PCL reconstruction patients, helping them return to their desired activity levels with restored knee function and confidence.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-12 py-4 text-xl"
              onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
            >
              Book Your PCL Reconstruction Consultation
            </Button>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default PCLReconstruction;
