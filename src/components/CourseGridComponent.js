import React from "react";
import CourseCard from "./CourseCard";


const CourseGridComponent = ({courses, deleteCourse}) =>

        <div className="container row">
            {
                courses.map((course) =>
                    (<CourseCard
                        deleteCourse={deleteCourse}
                        key={course._id}
                        course={course}/>)
                )
            }
        </div>
    ;

export default CourseGridComponent