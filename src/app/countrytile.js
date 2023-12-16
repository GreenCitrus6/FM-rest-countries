
export default function CountryTile({ countryData, countryIndex }) {

    return(
        <div className="bg-light-white rounded-lg overflow-hidden shadow-md shadow-gray-100
        max-w-[320px] h-full
        hover:bg-[hsl(0,0,95%)]
        active:bg-gray-200
        dark:bg-dark-dark-blue dark:shadow-gray-900 dark:text-light-white
        dark:hover:bg-[hsl(209,23%,20%)]
        dark:active:bg-[hsl(209,23%,16%)]
        ease-out duration-300">
            <img src={countryData[countryIndex].flags.svg+'#svgView(preserveAspectRatio(none))'} alt={`flag of ${countryData[countryIndex].name.common}`} 
            className="w-full aspect-[3/2]"/>
            
            <div className="px-8 pt-6 pb-10">
                <h2 className="font-bold text-2xl 
                pb-4">{countryData[countryIndex].name.common}</h2>
            
                <p><span className="font-semibold">Population: </span>{(countryData[countryIndex].population).toLocaleString("en-US")}</p>
                <p><span className="font-semibold">Region: </span>{countryData[countryIndex].region}</p>
                <p><span className="font-semibold">Capital: </span>{countryData[countryIndex].capital}</p>
            </div>
        </div>
    )
}