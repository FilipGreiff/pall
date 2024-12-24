"use client";

import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import StatsSection from '@/components/StatsSection';
import TestimonialSection from '@/components/TestimonialSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <StatsSection />
      <TestimonialSection />
    </div>
  );
}