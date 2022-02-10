import React, {useContext, useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import Login from './login'
import Register from './register'
import TicketPage from './ticket_page'
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import StandUpItem from "./StandUpItem";
import StandUpList from "./StandUpList";
import {getStandUp} from "../http/StandUpAPI";


const welcome = observer(() => {
    const {user} = useContext(Context)
    const {standups} = useContext(Context)
    const [stateStand, setState] = useState("close");
    const onChangeCombo = (e) => {
        const state = e.target.value;
        setState(state)
        if(state=="close") {
            console.log("close")
        } else if(state=="increase") {
            console.log("increase")
        } else if(state=="decrease") {
            console.log("decrease")
        }
    }
    return(
        <div>
            <nav className="header">
                <Link to="/"><div className="logo"></div></Link>
                <div className="enter">
                    {!user.isAuth ?
                        <Link to="/register"><a className="s">Войти в кабинет</a></Link>
                        :
                        <Link to="/"><button className="s" >Выйти</button></Link>
                    }
                </div>
            </nav>
            <div className="container">
                <div className="sort">Сначала показывать:</div>
                <select ClassName="rate" onChange={(e) => {
                    onChangeCombo(e);
                }}>
                    <option value="close">Ближайшие</option>
                    <option value="increase">По возрастанию цены</option>
                    <option value="decrease">По убыванию цены</option>
                </select>
                <p>Hello</p>
            </div>
        </div>
    );
});

export default welcome