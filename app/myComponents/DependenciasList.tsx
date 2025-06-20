import { useState } from "react";
import { dependencias } from "@/lib/dependencias";
import SearchBar from "./SearchBar";

export default function DependenciasList() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter dependencies by name, department, or position (case-insensitive)
  const filtered = dependencias.filter(dep => {
    const query = searchQuery.toLowerCase();
    return (
      dep.name.toLowerCase().includes(query) ||
      (dep.address && dep.address.toLowerCase().includes(query)) ||
      (dep.email && dep.email.toLowerCase().includes(query))
    );
  });

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ul className="mt-4 space-y-2">
        {filtered.length === 0 ? (
          <li className="text-gray-500">No results found.</li>
        ) : (
          filtered.map((dep, idx) => (
            <li key={idx} className="p-4 border rounded shadow-sm">
              <div className="font-bold">{dep.name}</div>
              <div>{dep.address}</div>
              <div>{dep.phone?.join(", ")}</div>
              {dep.email && <div>{dep.email}</div>}
              {dep.hours && (
                <div>
                  Horario: {dep.hours.in} - {dep.hours.out}
                </div>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}