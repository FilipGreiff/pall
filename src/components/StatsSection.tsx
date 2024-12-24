"use client";

import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  { number: "30", label: "Års Erfarenhet", suffix: "+" },
  { number: "1000", label: "Nöjda Kunder", suffix: "+" },
  { number: "24", label: "Timmars Support", suffix: "/7" }
];

export default function StatsSection() {
  return (
    <section className="bg-secondary py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}