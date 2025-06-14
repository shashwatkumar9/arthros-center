
import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const SearchCommand = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const searchData = [
    // Knee Surgeries - ACL Procedures
    { category: "ACL Procedures", title: "ACL Reconstruction", route: "/acl-reconstruction" },
    { category: "ACL Procedures", title: "ACL Repair", route: "/acl-repair" },
    { category: "ACL Procedures", title: "Revision ACL Surgery", route: "/revision-acl-surgery" },
    { category: "ACL Procedures", title: "ACL with Meniscus Repair", route: "/acl-with-meniscus-repair" },
    
    // Knee Surgeries - PCL & Multi-ligament
    { category: "PCL & Multi-ligament", title: "PCL Reconstruction", route: "/pcl-reconstruction" },
    { category: "PCL & Multi-ligament", title: "MCL Reconstruction", route: "/mcl-reconstruction" },
    { category: "PCL & Multi-ligament", title: "Multi-ligament Reconstruction", route: "/multi-ligament-reconstruction" },
    { category: "PCL & Multi-ligament", title: "Posterolateral Corner Repair", route: "/posterolateral-corner-repair" },
    
    // Knee Surgeries - Other Knee Procedures
    { category: "Other Knee Procedures", title: "Meniscus Repair", route: "/meniscus-repair" },
    { category: "Other Knee Procedures", title: "Knee Replacement", route: "/knee-replacement" },
    { category: "Other Knee Procedures", title: "Patella Stabilization", route: "/patella-stabilization" },
    { category: "Other Knee Procedures", title: "Cartilage Restoration", route: "/cartilage-restoration" },

    // Shoulder & Elbow
    { category: "Shoulder & Elbow", title: "Rotator Cuff Repair", route: "/shoulder-elbow" },
    { category: "Shoulder & Elbow", title: "Massive Rotator Cuff Repair", route: "/shoulder-elbow" },
    { category: "Shoulder & Elbow", title: "Rotator Cuff Reconstruction", route: "/shoulder-elbow" },
    { category: "Shoulder & Elbow", title: "Bankart Repair", route: "/shoulder-elbow" },
    { category: "Shoulder & Elbow", title: "Latarjet Procedure", route: "/shoulder-elbow" },
    { category: "Shoulder & Elbow", title: "SLAP Repair", route: "/shoulder-elbow" },
    { category: "Shoulder & Elbow", title: "Tennis Elbow Surgery", route: "/shoulder-elbow" },
    { category: "Shoulder & Elbow", title: "Golfer's Elbow Treatment", route: "/shoulder-elbow" },
    { category: "Shoulder & Elbow", title: "Elbow Arthroscopy", route: "/shoulder-elbow" },
    { category: "Shoulder & Elbow", title: "UCL Reconstruction", route: "/shoulder-elbow" },

    // Hip & Pelvis
    { category: "Hip & Pelvis", title: "Total Hip Replacement", route: "/hip-pelvis" },
    { category: "Hip & Pelvis", title: "Hip Resurfacing", route: "/hip-pelvis" },
    { category: "Hip & Pelvis", title: "Revision Hip Surgery", route: "/hip-pelvis" },
    { category: "Hip & Pelvis", title: "FAI Surgery", route: "/hip-pelvis" },
    { category: "Hip & Pelvis", title: "Labral Repair", route: "/hip-pelvis" },
    { category: "Hip & Pelvis", title: "Hip Impingement Treatment", route: "/hip-pelvis" },
    { category: "Hip & Pelvis", title: "Pelvic Fracture Repair", route: "/hip-pelvis" },
    { category: "Hip & Pelvis", title: "Sacroiliac Joint Treatment", route: "/hip-pelvis" },

    // Spine
    { category: "Spine", title: "Cervical Disc Replacement", route: "/spine" },
    { category: "Spine", title: "Cervical Fusion", route: "/spine" },
    { category: "Spine", title: "Cervical Laminectomy", route: "/spine" },
    { category: "Spine", title: "Lumbar Fusion", route: "/spine" },
    { category: "Spine", title: "Disc Replacement", route: "/spine" },
    { category: "Spine", title: "Microdiscectomy", route: "/spine" },
    { category: "Spine", title: "Spinal Stenosis Surgery", route: "/spine" },
    { category: "Spine", title: "Endoscopic Spine Surgery", route: "/spine" },
    { category: "Spine", title: "Percutaneous Procedures", route: "/spine" },

    // Sports Medicine
    { category: "Sports Medicine", title: "ACL Injuries", route: "/sports-medicine" },
    { category: "Sports Medicine", title: "Meniscus Tears", route: "/sports-medicine" },
    { category: "Sports Medicine", title: "Shoulder Dislocations", route: "/sports-medicine" },
    { category: "Sports Medicine", title: "Ankle Sprains", route: "/sports-medicine" },
    { category: "Sports Medicine", title: "Return to Sport Programs", route: "/sports-medicine" },
    { category: "Sports Medicine", title: "Injury Prevention", route: "/sports-medicine" },
    { category: "Sports Medicine", title: "Sports Physicals", route: "/sports-medicine" },
    { category: "Sports Medicine", title: "Concussion Management", route: "/sports-medicine" },
    { category: "Sports Medicine", title: "Overuse Injuries", route: "/sports-medicine" },
    { category: "Sports Medicine", title: "Youth Sports Medicine", route: "/sports-medicine" },

    // Hand & Wrist
    { category: "Hand & Wrist", title: "Carpal Tunnel Release", route: "/hand-wrist" },
    { category: "Hand & Wrist", title: "Trigger Finger Surgery", route: "/hand-wrist" },
    { category: "Hand & Wrist", title: "Dupuytren's Surgery", route: "/hand-wrist" },
    { category: "Hand & Wrist", title: "Hand Fracture Repair", route: "/hand-wrist" },
    { category: "Hand & Wrist", title: "Wrist Arthroscopy", route: "/hand-wrist" },
    { category: "Hand & Wrist", title: "TFCC Repair", route: "/hand-wrist" },
    { category: "Hand & Wrist", title: "Wrist Fracture Surgery", route: "/hand-wrist" },
    { category: "Hand & Wrist", title: "Ganglion Cyst Removal", route: "/hand-wrist" },
    { category: "Hand & Wrist", title: "Cubital Tunnel Surgery", route: "/hand-wrist" },
    { category: "Hand & Wrist", title: "Nerve Repair", route: "/hand-wrist" },
    { category: "Hand & Wrist", title: "Nerve Transfer", route: "/hand-wrist" },

    // Foot & Ankle
    { category: "Foot & Ankle", title: "Bunion Surgery", route: "/foot-ankle" },
    { category: "Foot & Ankle", title: "Hammertoe Correction", route: "/foot-ankle" },
    { category: "Foot & Ankle", title: "Plantar Fasciitis Surgery", route: "/foot-ankle" },
    { category: "Foot & Ankle", title: "Achilles Repair", route: "/foot-ankle" },
    { category: "Foot & Ankle", title: "Ankle Arthroscopy", route: "/foot-ankle" },
    { category: "Foot & Ankle", title: "Ankle Replacement", route: "/foot-ankle" },
    { category: "Foot & Ankle", title: "Ankle Fusion", route: "/foot-ankle" },
    { category: "Foot & Ankle", title: "Ligament Reconstruction", route: "/foot-ankle" },
    { category: "Foot & Ankle", title: "Jones Fracture", route: "/foot-ankle" },
    { category: "Foot & Ankle", title: "Turf Toe Treatment", route: "/foot-ankle" },
  ];

  const groupedData = searchData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof searchData>);

  const handleSelect = (route: string) => {
    navigate(route);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="w-full justify-start bg-slate-700 border-slate-600 text-slate-400 hover:bg-slate-600 hover:text-white"
        >
          <Search className="mr-2 h-4 w-4" />
          Search procedures, conditions...
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0" align="start">
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Search procedures, conditions..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {Object.entries(groupedData).map(([category, items]) => (
              <CommandGroup key={category} heading={category}>
                {items.map((item) => (
                  <CommandItem
                    key={item.title}
                    onSelect={() => handleSelect(item.route)}
                    className="cursor-pointer"
                  >
                    {item.title}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SearchCommand;
