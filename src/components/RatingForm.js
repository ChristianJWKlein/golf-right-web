import React, { useState, useEffect } from 'react';
import '../App.css';
import {
  Grid,
  FormControl,
  Select,
  MenuItem,
  Button,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

export default function RatingForm({ setShowForm, setOneCourse }) {
  const [formValues, setFormValues] = useState({
    bang_for_your_buck: 1,
    amenities: 1,
    atmosphere: 1,
    course_quality: 1,
  });

  const params = useParams();

  //Zack wrote this..
  // create a state variable for each field;
  // set the initial state value to 1;
  // create 4 FormControl componenets for each state variable
  // where the onChange updates the state;
  // on click of submit, build an object of your 4 values and passes to the backend;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert('Thank you for submitting a rating');

    fetch(`https://golf-right-1.uk.r.appspot.com/courses/${params.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rating: formValues }),
    })
      .then((res) => res.json())
      .then(() => {
        setFormValues({
          bang_for_your_buck: 5,
          amenities: 5,
          atmosphere: 5,
          course_quality: 5,
        });

        setShowForm(false);
      })
      .then(() => {
        fetch(`https://golf-right-1.uk.r.appspot.com/courses/${params.id}`)
          .then((res) => res.json())
          .then((data) => setOneCourse(data))
          .catch(alert);
      })
      .catch(alert);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container direction='column' alignItems='center' spacing={5}>
          <Grid item>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              style={{ padding: 25 }}
            >
              Please Select Your Ratings Below 🤘🏽
            </Typography>
          </Grid>
          <Grid
            container
            alignItems='center'
            justify='center'
            direction='row'
            spacing={4}
            className='rating-grid'
          >
            <Grid item>
              <Card sx={{ maxWidth: 400 }} className='card-space'>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    Bang for your Buck
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    $20 for Golf after 3pm no matter the time of year? And you
                    aren't chased off the course?! 🔥
                  </Typography>
                </CardContent>
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
              </Card>
            </Grid>

            <Grid item>
              <Card sx={{ maxWidth: 400 }} className='card-space'>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    Atmosphere
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    The Best Golf Courses of Today may be Rockin' some Tunes
                    around the range and the pro shop 🤘🏽
                  </Typography>
                </CardContent>
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
              </Card>
            </Grid>
            <Grid item>
              <Card sx={{ maxWidth: 400 }} className='card-space'>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    Amenities
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    A range that has all kinds of cool targets and is equipped
                    with Top Tracer Technology 💯
                  </Typography>
                </CardContent>
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
              </Card>
            </Grid>

            <Grid item>
              <Card sx={{ maxWidth: 400 }} className='card-space'>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    Course Quality
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Most Courses take pride in Course Quality, especially the
                    greens.💹
                  </Typography>
                </CardContent>
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
              </Card>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              id='myBtn'
              variant='contained'
              color='primary'
              type='submit'
            >
              Submit Rating
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
