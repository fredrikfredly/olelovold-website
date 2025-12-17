import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
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
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Hjem</Link></li>
              <li><Link href="/om-oss" className="text-gray-400 hover:text-white transition-colors">Om oss</Link></li>
              <li><Link href="/produkter" className="text-gray-400 hover:text-white transition-colors">Produkter</Link></li>
              <li><Link href="/fiskebil" className="text-gray-400 hover:text-white transition-colors">Finn fiskebil</Link></li>
              <li><Link href="/kontakt" className="text-gray-400 hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Reksundveien 151, 6533 Averøy</li>
              <li><a href="tel:+4771517650" className="hover:text-white">+47 71 51 76 50</a></li>
              <li><a href="mailto:firmapost@olelovold.no" className="hover:text-white">firmapost@olelovold.no</a></li>
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
