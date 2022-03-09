import React from 'react';
import { Typography, Grid, Button } from '@mui/material';

export default function Hero() {
  return (
    <>
      <section className='hero'>
        <section className='hero-content'>
          <Typography
            component='h1'
            variant='h2'
            align='center'
            color='textPrimary'
            gutterBottom
          >
            Golf Right
          </Typography>
          <Typography
            variant='h6'
            align='center'
            color='textSecondary'
            paragraph
          >
            Stuck up Golf Courses are a thing of the past. <br />
            Find the right course for you.
          </Typography>
          <section>
            <Grid container spacing={2} justify='center'>
              <Grid item>
                <Button variant='contained' color='primary'>
                  Find your Course
                </Button>
              </Grid>
              <Grid item>
                <Button variant='outlined' color='primary'>
                  Rate a Course
                </Button>
              </Grid>
            </Grid>
          </section>
        </section>
      </section>
    </>
  );
}
