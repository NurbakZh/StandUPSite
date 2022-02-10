import React, {useContext, useEffect, useState} from "react";
import Home from './home'
import Login from './login'
import Register from './register'
import {useLocation, Link, useParams} from 'react-router-dom';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {getOneStandUp} from "../http/StandUpAPI";

const Ticket_page = () => {
    const [standup, setStandUp] = useState({})
    const params = window.location.pathname
    const par = params.split('/')[2]
    const {user} = useContext(Context)
    useEffect(() => {
        getOneStandUp(par).then(data => setStandUp(data))
    }, [])
    const logout = async () => {
        user.setUser({})
        user.setIsAuth(false)
        alert("Bye-Bye")
    }
    const buy = async () => {
        if(user._isAuth) {
            alert("You successufuly bought ticket(s)")
        } else {
            alert("Please log in, to buy ticket(s)")
        }
    }
    const [money, setMoney] = useState('')
    return(
        <div>
            <nav className="header">
                <Link to="/"><div className="logo"></div></Link>
                <div className="enter">
                    {!user.isAuth ?
                        <Link to="/register"><a className="s">Войти в кабинет</a></Link>
                        :
                        <Link to="/"><button className="s" onClick={logout}>Выйти</button></Link>
                    }
                </div>
            </nav>
                <div className="cont">
                    <div className="left_ticket">
                        <div className="stand_up">
                            <div className="stand_up_photo">
                                <img alt="stand_up" src={process.env.REACT_APP_API_URL + standup.img}></img>
                            </div>
                            <div className="stand_up_text_box">
                                <p className="stand_up_p date">{standup.date}</p>
                                <p className="stand_up_p time">{standup.time}</p>
                                <p className="stand_up_p price">{standup.cost}тг</p>
                            </div>
                        </div>
                    </div>
                    <div className="right_ticket">
                        <div className="right_ticket_mini">
                            <p className="create">Сколько билетов вы хотите купить?</p>
                            <div className="containerReg">
                                <label>Кол-во билетов</label>
                                <input type="text" value={money}
                                       onChange={(e) => setMoney(e.target.value)}
                                       placeholder="Введите количество билетов" id="m" required></input>
                                    <div className="price">
                                        <p className="under">Общая стоимость:</p>
                                        <p className="under_price">{standup.cost * money}тг</p>
                                    </div>
                                    <div className="place">
                                        <p className="under geos">Место и время мероприятия:</p>
                                        <p className="geo">{standup.address} {standup.date}, {standup.time}</p>
                                    </div>
                                    <button onClick={buy}>Купить билет</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default Ticket_page