import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import "./App.css"

export default function Search({sendInfo}){
     let [city,setCity] = useState("");
    let Api_Url="https://api.openweathermap.org/data/2.5/weather";
    const key = "99e0bc600368471d50c7e483c0862cdd"
    let getWInfo = async()=>{
        let ak = await fetch(`${Api_Url}?q=${city}&appid=${key}&units=metric`);
        let a = await ak.json();
        console.log(a);
        return {
            city:a.name,
            temp : a.main.temp,
            tempMax:a.main.temp_max,
            tempmin:a.main.temp_min,
            humidity:a.main.humidity,
            dis : a.weather[0].description,
        }
        

    }
   
    function handelCityChange(event){
        setCity(event.target.value)
    }
    async function handleSubmit(event) {
    event.preventDefault();

    let obj = await getWInfo(city); 

    console.log(obj);

    sendInfo(obj);
    setCity(""); 
}
    return (
        <div>
            <h3>
                Search Box
            </h3>
            <form action="" onSubmit={handleSubmit}>
         <TextField
            className='textField'
            id="city"
            label="Enter Your City"
            variant="outlined"
            value={city}
            onChange={handelCityChange}
            required
            sx={{
                '& .MuiInputLabel-root': { color: '#bfdbfe' },
                '& .MuiOutlinedInput-root': {
                    color: '#e2e8f0',
                    '& fieldset': { borderColor: 'rgba(147, 197, 253, 0.45)' },
                    '&:hover fieldset': { borderColor: '#93c5fd' },
                    '&.Mui-focused fieldset': { borderColor: '#60a5fa' },
                },
            }}
          />
        <Button
            className='button'
            variant="contained"
            type='submit'
            endIcon={<SendIcon />}
            sx={{
                background: 'linear-gradient(135deg, #2563eb, #0ea5e9)',
                color: '#eff6ff',
                '&:hover': { background: 'linear-gradient(135deg, #1d4ed8, #0284c7)' },
            }}
        >
            Send
        </Button>
        </form>

        </div>
    )
}