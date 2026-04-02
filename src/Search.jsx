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
            <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="city" label="Enter Your City" variant="outlined" />
    </Box>
        </div>
    )
}