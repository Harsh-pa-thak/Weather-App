import Search  from "./Search"
import Weather from "./WetherInfo"
import "./WeatherApp.css"
export default function WeatherApp(){

    return (<>
   <h1 class="title">Weather App</h1>
    <Search></Search>
    <Weather></Weather>  
    </>);
}