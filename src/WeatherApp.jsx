import Search  from "./Search"
import Weather from "./WetherInfo"
import "./WeatherApp.css"
import {  useState } from "react";
export default function WeatherApp(){

    let [info , setInfo ]= useState(
        {
        city:"Delhi",
        dis:"few clouds",
        humidity:64,
        temp:33.6,
        tempMax:35.13,
        tempmin:33.31
        }
    );

    function update (obj){
        setInfo(obj)
    }

    function getWeatherThemeClass(currentInfo) {
        const description = (currentInfo.dis || "").toLowerCase();

        if (description.includes("snow") || currentInfo.temp <= 5) {
            return "theme-snow";
        }
        if (description.includes("rain") || description.includes("drizzle") || description.includes("thunder")) {
            return "theme-rain";
        }
        if (currentInfo.temp >= 30) {
            return "theme-warm";
        }
        return "theme-cool";
    }

    const themeClass = getWeatherThemeClass(info);

    return (
        <div className={`app-shell ${themeClass}`}>
            <div className='weather-app'>
                <h1 className="title">Weather App</h1>
                <Search sendInfo={update}></Search>
                <Weather info ={info}></Weather>
            </div>
        </div>
    );
}