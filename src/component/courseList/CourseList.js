import React, { useState } from 'react';
import Cart from '../cart/Cart';
import Course from '../course/Course';
import './course-list.css'

const CourseList = (props) => {
    const courseList = props.courses;
    const [cart, setCart] = useState([]);
    const addCourseHandler = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }
    return (
        <div className="course-container">
            <div className="course-list-container">
                <div className="row">
                    {
                        courseList.map(course => <Course
                            course={course} addCourseHandler={addCourseHandler} key={course.id}></Course>)
                    }
                </div>
            </div>
            <div className="course-cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default CourseList;