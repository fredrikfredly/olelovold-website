'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="Ole Løvold AS"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-ocean-600 transition-colors font-medium">Hjem</Link>
            <Link href="/om-oss" className="text-gray-700 hover:text-ocean-600 transition-colors font-medium">Om oss</Link>
            <Link href="/produkter" className="text-gray-700 hover:text-ocean-600 transition-colors font-medium">Produkter</Link>
            <Link href="/fiskebil" className="text-gray-700 hover:text-ocean-600 transition-colors font-medium">Finn fiskebil</Link>
            <Link href="/kontakt" className="bg-red-700 text-white px-6 py-2.5 rounded-full hover:bg-red-800 transition-colors font-medium">
              Kontakt oss
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-ocean-600 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Hjem</Link>
              <Link href="/om-oss" className="text-gray-700 hover:text-ocean-600 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Om oss</Link>
              <Link href="/produkter" className="text-gray-700 hover:text-ocean-600 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Produkter</Link>
              <Link href="/fiskebil" className="text-gray-700 hover:text-ocean-600 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Finn fiskebil</Link>
              <Link href="/kontakt" className="bg-red-700 text-white px-6 py-2.5 rounded-full hover:bg-red-800 transition-colors font-medium text-center" onClick={() => setMobileMenuOpen(false)}>
                Kontakt oss
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
