import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import TopCourseList from '../../scenes/TopCourseList';
import './Hero.css';
import Video from '../../assets/Right.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from './heroesCss.js';
import HowWeRate from '../../scenes/HowWeRate';

export default function Hero() {
  const [course, setCourse] = useState();

  const navigate = useNavigate();

  const handleOnClick = () => {
    setCourse(course);
    navigate('/courses');
  };

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Stuck Up Golf Courses are a Thing of the Past</HeroH1>
          <HeroP>
            That is why we created a Rating System Designed to Cater to the Next
            Generation of Golfers
          </HeroP>
          <HeroBtnWrapper>
            <button id='myBtn' onClick={handleOnClick}>
              Find and Rate your Course
            </button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>

      {/* <video className='video-container' autoPlay loop muted id='video'>
        <source src={video} type='video/mp4' />
      </video>
      <section className='call-to-action'>
        <Card sx={{ maxWidth: 600 }}>
          <button id='myBtn' onClick={handleOnClick}>
            Find and Rate your Course
          </button>
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
        </Card>
      </section> */}

      {/* //////////////////////// */}
      <Grid container>
        <TopCourseList />
        <HowWeRate />
      </Grid>
    </>
  );
}
