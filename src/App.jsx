import React, {useState} from 'react';
import './App.css';

import { Box, Tab } from '@mui/material';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Season2 from "./Season 2.jsx"

function App() {

  const [value, setValue] = useState("1")

  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
	return (
		<Box sx={{ width: '100%', typography: 'body1', textAlign:"center" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Season 2 Easter Eggs" value="1" />
            {/* <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" /> */}
          </TabList>
        </Box>
        <TabPanel value="1"><Season2/></TabPanel>
        {/* <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel> */}
      </TabContext>
		</Box>
	);
}

export default App;
