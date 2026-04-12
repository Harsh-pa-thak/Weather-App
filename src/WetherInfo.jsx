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
             <Card
               sx={{
                 maxWidth: 420,
                 backgroundColor: 'rgba(15, 23, 42, 0.88)',
                 color: '#e2e8f0',
                 border: '1px solid rgba(148, 163, 184, 0.22)',
                 boxShadow: '0 20px 50px rgba(2, 6, 23, 0.4)'
               }}
             >
      <CardMedia
        sx={{ height: 170 }}
        image={imageAdd}
        title="Weather image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: '#cbd5e1' }}>
          <div>Temperature = {info.temp}&deg; C </div>
          <div>Humidity = {info.humidity}</div>
          <div>Min. Temperature = {info.tempmin}&deg; C </div>
          <div>Max. Temperature = {info.tempMax}&deg; C </div>
          <div>Description = {info.dis}</div>
         
        </Typography>
      </CardContent>
      
    </Card>
        </div>
        </div>
        
    );
}