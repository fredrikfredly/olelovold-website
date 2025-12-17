'use client'

import { useState } from 'react'
import Image from 'next/image'

// Header Component
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="Ole Løvold AS"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hjem" className="text-gray-700 hover:text-ocean-600 transition-colors font-medium">Hjem</a>
            <a href="#om-oss" className="text-gray-700 hover:text-ocean-600 transition-colors font-medium">Om oss</a>
            <a href="#produkter" className="text-gray-700 hover:text-ocean-600 transition-colors font-medium">Produkter</a>
            <a href="#fiskebil" className="text-gray-700 hover:text-ocean-600 transition-colors font-medium">Finn fiskebil</a>
            <a href="#kontakt" className="bg-red-700 text-white px-6 py-2.5 rounded-full hover:bg-red-800 transition-colors font-medium">
              Kontakt oss
            </a>
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
              <a href="#hjem" className="text-gray-700 hover:text-ocean-600 transition-colors font-medium">Hjem</a>
              <a href="#om-oss" className="text-gray-700 hover:text-ocean-600 transition-colors font-medium">Om oss</a>
              <a href="#produkter" className="text-gray-700 hover:text-ocean-600 transition-colors font-medium">Produkter</a>
              <a href="#fiskebil" className="text-gray-700 hover:text-ocean-600 transition-colors font-medium">Finn fiskebil</a>
              <a href="#kontakt" className="bg-red-700 text-white px-6 py-2.5 rounded-full hover:bg-red-800 transition-colors font-medium text-center">
                Kontakt oss
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

