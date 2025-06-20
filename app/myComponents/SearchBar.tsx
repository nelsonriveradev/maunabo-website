import { SearchIcon, XIcon } from 'lucide-react'
interface SearchBarProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}
export default function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
    <div className="relative">
      <div className="flex items-center bg-white rounded-lg border border-green-200 overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-green-500 focus-within:border-green-500">
        <div className="pl-4">
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="w-full py-3 px-3 text-gray-700 focus:outline-none placeholder-gray-400"
          placeholder="Buscar por nombre..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button onClick={() => setSearchQuery('')} className="pr-4">
            <XIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>
      <div className="mt-2 text-sm text-gray-600 pl-1">
        {searchQuery ? (
          <p>
            Mostrando resultados para: <span className='font-bold'>{searchQuery}</span>
          </p>
        ) : (
          <span>Ingrese un nombre para buscar</span>
        )}
      </div>
    </div>
  )
}
