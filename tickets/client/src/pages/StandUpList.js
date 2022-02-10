import React, {useContext, useState} from "react";
import {Link} from 'react-router-dom';
import Login from './login'
import Register from './register'
import TicketPage from './ticket_page'
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import StandUpItem from "./StandUpItem";

function StandUpList({state}) {
    const {standups} = useContext(Context)
    if(state=="close") {
        return (
            <div className="stand_ups">
                {standups.standUpsClose.map(standup =>
                    <StandUpItem key={standup.id} standup={standup}/>
                )}
            </div>
        )
    } else if(state=="increase") {
        return (
            <div className="stand_ups">
                {standups.standUpsIncrease.map(standup =>
                    <StandUpItem key={standup.id} standup={standup}/>
                )}
            </div>
        )
    } else if(state=="decrease") {
        return (
            <div className="stand_ups">
                {standups.standUpsDecrease.map(standup =>
                    <StandUpItem key={standup.id} standup={standup}/>
                )}
            </div>
        )
    }

}

export default StandUpList;