import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Finn fiskebil - Ole Løvold AS',
  description: 'Finn ut når fiskebilen til Ole Løvold AS er i ditt område. Vi leverer fersk fisk rett til døren din.',
}

export default function Fiskebil() {
  const routes = [
    { day: 'Mandag', area: 'Område 1', time: 'Kl. 09:00 - 15:00' },
    { day: 'Tirsdag', area: 'Område 2', time: 'Kl. 09:00 - 15:00' },
    { day: 'Onsdag', area: 'Område 3', time: 'Kl. 09:00 - 15:00' },
    { day: 'Torsdag', area: 'Område 4', time: 'Kl. 09:00 - 15:00' },
    { day: 'Fredag', area: 'Område 5', time: 'Kl. 09:00 - 15:00' },
  ]

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
            Våre fiskebiler kjører faste ruter i nærområdet. Finn ut når vi er i nærheten av deg!
          </p>
        </div>
      </section>

      {/* Routes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Route List */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Ukentlige ruter</h2>
              <div className="space-y-4">
                {routes.map((route, index) => (
                  <div key={index} className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{route.day}</h3>
                      <p className="text-gray-600">{route.area}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-blue-800 font-medium">{route.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-6 italic">
                * Rutene kan variere. Kontakt oss for oppdatert informasjon om når vi er i ditt område.
              </p>
            </div>

            {/* Info Box */}
            <div>
              <div className="bg-blue-50 rounded-3xl p-8 md:p-10 mb-8">
                <div className="text-center mb-8">
                  <svg className="w-20 h-20 mx-auto mb-4 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Ring oss!</h3>
                  <p className="text-gray-600 mb-6">
                    Vil du vite nøyaktig når fiskebilen er i ditt område?
                    Ta kontakt med oss så hjelper vi deg.
                  </p>
                  <Link
                    href="/kontakt"
                    className="inline-block bg-red-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-800 transition-colors"
                  >
                    Kontakt oss
                  </Link>
                </div>
              </div>

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
                    <p className="text-gray-600">Filletering og tilpasning på stedet</p>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Vil du ha fiskebilen til ditt område?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Er du ikke i et av våre faste områder? Ta kontakt med oss - vi ser alltid
            på muligheten for å utvide rutene våre basert på etterspørsel.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-blue-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-900 transition-colors"
          >
            Send oss en forespørsel
          </Link>
        </div>
      </section>
    </main>
  )
}
