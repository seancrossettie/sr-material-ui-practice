import React from 'react';
import { Grid } from '@material-ui/core';
import Header from '../components/Header';

function Home() {
  return (
   <Grid container direction='column'>
     <Grid item>
      <Header />
     </Grid>
     <Grid item container>
       <Grid item xs={2} />
        <Grid item xs={8}>
          This is where the content will be
          This is where the content will be
          This is where the content will be
          This is where the content will be
          This is where the content will be
          This is where the content will be
          This is where the content will be
        </Grid>
       <Grid item xs={2} />
     </Grid>
   </Grid>
  );
}

export default Home;
