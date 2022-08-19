import React from 'react';
import './App.css';
import kaleidoImg from "./KALEIDOSCOPES2Markers.png"
import hourImg from "./HOURGLASSS2Markers.png"

import cardImg from "./card.png"
import cardDescImg from "./cardDesc.png"

import { Container, Box, Typography } from '@mui/material';

function Season2() {
	return (
		<Container maxWidth="md" >
      <Box sx={{my: 4}}>
  			<Typography variant="h2">Season 2 Easter Eggs</Typography>
        
        <Typography sx={{mb:2}} variant="body1">Currently, multiple easter eggs for Season 2 can be located in game. To find them, following the Portal BFEE Official server and the locations below you will find crates that will reward you with a cosmetic background for your player card:</Typography>
        <img src={cardImg} height="50%"/>
  
        <Typography sx={{mb:2}} variant="body2">The text attached to the background card is as follows:</Typography>
        <img src={cardDescImg} height="50%" />
  
        <Typography sx={{mb:2}} variant="body1">As of now, the only reward for the easter egg is the background and its attached description, no further information besides the ability to obtain the card is known</Typography>
      </Box>
      <Box sx={{my: 4}}>
        <Typography variant="h4">Kaleidoscope</Typography>  
        
        <Typography sx={{mb:2}} variant="body2">Locations on Kaleidoscope are shown as follows:</Typography>
        
        <img src={kaleidoImg} height="50%" />
      </Box>  
      <Box sx={{my: 4}}>
        <Typography variant="h4">Hourglass</Typography>  
        
        <Typography sx={{mb:2}} variant="body2">Locations on Hourglass are shown as follows:</Typography>
        
        <img src={hourImg} height="50%" />
      </Box>
		</Container>
	);
}

export default Season2;
