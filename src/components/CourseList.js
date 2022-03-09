import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Box, Paper, Grid } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('https://golf-right-1.uk.r.appspot.com/courses')
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => alert(err));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {courses.map((course, index) => (
          <Grid item xs={2} sm={4} md={4}>
            <Item>
              <p>{course.holes}</p>
              <CourseCard key={course.id} course={course} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
