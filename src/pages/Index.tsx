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
    title: "Scenic Tours",
    description:
      "Explore Sri Lanka’s breath-taking landscapes, including tea plantations, waterfalls, and pristine beaches.",
    description2:
      "Immerse yourself in the island’s vibrant biodiversity and serene countryside.",
    description3: "",
    image: "/src/images/sunset.png",
  },
  {
    title: "Self-Spiritual Tours",
    description:
      "Reconnect with your inner self through curated spiritual journeys.",
    description2:
      "Visit ancient temples, participate inmeditation retreats, andexperience traditional healingpractice",
    description3: "",
    image: "/src/images/spiritual.png",
  },
  {
    title: "Cultural Immersion Experiences",
    description:
      "Engage with local communities throughworkshops, festivals, and home stays.",
    description2:
      "Learn traditional crafts, cooking, andcultural practices directly from thelocal.",
    description3: "",
    image: "/src/images/cultural.png",
  },
  {
    title: "Adventure Expeditions",
    description:
      "Embark on thrilling activities such ashiking, wildlife safaris, and watersports.",
    description2:
      "Discover hidden trails and off-the-beaten-path destinations.",
    description3: "",
    image: "/src/images/6.png",
  },
  {
    title: "Experiencesin Yoga and Buddhism as a philosophy",
    description:
      "Dive intothe philosophy ofBuddhism throughtemple visits,guided teachings,and discussionswith monks.",
    description2:
      "Participatein yoga retreats designed to harmonize mind, body, and soul, often held in serenenatural settings.",
    description3:
      "Explore the intersection of mindfulness and movement, learning techniques that youcan carry forward in your life.",
    image: "/src/images/2.png",
  },
  {
    title: "Exploration of Sri Lankan Martial Arts – Angampora",
    description:
      "Discover the ancient martial art ofAngampora, unique to Sri Lanka.",
    description2:
      "Participate in workshops anddemonstrations that reveal the art’s deepcultural roots and its focus on discipline andharmony.",
    description3:
      "Engage with practitioners who preserve thiscenturies-old tradition and share its stories.",
    image: "/src/images/martial.png",
  },
  {
    title: "Ayurveda Treatments and Sathvic Food",
    description:
      "Experience the healingpower of Ayurveda, SriLanka’s ancient medicalsystem, through personalized wellness treatments and therapies.",
    description2:
      "Rejuvenate your body and mind with massages, herbal remedies, and detoxifyingrituals tailored to your needs.",
    description3:
      "Enjoy the benefits of Sathvic food, a diet rooted in balance and purity, crafted usingfresh, local, and organic ingredients to nourish your soul.",
    image: "/src/images/fruits.png",
  },
  {
    title: "Customized Travel Packages",
    description:
      "Tailor your travel experience to suit your unique interests and needs.",
    description2:
      "Whether you seek relaxation, adventure, or cultural exploration, we craft itineraries just for you.",
    description3: "",
    image: "/src/images/custom.png",
  },
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
              Immerse yourself in Sri Lanka's diverse experiences with our
              carefully crafted tours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tours.map((tour, index) => (
              <TourCard key={index} {...tour} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-sand/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-cinnamon/10 text-cinnamon px-4 py-1 rounded-full text-sm mb-4">
              About us
            </span>
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Introduction
            </h2>
            <p className="text-xl  text-charcoal/90 max-w-2xl mx-auto">
              <div style={{ textAlign: "left" }}>
                Mandala – The Universe, is more than a travel company; it is a
                gateway to self- exploration and an expedition into nature. Sri
                Lanka, our home base, is not merely a destination to visit but a
                land of profound self-discovery. With its stunning natural
                landscapes, deep-rooted community values, and unparalleled
                hospitality, Sri Lanka invites travellers to embark on journeys
                that touch the soul and awaken the senses.
                <img
                  src="/src/images/1.png"
                  alt="title"
                  className="mt-16 mb-16 mx-auto"
                />
                Our core team at Mandala Travels has over 15 years of experience
                in cultural and community-based tourism. Our unique offerings
                have enabled countless travelers from across the globe to
                immerse themselves in the vibrant cultures of Sri Lanka and
                India. As passionate travelers ourselves, we ensure that every
                experience we offer is infused with heart and authenticity.
                Following a hiatus during the COVID-19 pandemic, we have
                rebranded and revitalized Mandala Travels with a newly developed
                homely villa in Colombo, ready to welcome the world once again.
                <br />
                <br />
                <b>Our Vision : </b>To provide personalized, soul-stirring
                travel experiences that connect people to the essence of Sri
                Lanka—its culture, nature, and spirituality—in a way that is
                both affordable and memorable.
                <br />
                <br />
                <b>Our Mission : </b> To stand apart in today’s competitive
                travel industry by offering tailor-made, heartfelt travel
                experiences that prioritize meaningful connections, community
                engagement, and sustainability. We aim to create lasting
                memories while preserving the beauty and integrity of Sri
                Lanka’s cultural and natural heritage.
                <img
                  src="/src/images/yasinta1.png"
                  alt="title"
                  className="mt-16 mb-16 mx-auto"
                />
                <b>Our story : </b>Yasintha is a passionate advocate for soulful
                travel, mental wellness, and cross-cultural relationships. A
                dedicated yoga practitioner, she incorporates yoga as a method
                of relaxation and mental health management. She is also a big
                fan of laughter yoga, a joyful practice she learned during her
                remarkable time in India. Her experiences in India significantly
                shaped her approach to wellness and cross-cultural learning.
                <img
                  src="/src/images/yasinta2.png"
                  alt="title"
                  className="mt-16 mb-16 mx-auto"
                />
                Coming from humble beginnings in a Sri Lankan village, Yasintha
                worked tirelessly to realize her dream of exploring the world.
                She established and successfully ran a community volunteerism
                program for 12 years, connecting the UK, Sri Lanka, and India.
                This initiative created meaningful experiences for thousands of
                participants while showcasing Sri Lanka’s magical beauty through
                a cultural lens. As a social worker and mental health
                practitioner, Yasintha has traveled extensively across the
                globe, sharing knowledge and building bridges between diverse
                cultures. Her journey reflects resilience and determination,
                overcoming gender-based discrimination and inspiring others. She
                excels in creating opportunities for travelers to gain new
                perspectives, ensuring they return with a relaxed mind and a
                renewed outlook, carrying the essence of Sri Lanka with them.
                <img
                  src="/src/images/yasinta3.png"
                  alt="title"
                  className="mt-16 mb-16 mx-auto"
                />
                Building on her passion and expertise, Yasintha is now creating
                "Mandala - The Universe Travel with Soul Journey." This
                initiative is designed to help people reconnect and regain
                balance after the forced breaks imposed by COVID-19 and its
                aftermath. Through this journey, Yasintha aims to offer
                transformative travel experiences that foster mental wellness,
                cultural understanding, and personal growth.
                <img
                  src="/src/images/about2.png"
                  alt="title"
                  className="mt-16 mb-16 mx-auto"
                />
                Indika comes from a background in security and aviation
                management, bringing a unique perspective to the travel
                industry. With a deep passion for travel, he views exploration
                as an opportunity to connect with the world beyond the surface.
                Indika’s professional experiences have instilled in him a strong
                sense of discipline, adaptability, and attention to detail—all
                qualities that enhance the travel experiences he curates. His
                love for travel stems from a desire to explore with purpose and
                immerse himself in diverse cultures and traditions. Indika has
                played a key role in creating seamless and enriching journeys
                for travelers, ensuring that every detail contributes to a
                meaningful experience. His commitment to fostering
                cross-cultural understanding and his enthusiasm for showcasing
                Sri Lanka’s beauty make him an invaluable member of the Mandala
                Travels team.
                <img
                  src="/src/images/about3.png"
                  alt="title"
                  className="mt-16 mb-16 mx-auto"
                />
                <b>Why Sri Lanka?</b>
                <br />
                <br />
                Sri Lanka is a treasure trove of experiences. From its serene
                beaches and lush rainforests to its majestic mountains and
                ancient temples, the island is a paradise for nature lovers and
                seekers of spiritual growth. It’s warm and welcoming people
                uphold values of community and hospitality, making every
                traveler feel at home. Sri Lanka is not just a place to see; it
                is a destination to feel and to be transformed by.
                <img
                  src="/src/images/3.png"
                  alt="title"
                  className="mt-16 mb-16 mx-auto"
                />
                <b>Why Choose Mandala Travels?</b>
                <br />
                <br />
                <b>Authenticity : </b> We focus on creating genuine, meaningful
                connections between travelers and the places they visit.
                <br />
                <br />
                <b>Sustainability : </b> Our tours are designed to support local
                communities and preserve Sri Lanka’s natural and cultural
                heritage.
                <img
                  src="/src/images/5.png"
                  alt="title"
                  className="mt-16 mb-16 mx-auto"
                />
              </div>
            </p>
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
              Ready to explore the wonders of Sri Lanka? Contact us for
              personalized travel plans and expert guidance
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
                  <p className="text-charcoal/70">
                    info@mandalaceylontravels.lk
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-sand/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-cinnamon" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Call Us</h3>
                  <p className="text-charcoal/70">+94 77 998 3364</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-sand/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-cinnamon" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Visit Us</h3>
                  <p className="text-charcoal/70">
                    123 Galle Road, Colombo 03, Sri Lanka
                  </p>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-sand/10 p-8 rounded-xl"
            >
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
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
