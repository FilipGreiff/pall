"use client";

import PageHeader from '@/components/PageHeader';
import ProductGrid from '@/components/ProductGrid';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Våra Produkter"
        description="Kvalitetsprodukter för alla dina emballage- och logistikbehov"
      />
      
      <div className="container-custom py-16">
        <ProductGrid />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Hittar du inte vad du söker? Vi kan skräddarsy lösningar efter dina behov.
          </p>
          <a
            href="/kontakta-oss"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Kontakta oss för speciallösningar
          </a>
        </motion.div>
      </div>
    </div>
  );
}