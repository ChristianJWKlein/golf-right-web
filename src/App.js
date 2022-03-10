import React, { useState, createContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import CourseList from './scenes/CourseList';
import Hero from './components/Hero';
import MenuBar from './components/MenuBar';
import CourseInfoAndRate from './scenes/CourseInfoAndRate';

export const CourseContext = createContext();

function App() {
  const [selectedCourse, setSelectedCourse] = useState();
  return (
    <>
      <CourseContext.Provider value={{ selectedCourse, setSelectedCourse }}>
        <MenuBar />
        {/* <Hero />
        <CourseList /> */}
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/courses' element={<CourseList />} />
          <Route path='/courses/:id' element={<CourseInfoAndRate />} />
        </Routes>
        <Footer />
      </CourseContext.Provider>
    </>
  );
}

export default App;
