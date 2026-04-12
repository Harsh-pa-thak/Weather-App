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

    return (<>
   <h1 class="title">Weather App</h1>
    <Search sendInfo={update}></Search>
    <Weather info ={info}></Weather>  
    </>);
}