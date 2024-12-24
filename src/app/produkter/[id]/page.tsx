"use client";

import { useParams } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const productDetails = {
  lastpallar: {
    title: "Lastpallar",
    description: "Lastpallar med måtten 1200 x 800 och 800 x 600 finns i ett antal olika utförande. Ring oss för rätt pris på den pall du behöver.",
    features: [
      "Standardmått 1200 x 800mm och 800 x 600mm",
      "Nya och begagnade alternativ",
      "Export-godkända pallar",
      "Specialmått enligt önskemål",
      "Hög kvalitet och hållbarhet",
      "Snabba leveranser"
    ],
    image: "/pall.jpg"
  },
  pallkragar: {
    title: "Pallkragar",
    description: "Nya och begagnade standardkragar till hel och halvpall har vi alltid på lager. Våra nya kragar är värmebehandlade och godkända för export.",
    features: [
      "Värmebehandlade kragar",
      "Export-godkända",
      "Möjlighet till företagslogga",
      "Målning enligt önskemål",
      "Både nya och begagnade alternativ",
      "Lagerförda standardstorlekar"
    ],
    image: "/pallkrage.jpg"
  },
  "lock-mellanlagg": {
    title: "Lock & Mellanlägg",
    description: "Nya pallock till hel och halvpall finns i Plywood, OSB och Masonite. Kan beställas med påspikade ribbor.",
    features: [
      "Plywood, OSB och Masonite",
      "Påspikade ribbor möjligt",
      "Anpassade storlekar",
      "Hög kvalitet",
      "Kostnadseffektiva lösningar",
      "Snabb leverans"
    ],
    image: "/lock.jpg"
  },
  specialemballage: {
    title: "Specialemballage",
    description: "Hur behöver din pall eller krage se ut? Det mesta går att ordna, ring för offert.",
    features: [
      "Skräddarsydda lösningar",
      "Teknisk rådgivning",
      "Kundanpassade mått",
      "Specialkonstruktioner",
      "Flexibla material",
      "Prototypframtagning"
    ],
    image: "/special.png"
  }
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = productDetails[id as keyof typeof productDetails];

  if (!product) {
    return <div>Produkten hittades inte</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title={product.title}
        description="Kvalitetsprodukter för dina logistikbehov"
      />
      
      <div className="container-custom py-16">
        <Link
          href="/produkter"
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-1" />
          Tillbaka till produkter
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              {product.description}
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-secondary mb-4">Egenskaper</h3>
              <ul className="space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="w-2 h-2 bg-primary/60 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-secondary mb-4">Intresserad?</h3>
              <p className="text-gray-600 mb-4">
                Kontakta oss för priser och mer information om våra {product.title.toLowerCase()}.
              </p>
              <Link
                href="/kontakta-oss"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Kontakta oss
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}