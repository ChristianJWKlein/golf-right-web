import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../index.css';
import { CourseContext } from '../App';
import RatingForm from '../components/RatingForm';

export default function CourseInfoAndRate() {
  const { selectedCourse } = useContext(CourseContext);
  const params = useParams();

  const [oneCourse, setOneCourse] = useState();

  useEffect(() => {
    fetch(`https://golf-right-1.uk.r.appspot.com/courses/${params.id}`)
      .then((res) => res.json())
      .then((data) => setOneCourse(data))
      .catch(alert);
  }, []);

  // if (!selectedCourse) {
  //   return <p>Loading</p>;
  // }

  return (
    <>
      <h1 className='hero'>{oneCourse?.name}</h1>
      <h2 className='hero'>Overall Rating: {oneCourse?.rate.overall_rating}</h2>

      <RatingForm />
    </>
  );
}

/* <h3 className='hero'>Atmosphere: {oneCourse?.rate.rating.atmosphere}</h3>
<h3 className='hero'>
  Bang For Your Buck: {oneCourse?.rate.rating.bang_for_your_buck}
</h3>
<h3 className='hero'>{oneCourse?.rate.rating.amenities}</h3>
<h3 className='hero'>{oneCourse?.rate.rating.course_quality}</h3> */
