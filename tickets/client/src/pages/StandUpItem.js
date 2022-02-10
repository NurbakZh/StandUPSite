import React, {useContext, useState} from "react";
import {Link} from 'react-router-dom';
import Login from './login'
import Register from './register'
import TicketPage from './ticket_page'
import {Context} from "../index";
import {observer} from "mobx-react-lite";

function StandUpItem({standup}) {
    console.log(standup.date)
    return (
        <div className="stand_up"><Link to={`/ticket_page/${standup.id}`}>
            <div className="stand_up_photo">
                <img alt="stand_up" src={process.env.REACT_APP_API_URL + standup.img}></img>
            </div>
            <div className="stand_up_text_box">
                <p className="stand_up_p date">{standup.date}</p>
                <p className="stand_up_p time">{standup.time}</p>
                <p className="stand_up_p price">{standup.cost}тг</p>
            </div></Link>
        </div>
    )
}

export default StandUpItem;