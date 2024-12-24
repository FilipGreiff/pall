import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/">
              <div className="h-12 mb-4 transition-transform hover:scale-105">
                <img 
                  src="/logo1.png" 
                  alt="Pallex Logo" 
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>
            <p>Pallex AB</p>
            <p>Org nr: 556351-0824</p>
            <p>Ringugnsg. 7</p>
            <p>216 16 Limhamn</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakta oss</h3>
            <p>Telefon: 040-16 36 10</p>
            <p>Fax: 040-16 36 06</p>
            <p>Order: order@pallexperten.se</p>
            <p>Info: info@pallexperten.se</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Om Pallex</h3>
            <p>Vi erbjuder lastpallar, pallkragar och specialemballage med fokus på kvalitet och kundnöjdhet.</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-600 text-center">
          <p>&copy; {new Date().getFullYear()} Pallex AB. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
}