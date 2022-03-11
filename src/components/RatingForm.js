import React, { useState } from 'react';
import {
  Grid,
  FormControl,
  Select,
  MenuItem,
  Button,
  Typography,
} from '@mui/material';

const defaultValues = {
  number: '',
};

export default function RatingForm() {
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

  // const [bang_for_your_buck,

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
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
          {
            <FormControl>
              <Select
                name='number'
                value={formValues.number}
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
