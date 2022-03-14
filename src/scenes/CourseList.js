import React, { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard';
import '../index.css';
import { Box, Grid } from '@mui/material';

export default function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('https://golf-right-1.uk.r.appspot.com/courses')
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => alert(err));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }} className='hero'>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {courses.map((course, index) => (
          <Grid item xs={2} sm={4} md={4}>
            <CourseCard key={course.id} course={course} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
