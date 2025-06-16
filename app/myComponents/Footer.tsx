import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#01791A] text-white w-full">
      <div className="container py-12 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">Municipio de Maunabo</h3>
            <Link
              prefetch={true}
              href="https://www.google.com/maps/dir/?api=1&destination=18.00722%2C-65.89978"
              target="_blank"
              className="mb-4 text-sm text-gray-300"
            >
              Calle Santiago Iglesias #1
              <br />
              Maunabo, PR 00707
            </Link>
            <div className="text-sm text-gray-300 flex flex-col ">
              <a href="tel:17878610825">Tel: (787) 861-0825</a>
              <a href="mailto:prensa@maunabopr.com">
                Email: prensa@maunabopr.com
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/servicios"
                  className="text-gray-300 hover:text-[#ffd300]"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/turismo"
                  className="text-gray-300 hover:text-[#ffd300]"
                >
                  Turismo
                </Link>
              </li>
              <li>
                <Link
                  href="/gobierno"
                  className="text-gray-300 hover:text-[#ffd300]"
                >
                  Gobierno
                </Link>
              </li>
              <li>
                <Link
                  href="/noticias"
                  className="text-gray-300 hover:text-[#ffd300]"
                >
                  Noticias
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-300 hover:text-[#ffd300]"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/pagos"
                  className="text-gray-300 hover:text-[#ffd300]"
                >
                  Pagos en Línea
                </Link>
              </li>
              <li>
                <Link
                  href="/permisos"
                  className="text-gray-300 hover:text-[#ffd300]"
                >
                  Permisos
                </Link>
              </li>
              <li>
                <Link
                  href="/reciclaje"
                  className="text-gray-300 hover:text-[#ffd300]"
                >
                  Reciclaje
                </Link>
              </li>
              <li>
                <Link
                  href="/emergencias"
                  className="text-gray-300 hover:text-[#ffd300]"
                >
                  Emergencias
                </Link>
              </li>
              <li>
                <Link
                  href="/calendario"
                  className="text-gray-300 hover:text-[#ffd300]"
                >
                  Calendario de Eventos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#ffd300] hover:text-black"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#ffd300] hover:text-black"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#ffd300] hover:text-black"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#ffd300] hover:text-black"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
            <div className="mt-6">
              <h4 className="mb-2 text-sm font-medium">Horario de Oficina</h4>
              <p className="text-sm text-gray-300">
                Lunes a Viernes
                <br />
                8:00 AM - 4:30 PM
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-300">
          <p>
            © {new Date().getFullYear()} Municipio de Maunabo. Todos los
            derechos reservados.
          </p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacidad" className="hover:text-[#ffd300]">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-[#ffd300]">
              Términos de Uso
            </Link>
            <Link href="/accesibilidad" className="hover:text-[#ffd300]">
              Accesibilidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
