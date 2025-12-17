import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Om oss - Ole Løvold AS',
  description: 'Les om Ole Løvold AS - en stolt familiebedrift i tre generasjoner med 45 års erfaring innen fisk og fiskeprodukter.',
}

export default function OmOss() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-blue-200 font-semibold mb-3 tracking-wide uppercase">Vår historie</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Om Ole Løvold AS</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            En stolt familiebedrift med 45 års erfaring og tre generasjoners engasjement for kvalitet.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Vår historie
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Ole Løvold AS ble grunnlagt av Ole Ingvar Løvold i 1979. Med en lidenskap for
                havet og dets ressurser, startet han det som skulle bli en av regionens mest
                respekterte fiskeleverandører.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                I dag drives bedriften i samarbeid med tre av hans sønner, som viderefører
                tradisjonene og verdiene som har vært grunnleggende for suksessen vår.
                Med 45 års erfaring har vi bygget opp en solid kompetanse innen fisk og
                fiskeprodukter.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">45+</div>
                <div className="text-gray-600 font-medium">År med erfaring</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">18</div>
                <div className="text-gray-600 font-medium">Dyktige ansatte</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">1000+</div>
                <div className="text-gray-600 font-medium">Fornøyde kunder</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">3</div>
                <div className="text-gray-600 font-medium">Generasjoner</div>
              </div>
            </div>
          </div>

          {/* Modernization */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Moderne anlegg
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                I 2003 gjennomgikk vi en omfattende modernisering med ny filetavdeling,
                garderobeanlegg, spiserom og kjøle-/fryserom. Dette har gitt oss
                førsteklasses fasiliteter for å sikre den beste kvaliteten på våre produkter.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Kontoravdelingen ble ferdigstilt i 2005, og vi har kontinuerlig investert
                i moderne utstyr og teknologi for å møte fremtidens krav til mattrygghet
                og kvalitetskontroll.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                I dag har vi 18 dedikerte ansatte som jobber for å levere den beste
                kvaliteten til våre kunder, hver eneste dag.
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden h-48">
                  <Image
                    src="/images/team1.jpg"
                    alt="Team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden h-48">
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

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Våre verdier
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Verdiene som har guidet oss gjennom 45 år med drift.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kvalitet</h3>
              <p className="text-gray-600">
                Vi går aldri på kompromiss med kvaliteten. Fra havet til ditt bord
                sikrer vi ferskhet og smak i hver levering.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Familie</h3>
              <p className="text-gray-600">
                Som familiebedrift behandler vi våre kunder og ansatte som en del
                av vår utvidede familie.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tradisjon</h3>
              <p className="text-gray-600">
                45 år med erfaring og kunnskap overført gjennom generasjoner
                sikrer at du får det beste fra havet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
