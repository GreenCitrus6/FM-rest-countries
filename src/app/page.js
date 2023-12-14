'use client'
import { useState, useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import Header from './header'
import CountryTile from './countrytile'

function SearchBar() {
  return(
    <label className="flex justify-center
    w-[calc(100%-2em)]
    mt-[2.25em] ml-[2.25rem]">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-[-4rem] z-10 text-[rgb(192,196,204)]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>

      <input id="searchBar" className="w-[calc(100%)] h-14 
      m-6 mt-[-0.9em] pl-16
      rounded-lg shadow-md" 
      type="text"
      placeholder="Search for a country..." />
    </label>
  )
}

function FilterPicker({ filterByRegion }) {
  const handlePickRegion = () => {
    filterByRegion(document.getElementById("regionSelector").value)
  }
  
  return(
    <select id="regionSelector" className="w-48 h-12 
    ml-5 mt-4 mb-1 pl-4
    rounded-md 
    shadow-md shadow-gray-100"
    defaultValue="all" onChange={handlePickRegion}>
      <option value="all">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  )
}

export default function Home() {
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCountryData(data);
      })
      .catch((err) => {
        console.log(err.message);
      })
  }, [])

  const filterByName = () => {

  }

  const filterByRegion = (selectedRegion) => {
    console.log(selectedRegion);  
    let apiUrl = `https://restcountries.com/v3.1/region/${selectedRegion}`;
    if (selectedRegion === 'all') { 
      apiUrl = 'https://restcountries.com/v3.1/all?';
    }
    fetch(apiUrl)
     .then((response) => response.json())
     .then((data) => {
      console.log(data);
      setCountryData(data);
     })
     .catch((err) => {
      console.log(err.message);
     })
  }

  return (
    <div className="bg-light-very-light-gray 
    w-full min-h-screen 
    font-Nunito">
      <main className="flex flex-col 
      w-full">
        <SearchBar />
        <FilterPicker filterByRegion={filterByRegion} />

        <section id="countriesContainer" className="grid gap-10 justify-center
        w-full
        px-12 mt-8">
          {/* <CountryTile countryData={countryData} />
          <CountryTile countryData={countryData} /> */}
          {countryData.map((item, index) => {
            return(
              <CountryTile key={index} countryData={countryData} countryIndex={index} />
            )
          })}

        </section>
      </main>
    </div>
  )
}
