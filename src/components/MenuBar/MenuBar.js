import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../MenuBar/Menubar.css';
import logo from '../../assets/favicon.ico';

const MenuData = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'How We Rate',
    href: '/how-we-rate',
  },
  {
    label: 'Courses',
    href: '/courses',
  },
];

export default function MenuBar() {
  const displayDesktop = () => {
    return (
      <Toolbar className='toolbar'>
        {golfRightLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const golfRightLogo = (
    // <Typography variant='h6' component='h1'>
    //   Golf Right
    // </Typography>
    <Button {...{ to: '/', component: Link }}>
      <img src={logo} alt='Golf right logo' height='42' width='42' />
    </Button>
  );

  const getMenuButtons = () => {
    return MenuData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: 'inherit',
            to: href,
            component: Link,
            className: 'menuButton',
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <>
      <header>
        <AppBar className='css-11b3ww9-MuiPaper-root-MuiAppBar-root'>
          {displayDesktop()}
        </AppBar>
      </header>
    </>
  );
}
