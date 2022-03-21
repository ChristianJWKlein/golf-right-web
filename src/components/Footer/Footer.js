import React from 'react';
import '../../App.css';
import logo from '../../assets/favicon.ico';
import { Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <Grid
        container
        direction='column'
        justifyContent='row'
        alignItems='center'
        spacing={2}
      >
        <Typography className='footer'>
          &copy; 2022 Christian Klein &nbsp;
          <img src={logo} alt='Golf Right logo' height='42' width='42' />
        </Typography>
        {/* <Button {...{ to: '/', component: Link }}>
          <img src={logo} alt='Golf right logo' height='42' width='42' />
        </Button> */}
      </Grid>
    </>
  );
}
