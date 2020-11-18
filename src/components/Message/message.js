import React,{useState} from 'react'
import {TextField,FormControl,Button,Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
const style= makeStyles((theme)=>({
    root:{
        width:"200px",
        marginLeft:"40%",
    },
    input:{
        paddingTop:"20px",
    },
    button:{
        marginTop:"20px",
        backgroundColor:"lightblue",
        color:"white"
    }

}))
export const Message=()=>{
    const classes = style();
    const [to, setTo] = useState()
    const [msg,setMsg] = useState()
    const submit=()=>{
        console.log("submit")
        var obj={
            sendTo:to,
            message:msg
        }
        var formData = [];
        for (var k in obj) {
          var encodedKey = encodeURIComponent(k);
          var encodedValue = encodeURIComponent(obj[k]);
          formData.push(encodedKey + "=" + encodedValue);
        }
        formData = formData.join("&");
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://twilioapifrontend.herokuapp.com/"
        };
        axios
          .post("https://twilioapibackend.herokuapp.com/sendmsg", formData,{headers : headers})
          .then((res) => {console.log(res.data)
            
        });
        
    }
    
    return(
        <div className={classes.root}>
            <FormControl>
                <Box
                >
                <TextField 
                    className={classes.input}
                    id="standard-basic"
                    label="Send to"
                    value={to}
                    onChange={(e)=>setTo(e.target.value)}
                />
                </Box>
                <Box mt={2}>
                <TextField 
                    className={classes.input}
                    id="standard-multiline-flexible"
                    multiline
                    label="Enter Message"
                    rowsMax={7}
                    value={msg}
                    onChange={(e)=>setMsg(e.target.value)}
                />
                </Box>
                <Box mt={2}
                    display="flex"
                    justifyContent="flex-end"
                >
                <Button variant="contained" color="primary" onClick={submit}>Send</Button></Box>
            </FormControl>
        </div>
    )
}