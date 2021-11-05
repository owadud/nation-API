import './App.css';
import Country from './Components/Country/Country';
import Selected from './Components/Selected/Selected';

import React, { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const [countries, setCountry] = useState([]);

  const [selectedCountry,selectCountry]=useState([]);


  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => setCountry(data))

    // .catch(error=> console.log(error))


  }, []);
  const addCountry = (country) =>{
    const newCountry =[...selectedCountry,country];
    selectCountry(newCountry);
  }
 


  return (
    <div className="App">
      <div>
        <h1>Total Country: {countries.length}</h1>
        <h2>Total added Country:{selectedCountry.length}</h2>
        <Selected selectedCountry={selectedCountry}></Selected> 
        <ul> {
          countries.map(country => <Country  country={country} key={country.numericCode} addCountry={addCountry}  ></Country>)

        }</ul>


      </div>


    </div>
  );
}

export default App;
