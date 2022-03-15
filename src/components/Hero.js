import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Grid, Button } from '@mui/material';
import TopCourseList from '../scenes/TopCourseList';

export default function Hero() {
  const [course, setCourse] = useState();

  const navigate = useNavigate();

  const handleOnClick = () => {
    setCourse(course);
    navigate('/courses');
  };

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
            That is why we created a Rating System Designed to Cater to the Next
            Generation of Golfers. <br /> Rate a Course to find out more.
          </Typography>
          <section className='cta-buttons'>
            <Grid container spacing={2} style={{ justifyContent: 'center' }}>
              <Grid item>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleOnClick}
                >
                  Find your Course
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant='outlined'
                  color='primary'
                  onClick={handleOnClick}
                >
                  Rate a Course
                </Button>
              </Grid>
            </Grid>
          </section>
        </section>
      </section>
      <TopCourseList />
    </>
  );
}
