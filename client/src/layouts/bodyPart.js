import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import axios from 'axios';
import {BookView} from "./components/bookView";

import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  spacing: 8,
  palette: {
    primary: {
      main: '#0ca0f0',
    },
    secondary: {
      main: '#f44336',
    },
  },
});
//function to get DOM element from string


// Initialize parameters



function TabPanel(props) {
  const { children, value, index, ...other } = props;  
  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`}{...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
  },
}}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('JSON');
  const [value3, setValue3] = React.useState('body');
  const [value4, setValue4] = React.useState('url');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange1 = (event)  => {
    setValue1(event.target.value);
  };
  const handleChange2 = (event)  => {
    setValue2(event.target.value);
  };
  const handleChange3 = (event)  => {
    setValue3(event.target.value);
  }; 
  const handleChange4 = (event)  => {
    setValue4(event.target.value);
  };



  
  let a = "0";

  

  const getPostsData = (event) => {
    if(value1==='GET'){
      console.log(BookView)
    axios.get("https://api.allorigins.win/get?url=https://" + value4).then(data => console.log(data)).catch(error => console.log(error));
  }
};


     return (
    <div className={classes.root}>  
      <AppBar position="relative">
        {/* <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" color="primary" >
          <Tab label="API calls" {...a11yProps(2)} />
          <Tab label="History" {...a11yProps(2)} />
        </Tabs> */}
      </AppBar>
      <TabPanel value={value} index={0}>
      <form id="messages" onSubmitCapture={getPostsData(),console.log(value1,value2,value3,value4)} color="transparent">
        <Box component="span" m={2}><TextField name="url" label="URL" variant="outlined" fullWidth="true" size="large" onChange={handleChange4} color="transparent"/></Box>
        <Box m={3}>
          <FormControl component="fieldset">
          <FormLabel component="legend">Request type</FormLabel>
          <RadioGroup className="method" row aria-label="Method" name="method" value={value1} onChange={handleChange1}>
            <FormControlLabel value="GET" control={<Radio />} label="GET" />
            <FormControlLabel value="POST" control={<Radio />} label="POST" />
            <FormControlLabel value="PUT" control={<Radio />} label="PUT" />
            <FormControlLabel value="DELETE" control={<Radio />} label="DELETE" />
          </RadioGroup>
          </FormControl>
        </Box>
        <Box m={3}>
          <FormControl component="fieldset">
          <FormLabel component="legend">Request type</FormLabel>
          <RadioGroup className="request" row aria-label="Request" name="request" value={value2} onChange={handleChange2}>
            <FormControlLabel value="JSON" control={<Radio />} label="JSON" />
            <FormControlLabel value="XML" control={<Radio />} label="XML" />
            <FormControlLabel value="HTML" control={<Radio />} label="HTML" />
            <FormControlLabel value="Text" control={<Radio />} label="Text" />
        </RadioGroup>
        </FormControl>
        </Box>
        <Box m={3}>
          <FormControl component="fieldset">
          <FormLabel component="legend">Request type</FormLabel>
          <RadioGroup className="type" row aria-label="Request" name="type" value={value3} onChange={handleChange3}>
            <FormControlLabel value="params" control={<Radio />} label="Params" />
            <FormControlLabel value="headers" control={<Radio />} label="Headers" />
            <FormControlLabel value="body" id="cont" control={<Radio />} label="Body" />
        </RadioGroup>
        </FormControl>
        </Box>
        <Box m={3}>
          <Button className="btn" id="SUBbtn" variant="contained" color="primary" type="button" onClick={getPostsData} size="large">Submit</Button></Box> 
        </form>
        <Box m={2}><TextField id="response" label="Response" variant="outlined" disabled="true"/></Box>
        <Box> 
          <BookView />
      </Box>
        
      </TabPanel>
      <TabPanel>
      </TabPanel>
      


</div>



);
}