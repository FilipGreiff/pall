import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">
          Lastpallar, pallkragar, lock & mellanlägg
        </h1>
        <p className="text-lg text-gray-600">
          Nytt eller begagnat - Pallex har alltid ett alternativ som passar. 
          Ring oss för rätt pris och mått.
        </p>
        <Link href="/produkter" className="btn-primary inline-block">
          Se våra produkter
        </Link>
      </div>
      <div className="relative h-64 md:h-auto">
        <Image
          src="/huvudbildmaintop1.png"
          alt="Lastpallar och pallkragar"
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  )
}