import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import "./App.css"

export default function Search(){
    let [city,setCity] = useState("");
    function handelCityChange(event){
        setCity(event.target.value)
        console.log(city);
    }

    return (
        <div>
            <h3>
                Search Box
            </h3>
            <form action="">
         <TextField className='textField' id="city" label="Enter Your City" variant="outlined" value={city} onChange={handelCityChange} required/>
        <Button className='button' variant="contained" type='submit' endIcon={<SendIcon />}>
            Send
        </Button>
        </form>

        </div>
    )
}