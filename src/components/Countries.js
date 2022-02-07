import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const url = "https://restcountries.com/v2/all"

const Countries = () => {
    const [countries, setCountries]= useState([])

    useEffect( () => {
        const fetchCountryData = async () => {
            const response = await fetch(url)
            const countries = await response.json()
            setCountries(countries)
        }
        fetchCountryData()
    },[])

    return (
        <>
        <section className="grid">
        {countries.map((country) => {
            const {numericCode,name, population, region, capital, flag } = country
            return (
                <article key ={numericCode}>
                    <div className='flag'>
                        <img src ={flag} alt={name} className="card-img-top"/>
                    </div>
                    <div className='details-main'>
                        <h3 className='country-name'>{name}</h3>
                        <h4>Population: <span>{population}</span></h4>
                        <h4>Region: <span>{region}</span></h4>
                        <h4>Capital: <span>{capital}</span></h4>
                        <div className='buttons'>
                            <Link to={`/countries/${name}`} className="btn btn-light">Learn more</Link>
                        </div>   
                    </div>
                </article>
            )
        })}
        </section>
        </>
    )
};

export default Countries;
