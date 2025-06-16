"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full  bg-[#01791A] text-white">
      <div className="flex h-16 items-center px-4 justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={`/images/logos/Escudo Vectorizado.png`}
            alt="Escudo de Maunabo"
            width={40}
            height={40}
          />
        </Link>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-white hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#01791A] text-white pr-0 w-64"
            >
              <div className="px-7">
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-xl font-bold">MAUNABO</span>
                </Link>
              </div>
              <nav className="mt-8 flex flex-col gap-4 px-7">
                {/* <Link
                  href="/servicios"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-[#ffd300]"
                >
                  Servicios
                </Link> */}
                <Link
                  href="/turismo"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-[#FFD300]"
                >
                  Turismo
                </Link>
                {/* <Link
                  href="/gobierno"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-[#FFD300]"
                >
                  Gobierno
                </Link> */}
                {/* <Link
                  href="/noticias"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-[#FFD300]"
                >
                  Noticias
                </Link> */}
                <Link
                  href="/contacto"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-[#ffd300]"
                >
                  Contacto
                </Link>
                <Link
                  href="/emergencias"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-[#ffd300]"
                >
                  Emergencias
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {/* <Link
            href="/servicios"
            className="transition-colors hover:text-[#ffd300]"
          >
            Servicios
          </Link> */}
          <Link
            href="/turismo"
            className="transition-colors hover:text-[#FFD300]"
          >
            Turismo
          </Link>
          {/* <Link
            href="/gobierno"
            className="transition-colors hover:text-[#FFD300]"
          >
            Gobierno
          </Link> */}
          {/* <Link
            href="/noticias"
            className="transition-colors hover:text-[#FFD300]"
          >
            Noticias
          </Link> */}
          <Link
            href="/contacto"
            className="transition-colors hover:text-[#FFD300]"
          >
            Contacto
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-2">
          <Button
            asChild
            variant="ghost"
            className=" hover:bg-[#52A355] hover:text-white bg-[#FFd300] text-black"
          >
            <Link href="/emergencias">Emergencias</Link>
          </Button>
          <Button
            asChild
            className="bg-[#FFd300] text-black hover:bg-[#EFB130]"
          ></Button>
        </div>
      </div>
    </header>
  );
}
