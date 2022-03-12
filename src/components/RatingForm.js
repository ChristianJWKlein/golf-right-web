import React, { useState, useEffect } from 'react';
import { Grid, FormControl, Select, MenuItem, Button } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function RatingForm() {
  const params = useParams();
  const [formValues, setFormValues] = useState({
    bang_for_your_buck: 1,
    amenities: 1,
    atmosphere: 1,
    course_quality: 1,
  });
  // create a state variable for each field;
  // set the initial state value to 1;
  // create 4 FormControl componenets for each state variable
  // where the onChange updates the state;
  // on click of submit, build an object of your 4 values and passes to the backend;

  const [bang_for_your_buck, setBangForYourBuck] = useState(1);
  const [amenities, setAmenities] = useState(1);
  const [atmosphere, setAtmosphere] = useState(1);
  const [course_quality, setCourseQuality] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://golf-right-1.uk.r.appspot.com/courses/${params.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rating: {} }),
    })
      .then((res) => res.json())
      .then(() =>
        setFormValues({
          bang_for_your_buck: 0,
          amenities: 0,
          atmosphere: 0,
          course_quality: 0,
        })
      )
      .catch(alert);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        alignItems='center'
        justify='center'
        direction='column'
        spacing={2}
      >
        <Grid item>
          <p>Bang for your Buck</p>
          {
            <FormControl>
              <Select
                name='bang_for_your_buck'
                value={formValues.bang_for_your_buck}
                onChange={handleInputChange}
              >
                {Array(10)
                  .fill(0)
                  .map((_, i) => {
                    const val = i + 1;
                    return (
                      <MenuItem key={val} value={val}>
                        {val}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          }
        </Grid>

        <Grid item>
          <p>Amenities</p>
          {
            <FormControl>
              <Select
                name='amenities'
                value={formValues.amenities}
                onChange={handleInputChange}
              >
                {Array(10)
                  .fill(0)
                  .map((_, i) => {
                    const val = i + 1;
                    return (
                      <MenuItem key={val} value={val}>
                        {val}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          }
        </Grid>

        <Grid item>
          <p>Atmosphere</p>
          {
            <FormControl>
              <Select
                name='atmosphere'
                value={formValues.atmosphere}
                onChange={handleInputChange}
              >
                {Array(10)
                  .fill(0)
                  .map((_, i) => {
                    const val = i + 1;
                    return (
                      <MenuItem key={val} value={val}>
                        {val}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          }
        </Grid>

        <Grid item>
          <p>Course Quality</p>
          {
            <FormControl>
              <Select
                name='course_quality'
                value={formValues.course_quality}
                onChange={handleInputChange}
              >
                {Array(10)
                  .fill(0)
                  .map((_, i) => {
                    const val = i + 1;
                    return (
                      <MenuItem key={val} value={val}>
                        {val}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          }
        </Grid>

        <Button variant='contained' color='primary' type='submit'>
          Submit Rating
        </Button>
      </Grid>
    </form>
  );
}
