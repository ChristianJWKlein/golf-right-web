import React, { useState, createContext } from 'react';
import './App.css';
import Footer from './components/Footer';
import CourseList from './scenes/CourseList';
import Hero from './components/Hero';
import MenuBar from './components/MenuBar';

export const CourseContext = createContext();

function App() {
  const [selectedCourse, setSelectedCourses] = useState();
  return (
    <>
      <CourseContext.Provider value={{ selectedCourse, setSelectedCourses }}>
        <MenuBar />
        <Hero />
        <CourseList />
        <Footer />
      </CourseContext.Provider>
    </>
  );
}

export default App;
