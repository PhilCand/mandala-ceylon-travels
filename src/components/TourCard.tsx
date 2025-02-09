import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface TourCardProps {
  title: string;
  description: string;
  description2: string;
  description3: string;
  image: string;
}

export const TourCard = ({
  title,
  description,
  description2,
  description3,
  image,
}: TourCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-charcoal mb-2">{title}</h3>
        <p className="text-charcoal/70 mb-4 ">{description}</p>
        <p className="text-charcoal/70 mb-4 ">{description2}</p>
        <p className="text-charcoal/70 mb-4 ">{description3}</p>
      </div>
    </motion.div>
  );
};
