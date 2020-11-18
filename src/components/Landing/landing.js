import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Paper,Button,Typography,Box} from '@material-ui/core';

const style = makeStyles((theme)=>({
    jumbo:{
        fontSize:"35px",
        color:"purple",
        border:"none"
    },
    land:{
      marginTop:"110px"
    },
    demoButton:{
      backgroundImage: "linear-gradient(to top,#311b92,#5e35b1)",
      color:"white",
      marginLeft:"24px",
      height:"80px",
      width:"300px",
      fontSize:"20px",
      "&:hover":{
        backgroundColor:"none"
      }
    },
    loginButton:{
      "&:hover":{
        backgroundColor:"none"
      },
      height:"80px",
      width:"300px",
      fontSize:"20px",
    }

}))
const Landing=()=>{
  const classes =style();
  return(
    <div className={classes.land}>
      <Grid container justify="center">
          <Typography style={{color: 'purple'}} variant="h3" gutterBottom>
            Subscription Billing & Revenue Operations
          </Typography>
          <Typography variant="h4" gutterBottom style={{display: 'inline-block'}}>
            for Fast-growth B2B SaaS
          </Typography>
          
      </Grid>
      <Grid style={{textAlign:"center"}}container justify="center">
        <Grid item xs={4}>
        <Typography  variant="h6" gutterBottom>Get the operational sophistication to achieve, sustain,
and scale recurring revenue.</Typography>
        </Grid>
      </Grid>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        width={700}
        mx="auto"
        
      >
        <Box>
          <Button size="large" variant="contained" className={classes.demoButton}>
            Schedule a Demo 
          </Button>
        </Box>
        <Box>
          <Button className={classes.loginButton} size="large" variant="outlined" color="primary">
            Sign up for free
          </Button>
        </Box>
      </Box>
    </div>
  )
}

export {Landing}