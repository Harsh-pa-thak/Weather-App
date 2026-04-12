import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./WInfo.css"


export default function Weather({info}){
    let imageAdd="https://t4.ftcdn.net/jpg/05/13/26/73/360_F_513267391_QEmNGeOFLLqrILTnoq21dReUPp5UsoNr.jpg";
  

    return (
      <div className='wcard'>
        <div className="weather-info">
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imageAdd}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <div>Temperature = {info.temp}&deg; C </div>
          <div>Humidity = {info.humidity}</div>
          <div>Min. Temperature = {info.tempmin}&deg; C </div>
          <div>Max. Temperature = {info.tempMax}&deg; C </div>
         
        </Typography>
      </CardContent>
      
    </Card>
        </div>
        </div>
        
    );
}