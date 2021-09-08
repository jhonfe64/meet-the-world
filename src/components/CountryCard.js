import React from 'react';
import CountryInfoCard from '../elements/CountryInfoCard';
import {Link} from 'react-router-dom'

function CountryCard({data}) {
    return (
        data.map((country)=>{
            return(
                <CountryInfoCard>
                    <Link to={`/country/${country.name}`}>
                        <div className="imgContainer">
                            <img  src={country.flag} alt={country.name} />
                        </div>
                        <div className="countryInfo p-3">
                            <h5>Name: {country.name}</h5>
                            <h5>Capital: {country.capital}</h5>
                            <h5>Region: {country.region}</h5>
                            <h5>Languages: {country.languages[0].iso639_1}</h5>
                            <h5>Continent: {country.region}</h5>
                            <h5>Currencies: {country.currencies[0].code}</h5>
                        </div>
                    </Link>
                </CountryInfoCard>
            )
        })
    )
}

export default CountryCard
