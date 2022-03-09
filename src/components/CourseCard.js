import React, { useContext } from 'react';
// import { CourseContext } from '../App';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
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
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
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
