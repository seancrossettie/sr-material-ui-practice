import React from 'react';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import {
  AppBar, Typography, Toolbar
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
      <AppBar position='static'>
        <Toolbar>
          <Typography className={classes.typographyStyles}>
            Sean Rossettie
          </Typography>
          <AcUnitIcon />
        </Toolbar>
      </AppBar>
  );
};

export default Header;
