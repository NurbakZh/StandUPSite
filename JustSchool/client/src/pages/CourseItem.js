import React, {useContext, useState} from "react";
import {Link} from 'react-router-dom';
import Login from './login'
import Register from './register'
import TicketPage from './ticket_page'
import {Context} from "../index";
import {observer} from "mobx-react-lite";

function CourseItem({course}) {
    return (
        <div className="col col1"><Link to={`/ticket_page/${course.id}`}>
            <div className="course_photo">
                <img alt="stand_up" src={process.env.REACT_APP_API_URL + course.img}></img>
            </div>
            <div className="course_text_box">
                <p className="course_p date">{course.date}</p>
                <p className="course_p time">{course.name}</p>
                <p className="course_p price">{course.cost}руб</p>
            </div></Link>
        </div>
    )
}

export default CourseItem;