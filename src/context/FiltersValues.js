import { useState, createContext } from "react";
const FilterValueContext = createContext();

function FilterContextProvider({children}){
    const [filterValue, setFilterValue] = useState({
        language: "",
        continent: "",
        country: "",
        city: ""
    });

    const updateFilterValue = (filterValue) => {
        setFilterValue(filterValue);
    }   


    return (
        <FilterValueContext.Provider value={{filterValue,  updateFilterValue}}>
            {children}
        </FilterValueContext.Provider>
    )
}





export {FilterValueContext, FilterContextProvider}

