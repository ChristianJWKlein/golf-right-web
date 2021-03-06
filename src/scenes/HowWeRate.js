import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function HowWeRate() {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/courses');
  };
  return (
    <>
      <section className='rank-explanation'>
        <h1>We Rank Courses off of Four Attributes</h1>
        <h3>
          It doesn't matter if the course is public, private, a par 3 or an
          executive course. The Four Attributes are ambiguous on purpose so that
          the unique characteristics of all Courses can be captured.
        </h3>
        <h1>Some tips to guide you in your Rating 📈</h1>
        <ul>
          <h3>1. Bang For Your Buck 💰</h3>
          <p>
            Do they have an Incredible Membership Deal? Or one that you just
            hope you can earn your savings on? How is the price without that
            membership deal?
          </p>
          <h3>2. Atmosphere 😎</h3>
          <p>
            How are the Vibes? Do you feel like the Golf Pro and staff are
            hawking over your shoulder every move you make? Or are you greeted
            at the first tee with a chilled Rum Shot? 🍹
          </p>
          <h3>3. Amenities 🍻</h3>
          <p>
            How is the practice facillity? Do they have great food and beverage
            options? Do they offer worthwile lessons and training? Does the
            course hold tournaments or other cool events such as 'Night Golf'?
            🏌️‍♂️
          </p>
          <h3>4. Course Quality ⛳️</h3>
          <p>
            How are the greens rolling? Can you blame the greens or are you just
            a terrible putter? Is the rough and grass around the greens well
            kept? Is there sand at the beach? 🏝
          </p>
        </ul>
        <h3>
          These Four Attributes are calculated into an <em>Overall Rating</em>.
          The Weights are even for each Attribute. Please keep it real 💯
        </h3>
        <button className='hero-btn-bottom' id='myBtn' onClick={handleOnClick}>
          Rank a Course
        </button>
      </section>
    </>
  );
}
