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
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        spacing={2}
        className='one-course-container'
      >
        <Typography
          gutterBottom
          variant='h4'
          component='div'
          style={{ color: 'green' }}
        >
          Course Information and Rating Results
        </Typography>
        <Typography gutterBottom variant='body2' test='primary'>
          Scroll Down to Select Ratings and Submit!
        </Typography>
        <Grid item>
          <Card sx={{ maxWidth: 600 }} className='card-space'>
            <Typography
              gutterBottom
              variant='h3'
              component='div'
              align='center'
              style={{ color: 'green' }}
            >
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
                {Math.round(oneCourse?.rate.overall_rating * 10).toFixed(1) /
                  10}
              </Typography>
              <Typography variant='h7' color='text.primary'>
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
              <br />
              <Typography
                variant='h6'
                color='text.secondary'
                style={{ color: 'green' }}
              >
                Course Details:
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Phone: &nbsp; {oneCourse?.phone}
                <br />
                ⛳️: &nbsp;{oneCourse?.address}, {oneCourse?.state}{' '}
                {oneCourse?.zip}
                <br />
                Type: &nbsp; {oneCourse?.type}
                <br />
                Holes: &nbsp; {oneCourse?.holes}
                <br />
                <a href={oneCourse?.website} style={{ color: 'black' }}>
                  Website: &nbsp; {oneCourse?.website}
                </a>
              </Typography>
              <Typography
                variant='h6'
                color='text.secondary'
                style={{ color: 'green' }}
              >
                Number of Ratings: &nbsp;
                {oneCourse?.rate.ratings.atmosphere.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {showForm === true ? (
          <Grid item>
            <RatingForm setShowForm={setShowForm} setOneCourse={setOneCourse} />
          </Grid>
        ) : (
          <Grid
            container
            direction='column'
            alignItems='center'
            className='rate-again'
          >
            <Grid item>
              <h3>{`Thank you for rating ${oneCourse?.name}!`}</h3>
            </Grid>
            <Grid item>
              <Button
                variant='contained'
                color='success'
                onClick={handleOnClick}
              >
                Rate Another Course
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </>
  );
}
