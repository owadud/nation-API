import React from 'react';

const Selected = (props) => {
    
    const selectedCountry =props.selectedCountry;

    // let population =0;
    // for (let i = 0; i < selectedCountry.length; i++) {
    //     const country = selectedCountry[i];
    //     population=population+country.population;
        
    // }

    const population=selectedCountry.reduce((sum, country) => sum + country.population,0)

    return (
        <div>
            <h3>Selected Country:{selectedCountry.length}</h3>
            <h1>Country Population:{population}</h1>
        </div>
    );
};

export default Selected;