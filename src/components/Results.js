import React, {useContext, useEffect} from 'react';
import useFetch from '../hooks/useFetch';
import CountryCard from './CountryCard';
import {CountriesListContext} from '../context/CountriesListContext';
import {FilterValueContext} from '../context/FiltersValues';

function Results() {

//when loading the page
const [data] = useFetch('https://restcountries.eu/rest/v2/all?fields=flag;name;capital;languages;currencies;region');


//Context countriesList
const {countriesList, updateCountrieslist} = useContext(CountriesListContext);


//When clicking filters
const {filterValue,  updateFilterValue} = useContext(FilterValueContext);


//Para los filtros

const countriesByLanguage = useFetch(`https://restcountries.eu/rest/v2/lang/${filterValue.language}`);
const countriesByContinent = useFetch(`https://restcountries.eu/rest/v2/region/${filterValue.continent}`);
const countriesByName = useFetch(`https://restcountries.eu/rest/v2/name/${filterValue.country}`);
const countriesByCity = useFetch(`https://restcountries.eu/rest/v2/capital/${filterValue.city}`);


if(data.length > 0){
    updateCountrieslist(data)
}

    
useEffect(()=>{
    if(countriesByLanguage.length > 0 && filterValue.language !== ""){
        updateCountrieslist(countriesByLanguage[0]);
    }else{

    }
    
    if(countriesByContinent.length > 0  && filterValue.continent !== ""){
        updateCountrieslist(countriesByContinent[0]);
    }

    if(countriesByName.length > 0 && filterValue.country !== ""){
        updateCountrieslist(countriesByName[0])
    }

    if(countriesByCity.length > 0 && filterValue.city !== ""){
        updateCountrieslist(countriesByCity[0])
    }

},[countriesByLanguage, countriesByContinent, countriesByName, countriesByCity]);


    return (
        <div className="container d-flex flex-wrap justify-content-between mt-5">
            <div className="col-12">
            {
                filterValue.language !== "" || filterValue.continent !== "" || filterValue.country !== "" || filterValue.city !== ""   ? <h3 className="mb-5">Search results</h3>: ""
            }
         
            </div>
            {
                countriesList.length > 0 && <CountryCard data={countriesList} />
            }
        </div>
    )
}

export default Results
