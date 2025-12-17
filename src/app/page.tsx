import Image from 'next/image'
import Link from 'next/link'

// Hero Section with Video
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
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
            <Link href="/fiskebil" className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors text-center shadow-lg">
              Finn nærmeste fiskebil
            </Link>
            <Link href="/kontakt" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors text-center">
              Kontakt oss
            </Link>
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

// About Preview Section
function AboutPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div>
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

          <div>
            <p className="text-red-700 font-semibold mb-3 tracking-wide uppercase">Om oss</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              En stolt familiebedrift i tre generasjoner
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Ole Løvold AS ble grunnlagt av Ole Ingvar Løvold, og i dag drives bedriften i samarbeid
              med tre av hans sønner. Med 45 års erfaring har vi bygget opp en solid kompetanse
              innen fisk og fiskeprodukter.
            </p>
            <Link
              href="/om-oss"
              className="inline-flex items-center gap-2 text-blue-800 font-semibold hover:text-blue-900 transition-colors"
            >
              Les mer om oss
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// Products Preview Section
function ProductsPreview() {
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
  ]

  return (
    <section className="py-20 bg-white">
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

        <div className="grid md:grid-cols-3 gap-8 mb-12">
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

        <div className="text-center">
          <Link
            href="/produkter"
            className="inline-flex items-center gap-2 bg-blue-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-900 transition-colors"
          >
            Se alle produkter
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Fish Truck CTA Section
function FishTruckCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <svg className="w-20 h-20 mx-auto mb-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
        </svg>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Finn nærmeste fiskebil
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Våre fiskebiler kjører faste ruter i nærområdet. Finn ut når vi er i nærheten av deg!
        </p>
        <Link
          href="/fiskebil"
          className="inline-block bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg"
        >
          Se kjøreruter
        </Link>
      </div>
    </section>
  )
}

// Contact CTA Section
function ContactCTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-red-700 font-semibold mb-3 tracking-wide uppercase">Ta kontakt</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Har du spørsmål?
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Enten du ønsker å bestille fisk, har spørsmål om våre produkter,
          eller vil vite mer om fiskebilen - vi hører gjerne fra deg!
        </p>
        <Link
          href="/kontakt"
          className="inline-block bg-red-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-800 transition-colors"
        >
          Kontakt oss
        </Link>
      </div>
    </section>
  )
}

// Main Page Component
export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <AboutPreview />
      <ProductsPreview />
      <FishTruckCTA />
      <ContactCTA />
    </main>
  )
}
