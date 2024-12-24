"use client";

import { motion } from 'framer-motion';
import { type ComponentType } from 'react';
import { type HeroIcon } from '@heroicons/react/24/outline';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ComponentType<HeroIcon>;
  color: string;
  index: number;
}

export default function ServiceCard({ title, description, icon: Icon, color, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group relative bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-8">
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${color} rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out`} />
        
        <div className="relative z-10">
          <Icon className="w-12 h-12 text-primary mb-6 transform group-hover:scale-110 transition-transform duration-300" />
          <h3 className="text-2xl font-bold text-secondary mb-4">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      
      <div className="h-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20" />
    </motion.div>
  );
}