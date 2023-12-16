'use client'
import { useState, useEffect } from 'react'

import Link from 'next/link'
import CountryTile from './countrytile'

function SearchBar( {filterByName, setInput} ) {

  const handleInput = (e) => {
    let input = (e.target.value).replace(/\W/gi, '');
    
    filterByName(input);
    setInput(input);
  } 

  return(
    <label className="flex justify-center
    w-[calc(100%-2em)]
    mt-[2.25em] ml-[2.25rem]
    sm:ml-[0.75rem]
    sm:justify-start">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-[-4rem] z-10 text-[rgb(192,196,204)]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>

      <input id="searchBar" className="w-[calc(100%)] h-14 
      m-6 mt-[-0.9em] pl-16
      rounded-lg shadow-md
      sm:max-w-[30rem]" 
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
    <select id="regionSelector" className="w-48 h-12 
    ml-5 mt-4 mb-1 pl-4
    rounded-md 
    shadow-md shadow-gray-100"
    defaultValue="all" onChange={handlePickRegion}>
      <option value="all">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}

export default function Home() {
  const [apiUrl, setApiUrl] = useState('https://restcountries.com/v3.1/all?');
  const [regionFilter, setRegionFilter] = useState('');
  const [input, setInput] = useState('');
  const [countryData, setCountryData] = useState([]);


  function resetList() {
    fetch('https://restcountries.com/v3.1/all?')
    .then((response) => response.json())
    .then((data) => {
      if (!regionFilter) {
        setCountryData(data);
      } else {
        let tempArray = data.filter((country) => country.region === regionFilter);
        setCountryData(tempArray);
      }
    })
  }

  useEffect(() => {   
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (!regionFilter) {
        setCountryData(data);
      } else {
        let tempArray = data.filter((country) => country.region === regionFilter);
        setCountryData(tempArray);
      }
    })
  }, [])

  const filterByName = (searchInput) => {
    setApiUrl(`https://restcountries.com/v3.1/name/${searchInput}` );
    if (searchInput.trim() === '') {
      setApiUrl('https://restcountries.com/v3.1/all?')
      resetList();
    }

    console.log(apiUrl);

    fetch(apiUrl)
     .then((response) => response.json())
     .then((data) => {
      if (data.status === 404) {
        setCountryData([]);
        return;
      } 
        if (!regionFilter) {
          setCountryData(data);
        } else {
          let tempArray = data.filter((country) => country.region === regionFilter);
          setCountryData(tempArray);
        }
       })
       .catch((err) => {
        console.log(err.message);
       })
  }
  
  const filterByRegion = (selectedRegion) => {
    if (selectedRegion === 'all') {
      setRegionFilter('');
    } else {
      setRegionFilter(selectedRegion);
    }

    let regionUrl = `https://restcountries.com/v3.1/region/${selectedRegion}`;

    console.log(apiUrl);
    
    if (apiUrl === 'https://restcountries.com/v3.1/all?') {
      if (selectedRegion === 'all') {
        regionUrl = 'https://restcountries.com/v3.1/all?';
      }
      fetch(regionUrl)
      .then((response) => response.json())
      .then((data) => {
          setCountryData(data);
      })
    } else {
      fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (selectedRegion === 'all') {
          setCountryData(data);
          console.log(data)
        } else {
          let tempArray = data.filter((country) => country.region === selectedRegion);
          setCountryData(tempArray);
        }
    })
    }    
  }


  return (
    <div className="bg-light-very-light-gray 
    w-full min-h-screen mt-[6rem]
    font-Nunito">
      <main className="flex flex-col 
      w-full">
        
        <div className="sm:flex sm:flex-row sm:items-center
        sm:px-8 sm:mt-8
        xl:px-24">
          <SearchBar filterByName={filterByName} setInput={setInput} />
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

          {countryData.map((item, index) => {
            return(
              <Link href={{ pathname: '/pages/countrydetails', query: { country: countryData[index].name.official } }}
              key={index} >
                <CountryTile countryData={countryData} countryIndex={index} />
              </Link>
            )
        })}

        </section>
      </main>
    </div>
  )
}
