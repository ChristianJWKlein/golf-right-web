import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../index.css';
import { CourseContext } from '../App';
import RatingForm from '../components/RatingForm';
import {
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';
import HowWeRate from './HowWeRate';

export default function CourseInfoAndRate() {
  const { selectedCourse } = useContext(CourseContext);
  const [oneCourse, setOneCourse] = useState();
  const [showForm, setShowForm] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://golf-right-1.uk.r.appspot.com/courses/${params.id}`)
      .then((res) => res.json())
      .then((data) => setOneCourse(data))
      .then(console.log(oneCourse))
      .catch(alert);
  }, [params.id]);

  const handleOnClick = () => {
    navigate('/courses');
  };

  return (
    <>
      <HowWeRate />

      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='left'
        className='one-course-container'
      >
        <Card sx={{ maxWidth: 400 }} className='card-space'>
          <Typography gutterBottom variant='h3' component='div' align='center'>
            {oneCourse?.name}
          </Typography>
          <CardMedia
            component='img'
            height='350'
            image={oneCourse?.img}
            alt={oneCourse?.alt}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h4'
              component='div'
              style={{ color: 'green' }}
            >
              Overall Rating: &nbsp;
              {Math.round(oneCourse?.rate.overall_rating * 10).toFixed(1) / 10}
            </Typography>
            <Typography variant='h6' color='text.primary'>
              Bang for your Buck: &nbsp;
              {Math.round(
                oneCourse?.rate.rating.bang_for_your_buck * 10
              ).toFixed(1) / 10}
              <br />
              Atmosphere: &nbsp;
              {Math.round(oneCourse?.rate.rating.atmosphere * 10).toFixed(1) /
                10}
              <br />
              Amenities: &nbsp;
              {Math.round(oneCourse?.rate.rating.amenities * 10).toFixed(1) /
                10}
              <br />
              Course Quality: &nbsp;
              {Math.round(oneCourse?.rate.rating.course_quality * 10).toFixed(
                1
              ) / 10}
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              style={{ color: 'green' }}
            >
              {oneCourse?.phone}
              <br />
              {oneCourse?.address}, {oneCourse?.state} {oneCourse?.zip}
              <br />
              {oneCourse?.type}
              <br />
              Holes: &nbsp; {oneCourse?.holes}
              <br />
              Website: &nbsp; {oneCourse?.website}
            </Typography>
          </CardContent>
        </Card>

        <Grid item justifyItems='right'>
          <Card>
            {showForm === true ? (
              <RatingForm
                setShowForm={setShowForm}
                setOneCourse={setOneCourse}
              />
            ) : (
              <Grid item className='rate-again'>
                <Button
                  variant='contained'
                  color='success'
                  onClick={handleOnClick}
                >
                  Rate Another Course
                </Button>
              </Grid>
            )}
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
