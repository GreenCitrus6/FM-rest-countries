'use client'
import { useState, useEffect } from 'react'

import Link from 'next/link'
import CountryTile from './countrytile'

function SearchBar( {filterByName, setCurrentInput } ) {

  const handleInput = (e) => {
    let input = (e.target.value).replace(/[^\w\s]/gi, '');
    filterByName(input);
    setCurrentInput(input);
    //State to be used upon changing filter, so that both the name and region filters are applied
  } 

  return(
    <label className="flex justify-center
    w-[calc(100%-2em)]
    mt-[2.25em] ml-[2.25rem]
    sm:ml-[0.75rem]
    sm:justify-start">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-[-4rem] z-10 text-[rgb(192,196,204)]
      dark:text-light-very-light-gray">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>

      <input id="searchBar" className="w-[calc(100%)] h-14 
      m-6 mt-[-0.9em] pl-16
      rounded-lg shadow-md
      sm:max-w-[30rem]
      dark:bg-dark-dark-blue
      dark:text-light-white
      ease-out duration-300" 
      type="text"
      placeholder="Search for a country..."
      onChange={handleInput} />
    </label>
  )
}

function FilterPicker({ filterByRegion }) {
  const handlePickRegion = () => {
    filterByRegion(document.getElementById("regionSelector").value)
  }
  
  return(
    <select id="regionSelector" name="region" role="select" 
    className="w-48 h-12 
    ml-5 mt-4 mb-1 pl-4
    rounded-md 
    shadow-md shadow-gray-100
    dark:shadow-gray-900
    dark:bg-dark-dark-blue dark:text-light-white
    ease-out duration-300"
    defaultValue="all" onChange={handlePickRegion}>
      <option role="option" value="all">Filter by Region</option>
      <option role="option" value="Africa">Africa</option>
      <option role="option" value="America">America</option>
      <option role="option" value="Asia">Asia</option>
      <option role="option" value="Europe">Europe</option>
      <option role="option" value="Oceania">Oceania</option>
      <option role="option" value="Antarctic">Antarctic</option>
    </select>
  )
}

export default function Home() {
  //Data of all countries, pulled from the API
  const [countryData, setCountryData] = useState([]);
  //Data of countries that fit the region and search filters. This one is rendered to the DOM
  const [filteredCountries, setFilteredCountries] = useState([]);

  const [currentInput, setCurrentInput] = useState('');

  useEffect(() => {   
    // Import a list of all countries from RESTcountries API upon page load.
    fetch('https://restcountries.com/v3.1/all?')
    .then((response) => response.json())
    .then((data) => {
      setCountryData(data);
      setFilteredCountries(data);
      
    })
  }, [])

  const filterByName = (searchInput) => {
    //when SearchBar is empty, show every country
    if (searchInput == '') {
      return setFilteredCountries(countryData);
    }
    
    const searchRegExp = new RegExp(searchInput, 'gi');
    const searchResults = countryData.filter((country) => searchRegExp.test(country['name']['common']))

    setFilteredCountries(searchResults);
  }

  const filterByRegion = (selectedRegion) => {
    let regionFilteredUrl = `https://restcountries.com/v3.1/region/${selectedRegion}`;
    
    if (selectedRegion === 'all') {
      regionFilteredUrl = 'https://restcountries.com/v3.1/all?'
    }

    fetch(regionFilteredUrl)
    .then((response) => response.json())
    .then((data) => {
      setCountryData(data);
      if (currentInput == '') {
        return setFilteredCountries(data);
      }
      
      // If there is text in the input field, apply a search filter after the region filter
      const searchRegExp = new RegExp(currentInput, 'gi');
      const searchResults = data.filter((country) => searchRegExp.test(country['name']['common']))

      setFilteredCountries(searchResults);
    })
  }

  return (
    <div className="bg-light-very-light-gray 
    w-full min-h-screen mt-[6rem]
    dark:bg-dark-very-dark-blue
    ease-out duration-300">
      <main className="flex flex-col 
      w-full">
        <div className="italic absolute left-4 top-[11.2rem]
        sm:top-[6.75rem]
        md:left-8
        xl:left-24
        dark:text-light-white
        ease-out duration-300">
          <p>Challenge by <Link 
          href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca" 
          target="_blank"
          className="text-sky-600">Frontend Mentor</Link>. Coded by <Link 
          href="https://portfolio-website-rgm2jbtrb-greencitrus6s-projects.vercel.app/" 
          target="_blank"
          className="text-sky-600">Daniel Aadland</Link></p>
        </div>
        <div className="sm:flex sm:flex-row sm:items-center
        sm:px-8 sm:mt-8
        xl:px-24">
          <SearchBar filterByName={filterByName} setCurrentInput={setCurrentInput} />
          <FilterPicker filterByRegion={filterByRegion} />
        </div>

        <section id="countriesContainer" className="grid gap-10 justify-items-center
        w-full
        px-12 mt-8
        md:px-8
        sm:grid-cols-2
        lg:grid-cols-3
        lg:gap-16
        xl:grid-cols-4
        xl:px-24">

        
        { /* For every country in the filterCountries array, render a CountryTile to the DOM */
        filteredCountries.map((item, index) => {
          return(
            <Link href={{ pathname: '/pages/countrydetails', query: { country: item.name.official } }}
            key={index} >
              <CountryTile countryData={filteredCountries} countryIndex={index} />
            </Link>
          )
        })}

        </section>
      </main>
    </div>
  )
}
