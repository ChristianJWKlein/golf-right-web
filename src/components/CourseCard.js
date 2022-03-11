import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CourseContext } from '../App';

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
  console.log(course);

  const handleOnClick = () => {
    setSelectedCourse(course);
    navigate(`/courses/${course.id}`);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardActionArea component={Link} to={`/courses/${course.id}`}> */}
      <CardActionArea
        // component={Link}
        // to={`/courses/${course.id}`}
        onClick={handleOnClick}
      >
        <CardMedia
          component='img'
          height='140'
          image={course.img}
          alt={course.alt}
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            {course.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {course.city}, {course.state}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {course.phone}
          </Typography>
          <Typography variant='body2' color='text.primary'>
            Overall Rating:&nbsp;
            {Math.round(course.rate.overall_rating * 10).toFixed(1) / 10}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Rate
        </Button>
      </CardActions>
    </Card>
  );
}
