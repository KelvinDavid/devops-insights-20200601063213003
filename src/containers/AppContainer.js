import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch'
import CityNResponse from '../components/CityNResponse';
import CityN from '../components/CityN';

function AppContainer(props) {
	console.log(`--------- propData called: ${props}`)
    const [responseData, setResponseData] = useState('');
    
    const handleCityNChange = async (cityNValue) => {
        console.log(`--------- fetchData called q:${cityNValue}`)
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&q=${cityNValue},nz`)
        const json = await res.json()
        console.log(json);
        setResponseData(json);
    }

    const clearResponse = () => {
        setResponseData('');
    }

    return (
        <div>
            <div className="row mt-4">
                <div className="col-sm-4"></div>
                <CityN onCityNChange={handleCityNChange} clearResponse={clearResponse}/>
                <div className="col-sm-4"></div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-2"></div>
                <CityNResponse responseData={responseData} clearResponse={clearResponse}/>
                <div className="col-sm-2"></div>
            </div>    
        </div>
    );
}


export default AppContainer
