import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, User, Clock } from "lucide-react";
import Link from "next/link";

export type DependencyInfo = {
  name: string;
  address: string;
  phone: string[] | number[];
  email?: string | null;
  hours?: Record<string, string> | null;
  extension?: string | number;
};

export default function ContactoCard(dependency: DependencyInfo) {
  const phoneNumber = Array.isArray(dependency.phone)
    ? String(dependency.phone[0]).replace(/[^\d]/g, "")
    : String(dependency.phone).replace(/[^\d]/g, "");
  return (
    <div className="bg-green-50 border border-green-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-4">
        <div className="flex  flex-col items-start">
          

          <div className="ml-4">
            <h3 className="font-bold text-gray-800 text-2xl">{dependency.name}</h3>
            
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-start">
                <Clock className="h-4 w-4 text-green-600 mr-2 inline-block" />
              {dependency.hours &&
                Object.values(dependency.hours).map((h) => (
                  

                    <p key={h} className="text-sm text-gray-600">
                      {`${h}`}
                    </p>
                  
                ))}
            </div>
            <div className="flex items-center text-sm">
              <Phone className="h-4 w-4 text-green-600 mr-2" />
              <a
                href={`tel:${phoneNumber}`}
                className="text-gray-700 hover:text-green-700"
              >
                {dependency.phone[0]}
              </a>
            </div>
            <div className="flex items-center text-sm">
              <Mail className="h-4 w-4 text-green-600 mr-2" />
              <a
                href={`mailto:${dependency.email}`}
                className="text-gray-700 hover:text-green-700 break-all"
              >
                {dependency.email}
              </a>
            </div>
          </div>
          <button className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 text-green-900 font-medium py-2 rounded-md transition-colors text-sm">
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
}
