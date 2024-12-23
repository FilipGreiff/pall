'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontaktinformation</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Image
                  src="/footericon1.png"
                  alt="Phone"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <span>Telefon: 040-163610</span>
              </p>
              <p>Telefax: 040-163606</p>
              <p className="flex items-center">
                <Image
                  src="/footericon2.png"
                  alt="Address"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <span>
                  Ringugnsgatan 7<br />
                  216 16 Limhamn
                </span>
              </p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nyhetsbrev</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  E-postadress
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Din e-postadress"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Prenumerera
              </button>
            </form>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Snabblänkar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/produkter" className="hover:text-primary transition-colors">
                  Produkter
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-primary transition-colors">
                  Kontakta oss
                </Link>
              </li>
              <li>
                <Link href="/om-foretaget" className="hover:text-primary transition-colors">
                  Om företaget
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Pallexperten AB. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  )
}