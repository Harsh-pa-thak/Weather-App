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
        const humidity = Number(currentInfo.humidity || 0);
        const temp = Number(currentInfo.temp || 0);
        const tempMax = Number(currentInfo.tempMax || 0);

        const isSnow = description.includes("snow") || temp <= 5 || tempMax <= 6;
        const isRainByText =
            description.includes("rain") ||
            description.includes("drizzle") ||
            description.includes("thunder") ||
            description.includes("shower");
        const isVeryHumid = humidity >= 85 && temp > 5 && temp < 38;
        const isExtremeHeat = temp >= 38 || tempMax >= 40;

        if (isSnow) {
            return "theme-snow";
        }
        if (isExtremeHeat) {
            return "theme-heatwave";
        }
        if (isRainByText || isVeryHumid) {
            return "theme-rain";
        }
        if (temp >= 30) {
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