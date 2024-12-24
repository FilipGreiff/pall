"use client";

import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const values = [
  "Kvalitet i varje leverans",
  "Hållbarhet och miljöansvar",
  "Kundanpassade lösningar",
  "Pålitlig service",
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Om Företaget"
        description="Din pålitliga partner inom emballage och logistik sedan många år"
      />
      
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-secondary">Vår Historia</h2>
            <p className="text-gray-600 leading-relaxed">
              Pallex AB har varit en ledande leverantör av lastpallar och emballage i Sverige. 
              Med vår omfattande erfarenhet och kunskap inom branschen erbjuder vi 
              högkvalitativa produkter och skräddarsydda lösningar för våra kunder.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-secondary">Våra Värderingar</h3>
              <ul className="space-y-3">
                {values.map((value) => (
                  <li key={value} className="flex items-center space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-primary" />
                    <span className="text-gray-600">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
              <div className="absolute inset-0 bg-[url('/images/warehouse-pattern.svg')] opacity-20" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}