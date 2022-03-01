import React, { useState } from 'react'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRangePicker } from 'react-date-range'
import Image from 'next/image'
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  UsersIcon,
} from '@heroicons/react/solid'
import { useRouter } from 'next/router'

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState('')
  const [guest, setGuest] = useState(1)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const router = useRouter();

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        Location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guest
      }
    })
    setSearchInput("")
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }
  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3 bg-white
     py-5 px-5 shadow-md md:px-10"
    >
      {/* Left  - Logo*/}
      <div onClick={() => router.push("/")} className="relative my-auto flex h-10 cursor-pointer items-center animate-bounce">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle - Search */}
      <div
        className="flex items-center rounded-full py-2 md:border-2 
      md:shadow-sm"
      >
        <input
          className="flex-grow bg-transparent pl-5 text-sm text-gray-600 
          placeholder-gray-400 outline-none"
          type="text"
          placeholder={placeholder || "Start your search"}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon
          className="hidden h-8 cursor-pointer rounded-full bg-red-400 
        p-2 text-white md:mx-2 md:inline-flex"
        />
      </div>

      {/* right */}
      <div
        className="flex items-center justify-end space-x-4 
      text-gray-500"
      >
        <p className="hidden cursor-pointer md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div
          className="flex items-center space-x-2 rounded-full 
        border-2 p-2"
        >
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
      {/* Date picker */}
      {searchInput && (
        <div className="col-span-3 mx-auto mt-5 flex flex-col">
          <DateRangePicker
            ranges={[selectionRange]}
            mindate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
          <div className="mb-5 flex items-center border-b">
            <h2
              className="ml-5 flex-grow 
            text-lg font-semibold"
            >
              Number of Guests
            </h2>

            <UsersIcon className="h-5" />

            <input
              type="number"
              className="w-12 pl-3 text-lg
            text-red-500 outline-none"
              onChange={(e) => setGuest(e.target.value)}
              value={guest}
              min={1}
            />

          </div>
          <div className='flex'>
            <button className='flex-grow text-gray-500 text-lg' onClick={() => (setSearchInput(""))}>Cancel</button>
            <button className='flex-grow text-red-500 text-lg' onClick={search}>Search</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
