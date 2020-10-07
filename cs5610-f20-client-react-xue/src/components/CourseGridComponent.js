import React from "react";
import {updateCourse} from "../services/CourseService";
import CourseCard from "./CourseCard";

const CourseGridComponent = ({courses, deleteCourse, updateCourseToServer}) =>

        <div className="container row">
            {
                courses.map((course) =>
                    (<CourseCard
                        updateCourseToServer={updateCourseToServer}
                        deleteCourse={deleteCourse}
                        key={course._id}
                        course={course}/>)
                )
            }
        </div>
    ;

export default CourseGridComponent