"use client";

import { motion } from 'framer-motion';

interface ProductCardProps {
  title: string;
  description: string;
  imageName: string;
  isReversed?: boolean;
}

export default function ProductCard({ title, description, imageName, isReversed = false }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-gray-200 hover:border-primary/20 transition-all duration-300`}
    >
      <div className="w-full md:w-1/2">
        <div className={`aspect-square rounded-lg overflow-hidden bg-gradient-to-br ${isReversed ? 'from-secondary/10 to-primary/10' : 'from-primary/10 to-secondary/10'}`}>
          <div className="w-full h-full bg-[url('/images/texture-pattern.svg')] opacity-20" />
        </div>
      </div>
      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold text-secondary">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}