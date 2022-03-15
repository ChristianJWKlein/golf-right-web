import React, { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard';
import '../index.css';
import {
  Box,
  Grid,
  CircularProgress,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
} from '@mui/material';

export default function CourseList() {
  const [courses, setCourses] = useState([]);
  const [city, setCity] = useState();
  const [bangForYourBuck, setBangForYourBuck] = useState();
  const [overallRating, setOverallRating] = useState();
  const [courseList, setCourseList] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let filteredList = courses;
    if (city) {
      filteredList = filteredList.filter((courses) => courses.city === city);
    }
    if (bangForYourBuck) {
      filteredList = filteredList.filter(
        (courses) => courses.rate.rating.bang_for_your_buck >= bangForYourBuck
      );
    }
    if (overallRating) {
      filteredList = filteredList.filter(
        (courses) => courses.rate.overall_rating >= overallRating
      );
    }
    setCourseList(filteredList);
  }, [city, bangForYourBuck, overallRating, courses]);

  useEffect(() => {
    fetch('https://golf-right-1.uk.r.appspot.com/courses')
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => alert(err));
  }, []);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div>
        <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
          Open the select
        </Button>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id='demo-controlled-open-select-label'>City</InputLabel>
          <Select
            labelId='demo-controlled-open-select-label'
            id='demo-controlled-open-select'
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={city}
            label='City'
            onChange={handleChange}
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={'lake worth'}>Lake Worth</MenuItem>
            <MenuItem value={'boca raton'}>Boca Raton</MenuItem>
            <MenuItem value={'miami'}>Miami</MenuItem>
          </Select>
        </FormControl>
      </div>

      <Box sx={{ flexGrow: 1 }} className='course-container'>
        <Grid
          container
          alignItems='center'
          justify='center'
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {courses.map((course, index) => (
            <Grid item xs={2} sm={4} md={4}>
              {!courses ? (
                <CircularProgress color='success' />
              ) : (
                <CourseCard key={course.id} course={course} />
              )}
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
