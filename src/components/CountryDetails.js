import React from 'react';
import {useParams, useContext} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import {Link} from 'react-router-dom';

function CountryDetails() {

    const params =  useParams();
    const countryName = params.name;

    const [data] = useFetch(`https://restcountries.eu/rest/v2/name/${countryName}`);


    console.log(data);



    return (
        <div className="mt-5">
            <div className="container">
                <div className="row">
                    {
                        data.map((countryInfo)=>{
                            return (
                                <>
                                    <div className="col-12 col-lg-6">
                                        <img className="img-fluid" src={countryInfo.flag} alt="" />
                                    </div>
                                    <div className="col-12 col-lg-6 d-flex align-items-center">
                                        <div>
                                        <h1 className="mb-5">{countryInfo.name}</h1>
                                        <h5>Subregion: {countryInfo.subregion}</h5>
                                        <h5>Alpha code: {countryInfo.alpha3Code}</h5>
                                        <h5>Population: {countryInfo.population}</h5>
                                        <div className="d-flex">
                                            <h5 className="me-2">Borders: </h5>
                                            {
                                                countryInfo.borders.map((borderCountry)=>{
                                                    return <h5 className="me-2">{borderCountry}</h5>
                                                })
                                            }
                                        </div>
                                        <div className="d-flex">
                                            <h5 className="me-2">Languages: </h5>
                                            {
                                                countryInfo.languages.map((language)=>{
                                                    return <h5 className="me-2">{language.name}</h5>
                                                })
                                            }
                                        </div>
                                        <Link className="btn btn-primary ps-5 pe-5 mt-3" to="/">Back to home</Link>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>    
        </div>
    )
}

export default CountryDetails;
