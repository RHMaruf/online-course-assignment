import React from 'react';
import './course.css'

const Course = (props) => {
    const course = props.course;

    return (
        <div className = "col-md-4 px-0">
            <div className = "course-style mx-2 my-1" >
            <h3>{course.course_name}</h3>
            <p><small>Created: {course.created_by}</small></p>
            <h4><small> Price:</small> ${course.price}</h4>
            <button className="btn btn-success" onClick={()=>props.addCourseHandler(course)}>Enroll Now</button>
            </div>
        </div>
    );
};

export default Course;