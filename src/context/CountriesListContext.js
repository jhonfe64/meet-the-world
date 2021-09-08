import { useState, createContext } from "react";
const CountriesListContext = createContext();

function CountriesContextProvider({children}){
    const [countriesList, setCountriesList] = useState([]);

    const updateCountrieslist = (countriesList) => {
        setCountriesList(countriesList)
    }

    return (
        <CountriesListContext.Provider value={{countriesList, updateCountrieslist}}>
            {children}
        </CountriesListContext.Provider>
    )
}

export { CountriesListContext, CountriesContextProvider}