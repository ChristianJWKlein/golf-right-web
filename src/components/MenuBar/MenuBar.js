import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../MenuBar/MenuBar';

const MenuData = [
  {
    label: 'Home',
    href: '/',
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
    <Typography variant='h6' component='h1'>
      Golf Right
    </Typography>
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
        <AppBar>{displayDesktop()}</AppBar>
      </header>
    </>
  );
}
