import {
  Building2,
  CalendarDays,
  FileText,
  Landmark,
  LifeBuoy,
  MapPin,
  Recycle,
  Wallet,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Pagos Municipales",
    description: "Realice sus pagos de impuestos y servicios en línea",
    icon: Wallet,
    href: "/pagos",
  },
  {
    title: "Permisos",
    description: "Solicite permisos para construcción y eventos",
    icon: FileText,
    href: "/permisos",
  },
  {
    title: "Reciclaje",
    description: "Información sobre el programa de reciclaje municipal",
    icon: Recycle,
    href: "/reciclaje",
  },
  {
    title: "Emergencias",
    description: "Contactos y recursos para situaciones de emergencia",
    icon: LifeBuoy,
    href: "/emergencias",
  },
  {
    title: "Calendario",
    description: "Eventos y actividades municipales",
    icon: CalendarDays,
    href: "/calendario",
  },
  {
    title: "Turismo",
    description: "Descubra los atractivos turísticos de Maunabo",
    icon: MapPin,
    href: "/turismo",
  },
  {
    title: "Gobierno",
    description: "Estructura gubernamental y funcionarios",
    icon: Landmark,
    href: "/gobierno",
  },
  {
    title: "Desarrollo Económico",
    description: "Programas de apoyo a empresas locales",
    icon: Building2,
    href: "/desarrollo",
  },
];

export function Services() {
  return (
    <section className="bg-[#ededed] py-16 mx-auto w-full">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-[#01791A]">
            Servicios Municipales
          </h2>
          <p className="text-lg text-gray-600">
            Acceda a todos los servicios que ofrece el Municipio de Maunabo
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#52A355] hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#52A355]/10 text-[#01791A] group-hover:bg-[#52A355] group-hover:text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-medium">{service.title}</h3>
              <p className="text-sm text-gray-500">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
