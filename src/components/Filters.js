import React, {useContext, useEffect, useState} from 'react';
import FilterCountries from '../elements/FilterCountries';
import {CountriesListContext} from '../context/CountriesListContext';
import {FilterValueContext} from '../context/FiltersValues';
import useFetch from '../hooks/useFetch';

//HACER UNA CONSULTA SOLO PARA LOS FILTROS CUANDO CARGUE Y NO ACTUALIZARLA NUNCA

function Filters() {

    //La información de los filtros al cargar la Página viene esta url (que no se actualiza)
    const [data] = useFetch('https://restcountries.eu/rest/v2/all?fields=flag;name;capital;languages;currencies;region');


    //get updated list of countries
    // const {countriesList} = useContext(CountriesListContext);
    //get and update filter values context
    const {filterValue,  updateFilterValue} = useContext(FilterValueContext);

   

    //ordered languages no repeat elements
    const [languages, setLanguages] = useState([]);
    //ordered countries names
    const [countriesNames, setCountriesNames] = useState([]);
    //ordedered countries cities
    const [countriesCities, setCountriesCities] = useState([]);

    //Filter values
    const [languageFilter, setLanguageFilter] = useState("");
    const [continentFilter, setContinentFilter] = useState("");
    const [countryNameFilter, setCountryNameFilter] = useState("");
    const [cityFilter, setCityFilter] = useState("");


    useEffect(()=>{

        //order languagesList and delete repeated elemets
        const CountriesLanguagesList = [];
        const countriesNamesList = [];
        const countriesCapitalCity = [];


        
    /*============================================================
    Sorting Languages and deleting duplicated elements
    ==============================================================*/


        for(let i=0; i<data.length; i++){
            const languageCode = data[i].languages[0].iso639_1;
            const languagesList = data[i].languages[0].name;
            CountriesLanguagesList.push({language: languagesList,
                 languageCode: languageCode
            });
        }

        function removeDuplicates() {
      
            // Create an array of objects
              
            //convierta cada uno de los elementos de books a cadena de texto con .map
            let jsonObject = CountriesLanguagesList.map(JSON.stringify);

            //quite los elementos repetidos con set
            let uniqueSet = new Set(jsonObject);
            //cree u nuevo array de uniqueset y convierta los objetos a objetos
            let uniqueArray = Array.from(uniqueSet).map(JSON.parse);
            setLanguages(uniqueArray);
            
        }
        removeDuplicates();



        // ====> sorting country names, country cities

        const orderInfo = (item) => {
            for(let i=0; i<data.length; i++){
                const filteredInfo = data[i][item];
                if(item === "name"){
                    countriesNamesList.push(filteredInfo);
                    const orderedNamesList = countriesNamesList.sort();
                    setCountriesNames(orderedNamesList);
                }else if(item === "capital"){
                    countriesCapitalCity.push(filteredInfo);
                    const orderedCapitalCityList = countriesCapitalCity.sort();
                    setCountriesCities(orderedCapitalCityList);
                }
            }
        }

        orderInfo("name");
        orderInfo("capital")
    
        
    },[data]);

    /*============================================================
    Reset filters
    ==============================================================*/

    const handleValueSelect = (e) => {
        if(e.target.name === "language"){
            setLanguageFilter(e.target.value);
            setContinentFilter("");
            setCountryNameFilter("");
            setCityFilter("")
        }
        
        if(e.target.name === "continent"){
            setContinentFilter(e.target.value);
            setLanguageFilter("")
            setCountryNameFilter("");
            setCityFilter("")
        }

        if(e.target.name === "country"){
            setCountryNameFilter(e.target.value);
            setContinentFilter("");
            setLanguageFilter("")
            setCityFilter("")
        }

        if(e.target.name === "city"){
            setCityFilter(e.target.value);
            setContinentFilter("");
            setLanguageFilter("");
            setCountryNameFilter("");
           
        }
    }

    const resetFilters = () => {
        setCityFilter("");
        setContinentFilter("");
        setLanguageFilter("");
        setCountryNameFilter("");
    }


    /*============================================================
    Updatin context
    ==============================================================*/

    useEffect(()=>{
        updateFilterValue({
            language: languageFilter,
            continent:  continentFilter,
            country: countryNameFilter,
            city: cityFilter
        });
    },[languageFilter, continentFilter, countryNameFilter, cityFilter])

   

    return (
        <FilterCountries className="mt-5 mb-5">
            <div className="container">
                <div className="d-flex flex-wrap justify-content-between">
                    <select  name="language" onChange={handleValueSelect} value={languageFilter} className="me-3">
                    <option value="">Select a Language</option>
                        {
                            languages.map((sigleLanguage)=>{
                                return <option value={sigleLanguage.languageCode}>{sigleLanguage.language}</option>
                            })
                        }
                    </select>

                    <select name="continent" onChange={handleValueSelect} value={continentFilter} className="me-3">
                        <option selected disabled value="">Select a Continent</option>
                        <option value="asia">Asia</option>
                        <option value="americas">Americas</option>
                        <option value="africa">Africa</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                        <option value="Polar">Polar</option>
                    </select>

                    <select onChange={handleValueSelect} value={countryNameFilter}  name="country" className="me-3">
                    <option value="" key="">select a Country</option>
                        {
                            countriesNames.map((singleCountryName)=>{
                                return  <option value={singleCountryName} key="">{singleCountryName}</option>
                            })
                        }
                    </select>

                    <select onChange={handleValueSelect} value={cityFilter}  name="city" className="me-3">
                        <option selected disabled value="" key="">Select a city</option>
                        {
                            countriesCities.map((singleCapitalName)=>{
                                if(singleCapitalName !== ""){
                                    return  <option value={singleCapitalName}>{singleCapitalName}</option>
                                }
                                
                            })
                        }
                    </select>

                    <button onClick={resetFilters} className="btn btn-danger ps-5 pe-5">Reset filters</button>

                    {/* <select className="me-3">
                        <option selected  disabled value="" key="">Calling code</option>
                        <option value="" key="">code 1</option>
                        <option value="" key="">code 2</option>
                        <option value="" key="">ciode3</option>
                    </select> */}
                </div>
            </div>
        </FilterCountries>
    )
}

export default Filters
