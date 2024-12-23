import Link from 'next/link'

export function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Specialemballage</h2>
        <p className="text-gray-600 mb-4">
          Hur behöver din pall eller krage se ut? Det mesta går att ordna, 
          ring för offert.
        </p>
        <Link href="/produkter-specialemballage" className="text-primary hover:text-primary/80">
          Läs mer →
        </Link>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Leveranser</h2>
        <p className="text-gray-600 mb-4">
          Ett nära samarbete med ett flertal åkerier både lokalt och 
          rikstäckande med DHL garanterar att leveranserna kommer fram i önskad tid.
        </p>
        <Link href="/kontakt" className="text-primary hover:text-primary/80">
          Kontakta oss →
        </Link>
      </div>
    </div>
  )
}