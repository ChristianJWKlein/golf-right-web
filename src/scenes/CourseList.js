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
} from '@mui/material';

export default function CourseList() {
  const [courses, setCourses] = useState([]);
  const [city, setCity] = useState('');
  const [bangForYourBuck, setBangForYourBuck] = useState();
  const [overallRating, setOverallRating] = useState('');
  const [courseList, setCourseList] = useState();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  useEffect(() => {
    let filteredList = courses;
    if (city) {
      filteredList = filteredList.filter((courses) => courses.city === city);
    }
    if (overallRating) {
      filteredList = filteredList.filter(
        (courses) => courses.rate.overall_rating >= overallRating
      );
    }
    if (bangForYourBuck) {
      filteredList = filteredList.filter(
        (courses) => courses.rate.rating.bang_for_your_buck >= bangForYourBuck
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

  if (!courseList) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <CircularProgress size={100} />
      </Box>
    );
  }
  return (
    <>
      <div className='selector'>
        <h1>Courses List</h1>
        <p>
          Use the Drop Downs below to Filter through Courses. Be sure to set
          other selections to "all" when filtering by a specific Attribute.
        </p>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id='demo-controlled-open-select-label'>City</InputLabel>
          <Select
            labelId='demo-controlled-open-select-label'
            id='demo-controlled-open-select'
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            value={city}
            label='City'
            onChange={(e) => setCity(e.target.value)}
          >
            <MenuItem value=''>
              <em>All</em>
            </MenuItem>
            <MenuItem value='Boca Raton'>Boca Raton</MenuItem>
            <MenuItem value='Boynton Beach'>Boynton Beach</MenuItem>
            <MenuItem value='Delray Beach'>Delray Beach</MenuItem>
            <MenuItem value='Lake Worth'>Lake Worth</MenuItem>
            <MenuItem value='Miami'>Miami</MenuItem>
            <MenuItem value='Palm Beach'>Palm Beach</MenuItem>
            <MenuItem value='Palm Beach Gardens'>Palm Beach Gardens</MenuItem>
            <MenuItem value='Royal Palm Beach'>Royal Palm Beach</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id='demo-controlled-open-select-label'>
            Overall Rating
          </InputLabel>
          <Select
            labelId='demo-controlled-open-select-label'
            id='demo-controlled-open-select'
            open2={open2}
            onClose={() => setOpen2(false)}
            onOpen={() => setOpen2(true)}
            value={overallRating}
            label='Overall Rating'
            onChange={(e) => setOverallRating(e.target.value)}
          >
            <MenuItem value=''>
              <em>All</em>
            </MenuItem>
            {Array(9)
              .fill(0)
              .map((_, i) => {
                const val = i + 1;
                return (
                  <MenuItem key={val} value={val}>
                    {val + '+'}
                  </MenuItem>
                );
              })}
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
          {courseList.map((course, index) => (
            <Grid item xs={2} sm={4} md={4}>
              <CourseCard key={course.id} course={course} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
