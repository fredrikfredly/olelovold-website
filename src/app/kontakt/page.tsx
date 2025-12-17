import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt oss - Ole Løvold AS',
  description: 'Ta kontakt med Ole Løvold AS for bestilling av fersk fisk eller spørsmål om våre produkter.',
}

export default function Kontakt() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-blue-200 font-semibold mb-3 tracking-wide uppercase">Ta kontakt</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Kontakt oss</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Har du spørsmål eller ønsker å bestille? Vi hører gjerne fra deg!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Hvordan kan vi hjelpe deg?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Enten du ønsker å bestille fisk, har spørsmål om våre produkter,
                eller vil vite når fiskebilen er i ditt område - vi er her for å hjelpe.
              </p>

              <div className="space-y-8">
                {/* Ordre/Bestillinger */}
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Ordre / Bestillinger</h3>
                  <div className="space-y-3">
                    <a href="mailto:ordre@olelovold.no" className="flex items-center gap-3 text-gray-700 hover:text-blue-800">
                      <svg className="w-5 h-5 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      ordre@olelovold.no
                    </a>
                    <a href="tel:+4771517650" className="flex items-center gap-3 text-gray-700 hover:text-blue-800">
                      <svg className="w-5 h-5 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                      +47 71 51 76 50
                    </a>
                  </div>
                </div>

                {/* Generelle henvendelser */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Generelle henvendelser</h3>
                  <div className="space-y-3">
                    <a href="mailto:firmapost@olelovold.no" className="flex items-center gap-3 text-gray-700 hover:text-blue-800">
                      <svg className="w-5 h-5 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      firmapost@olelovold.no
                    </a>
                    <a href="tel:+4771517650" className="flex items-center gap-3 text-gray-700 hover:text-blue-800">
                      <svg className="w-5 h-5 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                      +47 71 51 76 50
                    </a>
                  </div>
                </div>

                {/* Besøksadresse */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Besøk oss</h3>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Langøyneset,+6530+Averøy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-800"
                  >
                    <svg className="w-5 h-5 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    Langøyneset, 6530 Averøy
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t">
                <h3 className="font-semibold text-gray-900 mb-4">Følg oss på sosiale medier</h3>
                <a
                  href="https://www.facebook.com/profile.php?id=100057478448711"
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

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send oss en melding</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Navn *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Ditt navn"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-post *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
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
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Emne
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Velg emne</option>
                    <option value="bestilling">Bestilling</option>
                    <option value="fiskebil">Fiskebil/ruter</option>
                    <option value="produkter">Spørsmål om produkter</option>
                    <option value="annet">Annet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Melding *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
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

                <p className="text-sm text-gray-500 text-center">
                  * Obligatoriske felt
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Finn oss</h2>
            <p className="text-gray-600">Besøk oss på vårt anlegg</p>
          </div>
          <div className="bg-gray-200 rounded-3xl h-96 flex items-center justify-center">
            <p className="text-gray-500">Kart kommer her</p>
          </div>
        </div>
      </section>
    </main>
  )
}
