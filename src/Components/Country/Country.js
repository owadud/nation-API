import React from 'react';

const Country = (props) => {
   
    const {name,flag,population} =props.country;
    const addCountry = props.addCountry;
    
    const flgStyle = {height:'100px'}
    const countryAreaStyle={border: '2px solid black',margin:'10px',float:'left',width:'45%',padding:'10px'}
    return (
        
        <div style={countryAreaStyle}>
            
            <h1>{name}</h1>
            <img style={flgStyle} src={flag} alt="" />
            <h2>{population}</h2>
            <button onClick={()=>addCountry(props.country)} >Add Country</button>
        
        </div> 
       
    );
};

export default Country;