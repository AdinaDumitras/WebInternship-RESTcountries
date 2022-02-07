import React from 'react';
import { useState, useEffect } from 'react';

function Filter(){
  const [countries, setCountries] = useState([])

  window.addEventListener('DOMContentLoaded',() => {
    const search = document.getElementById ('search')

    search.addEventListener('input', (e) => {
      const {value} = e.target
      const countryName=document.querySelectorAll('.country-name')
      countryName.forEach((name) =>{
        if(name.innerText.toLowerCase().includes(value.toLowerCase())){
          name.parentElement.parentElement.style.display="block"
        } else{
          name.parentElement.parentElement.style.display="none"
        }
      })
    })
  })

  const filterByRegion = async region => {
    if(region === ``) return
    const res = await fetch(`https://restcountries.com/v2/region/${region}`)
    const data = await res.json()
    setCountries(data)
  }

  return (
      <section className='filter'>
          <form className='form-control'>
              <input type="search" name="search" id="search" placeholder='Search for a country...'/>
          </form>
          <div className='region'>
              <select name="select" id="select" className='select' onChange={ val => filterByRegion(val.target.value)}>
                <option value="Filter by region">Filter by region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europa</option>
                <option value="Oceania">Oceania</option>
              </select>
          </div>
      </section>
  )
};

export default Filter;
