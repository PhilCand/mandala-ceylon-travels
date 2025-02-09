import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TourCard } from "@/components/TourCard";
import { Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const tours = [
  {
    title: "Cultural Heritage Tour",
    description: "Explore ancient temples, historical sites, and traditional ceremonies across the Cultural Triangle.",
    image: "https://images.unsplash.com/photo-1578005343415-fa110acd2bf6?q=80&w=2000&auto=format&fit=crop",
    duration: "7 Days",
    price: "From $1,299"
  },
  {
    title: "Wildlife Safari Adventure",
    description: "Encounter elephants, leopards, and exotic birds in their natural habitats at national parks.",
    image: "https://images.unsplash.com/photo-1562512048-4fa45844b241?q=80&w=2000&auto=format&fit=crop",
    duration: "5 Days",
    price: "From $999"
  },
  {
    title: "Tea Plantation Experience",
    description: "Journey through emerald tea estates, learn about tea production, and taste Ceylon's finest teas.",
    image: "https://images.unsplash.com/photo-1586958314857-f87d9f1d2f76?q=80&w=2000&auto=format&fit=crop",
    duration: "4 Days",
    price: "From $799"
  },
  {
    title: "Coastal Paradise Tour",
    description: "Relax on pristine beaches, enjoy water sports, and watch whales in their natural habitat.",
    image: "https://images.unsplash.com/photo-1586958341943-627255e3602d?q=80&w=2000&auto=format&fit=crop",
    duration: "6 Days",
    price: "From $1,099"
  },
  {
    title: "Wellness & Ayurveda Retreat",
    description: "Experience traditional healing practices, yoga sessions, and meditation in serene settings.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2000&auto=format&fit=crop",
    duration: "8 Days",
    price: "From $1,499"
  },
  {
    title: "Adventure Sports Package",
    description: "Get your adrenaline pumping with white-water rafting, rock climbing, and hiking expeditions.",
    image: "https://images.unsplash.com/photo-1583830379747-145ee3dffa68?q=80&w=2000&auto=format&fit=crop",
    duration: "5 Days",
    price: "From $899"
  },
  {
    title: "Culinary Journey",
    description: "Discover Sri Lankan cuisine through cooking classes, spice garden visits, and food tours.",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2000&auto=format&fit=crop",
    duration: "4 Days",
    price: "From $749"
  },
  {
    title: "Hill Country Explorer",
    description: "Trek through misty mountains, visit waterfalls, and experience local village life.",
    image: "https://images.unsplash.com/photo-1586958314857-f87d9f1d2f76?q=80&w=2000&auto=format&fit=crop",
    duration: "6 Days",
    price: "From $999"
  }
];

const Index = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      
      <section id="tours" className="py-20 bg-sand/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-sage/20 text-sage px-4 py-1 rounded-full text-sm mb-4">
              Curated Experiences
            </span>
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Our Signature Tours
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Immerse yourself in Sri Lanka's diverse experiences with our carefully crafted tours
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tours.map((tour, index) => (
              <TourCard key={index} {...tour} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-cinnamon/10 text-cinnamon px-4 py-1 rounded-full text-sm mb-4">
              Get in Touch
            </span>
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Plan Your Dream Journey
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Ready to explore the wonders of Sri Lanka? Contact us for personalized travel plans and expert guidance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-sand/20 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-cinnamon" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Email Us</h3>
                  <p className="text-charcoal/70">info@ceylondreams.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-sand/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-cinnamon" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Call Us</h3>
                  <p className="text-charcoal/70">+94 11 234 5678</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-sand/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-cinnamon" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Visit Us</h3>
                  <p className="text-charcoal/70">123 Galle Road, Colombo 03, Sri Lanka</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-sand/10 p-8 rounded-xl">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your dream vacation in Sri Lanka"
                  className="min-h-[120px]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-cinnamon hover:bg-cinnamon-light text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
