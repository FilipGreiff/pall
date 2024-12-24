"use client";

import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: "Anders Johansson",
    company: "Logistik AB",
    text: "Pallex har varit vår pålitliga partner i över 10 år. Deras service och kvalitet är outstanding.",
    rating: 5
  },
  {
    name: "Maria Andersson",
    company: "Transport & Co",
    text: "Snabba leveranser och professionell hantering av våra specialbeställningar.",
    rating: 5
  },
  {
    name: "Erik Lindström",
    company: "Frakt & Logistik",
    text: "Deras expertis inom pallhantering har effektiviserat vår verksamhet avsevärt.",
    rating: 5
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5" />
      <div className="absolute inset-0 bg-[url('/images/warehouse-pattern.svg')] opacity-5" />
      
      <div className="container-custom relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12"
        >
          Vad Våra Kunder Säger
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg relative"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-bl-2xl" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              
              <div>
                <p className="font-semibold text-secondary">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}