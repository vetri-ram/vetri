import React,{useState} from 'react';
import { AppBar, Typography, Toolbar, Tabs, Tab, Button} from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
const Header = () => {
    const [value, setValue] = useState("");
    return (
        <React.Fragment>
            <AppBar sx={{background:"#34495E"}}>
                <Toolbar>
                <Typography>
                    <ShoppingCartCheckoutIcon/>
                                   
                </Typography>
                <Tabs sx={{marginLeft:"auto"}}  textColor='inherit' value={value} onChange={(e,value)=>setValue(value)} indicatorColor="secondary">
                        <Tab label='Home' />
                        <Tab label='Products' />
                        <Tab label='Services' />
                        <Tab label='Contact Us' />
                           
                    </Tabs>
                    <Button sx={{marginLeft:"auto"}} variant="contained">Register</Button>
                           <Button sx={{marginLeft:"10px"}} variant="contained">Login</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default Header;
