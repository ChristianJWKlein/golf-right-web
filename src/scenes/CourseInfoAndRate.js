import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
} from '@mui/material';

export default function CourseInfoAndRate() {
  const { selectedCourse } = useContext(CourseContext);
  const [oneCourse, setOneCourse] = useState();
  const [showForm, setShowForm] = useState(true);
  const params = useParams();

  useEffect(() => {
    fetch(`https://golf-right-1.uk.r.appspot.com/courses/${params.id}`)
      .then((res) => res.json())
      .then((data) => setOneCourse(data))
      .then(console.log(oneCourse))
      .catch(alert);
  }, [params.id]);

  return (
    <>
      <section className='rank-explanation'>
        <h1>We Rank Courses off of Four Attributes as seen 👇</h1>
        <h3>
          It doesn't matter if the course is public, private, a par 3 or an
          executive course. The Four Attributes are ambiguous on purpose so that
          the unique characteristics of all Courses can be captured.
        </h3>
        <h1>Some tips to guide you in your Rating 📈</h1>
        <ul>
          <h3>Bang For Your Buck 💰</h3>
          <p>
            Do they have an Incredible Membership Deal? Or one that you just
            hope you can earn your savings on? How is the price without that
            membership deal?
          </p>
          <h3>Atmosphere 😎</h3>
          <p>
            How are the Vibes? Do you feel like the Golf Pro and staff are
            hawking over your shoulder every move you make? Or are you greeted
            at the first tee with a chilled Rum Shot? 🍹
          </p>
          <h3>Amenities 🍻</h3>
          <p>
            How is the practice facillity? Do they have great food and beverage
            options? Do they offer worthwile lessons and training? Does the
            course hold tournaments or other cool events such as 'Night Golf'?
            🏌️‍♂️
          </p>
          <h3>Course Quality ⛳️</h3>
          <p>
            How are the greens rolling? Can you blame the greens or are you just
            a terrible putter? Is the rough and grass around the greens well
            kept? Is there sand at the beach? 🏝
          </p>
        </ul>
        <p>
          These Four Attributes are calculated into an Overall Rating. The
          Weights are even for each Attribute. Please consider the following
          when submiting your Rating.
        </p>
      </section>

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
            <Typography gutterBottom variant='h4' component='div'>
              Overall Rating: &nbsp;
              {Math.round(oneCourse?.rate.overall_rating * 10).toFixed(1) / 10}
            </Typography>
            <Typography variant='h6' color='text.primary'>
              Bang for your Buck: &nbsp;
              {Math.round(
                oneCourse?.rate.rating.bang_for_your_buck * 10
              ).toFixed(1) / 10}
              <br />
              Amenities: &nbsp;
              {Math.round(oneCourse?.rate.rating.amenities * 10).toFixed(1) /
                10}
              <br />
              Atmosphere: &nbsp;
              {Math.round(oneCourse?.rate.rating.atmosphere * 10).toFixed(1) /
                10}
              <br />
              Course Quality: &nbsp;
              {Math.round(oneCourse?.rate.rating.course_quality * 10).toFixed(
                1
              ) / 10}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
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
              <h1>Thank you for Rating</h1>
            )}
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
