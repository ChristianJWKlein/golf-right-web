import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

export default function MenuBar() {
  const displayDesktop = () => {
    return <Toolbar>{golfRightLogo}</Toolbar>;
  };

  const golfRightLogo = (
    <Typography variant='h6' component='h1'>
      Golf Right
    </Typography>
  );

  return (
    <>
      <header>
        <AppBar className='header'>{displayDesktop()}</AppBar>
      </header>
    </>
  );
}
