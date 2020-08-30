import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Course from './component/course/Course';
import fakeCourse from './fakeData/fakeCourse.json';
import CourseList from './component/courseList/CourseList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [courses,setCourses] = useState([]);
  useEffect(()=>{
    setCourses(fakeCourse);
  },[]);

  console.log(courses.length);
  return (
    <div className="App">

        <Header></Header>
        <CourseList courses={courses}></CourseList>
    </div>
  );
}

export default App;
