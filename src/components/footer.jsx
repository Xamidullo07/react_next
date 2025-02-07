import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#00008B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">OSON</h3>
            <p className="text-sm">
              Barcha Xalqaro va Mahalliy To'lovlar Oson
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Asosiy</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/bizning-anona" className="hover:text-gray-300">
                  Bizning Anona
                </Link>
              </li>
              <li>
                <Link href="/yangilik" className="hover:text-gray-300">
                  Yangilik
                </Link>
              </li>
              <li>
                <Link href="/hujjat" className="hover:text-gray-300">
                  Hujjat
                </Link>
              </li>
              <li>
                <Link href="/tarif" className="hover:text-gray-300">
                  Tarif
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Qo'shimcha</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/bosh-ish-orni" className="hover:text-gray-300">
                  Bo'sh ish o'rni
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-gray-300">
                  Maxfiylik siyosati
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gray-300">
                  Foydalanish shartlari
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Bog'lanish</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                {/* <Phone size={18} className="mr-2" /> */}
                <a href="tel:+71207-80-80" className="hover:text-gray-300">
                  +71 207-80-80
                </a>
              </li>
              <li className="flex items-center">
                {/* <Mail size={18} className="mr-2" /> */}
                <a href="mailto:info@oson.uz" className="hover:text-gray-300">
                  info@oson.uz
                </a>
              </li>
              <li className="flex items-center">
                {/* <MapPin size={18} className="mr-2" /> */}
                <span>Toshkent, O'zbekiston</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} OSON. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
}