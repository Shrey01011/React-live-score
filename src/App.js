import React, { useEffect, useState } from 'react';
import { getMatches } from './api/Api';
import './App.css';
import ButtonAppBar from './components/Appbar';
import MyCard from './components/MyCard';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';

function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        if (data.data && data.data.length > 0) {
          setMatches(data.data);
        } else {
          alert("No matches data found.");
        }
      })
      .catch((error) => alert("Could not load data :("));
  }, []);

  return (
    <div className="App">
      <ButtonAppBar />
      <h1>Welcome to my Live Score APP</h1>
      <Stack direction='column' spacing='2'>
        

          {matches.length > 0 ? (
        matches.map((match) => (
          <MyCard key={match.id} match={match} />
        ))
      ) : (
        <p>Loading matches...</p>
      )}
         


        
      </Stack>
    </div>
  );
}

export default App;