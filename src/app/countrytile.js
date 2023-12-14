
export default function CountryTile({ countryData, countryIndex }) {
    return(
        <div className="bg-light-white rounded-lg overflow-hidden shadow-md shadow-gray-100
        max-w-[320px]">
            <img src={countryData[countryIndex].flags.png} alt={`flag of ${countryData[countryIndex].name.common}`} />
            
            <div className="px-8 pt-6 pb-10">
                <h2 className="font-bold text-2xl 
                pb-4">{countryData[countryIndex].name.common}</h2>
            
                <p><span className="font-semibold">Population: </span>{countryData[countryIndex].population}</p>
                <p><span className="font-semibold">Region: </span>{countryData[countryIndex].region}</p>
                <p><span className="font-semibold">Capital: </span>{countryData[countryIndex].capital}</p>
            </div>
        </div>
    )
}