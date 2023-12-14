'use client'
import { useState, useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import Header from './header'
import CountryTile from './countrytile'

function SearchBar() {
  return(
    <input className="w-[calc(80%)] h-12 m-6 rounded-lg shadow-md" 
    type="text"
    placeholder="Search for a country..." />
  )
}

function FilterPicker() {
  return(
    <select >
      <option>Filter by Region</option>
      <option>All</option>
      <option>Africa</option>
      <option>America</option>
      <option>Asia</option>
      <option>Europe</option>
      <option>Oceania</option>
    </select>
  )
}

export default function Home() {
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCountryData(data);
      })
      .catch((err) => {
        console.log(err.message);
      })
  }, [])

  return (
    <div className="bg-light-very-light-gray min-h-screen font-Nunito">
      <Header />
      <main className="flex flex-col">
        <SearchBar />
        <FilterPicker />

        <section id="countriesContainer" className="grid gap-10 mx-12 mt-8">
          <CountryTile countryData={countryData} />
          <CountryTile countryData={countryData} />
        </section>
      </main>
    </div>
  )
}
