import Image from 'next/image'
import Link from 'next/link'
import { Hero } from '@/components/home/Hero'
import { Features } from '@/components/home/Features'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Hero />
      <Features />
    </div>
  )
}