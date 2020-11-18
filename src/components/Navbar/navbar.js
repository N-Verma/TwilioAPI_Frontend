import React,{useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {List,ListItem,ListItemText,AppBar,Toolbar,Button,Box} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';
import {UserContext} from '../Firebase/context'
import {logout} from '../Firebase/firebase'
import {Redirect} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    bar:{
        backgroundColor:"white",
        boxShadow:"none"
    },
    tool:{
        display:"flex",
        justifyContent:"space-between"
    },
    brand:{
        fontSize:"25px",
        fontWeight:"bold",
        color:"black",
        textDecoration:"none"
        
    },
    nav:{
        display:"flex",
        justifyContent:"space-between"
    },
    link:{
        textDecoration:"none",
        color:"black",
    },
    logout:{
        backgroundColor:"red",
        color:"white"
    },
    user:{
        color:"black",
    },
    login:{
        textDecoration:"none",
    }
  }));

const Navwithoutauth=()=>{
    const classes = useStyles();
    
    return(
        <AppBar position="static" className={classes.bar}>
            <Toolbar className={classes.tool}>
                <List component="nav" aria-labelledby="main navigation" className={classes.nav}>
                    <ListItem button>
                        <Link className={classes.brand} to="/">Chargebee</Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemText className={classes.link}  primary="Product"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText className={classes.link}  primary="Pricing"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText className={classes.link}  primary="Solution"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText className={classes.link}  primary="Customers"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText className={classes.link}  primary="Resources"/>
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <Box mr={8} display="flex" justifyContent="center" alignItems="center">
                        <LockIcon size={"small"} style={{color:"orange"}} />
                        <Button><Link className={classes.login} to='/login'>
                                Log In 
                            </Link>
                        </Button>
                        <ArrowForwardIcon/> 
                        </Box>
                    </ListItem>
                </List>
            </Toolbar>
        </AppBar>
    )
}
const Navauth=(props)=>{
    const classes = useStyles();
    const user = useContext(UserContext);
    var name = user.displayName
    const signout=()=>{
        logout();
        return(<Redirect to="/"/>)
    }

    return(
        <AppBar position="static" className={classes.bar}>
            <Toolbar className={classes.tool}>
                <List component="nav" aria-labelledby="main navigation" className={classes.nav}>
                    <ListItem button>
                        <Link className={classes.brand} to="/">Chargebee</Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemText className={classes.link}  primary="Product"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText className={classes.link}  primary="Pricing"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText className={classes.link}  primary="Solution"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText className={classes.link}  primary="Customers"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText className={classes.link}  primary="Resources"/>
                    </ListItem>
                    <ListItem button>
                        <Link to='/message' className={classes.link}>Message</Link>
                    </ListItem>
                </List>
                <List className={classes.nav}>
                    <Box
                        width={200}
                        display="flex"
                        alignItems="center"
                    >
                        <ListItemText className={classes.user}  primary={name}/>
                    </Box>
                    <ListItem>
                        <Button className={classes.logout} onClick={signout}>LogOut</Button>
                    </ListItem>
                </List>
            </Toolbar>
        </AppBar>
    )
}

const Nav=()=>{
    const user = useContext(UserContext);
    if(user===null){
        return(<Navwithoutauth/>)
    }else{
        return(<Navauth/>)
    }
    
}

export {Nav};
