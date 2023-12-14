
export default function CountryTile({ countryData }) {
    return(
        <div className="bg-light-white rounded-lg overflow-hidden shadow-md shadow-gray-100">
            <img src={countryData[0].flags.png} />
            
            <div className="px-8 pt-6 pb-10">
                <h2 className="font-bold text-2xl 
                pb-4">Christmas Island</h2>
            
                <p><span className="font-semibold">Population: </span>{countryData[0].population}</p>
                <p><span className="font-semibold">Region: </span>{countryData[0].region}</p>
                <p><span className="font-semibold">Capital: </span>{countryData[0].capital}</p>
            </div>
        </div>
    )
}