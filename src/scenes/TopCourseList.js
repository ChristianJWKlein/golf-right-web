import React, { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard';
import '../index.css';
import { Box, Grid, Typography, CircularProgress } from '@mui/material';

export default function TopCourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('https://golf-right-1.uk.r.appspot.com/courses/top3')
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => alert(err));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }} className='top-three'>
      <Typography
        component='h3'
        variant='h4'
        align='center'
        color='textPrimary'
        gutterBottom
      >
        Top 3 Overall-Rated Courses
      </Typography>
      <Grid
        container
        paddingLeft='2rem'
        paddingRight='1.5rem'
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {courses.map((course, index) => (
          <Grid item xs={12} sm={4} md={4}>
            {!CourseCard ? (
              <CircularProgress color='success' />
            ) : (
              <CourseCard key={course.id} course={course} />
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
