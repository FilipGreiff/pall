"use client";

import PageHeader from '@/components/PageHeader';
import ServiceCard from '@/components/ServiceCard';
import { motion } from 'framer-motion';
import { ShoppingCartIcon, BanknotesIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: "Köp",
    description: "Vi köper dina begagnade pallar och pallkragar. Ligger du plus på ditt pallkonto köper vi även detta. Vi ordnar det praktiska kring transaktionen.",
    icon: ShoppingCartIcon,
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    title: "Sälj",
    description: "Nytt eller begagnat - Pallex har alltid ett alternativ som passar. Ring oss för rätt pris och mått på lastpallar, pallkragar och specialemballage.",
    icon: BanknotesIcon,
    color: "from-green-500/20 to-green-600/20"
  },
  {
    title: "Reparera",
    description: "Har du pallar som behöver repareras? Vi erbjuder professionell reparationsservice för att förlänga livslängden på dina lastpallar.",
    icon: WrenchScrewdriverIcon,
    color: "from-orange-500/20 to-orange-600/20"
  }
];

export default function BuySellRepair() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Köp / Sälj / Reparera"
        description="Flexibla lösningar för alla dina pallbehov"
      />
      
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold text-secondary mb-6">Pallkonto Reglering</h2>
            <p className="text-gray-600 mb-4">
              Ligger du minus på ditt pallsaldo hos t.ex. DHL, Schenker, DSV eller Bring/Frigo? 
              Vi reglerar saldot till en betydligt lägre kostnad än vad transportören debiterar.
            </p>
            <p className="text-gray-600">
              Om du ligger plus på kontot köper vi detta och ordnar det praktiska kring transaktionen.
            </p>
          </div>
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 h-2" />
        </motion.div>
      </div>
    </div>
  );
}