import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Finn fiskebil - Ole Løvold AS',
  description: 'Finn fiskebilen til Ole Løvold AS i ditt område. Vi leverer fersk fisk på Sunnmøre, Østlandet, Trøndelag, Nordmøre og Romsdal.',
}

type Area = {
  name: string
  phones: string[]
}

const areas: Area[] = [
  {
    name: 'Sunnmøre',
    phones: ['911 72 372'],
  },
  {
    name: 'Østlandsområdet',
    phones: ['965 17 650', '913 22 277'],
  },
  {
    name: 'Trøndelag',
    phones: ['911 40 910'],
  },
  {
    name: 'Nordmøre og Romsdal',
    phones: ['950 65 496'],
  },
]

export default function Fiskebil() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-blue-200 font-semibold mb-3 tracking-wide uppercase">Fersk fisk til døren</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Finn fiskebilen</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Våre fiskebiler kjører i flere områder. Ring fiskebilen i ditt område for å finne ut når vi er i nærheten av deg!
          </p>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Våre områder</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ring fiskebilen i ditt område for informasjon om ruter og tidspunkter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {areas.map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{area.name}</h3>
                    <div className="space-y-2">
                      {area.phones.map((phone, i) => (
                        <a
                          key={i}
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="flex items-center gap-2 text-blue-800 hover:text-blue-900 font-medium"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                          </svg>
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info Box */}
            <div className="bg-blue-50 rounded-3xl p-8 md:p-10">
              <div className="text-center mb-8">
                <svg className="w-20 h-20 mx-auto mb-4 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ring din lokale fiskebil!</h3>
                <p className="text-gray-600">
                  Fiskebilsjåførene kan fortelle deg nøyaktig når de er i ditt område og hva de har med seg av fersk fisk.
                </p>
              </div>
            </div>

            {/* What we offer */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Hva tilbyr fiskebilen?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <p className="text-gray-600">Fersk fisk direkte fra anlegget vårt</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <p className="text-gray-600">Stort utvalg av fiskesorter</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <p className="text-gray-600">Fagkyndige råd og tips</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <p className="text-gray-600">Filetering og tilpasning på stedet</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <p className="text-gray-600">Konkurransedyktige priser</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Finner du ikke ditt område?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Ta kontakt med oss - vi ser alltid på muligheten for å utvide rutene våre basert på etterspørsel.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-red-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-800 transition-colors"
          >
            Kontakt oss
          </Link>
        </div>
      </section>
    </main>
  )
}
