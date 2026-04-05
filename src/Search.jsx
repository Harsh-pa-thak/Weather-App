import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import "./App.css"

export default function Search(){
     let [city,setCity] = useState("");
    let Api_Url="https://api.openweathermap.org/data/2.5/weather";
    const key = "99e0bc600368471d50c7e483c0862cdd"
    let getWInfo = async()=>{
        let ak = await fetch(`${Api_Url}?q=${city}&appid=${key}`);
        let a = await ak.json();
        console.log(a);
    }
   
    function handelCityChange(event){
        setCity(event.target.value)
    }
    function handleSubmit(event){
        event.preventDefault()
        getWInfo();
        console.log(city);
        setCity("")

    }
    return (
        <div>
            <h3>
                Search Box
            </h3>
            <form action="" onSubmit={handleSubmit}>
         <TextField className='textField' id="city" label="Enter Your City" variant="outlined" value={city} onChange={handelCityChange} required/>
        <Button className='button' variant="contained" type='submit' endIcon={<SendIcon />}>
            Send
        </Button>
        </form>

        </div>
    )
}