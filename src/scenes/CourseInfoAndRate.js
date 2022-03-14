import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../index.css';
import { CourseContext } from '../App';
import RatingForm from '../components/RatingForm';
import { Grid, Box } from '@mui/material';

export default function CourseInfoAndRate() {
  const { selectedCourse } = useContext(CourseContext);
  // console.log(selectedCourse);
  const [oneCourse, setOneCourse] = useState();
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
      <h1 className='hero'>{oneCourse?.name}</h1>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <ul>
          <h2>
            Overall Rating: &nbsp;
            {Math.round(oneCourse?.rate.overall_rating * 10).toFixed(1) / 10}
          </h2>
          <li>
            Bang for your Buck: &nbsp;
            {Math.round(oneCourse?.rate.rating.bang_for_your_buck * 10).toFixed(
              1
            ) / 10}
          </li>
          <li>
            Amenities &nbsp;
            {Math.round(oneCourse?.rate.rating.amenities * 10).toFixed(1) / 10}
          </li>
          <li>
            Atmosphere: &nbsp;
            {Math.round(oneCourse?.rate.rating.atmosphere * 10).toFixed(1) / 10}
          </li>
          <li>
            Course Quality: &nbsp;
            {Math.round(oneCourse?.rate.rating.course_quality * 10).toFixed(1) /
              10}
          </li>
        </ul>
        <Grid className='course-image'>
          <img src={oneCourse?.img} alt={oneCourse?.alt}></img>
        </Grid>
        <Grid>
          <ul>
            <li>{oneCourse?.phone}</li>
            <li>
              {oneCourse?.address}, {oneCourse?.state} {oneCourse?.zip}
            </li>
            <li>{oneCourse?.type}</li>
            <li>{oneCourse?.holes}</li>
            <li>{oneCourse?.phone}</li>
          </ul>
        </Grid>
      </Grid>
      <RatingForm />
    </>
  );
}
