import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import './toa-input.css';
import image1 from './images/purp.png';
import { useState } from 'react';


export default function ImgMediaCard() {
  const [message, setMessage] = useState();

  const [updated, setUpdated] = useState(message);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  
  
  

  const [message2, setMessage2] = useState();

  const [updated2, setUpdated2] = useState(message2);

  const handleChange2 = (event) => {
    setMessage2(event.target.value);
  };
  
  const handleClick2 = () => {
    
    const a = "Lightbearer";
    const b = "Osmumten's fang";
    const c = "Elidinis' ward";
    const d = "Masori mask";
    const e = "Masori body";
    const f = "Masori legs";
    const g = "Tumeken's shadow";
    var raids = 1;

    const drops = [a,a,a,a,a,a,a,b,b,b,b,b,b,b,c,c,c,d,d,e,e,f,f,g];

    const summary = [];
    const sum_dict = {};
    var sum = 0;

    while (raids < message2) {
        
        const purple = Math.floor(Math.random() * 100)

        if (purple/100 <= message/100) {
            const drawing = Math.floor(Math.random() * 24);
            const prize = drops[drawing];
            summary.push(prize + " - Raid " + raids);
            sum_dict[prize] += 1;
            sum += 1;
            } else {
            raids += 1;
            }   
        
    }

    let text = "";
    
    for (let i = 0; i < summary.length - 1; i++) {
      text += (i+1) + '. ' + summary[i] + "\n";
    }
    
    if (text === "") {
      text = "No drops obtained :( try again!"
    }

    setUpdated2(document.getElementById("here").innerHTML = text);
  };

  const handleClick = () => {
    setUpdated(message);
  };
  
  return (
    <>
    <div class="container">
      <div class="row">
        <Card sx={{ maxWidth: 350 }}>
          <CardMedia
            alt="green iguana"
            height="300"
            component="img" src={image1} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Calculate Your Purple Chance!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Enter your percent chance of receiving a purple and the number of raids you want to calculate it for below.
            </Typography>
          </CardContent>
          <CardActions>
            <Input type="text"
                    id="message"
                    name="message"
                    onChange={handleChange}
                    value={message} placeholder='% Chance'></Input>
            <Input type="text"
                    id="message2"
                    name="message2"
                    onChange={handleChange2}
                    value={message2} placeholder='# of Raids'></Input>
            <Button size="small" onClick={handleClick2}>Calculate</Button>
            <Button size="small"onClick={handleClick}>Sum</Button>
          </CardActions>
        </Card>
        <div>
          <h3 class="a" id="here">{updated2}</h3>
        </div> 
      </div>
    </div>
    
    </>
  );
}


