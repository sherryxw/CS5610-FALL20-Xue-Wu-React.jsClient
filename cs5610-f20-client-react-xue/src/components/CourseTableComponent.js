import React from "react";
import CourseRowComponent from "./CourseRowComponent";

const CourseTableComponent = ({courses, deleteCourse, editCourse}) =>
    <tbody>
    {
        courses.map(function (course) {
            return <CourseRowComponent
                editCourse={editCourse}
                deleteCourse={deleteCourse}
                key={course._id}
                course={course}/>
        })
    }
    </tbody>;


export default CourseTableComponent

