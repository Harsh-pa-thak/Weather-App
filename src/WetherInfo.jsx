import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Weather(){
    let imageAdd="https://t4.ftcdn.net/jpg/05/13/26/73/360_F_513267391_QEmNGeOFLLqrILTnoq21dReUPp5UsoNr.jpg";
    let info ={
        dis:"few clouds",
        humidity:64,
        temp:33.6,
        tempMax:35.13,
        tempmin:33.31
    } 

    return (
        <div className="weather-info">
            <h2>
                Weather
            </h2>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imageAdd}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </div>
        
    );
}