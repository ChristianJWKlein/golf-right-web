import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Grid, Fab, Card } from '@mui/material';
import TopCourseList from '../../scenes/TopCourseList';
import './Hero.css';
import video from '../../assets/Right.mp4';

export default function Hero() {
  const [course, setCourse] = useState();

  const navigate = useNavigate();

  const handleOnClick = () => {
    setCourse(course);
    navigate('/courses');
  };

  return (
    <>
      {/* <section className='hero'>
        <section className='hero-content'> */}
      <div>
        <video className='video-container' autoPlay loop muted id='video'>
          <source src={video} type='video/mp4' />
        </video>

        <Grid container spacing={2} style={{ justifyContent: 'center' }}>
          <Fab
            className='hero-button'
            variant='extended'
            onClick={handleOnClick}
          >
            <Typography
              className='btn-txt-clr'
              variant='h6'
              align='center'
              color='ButtonText'
            >
              Find and Rate your Course
            </Typography>
          </Fab>
          <Grid item></Grid>
          <Card sx={{ maxWidth: 600 }}>
            <Typography
              variant='h6'
              align='center'
              color='textSecondary'
              paragraph
            >
              Stuck up Golf Courses are a thing of the past. <br />
              That is why we created a Rating System Designed to Cater to the
              Next Generation of Golfers. <br /> Rate a Course to find out more.
            </Typography>
          </Card>
        </Grid>
      </div>
      {/* </section>
      </section> */}
      <TopCourseList />
    </>
  );
}
