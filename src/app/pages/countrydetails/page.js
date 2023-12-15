'use client'

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function CountryDetails() {
    let [currentCountry, setCurrentCountry] = useState([{
        "name": {
            "common": "Error: API Connection Timed Out",
            "official": "Territory of Christmas Island",
            "nativeName": {
                "eng": {
                    "official": "Territory of Christmas Island",
                    "common": "Christmas Island"
                }
            }
        },
        "tld": [
            ".cx"
        ],
        "cca2": "CX",
        "ccn3": "162",
        "cca3": "CXR",
        "independent": false,
        "status": "officially-assigned",
        "unMember": false,
        "currencies": {
            "AUD": {
                "name": "Australian dollar",
                "symbol": "$"
            }
        },
        "idd": {
            "root": "+6",
            "suffixes": [
                "1"
            ]
        },
        "capital": [
            "Flying Fish Cove"
        ],
        "altSpellings": [
            "CX",
            "Territory of Christmas Island"
        ],
        "region": "Oceania",
        "subregion": "Australia and New Zealand",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ara": {
                "official": "جزيرة كريسماس",
                "common": "جزيرة كريسماس"
            },
            "bre": {
                "official": "Tiriad Enez Christmas",
                "common": "Enez Christmas"
            },
            "ces": {
                "official": "Teritorium Vánočního ostrova",
                "common": "Vánoční ostrov"
            },
            "cym": {
                "official": "Tiriogaeth yr Ynys y Nadolig",
                "common": "Ynys y Nadolig"
            },
            "deu": {
                "official": "Gebiet der Weihnachtsinsel",
                "common": "Weihnachtsinsel"
            },
            "est": {
                "official": "Jõulusaare ala",
                "common": "Jõulusaar"
            },
            "fin": {
                "official": "Joulusaaren alue",
                "common": "Joulusaari"
            },
            "fra": {
                "official": "Territoire de l'île Christmas",
                "common": "Île Christmas"
            },
            "hrv": {
                "official": "Teritorij Božićni otok",
                "common": "Božićni otok"
            },
            "hun": {
                "official": "Karácsony-sziget",
                "common": "Karácsony-sziget"
            },
            "ita": {
                "official": "Territorio di Christmas Island",
                "common": "Isola di Natale"
            },
            "jpn": {
                "official": "クリスマス島の領土",
                "common": "クリスマス島"
            },
            "kor": {
                "official": "크리스마스 섬",
                "common": "크리스마스 섬"
            },
            "nld": {
                "official": "Grondgebied van Christmas Island",
                "common": "Christmaseiland"
            },
            "per": {
                "official": "جزیرهٔ کریسمس",
                "common": "جزیرهٔ کریسمس"
            },
            "pol": {
                "official": "Wyspa Bożego Narodzenia",
                "common": "Wyspa Bożego Narodzenia"
            },
            "por": {
                "official": "Território da Ilha Christmas",
                "common": "Ilha do Natal"
            },
            "rus": {
                "official": "Территория острова Рождества",
                "common": "Остров Рождества"
            },
            "slk": {
                "official": "Teritórium Vianočného ostrova",
                "common": "Vianočnú ostrov"
            },
            "spa": {
                "official": "Territorio de la Isla de Navidad",
                "common": "Isla de Navidad"
            },
            "srp": {
                "official": "Божићно Острво",
                "common": "Божићно Острво"
            },
            "swe": {
                "official": "Julön",
                "common": "Julön"
            },
            "tur": {
                "official": "Christmas Adası",
                "common": "Christmas Adası"
            },
            "urd": {
                "official": "ریاستِ جزیرہ کرسمس",
                "common": "جزیرہ کرسمس"
            },
            "zho": {
                "official": "圣诞岛",
                "common": "圣诞岛"
            }
        },
        "latlng": [
            -10.5,
            105.66666666
        ],
        "landlocked": false,
        "area": 135,
        "demonyms": {
            "eng": {
                "f": "Christmas Islander",
                "m": "Christmas Islander"
            }
        },
        "flag": "🇨🇽",
        "maps": {
            "googleMaps": "https://goo.gl/maps/ZC17hHsQZpShN5wk9",
            "openStreetMaps": "https://www.openstreetmap.org/relation/6365444"
        },
        "population": 2072,
        "car": {
            "signs": [
                "AUS"
            ],
            "side": "left"
        },
        "timezones": [
            "UTC+07:00"
        ],
        "continents": [
            "Asia"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/cx.png",
            "svg": "https://flagcdn.com/cx.svg"
        },
        "coatOfArms": {
            "png": "https://mainfacts.com/media/images/coats_of_arms/cx.png",
            "svg": "https://mainfacts.com/media/images/coats_of_arms/cx.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                -10.42,
                105.68
            ]
        },
        "postalCode": {
            "format": "####",
            "regex": "^(\\d{4})$"
        }
    }]); //placeholder so that the page doesn't crash upon loading before currentCountry's state is pulled from the API
    const searchParams = useSearchParams()
 
    const country = searchParams.get('country')
    
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setCurrentCountry([...data]);
            console.log(currentCountry);
        })
    }, [])


    return(
        <main className="bg-light-very-light-gray
        min-h-[calc(100vh-6rem)] w-full 
        grid cols-1 justify-center
        p-8
        font-Nunito">
            <div>
                <Link href="/">
                    <button className="bg-white shadow-md shadow-gray-300
                    rounded-md
                    w-32 h-10 mb-16
                    flex justify-center items-center 
                    text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                        </svg>
                        <span className="px-2">Back</span>
                    </button>
                </Link> 

                <img src={currentCountry[0].flags.svg + "#svgView(preserveAspectRatio(none))"} alt={currentCountry[0].flags.alt} className="w-full aspect-[3/2]"/>
            </div>
            <div>
                <h2 className="font-extrabold text-2xl">{currentCountry[0].name.common}</h2>

                <p><span className="font-semibold">Native Name: </span>{currentCountry[0].name.nativeName.eng.common}</p>
                <p><span className="font-semibold">Population: </span>{currentCountry[0].population}</p>
                <p><span className="font-semibold">Region: </span>{currentCountry[0].region}</p>
                <p><span className="font-semibold">Sub Region: </span>{currentCountry[0].subregion}</p>
                <p><span className="font-semibold">Capital: </span>{currentCountry[0].capital}</p>

                <p><span className="font-semibold">Top Level Domain: </span>{currentCountry[0].tld}</p>
                <p><span className="font-semibold">Currencies: </span>{}</p>
                <p><span className="font-semibold">Languages: </span>{}</p>
            </div>
            <div>
                <h3>Border Countries: </h3>
                
            </div>
            
        </main>
    )
}
