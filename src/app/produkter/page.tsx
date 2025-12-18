import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Produkter',
  description: 'Over 50 varianter fersk fisk og fiskemat. Laksefilet, torskefilet, kveiteskiver, brosmefilet, uerfilet og mer. Kvalitet fra Averøy siden 1979.',
  openGraph: {
    title: 'Våre produkter - Fersk fisk fra Ole Løvold AS',
    description: 'Over 50 varianter fersk fisk og fiskemat fra Averøy. Se vårt utvalg.',
  },
}

const products = [
  {
    title: 'Laksefilet',
    description: 'Fersk norsk laksefilet av høyeste kvalitet. Perfekt til middag, sushi eller grilling. Vår laks kommer fra de beste oppdretterne langs norskekysten.',
    image: '/images/laksefilet.jpg',
  },
  {
    title: 'Torskefilet',
    description: 'Klassisk torskefilet - en norsk favoritt. Mager og proteinrik fisk som passer til det meste. Perfekt pannestekt, ovnsbakt eller kokt.',
    image: '/images/torskefilet.jpg',
  },
  {
    title: 'Kveiteskiver',
    description: 'Delikate kveiteskiver fra kalde farvann. Kveite er kjent for sitt faste, hvite kjøtt og milde smak. En ekte delikatesse.',
    image: '/images/kveiteskiver.jpg',
  },
  {
    title: 'Lettsaltet torskefilet',
    description: 'Tradisjonelt lettsaltet torsk etter gamle oppskrifter. Saltingen fremhever smaken og gir fisken lengre holdbarhet.',
    image: '/images/torskefilet-saltet.jpg',
  },
  {
    title: 'Lettsaltet brosmefilet',
    description: 'Smakfull brosmefilet med lett salting. Brosme har et fast og hvitt kjøtt som egner seg utmerket til tradisjonelle retter.',
    image: '/images/brosmefilet.jpg',
  },
  {
    title: 'Lettsaltet uerfilet',
    description: 'Delikat uerfilet med perfekt saltbalanse. Uer har en mild og fin smak som passer til mange retter.',
    image: '/images/uerfilet.jpg',
  },
]

export default function Produkter() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-blue-200 font-semibold mb-3 tracking-wide uppercase">Vårt utvalg</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Produkter</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Fersk fisk og kvalitetsprodukter fra havet. Vi tilbyr et bredt utvalg for alle smaker.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Kvalitet fra hav til bord
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Alle våre produkter håndteres med største forsiktighet fra de ankommer
                vårt anlegg til de leveres til deg. Vi har strenge kvalitetskontroller
                og moderne kjøleanlegg som sikrer at fisken holder seg fersk.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Ønsker du et produkt du ikke finner i listen? Ta kontakt med oss -
                vi kan ofte skaffe det du trenger!
              </p>
              <Link
                href="/kontakt"
                className="inline-block bg-red-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-800 transition-colors"
              >
                Kontakt oss for bestilling
              </Link>
            </div>

            <div className="bg-blue-50 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Hvorfor velge oss?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fersk kvalitet</h4>
                    <p className="text-gray-600">Daglige leveranser sikrer alltid fersk fisk</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">45 års erfaring</h4>
                    <p className="text-gray-600">Kunnskap og tradisjon i hver levering</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Lokalt og bærekraftig</h4>
                    <p className="text-gray-600">Vi støtter lokale fiskere og bærekraftig fiske</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fiskebil i ditt område</h4>
                    <p className="text-gray-600">Vi leverer fersk fisk rett til døren din</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
