import React, {useContext, useState} from "react";
import {Link} from 'react-router-dom';
import Login from './login'
import Register from './register'
import TicketPage from './ticket_page'
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import CourseItem from "./CourseItem";

function CourseList({state, info}) {
    const {courses} = useContext(Context)
    if(state=="close") {
        return (
            <div className="row row1">
                {courses.courseClose.map(course =>
                    <CourseItem key={course.id} course={course}/>
                )}
            </div>
        )
    } else if(state=="increase") {
        return (
            <div className="row row1">
                {courses.CoursesIncrease.map(course =>
                    <CourseItem key={course.id} course={course}/>
                )}
            </div>
        )
    } else if(state=="decrease") {
        return (
            <div className="row row1">
                {courses.CoursesDecrease.map(course =>
                    <CourseItem key={course.id} course={course}/>
                )}
            </div>
        )
    } else if(state=="search") {
        return (
            <div className="row row1">
                {courses.CoursesDecrease.map(course =>
                    <CourseItem key={course.id} course={course}/>
                )}
            </div>
        )
    }

}

export default CourseList;