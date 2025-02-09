
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { DestinationCard } from "@/components/DestinationCard";
import { TourCard } from "@/components/TourCard";

const destinations = [
  {
    title: "Sigiriya Rock Fortress",
    description: "Ancient palace and fortress complex with stunning frescoes and lion sculptures",
    image: "https://images.unsplash.com/photo-1586958241443-8e36cc0a9bd3?q=80&w=2970&auto=format&fit=crop",
    category: "Heritage"
  },
  {
    title: "Mirissa Beach",
    description: "Pristine coastline perfect for whale watching and surfing",
    image: "https://images.unsplash.com/photo-1586958841642-9a3eb3ef6dd4?q=80&w=2970&auto=format&fit=crop",
    category: "Coastal"
  },
  {
    title: "Ella Tea Plantations",
    description: "Rolling hills covered in emerald tea estates and misty mountains",
    image: "https://images.unsplash.com/photo-1586958314857-f87d9f1d2f76?q=80&w=2970&auto=format&fit=crop",
    category: "Nature"
  }
];

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
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      
      <section id="destinations" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-sand text-cinnamon px-4 py-1 rounded-full text-sm mb-4">
              Popular Destinations
            </span>
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Discover Paradise
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Explore Sri Lanka's most breathtaking locations, from ancient ruins to pristine beaches
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <DestinationCard key={index} {...destination} />
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Index;
