
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface TourCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
}

export const TourCard = ({ title, description, image, duration, price }: TourCardProps) => {
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
        <p className="text-charcoal/70 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-charcoal/60">{duration}</span>
            <p className="text-lg font-semibold text-cinnamon">{price}</p>
          </div>
          <button className="text-sage hover:text-sage-light transition-colors group">
            Learn More
            <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
