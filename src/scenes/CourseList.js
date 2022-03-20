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
  Typography,
} from '@mui/material';

export default function CourseList() {
  const [courses, setCourses] = useState([]);
  const [city, setCity] = useState('');
  const [bangForYourBuck, setBangForYourBuck] = useState();
  const [atmosphere, setAtmosphere] = useState();
  const [amenities, setAmenities] = useState();
  const [courseQuality, setCourseQuality] = useState();
  const [overallRating, setOverallRating] = useState('');
  const [county, setCounty] = useState('');
  const [courseList, setCourseList] = useState();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);

  useEffect(() => {
    let filteredList = courses;
    if (city) {
      filteredList = filteredList.filter((courses) => courses.city === city);
    }
    if (county) {
      filteredList = filteredList.filter(
        (courses) => courses.county === county
      );
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
    if (atmosphere) {
      filteredList = filteredList.filter(
        (courses) => courses.rate.rating.atmosphere >= atmosphere
      );
    }
    if (amenities) {
      filteredList = filteredList.filter(
        (courses) => courses.rate.rating.amenities >= amenities
      );
    }
    if (courseQuality) {
      filteredList = filteredList.filter(
        (courses) => courses.rate.rating.course_quality >= courseQuality
      );
    }
    setCourseList(filteredList);
  }, [
    city,
    county,
    bangForYourBuck,
    atmosphere,
    amenities,
    courseQuality,
    overallRating,
    courses,
  ]);

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
        <Typography variant='h3' style={{ color: 'darkblue' }}>
          Courses List
        </Typography>
        <Typography variant='h6' style={{ color: 'green' }}>
          Use the Drop Downs below to Filter through Courses. Be sure to set
          other selections to "all" when filtering by a specific Attribute.
        </Typography>
        <Typography variant='h6' color='text.primary'>
          By default, courses are arranged by Overall Rating in Descending
          Order.
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 75 }}>
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
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id='demo-controlled-open-select-label'>County</InputLabel>
          <Select
            labelId='demo-controlled-open-select-label'
            id='demo-controlled-open-select'
            open={open7}
            onClose={() => setOpen7(false)}
            onOpen={() => setOpen7(true)}
            value={county}
            label='County'
            onChange={(e) => setCounty(e.target.value)}
          >
            <MenuItem value=''>
              <em>All</em>
            </MenuItem>
            <MenuItem value='Broward'>Broward</MenuItem>
            <MenuItem value='Buncombe'>Buncombe</MenuItem>
            <MenuItem value='Charleston'>Charleston</MenuItem>
            <MenuItem value='Miami-Dade'>Miami-Dade</MenuItem>
            <MenuItem value='Palm Beach'>Palm Beach</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 146 }}>
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
        <FormControl sx={{ m: 1, minWidth: 182 }}>
          <InputLabel id='demo-controlled-open-select-label'>
            Bang for Your Buck
          </InputLabel>
          <Select
            labelId='demo-controlled-open-select-label'
            id='demo-controlled-open-select'
            open3={open3}
            onClose={() => setOpen3(false)}
            onOpen={() => setOpen3(true)}
            value={bangForYourBuck}
            label='Bang for Your Buck'
            onChange={(e) => setBangForYourBuck(e.target.value)}
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
        <FormControl sx={{ m: 1, minWidth: 130 }}>
          <InputLabel id='demo-controlled-open-select-label'>
            Atmosphere
          </InputLabel>
          <Select
            labelId='demo-controlled-open-select-label'
            id='demo-controlled-open-select'
            open4={open4}
            onClose={() => setOpen4(false)}
            onOpen={() => setOpen4(true)}
            value={atmosphere}
            label='Atmosphere'
            onChange={(e) => setAtmosphere(e.target.value)}
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
        <FormControl sx={{ m: 1, minWidth: 115 }}>
          <InputLabel id='demo-controlled-open-select-label'>
            Amenities
          </InputLabel>
          <Select
            labelId='demo-controlled-open-select-label'
            id='demo-controlled-open-select'
            open5={open5}
            onClose={() => setOpen5(false)}
            onOpen={() => setOpen5(true)}
            value={amenities}
            label='Amenities'
            onChange={(e) => setAmenities(e.target.value)}
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
        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id='demo-controlled-open-select-label'>
            Course Quality
          </InputLabel>
          <Select
            labelId='demo-controlled-open-select-label'
            id='demo-controlled-open-select'
            open5={open6}
            onClose={() => setOpen6(false)}
            onOpen={() => setOpen6(true)}
            value={courseQuality}
            label='Course Quality'
            onChange={(e) => setCourseQuality(e.target.value)}
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
            <Grid item xs={12} sm={4} md={4}>
              <CourseCard key={course.id} course={course} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
