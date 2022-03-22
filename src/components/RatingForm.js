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
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [formValues, setFormValues] = useState({
    bang_for_your_buck: 1,
    amenities: 1,
    atmosphere: 1,
    course_quality: 1,
  });
  const navigate = useNavigate();
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
        <Grid
          container
          direction='column'
          display='flex-column'
          alignContent='center'
          justifyItems='center'
          spacing={3}
          xs={12}
        >
          <Grid
            container
            alignItems='center'
            justify='center'
            direction='row'
            spacing={4}
            className='rating-grid'
            marginTop={0.1}
            paddingLeft={4}
            paddingRight={-1}
          >
            <Grid item>
              <Card sx={{ maxWidth: 400 }} className='card-space'>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    Bang for your Buck
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Do they have an electric Sunset Card Deal such as $20 year
                    round after 3 pm? 🔥
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
                    An ideal Course? A range that has all kinds of cool targets
                    and is equipped with Top Tracer Technology 💯
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
                    Does this Course take pride in Course Quality? Most do,
                    especially around the greens.💹
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
        </Grid>
        <Grid
          container
          direction='column'
          display='flex'
          justifyContent='center'
          justifyItems='center'
          padding='1rem'
        >
          <Grid item direction='column'>
            <Card className='card-space-7' marginTop='2'>
              <button
                id='myBtn'
                variant='contained'
                type='submit'
                className='get-button-centered'
              >
                Submit Rating Overall: &nbsp;
                {(formValues.bang_for_your_buck +
                  formValues.atmosphere +
                  formValues.amenities +
                  formValues.course_quality) /
                  4}
              </button>
            </Card>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