// Hero Section with Video
function Hero() {
  return (
    <section id="hjem" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/drone-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <p className="text-blue-200 font-medium mb-4 tracking-wide uppercase">Siden 1979</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            Fersk fisk fra <span className="text-red-400">havet til ditt bord</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            I 45 år har vi levert førsteklasses fisk og fiskeprodukter til fornøyde kunder.
            Som familiebedrift setter vi kvalitet og tradisjon i høysetet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#fiskebil" className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors text-center shadow-lg">
              Finn nærmeste fiskebil
            </a>
            <a href="#kontakt" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors text-center">
              Kontakt oss
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Stats Section
function Stats() {
  const stats = [
    { number: '45+', label: 'År med erfaring' },
    { number: '18', label: 'Dyktige ansatte' },
    { number: '1000+', label: 'Fornøyde kunder' },
    { number: '3', label: 'Generasjoner' },
  ]

  return (
    <section className="bg-white py-16 -mt-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// About Section
function About() {
  return (
    <section id="om-oss" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/anlegg.jpg"
                alt="Ole Løvold anlegget"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-red-700 font-semibold mb-3 tracking-wide uppercase">Om oss</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              En stolt familiebedrift i tre generasjoner
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Ole Løvold AS ble grunnlagt av Ole Ingvar Løvold, og i dag drives bedriften i samarbeid
              med tre av hans sønner. Med 45 års erfaring har vi bygget opp en solid kompetanse
              innen fisk og fiskeprodukter.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              I 2003 gjennomgikk vi en omfattende modernisering med ny filetavdeling, garderobeanlegg,
              spiserom og kjøle-/fryserom. Kontoravdelingen ble ferdigstilt i 2005. I dag har vi
              18 dedikerte ansatte som jobber for å levere den beste kvaliteten til våre kunder.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden h-32">
                <Image
                  src="/images/team1.jpg"
                  alt="Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden h-32">
                <Image
                  src="/images/team2.jpg"
                  alt="Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Products Section
function Products() {
  const products = [
    {
      title: 'Laksefilet',
      description: 'Fersk norsk laksefilet av høyeste kvalitet.',
      image: '/images/laksefilet.jpg',
    },
    {
      title: 'Torskefilet',
      description: 'Klassisk torskefilet - perfekt til middag.',
      image: '/images/torskefilet.jpg',
    },
    {
      title: 'Kveiteskiver',
      description: 'Delikate kveiteskiver fra kalde farvann.',
      image: '/images/kveiteskiver.jpg',
    },
    {
      title: 'Lettsaltet torskefilet',
      description: 'Tradisjonelt lettsaltet torsk.',
      image: '/images/torskefilet-saltet.jpg',
    },
    {
      title: 'Lettsaltet brosmefilet',
      description: 'Smakfull brosmefilet med lett salting.',
      image: '/images/brosmefilet.jpg',
    },
    {
      title: 'Lettsaltet uerfilet',
      description: 'Delikat uerfilet med perfekt saltbalanse.',
      image: '/images/uerfilet.jpg',
    },
  ]

  return (
    <section id="produkter" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-red-700 font-semibold mb-3 tracking-wide uppercase">Våre produkter</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kvalitetsprodukter fra havet
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Vi tilbyr et bredt utvalg av fisk og fiskeprodukter, alltid med fokus på ferskhet og kvalitet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Fish Truck Section
function FishTruck() {
  return (
    <section id="fiskebil" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/atlanterhavsvegen.jpg"
          alt="Atlanterhavsvegen"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-12">
          <p className="text-blue-200 font-semibold mb-3 tracking-wide uppercase">Finn oss</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Finn nærmeste fiskebil
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Våre fiskebiler kjører faste ruter i nærområdet. Finn ut når vi er i nærheten av deg!
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kjøreruter</h3>
              <div className="space-y-4">
                {['Mandag: Område 1', 'Tirsdag: Område 2', 'Onsdag: Område 3', 'Torsdag: Område 4', 'Fredag: Område 5'].map((route, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{route}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-4 italic">* Kontakt oss for oppdaterte ruter</p>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center p-8 bg-blue-50 rounded-2xl w-full">
                <svg className="w-20 h-20 mx-auto mb-4 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Ring oss!</h4>
                <p className="text-gray-600 mb-4">For å finne ut når fiskebilen er i ditt område</p>
                <a href="#kontakt" className="inline-block bg-red-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-800 transition-colors">
                  Kontakt oss
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Section
function Contact() {
  return (
    <section id="kontakt" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-red-700 font-semibold mb-3 tracking-wide uppercase">Kontakt</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ta kontakt med oss
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Har du spørsmål om våre produkter eller ønsker å legge inn en bestilling?
              Vi hører gjerne fra deg!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-800 flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                  <p className="text-gray-600">Legg til adresse her</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-800 flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                  <p className="text-gray-600">Legg til telefonnummer</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-800 flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">E-post</h3>
                  <p className="text-gray-600">Legg til e-post</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t">
                <h3 className="font-semibold text-gray-900 mb-4">Følg oss</h3>
                <a
                  href="https://facebook.com/olelovoldas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Ole Løvold AS på Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send oss en melding</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Navn
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Ditt navn"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-post
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="din@epost.no"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Ditt telefonnummer"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Melding
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Skriv din melding her..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-700 text-white py-4 rounded-xl font-semibold hover:bg-red-800 transition-colors"
              >
                Send melding
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Image
              src="/images/logo.svg"
              alt="Ole Løvold AS"
              width={150}
              height={35}
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400">
              Familiebedrift med 45 års erfaring innen fisk og fiskeprodukter.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hurtiglenker</h4>
            <ul className="space-y-2">
              <li><a href="#hjem" className="text-gray-400 hover:text-white transition-colors">Hjem</a></li>
              <li><a href="#om-oss" className="text-gray-400 hover:text-white transition-colors">Om oss</a></li>
              <li><a href="#produkter" className="text-gray-400 hover:text-white transition-colors">Produkter</a></li>
              <li><a href="#fiskebil" className="text-gray-400 hover:text-white transition-colors">Finn fiskebil</a></li>
              <li><a href="#kontakt" className="text-gray-400 hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Adresse kommer</li>
              <li>Telefon kommer</li>
              <li>E-post kommer</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ole Løvold AS. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <About />
      <Products />
      <FishTruck />
      <Contact />
      <Footer />
    </main>
  )
}
