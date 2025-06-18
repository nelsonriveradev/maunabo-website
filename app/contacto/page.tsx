import ContactoCard from "../myComponents/contacto/ContactoCard";
import { dependencias } from "@/lib/dependencias";

export default function Contacto() {
    return (
        <section>
            <div className="flex flex-col gap-y-2 mt-2">
                <h1 className="text-5xl text-[#01791A] font-bold text-center mb-6">Contacto</h1>
                <p className="text-center text-gray-700 mb-4">
                    Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos a través de los siguientes medios:
                </p>

                <div className="flex flex-col gap-y-2 px-2 mx-auto  rounded-lg items-center overflow-y-scroll md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:items-center mb-2 ">
                    {dependencias.map((dependencia, index)=> (
                        <ContactoCard {...dependencia} key={index}/>

                    ))}
                </div>


            </div>
        </section>
    )
}