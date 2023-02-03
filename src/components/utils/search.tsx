import React, { useState, useEffect } from 'react'
import type { Character } from '../../types'
import jsonData from '../../data/characters.json'
const data: Character[] = jsonData as Character[]

const Search = () => {
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState<Character[]>([])

  const handleSearch = (event: any) => {
    setSearchValue(event.target.value)
  }

  useEffect(() => {
    const filteredArray = data.filter((item) => {
      return item.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
    })
    setFilteredData(filteredArray)
  }, [searchValue])

  return (
    <div className="w-full flex flex-col justify-center items-center py-5">
      <div className="relative w-80 max-w-[90%]">
        <input
          type="text"
          value={searchValue}
          onChange={handleSearch}
          placeholder="Search..."
          className="h-10 w-full border border-[#777777] rounded pl-7 outline-none focus:border-primary"
        />
        <div className="absolute left-1 top-2.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-[#777777]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <div className="absolute bg-divider w-px sm:h-[30rem] sm:top-[-13.8rem] lg:h-[55rem] lg:top-[-26.3rem] left-[50%] rotate-90 z-[-1]"></div>
      </div>
    </div>
  )
}

export default Search
