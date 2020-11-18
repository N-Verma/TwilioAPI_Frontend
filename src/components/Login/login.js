import React,{useContext, useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Button,Box} from '@material-ui/core';
//import {AccountCircle, BlurCircular} from '@material-ui/icons';
//import { Redirect } from 'react-router-dom';
import {signInWithGoogle} from '../Firebase/firebase'
import {UserContext} from '../Firebase/context'

const style = makeStyles((theme)=>({
    button:{
        backgroundColor:'rgb(212, 49, 8,0.9)',
        color:'white',
        "&:hover":{
            backgroundColor:"rgb(212, 49, 8)"
        }
    },
    
}))
const Login=(props)=>{
    const classes=style();
    const [email,setEmail]=useState();
    const [pass,setPass]=useState();
    const user = useContext(UserContext);
    useEffect(()=>{
        if(user){
            props.history.push('/')
        }
    },[user])
  return(
    <div>
    <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        mx="auto"
        mt={25}

    >
        <Button onClick={signInWithGoogle} className={classes.button}>Sign in with Google</Button>
    </Box>
    </div>
  )
}
export {Login}