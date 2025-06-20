"use client";
import { useState } from "react";

import ContactoCard from "../myComponents/contacto/ContactoCard";
import { dependencias } from "@/lib/dependencias";
import  SearchBar  from "../myComponents/SearchBar";

// This page is the main contact page for the website, displaying various contact information and a search bar to filter through dependencies.

export default function Contacto() {
    const [searchQuery, setSearchQuery] = useState("");
    
const filtered = dependencias.filter(dep => {
    const query = searchQuery.toLowerCase();
    return (
      dep.name.toLowerCase().includes(query) ||
      (dep.address && dep.address.toLowerCase().includes(query)) ||
      (dep.email && dep.email.toLowerCase().includes(query))
    );
  });
    return (
        <section>
            <div className="flex flex-col gap-y-2 mt-2">
                <h1 className="text-5xl text-[#01791A] font-bold text-center mb-6">Contacto</h1>
                <p className="text-center text-gray-700 mb-4">
                    Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos a través de los siguientes medios:
                </p>
                <div className="w-2/3 mx-auto">
                    <SearchBar searchQuery={searchQuery} setSearchQuery={ setSearchQuery} />
                </div>
               <div className="">

                {filtered.length > 0 ? (
                    <div className="flex flex-col gap-y-2 px-2 mx-auto  rounded-lg items-center overflow-y-scroll md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:items-center mb-2 ">
                        {filtered.map((dependencia, index) => (
                            <ContactoCard {...dependencia} key={index} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500 mt-4">No se encontraron dependencias.</p>
                )}
               </div>

                


            </div>
        </section>
    )
}