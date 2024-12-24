"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const products = [
  {
    id: 'lastpallar',
    title: "Lastpallar",
    description: "Standardmått och specialanpassade lastpallar",
    features: ["1200 x 800mm", "800 x 600mm", "Nya & begagnade", "Export-godkända"],
    image: "pallet.jpg"
  },
  {
    id: 'pallkragar',
    title: "Pallkragar",
    description: "Nya och begagnade standardkragar",
    features: ["Värmebehandlade", "Export-godkända", "Företagslogga möjlig", "Målning möjlig"],
    image: "collar.jpg"
  },
  {
    id: 'lock-mellanlagg',
    title: "Lock & Mellanlägg",
    description: "Kvalitetsprodukter i olika material",
    features: ["Plywood", "OSB", "Masonite", "Påspikade ribbor"],
    image: "lid.jpg"
  },
  {
    id: 'specialemballage',
    title: "Specialemballage",
    description: "Skräddarsydda lösningar",
    features: ["Kundanpassat", "Flexibla mått", "Specialkonstruktioner", "Teknisk rådgivning"],
    image: "special.jpg"
  }
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-secondary/5 relative">
            <div className="absolute inset-0 bg-[url('/images/texture-pattern.svg')] opacity-10" />
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-secondary mb-2">{product.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            
            <ul className="space-y-2 mb-6">
              {product.features.map((feature) => (
                <li key={feature} className="text-sm text-gray-500 flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <Link
              href={`/produkter/${product.id}`}
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              Läs mer
              <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}