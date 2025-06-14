
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const MCLReconstruction = () => {
  return (
    <>
      <title>MCL Reconstruction Surgery in Patna | MCL Surgery India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert MCL reconstruction surgery in Patna by Dr. Gurudeo Kumar. Medial collateral ligament reconstruction for knee stability. Serving Bengal, North East, Nepal." />
      <meta name="keywords" content="MCL reconstruction Patna, MCL surgery India, medial collateral ligament surgery, Dr Gurudeo Kumar, MCL reconstruction Bengal" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              MCL Reconstruction Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Expert MCL reconstruction surgery by Dr. Gurudeo Kumar for medial collateral ligament injuries using advanced techniques for optimal knee stability.
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
              src="/lovable-uploads/243a83c3-ea4b-4413-a11e-c9de37592930.png" 
              alt="MCL reconstruction surgery procedure at Arthros Center by Dr. Gurudeo Kumar"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <div className="prose prose-lg max-w-none text-slate-300">
              <h2 className="text-2xl font-bold text-white mb-6">Advanced MCL Reconstruction Techniques</h2>
              
              <p className="text-lg leading-relaxed mb-6">
                MCL reconstruction surgery is a specialized procedure designed to restore function to the medial collateral ligament, one of the most important stabilizing structures on the inner side of the knee. At Arthros Center in Patna, Dr. Gurudeo Kumar provides expert care for MCL injuries, serving patients from across India, Bengal, North East regions, and Nepal. The MCL is crucial for preventing excessive inward movement of the knee and works in conjunction with other ligaments to maintain overall knee stability during various activities.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                MCL injuries typically result from direct impact to the outer side of the knee or from rotational forces that stress the inner knee structures. Dr. Gurudeo Kumar's approach to MCL reconstruction begins with comprehensive evaluation to determine the extent of injury and assess for associated damage to other knee structures. Many MCL injuries can be treated conservatively, but severe grade III tears or chronic instability often require surgical reconstruction to restore optimal knee function and prevent long-term complications.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The surgical technique for MCL reconstruction varies depending on the location and severity of the injury. Dr. Kumar utilizes both open and arthroscopic approaches based on individual patient factors and the specific pattern of MCL damage. For proximal MCL tears, direct repair with suture anchors may be possible, while chronic or extensive injuries typically require reconstruction using tendon grafts. The choice of surgical approach is carefully planned to optimize healing and restore normal knee biomechanics.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Graft selection for MCL reconstruction requires consideration of the specific biomechanical demands of the medial knee structures. Dr. Gurudeo Kumar often utilizes hamstring tendon autograft or allograft tissue, depending on patient factors and concurrent procedures. The graft is carefully positioned to recreate the normal anatomy and function of the MCL, with particular attention to restoring both the superficial and deep fibers of the ligament complex that provide stability in different planes of motion.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                MCL reconstruction often occurs in conjunction with other knee procedures, particularly <a href="/acl-reconstruction" className="text-cyan-400 hover:text-cyan-300">ACL reconstruction</a> or <a href="/multi-ligament-reconstruction" className="text-cyan-400 hover:text-cyan-300">multi-ligament reconstruction</a> surgeries. Dr. Kumar's expertise in complex knee surgery allows for coordinated surgical planning that addresses all injured structures while optimizing healing and rehabilitation. The timing and sequencing of combined procedures are carefully planned to ensure optimal outcomes and minimize complications.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Post-operative rehabilitation following MCL reconstruction is crucial for achieving optimal outcomes and typically involves a progressive program designed to protect the healing graft while restoring knee function. Dr. Gurudeo Kumar's rehabilitation protocols emphasize early protected motion and gradual strengthening, with particular attention to restoring normal movement patterns and preventing stiffness. The program includes specialized exercises to strengthen the muscles that support the medial knee structures.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The rehabilitation process following MCL reconstruction typically spans 4-6 months, with gradual progression through phases of healing and functional restoration. For patients traveling from Bengal, North East India, and Nepal, Dr. Kumar's team provides comprehensive rehabilitation protocols and coordinates with local physiotherapy providers to ensure continuity of care. Regular follow-up appointments monitor healing progress and adjust rehabilitation programs based on individual patient response.
              </p>

              <p className="text-lg leading-relaxed">
                Long-term outcomes following MCL reconstruction by Dr. Gurudeo Kumar demonstrate excellent success rates in restoring knee stability and function. The success of MCL reconstruction depends on proper surgical technique, appropriate rehabilitation, and patient compliance with post-operative protocols. Dr. Kumar's comprehensive approach to MCL reconstruction ensures optimal outcomes for patients with these challenging injuries, helping them return to their desired activity levels with restored knee stability and confidence in their knee function.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-12 py-4 text-xl"
              onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
            >
              Book Your MCL Reconstruction Consultation
            </Button>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default MCLReconstruction;
