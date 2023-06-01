//React Imports
import React, { useState } from 'react'

//Css Imports
import '../Styles/FilterSearch.css'

// Interface
interface FilterSearch {
    searchInputFunction: (inputValue: string | undefined) => void;
    borderColor: string | undefined
}

const FilterSearch = (props: FilterSearch) => {

    // UseStates
    const [searchInput, setSearchInput] = useState('')

    // Functions
    const takeSearchValue = (valueInput: string) => {
        setSearchInput(valueInput)
        props.searchInputFunction(valueInput)
    }


    return (
        <div>
            <input value={searchInput} onChange={((e) => takeSearchValue(e.target.value))} className='searchInput' style={{ border: `1px solid ${props.borderColor === '' ? '#C57111' : props.borderColor}` }} type="text" placeholder='Search' />
        </div>
    )
}

export default FilterSearch
