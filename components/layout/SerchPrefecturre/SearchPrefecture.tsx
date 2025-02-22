'use client'

import type { Prefecture } from '@/types/Prefecture/Prefecture'
import { Search } from 'lucide-react'
import { forwardRef, useImperativeHandle, useState } from 'react'

interface SearchPrefectureProps {
  prefectures: Prefecture[]
  onSearch: (searchResults: Prefecture[]) => void
}

export interface SearchPrefectureRef {
  reset: () => void
}

const SearchPrefecture = forwardRef<SearchPrefectureRef, SearchPrefectureProps>(({ prefectures, onSearch }, ref) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    const results = prefectures.filter((prefecture) => prefecture.prefName.toLowerCase().includes(term.toLowerCase()))
    onSearch(results)
  }

  const reset = () => {
    setSearchTerm('')
    onSearch(prefectures)
  }

  useImperativeHandle(ref, () => ({
    reset,
  }))

  return (
    <div className="relative mb-4 py-1">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="都道府県を検索"
          className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 text-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
        />
        <Search className="absolute left-3 top-2.5 size-4 text-gray-400" />
      </div>
    </div>
  )
})

SearchPrefecture.displayName = 'SearchPrefecture'

export default SearchPrefecture
