import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../index.css';
import { CourseContext } from '../App';
import logo from '../assets/favicon.ico';
import RatingForm from '../components/RatingForm';
import {
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';

export default function CourseInfoAndRate() {
  const { selectedCourse } = useContext(CourseContext);
  const [oneCourse, setOneCourse] = useState();
  const [showForm, setShowForm] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://golf-right-1.uk.r.appspot.com/courses/${params.id}`)
      .then((res) => res.json())
      .then((data) => setOneCourse(data))
      .then(console.log(oneCourse))
      .catch(alert);
  }, [params.id]);

  const handleOnClick = () => {
    navigate('/courses');
  };
  const handleHowWeRateOnClick = () => {
    navigate('../how-we-rate');
  };

  return (
    <>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        spacing={2}
        className='one-course-container'
      >
        <Typography
          gutterBottom
          variant='h4'
          component='div'
          style={{ color: 'green' }}
        >
          Course Information and Ratings Form
        </Typography>
        <Typography gutterBottom variant='h6' test='primary'>
          Scroll Down to Select Ratings and Submit!
        </Typography>
        <Grid item>
          <Card sx={{ maxWidth: 800 }} className='card-space'>
            <Typography
              gutterBottom
              variant='h3'
              component='div'
              align='center'
              style={{ color: 'green' }}
            >
              {oneCourse?.name}
            </Typography>
            <CardMedia
              component='img'
              height='350'
              image={oneCourse?.img}
              alt={oneCourse?.alt}
            />
            <br />
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              align='center'
            >
              Current Course Statistics and Information:
            </Typography>
            <CardContent>
              <Grid
                container
                direction='row'
                justifyContent='center'
                alignItems='left'
                spacing={4}
              >
                <Grid item>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    style={{ color: 'green' }}
                  >
                    Overall Rating: &nbsp;
                    {Math.round(oneCourse?.rate.overall_rating * 10).toFixed(
                      1
                    ) / 10}
                  </Typography>
                  <Typography variant='h7' color='text.primary'>
                    Bang for your Buck: &nbsp;
                    {Math.round(
                      oneCourse?.rate.rating.bang_for_your_buck * 10
                    ).toFixed(1) / 10}
                    <br />
                    Atmosphere: &nbsp;
                    {Math.round(oneCourse?.rate.rating.atmosphere * 10).toFixed(
                      1
                    ) / 10}
                    <br />
                    Amenities: &nbsp;
                    {Math.round(oneCourse?.rate.rating.amenities * 10).toFixed(
                      1
                    ) / 10}
                    <br />
                    Course Quality: &nbsp;
                    {Math.round(
                      oneCourse?.rate.rating.course_quality * 10
                    ).toFixed(1) / 10}
                  </Typography>
                  <br />
                  <Typography
                    variant='h6'
                    color='text.secondary'
                    style={{ color: 'green' }}
                  >
                    Number of Ratings: &nbsp;
                    {oneCourse?.rate.ratings.atmosphere.length}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant='h5'
                    color='text.secondary'
                    style={{ color: 'green' }}
                  >
                    Course Details
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Phone: &nbsp; {oneCourse?.phone}
                    <br />
                    Type: &nbsp; {oneCourse?.type}
                    <br />
                    Holes: &nbsp; {oneCourse?.holes}
                    <br />
                    <a href={oneCourse?.website} style={{ color: 'black' }}>
                      Website Link
                    </a>
                  </Typography>
                  <br />
                  <Typography
                    variant='h6'
                    color='text.secondary'
                    style={{ color: 'green' }}
                  >
                    ⛳️ &nbsp;{oneCourse?.address}, {oneCourse?.state}{' '}
                    {oneCourse?.zip}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {showForm === true ? (
          <>
            <Grid
              container
              direction='column'
              className='rating-guidance'
              alignContent='center'
              spacing={3}
            >
              <Grid item>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  style={{ paddingTop: 25 }}
                >
                  Need Guidance on How to Rate?
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  id='myBtn'
                  variant='contained'
                  color='success'
                  onClick={handleHowWeRateOnClick}
                >
                  See How We Rate
                </Button>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant='h5' component='div'>
                  Otherwise...
                </Typography>
                <Typography gutterBottom variant='h5' component='div'>
                  Please Select Your Ratings Below 👇 for each of the Four
                  Attributes 🤘🏽
                </Typography>
                <img
                  src={logo}
                  alt='Golf right logo'
                  height='130'
                  width='130'
                />
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant='h6' color='text.secondary'>
                Please Select Values from 1-10 in the Below Dropdown Tabs to
                Rate.
              </Typography>
              <br />
              <Typography
                variant='h4'
                color='text.secondary'
                style={{ color: 'green' }}
              >
                Submitting Rating for: &nbsp;
                {oneCourse?.name}
              </Typography>
            </Grid>
            <Grid item>
              <RatingForm
                setShowForm={setShowForm}
                setOneCourse={setOneCourse}
              />
            </Grid>
          </>
        ) : (
          <Grid
            container
            direction='column'
            alignItems='center'
            className='rate-again'
          >
            <Grid item>
              <h3>{`Thank you for rating ${oneCourse?.name}!`}</h3>
            </Grid>
            <Grid item>
              <Button
                id='myBtn'
                variant='contained'
                color='success'
                onClick={handleOnClick}
              >
                Rate Another Course
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </>
  );
}
