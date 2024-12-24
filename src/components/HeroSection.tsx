"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { TruckIcon, ArrowPathIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 to-primary/95" />
      <div className="absolute inset-0 bg-[url('/images/warehouse-pattern.svg')] opacity-5" />
      
      <div className="container-custom relative z-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Din Partner för 
              <span className="text-primary-light block mt-2">Emballage & Logistik</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Kvalitetsprodukter och skräddarsydda lösningar för alla dina pallbehov
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/produkter"
                className="bg-white text-secondary px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-all"
              >
                Utforska Produkter
              </Link>
              <Link
                href="/kontakta-oss"
                className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-all"
              >
                Kontakta Oss
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative hidden md:block"
          >
            <div className="aspect-square relative">
              <div className="absolute inset-0 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20" />
              <div className="absolute inset-0 bg-[url('/images/pallet-illustration.svg')] opacity-75" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}