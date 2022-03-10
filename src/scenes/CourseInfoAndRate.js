import React, { useContext } from 'react';
import '../index.css';
import CourseCard from '../components/CourseCard';
import { CourseContext } from '../App';

export default function CourseInfoAndRate() {
  const { selectedCourse } = useContext(CourseContext);

  // useEffect(() => {
  //   fetch(`https://golf-right-1.uk.r.appspot.com/courses/${params.id}`)
  //     .then((response) => response.json())
  //     .then((data) => setRestaurant(data))
  //     .catch(alert);
  // }, [rating]);

  // if (!restaurant.photoUrl) {
  //   return <p>Loading</p>;
  // }

  return <h1 className='hero'>{selectedCourse.name}</h1>;
}
