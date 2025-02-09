
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { DestinationCard } from "@/components/DestinationCard";

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
    </div>
  );
};

export default Index;
