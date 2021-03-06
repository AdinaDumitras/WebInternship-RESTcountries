import React, {useStatem, useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom'
import '../country.css'

function Country() {
    const [country, setCountry] = useState ([])
    const {name} = useParams()

    useEffect(() => {
        const fetchCountryData = async () => {
            const response = await fetch(`https://restcountries.com/v2/name/${name}`)
            const country = await response.json()
            setCountry(country)
            console.log(country)
        }

        fetchCountryData()
    }, [name])

    return (
      <>
        <section className='country'>
            <Link to="/" className='btn btn-light'>
                <i className='fas fa-arrow-left'></i> Back Home
            </Link>

            {country.map((c) => {
                const {numericCode, flag, name, alpha2Code, alpha3Code, capital, region, population, latlng, area, timezones, languages, borders} = c

                return (
                    <article key = {numericCode}>
                        <div className='country-inner'>
                        <div className='flag'>
                            <img src={flag} alt={name}/>
                        </div>

                        <div className='country-details'>
                           <div>
                                <h2>{name}</h2>
                                <h5>Alpha 2 Code: <span>{alpha2Code}</span></h5>
                                <h5>Capital: <span>{capital}</span></h5>
                                <h5>Region: <span>{region}</span></h5>
                                <h5>Population: <span>{population}</span></h5>
                           </div>
                           <div>
                                <h5>Latlng: <span>{latlng}</span></h5>
                                <h5>Area: <span>{area}</span></h5>
                                <h5>Time zone: <span>{timezones}</span></h5>
                                <h5>Language: <span>{languages[0].name}</span></h5>
                           </div>
                        </div>
                        </div>

                        <div>
                            <h3>Neighbor countries: </h3>
                            <div className='borders'>
                                {borders.map((border) => {
                                    return (
                                        <ul key={border}>
                                            <li>{border}</li>
                                        </ul>
                                    )
                                })}
                            </div>
                        </div>
                    </article>
                )
            })}
        </section>
        </>
  )
}

export default Country;
