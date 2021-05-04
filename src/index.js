import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.scss';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './styles/themes';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.Fragment>
    <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.Fragment>,
  document.getElementById('root')
);

reportWebVitals();
