import React from 'react';

export const SearchBox = ( {placeholder, handleChange} ) => {

    return(
    <input type="search"  style={{padding: '0.8em', margin: '20px'}} placeholder={placeholder}
        onChange={handleChange}
        />
    )
} 