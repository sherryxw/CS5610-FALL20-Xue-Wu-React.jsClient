import React from "react"
import CourseRowComponent from "./CourseRowComponent";


const courses = [

    {
        _id: "123",
        title: "CS5610",
        owner: "me",
        lastOwned: "yesterday"
    },
    {
        _id: "234",
        title: "CS5800",
        owner: "me",
        lastOwned: "yesterday"
    },
    {
        _id: "345",
        title: "CS4550",
        owner: "me",
        lastOwned: "yesterday"
    }
]


const CourseListComponent = ({instructor, term}) =>
    <div>
        <h1>Course List (For {instructor}) {term}</h1>
        <table className="table">
            {  //map:iterate
                courses.map( item =>
                    <CourseRowComponent item={item}/>
                )
            }
        </table>
    </div>



export default CourseListComponent
