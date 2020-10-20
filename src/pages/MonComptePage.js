import React,{useContext} from 'react';
import {Redirect} from "react-router-dom"
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import styled from "styled-components"
import MonCompte from "../components/ComptePage/MonCompte"
import AdressDelivery from "../components/ComptePage/AdresseDelivery"
import HistoriqueDesCommandes from "../components/ComptePage/HistoriqueDesCommandes"
import CommandesEnAttente from "../components/ComptePage/CommandesEnAttente"
import { ServiceContext } from "../context/context";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <div>
          {children}
          </div>
          
        </Box>
      )}
    </div>
  );
}


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    margin:"3rem auto",
    color:"var(--primaryColor-3)",
    fontSize:"1.2rem"
  },
}));

const MonComptePage=()=> {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(3);
  const {getCommandes,authUser } = useContext(ServiceContext);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
    {authUser ? (<MonCompteWrapp className={classes.root}>
       <p className='title'>...حسابي</p>
        <div className='title-underline'></div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="في طور الانجاز" {...a11yProps(0)} className="bg-success text-white display-2" onClick={()=>getCommandes(authUser)} />
          <Tab label="طلباتي السابقة" {...a11yProps(1)} className="bg-success text-white h1" onClick={()=>getCommandes(authUser)} />
          <Tab label="عنوان التوصيل" {...a11yProps(2)} className="bg-success text-white h1" />
          <Tab label="معلومات الحساب" {...a11yProps(3)}  className="bg-success text-white h1" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
         <CommandesEnAttente />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction} >
          <HistoriqueDesCommandes />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction} >
          <AdressDelivery />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction} > 
         <MonCompte />
        </TabPanel>
        
      </SwipeableViews>
    </MonCompteWrapp>):(
      <Redirect to="/" />
    )

    }
    </>
    
  );
}

const MonCompteWrapp=styled.div`
min-height:80vh;
@media screen and (min-width:768px){
  width:80vw
}
.title {
    color: var(--primaryColor-3);
    font-size: 2rem;
    font-family: var(--ff-title);
    text-align: center;
    font-weight: bold;
  }
  .title-underline {
    height: 0.25rem;
    width: 30vw;
    background: var(--primaryColor-2);
    margin: 1rem auto;
  }
`

export default MonComptePage;
