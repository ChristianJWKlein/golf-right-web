import React, { useState, createContext } from 'react';
import './App.css';
import Footer from './components/Footer';
import CourseList from './components/CourseList';

export const CourseContext = createContext();

function App() {
  const [selectedCourse, setSelectedCourses] = useState();
  return (
    <>
      <CourseContext.Provider value={{ selectedCourse, setSelectedCourses }}>
        <CourseList />
        <Footer />
      </CourseContext.Provider>
    </>
  );
}

export default App;
