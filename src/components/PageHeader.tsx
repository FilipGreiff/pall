"use client";

import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 z-0" />
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10 z-0" />
      <div className="container-custom relative z-10 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{title}</h1>
          {description && (
            <p className="text-lg text-gray-600">{description}</p>
          )}
        </motion.div>
      </div>
    </div>
  );
}