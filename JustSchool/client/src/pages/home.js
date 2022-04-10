import React, {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import Login from './login'
import Register from './register'
import TicketPage from './ticket_page'
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import CourseItem from "./CourseItem";
import CourseList from "./CourseList";
import {getCourse} from "../http/CourseAPI";
import {registration} from "../http/userAPI";


const home = observer(() => {
    const {user} = useContext(Context)
    const {courses} = useContext(Context)
    useEffect(() => {
        getCourse().then(data => courses.setCourses(data.rows))
    }, [])
    let [courseStand, setState] = useState("close");
    const [name, setName] = useState('')
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

    function search() {
        alert("Sorry it is not implemented yet")
    }

    const logout = async () => {
        user.setUser({})
        user.setIsAuth(false)
        alert("Bye-Bye")
    }
    console.log(courses.Size)
    return (
        <div>
            <nav className="header">
            <Link to="/">
                <div className="logo">
                </div>
            </Link>
            <div className="logo_after">
                <div className="left_header">
                        <div className="course">
                            <a className="s">Курсы</a>
                        </div>
                    <Link to="/aboutUs">
                        <div className="AboutUs">
                            <a>О нас</a>
                        </div>
                    </Link>
                </div>
                {!user.isAuth ?
                    <Link to="/register"><div className="enter"><a>Войти в кабинет</a></div></Link>
                    :
                    <Link to="/">
                        <div className="enter"><a>Моя страница</a></div>
                    </Link>
                }
            </div>
            <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            </nav>
            <div className="post_header">
                <div className="left">
                    <input type="text" placeholder="Поиск курса"
                           value = {name} onChange={e => setName(e.target.value)}requiredd></input>
                    <button onClick={search}>Найти</button>
                </div>
                <div className="right">
                    <div className="sort">Сначала показывать:</div>
                    <select className="rate" onChange={(e) => {
                        onChangeCombo(e);
                    }}>
                        <option value="close">Ближайшие</option>
                        <option value="increase">По возрастанию цены</option>
                        <option value="decrease">По убыванию цены</option>
                    </select>
                </div>
            </div>
            <div className="container">
                <CourseList state={courseStand}/>
            </div>
        </div>
        /*<div>
            <nav className="header">
                <Link to="/">
                    <div className="logo">
                        <a>
                            <object data="your.svg" type="image/svg+xml">
                                <img src="../../public/assets/images/Logo.svg" width="185" height="46" alt="Logo"></img>
                            </object>
                        </a>
                    </div>
                </Link>
                <div className="logo_after">
                    <div className="left_header">
                        <Link to="/">
                            <div className="course">
                                <a>Курсы</a>
                            </div>
                        </Link>
                        <Link to="/aboutUs">
                            <div className="AboutUs">
                                <a>О нас</a>
                            </div>
                        </Link>
                    </div>
                    {!user.isAuth ?
                        <Link to="/register"><div className="enter"><a>Войти в кабинет</a></div></Link>
                        :
                        <Link to="/">
                            <button className="s" onClick={logout}>Выйти</button>
                        </Link>
                    }
                </div>
                <div className="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
            <div className="post_header">
                <div className="left">
                    <input type="text" placeholder="Поиск курса" id="c" required></input>
                    <button>Найти</button>
                </div>
                <div className="right">
                    <div className="sort">Сначала показывать:</div>
                    <select className="rate" onChange={(e) => {
                        onChangeCombo(e);
                    }}>
                        <option value="close">Ближайшие</option>
                        <option value="increase">По возрастанию цены</option>
                        <option value="decrease">По убыванию цены</option>
                    </select>
                </div>
            </div>
            <div className="container">
                <CourseList state={courseStand}/>
            </div>
        </div>*/
    );
});

export default home