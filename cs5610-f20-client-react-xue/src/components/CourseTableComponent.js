import React from "react";
import CourseRowComponent from "./CourseRowComponent";

const CourseTableComponent = ({courses, deleteCourse}) =>
    <tbody>
    {
        courses.map(function (course) {
            return <CourseRowComponent
                deleteCourse={deleteCourse}
                key={course._id}
                course={course}/>
        })
    }
    </tbody>;


export default CourseTableComponent

