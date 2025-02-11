import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="hero" className="">
      <div className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=3270&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="container mx-auto px-6 animate-fade-in">
            <span className="inline-block bg-sage/90 text-white px-4 py-1 rounded-full text-sm mb-6">
              Discover the Pearl of the Indian Ocean
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Experience Sri Lanka's Magic
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Embark on a journey through ancient temples, pristine beaches, and
              lush tea plantations with our curated luxury tours.
            </p>
            <Button
              className="bg-cinnamon hover:bg-cinnamon-light text-white text-lg px-8 py-6"
              onClick={() =>
                document
                  .getElementById("tours")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Our Tours
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
