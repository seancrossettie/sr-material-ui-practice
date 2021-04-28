import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  heyThereStyle: {
    fontStyle: 'oblique',
    color: 'red',
    fontSize: '30px'
  },
  buttonStyles: {
    fontStyle: 'oblique'
  }
});

function Home() {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.heyThereStyle} color='primary' variant='h1'>Hey There</Typography>
      <Button className={classes.buttonStyles} color='secondary' variant='outlined' size='small'>This is a button</Button>
    </>
  );
}

export default Home;
