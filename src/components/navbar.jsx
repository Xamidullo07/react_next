"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#00008B] text-white fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 text-2xl font-bold">
              OSON
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/" className="hover:text-gray-300">
                Bizning Anona
              </Link>
              <Link href="/yangiliklar" className="hover:text-gray-300">
                Yangilik
              </Link>
              <Link href="/hujjat" className="hover:text-gray-300">
                Hujjat
              </Link>
              <Link href="/tarif" className="hover:text-gray-300">
                Tarif
              </Link>

              <a
                href="tel:+71207-80-80"
                className="flex items-center hover:text-gray-300"
              >
                {/* <Phone size={18} className="mr-1" /> */}
                +71 207-80-80
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 hover:bg-blue-900"
            >
              {/* {isOpen ? <X size={24} /> : <Menu size={24} />}  */}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/bizning-anona"
              className="block px-3 py-2 hover:bg-blue-900 rounded-md"
            >
              Bizning Anona
            </Link>
            <Link
              href="/yangilik"
              className="block px-3 py-2 hover:bg-blue-900 rounded-md"
            >
              Yangilik
            </Link>
            <Link
              href="/hujjat"
              className="block px-3 py-2 hover:bg-blue-900 rounded-md"
            >
              Hujjat
            </Link>
            <Link
              href="/tarif"
              className="block px-3 py-2 hover:bg-blue-900 rounded-md"
            >
              Tarif
            </Link>
            <Link
              href="/bosh-ish-orni"
              className="block px-3 py-2 hover:bg-blue-900 rounded-md"
            >
              Bo'sh ish o'rni
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 hover:bg-blue-900 rounded-md"
            >
              Contact
            </Link>
            <a
              href="tel:+71207-80-80"
              className="flex items-center px-3 py-2 hover:bg-blue-900 rounded-md"
            >
              <Phone size={18} className="mr-1" />
              +71 207-80-80
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
