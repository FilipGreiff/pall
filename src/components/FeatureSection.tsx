"use client";

import { motion } from 'framer-motion';
import { TruckIcon, ArrowPathIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: TruckIcon,
    title: "Snabba Leveranser",
    description: "Samarbete med DHL och lokala åkerier garanterar leverans i tid"
  },
  {
    icon: ArrowPathIcon,
    title: "Hållbara Lösningar",
    description: "Både nya och begagnade alternativ för miljömedvetna val"
  },
  {
    icon: ShieldCheckIcon,
    title: "Kvalitetsgaranti",
    description: "Alla produkter möter högsta industristandarder"
  }
];

export default function FeatureSection() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5" />
      
      <div className="container-custom relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:border-primary/20 transition-all group"
            >
              <feature.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-secondary mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}