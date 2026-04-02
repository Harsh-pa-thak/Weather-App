import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function Search(){
    return (
        <div>
            <h3>
                Search Box
            </h3>
            <form action="">
         <TextField id="city" label="Enter Your City" variant="outlined" required/>
        <Button variant="contained" type='submit' endIcon={<SendIcon />}>
            Send
        </Button>
        </form>

        </div>
    )
}