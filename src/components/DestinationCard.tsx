
import { motion } from 'framer-motion';

interface DestinationCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
}

export const DestinationCard = ({ title, description, image, category }: DestinationCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-lg cursor-pointer"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={image} 
          alt={title}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
        <div className="absolute bottom-0 p-6">
          <span className="inline-block bg-sage/90 text-white px-3 py-1 rounded-full text-sm mb-3">
            {category}
          </span>
          <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-white/90 line-clamp-2">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};
