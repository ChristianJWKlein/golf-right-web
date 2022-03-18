import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CourseContext } from '../App';
import '../App.css';

import {
  Button,
  CardActionArea,
  CardMedia,
  Typography,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';

export default function CourseCard({ course }) {
  const { setSelectedCourse } = useContext(CourseContext);
  let navigate = useNavigate();
  // console.log(course);

  const handleOnClick = () => {
    setSelectedCourse(course);
    navigate(`/courses/${course.id}`);
  };

  return (
    <Card sx={{ maxWidth: 370 }} className='card-space-2'>
      <CardActionArea onClick={handleOnClick}>
        <CardMedia
          component='img'
          height='170'
          image={course.img}
          alt={course.alt}
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            {course.name}
          </Typography>

          <Typography
            variant='body2'
            color='text.primary'
            style={{ color: 'green' }}
          >
            Overall Rating:&nbsp;
            {Math.round(course.rate.overall_rating * 10).toFixed(1) / 10}
          </Typography>
          <ul>
            <Typography variant='body2' color='text.secondary'>
              Bang for your Buck: &nbsp;
              {Math.round(course.rate.rating.bang_for_your_buck * 10).toFixed(
                1
              ) / 10}
              <br />
              Atmosphere: &nbsp;
              {Math.round(course.rate.rating.atmosphere * 10).toFixed(1) / 10}
              <br />
              Amenities: &nbsp;
              {Math.round(course.rate.rating.amenities * 10).toFixed(1) / 10}
              <br />
              Course Quality: &nbsp;
              {Math.round(course.rate.rating.course_quality * 10).toFixed(1) /
                10}
            </Typography>
          </ul>

          <Typography variant='body2' color='text.secondary'>
            ⛳️ &nbsp; {course.city}, {course.state}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className='card-bottom-align-right'>
          <Button
            size='small'
            color='primary'
            onClick={handleOnClick}
            style={{ color: 'green' }}
          >
            Rate
          </Button>
          {course.rate.ratings.atmosphere.length} &nbsp;ratings
        </div>
      </CardActions>
    </Card>
  );
}
