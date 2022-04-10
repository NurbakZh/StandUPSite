import React, {useContext, useEffect, useState} from "react";
import Home from './home'
import Login from './login'
import Register from './register'
import {useLocation, Link, useParams} from 'react-router-dom';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {getOneCourse} from "../http/CourseAPI";

const Ticket_page = () => {
    const [course, setCourse] = useState({})
    const params = window.location.pathname
    const par = params.split('/')[2]
    const {user} = useContext(Context)
    useEffect(() => {
        getOneCourse(par).then(data => setCourse(data))
    }, [])
    const attend = async () => {
        if(user._isAuth) {
            console.log(user.name)
            alert("You successufuly registered for course(s)")
            user.courses_current.push(course.id)
            console.log(user.courses_current)
        } else {
            alert("Please log in, to buy ticket(s)")
        }
    }
    const [money, setMoney] = useState('')
    return(
        <div>
            <nav className="header">
                <Link to="/">
                    <div className="logo">
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
                <div className="cont">
                    <div className="left_part">
                        <div className="col col1">
                            <div className="course_photo">
                                <img alt="stand_up" src={process.env.REACT_APP_API_URL + course.img}></img>
                            </div>
                            <div className="course_text_box">
                                <p className="course_p date">{course.date}</p>
                                <p className="course_p time">{course.name}</p>
                                <p className="course_p price">{course.cost}руб</p>
                            </div>
                        </div>
                    </div>
                    <div className="right_part">
                        <div className="right_part_mini">
                            <p className="create">Иформация о курсе</p>
                            <div className="lines">
                                <div className="line">
                                    <p className="left_p">Дата начала курса</p>
                                    <p className="right_p">{course.date}</p>
                                </div>
                                <div className="line">
                                    <p className="left_p">Длительность курса</p>
                                    <p className="right_p">{course.duration}</p>
                                </div>
                                <div className="line">
                                    <p className="left_p">Необходимые знания</p>
                                    <p className="right_p">{course.knowledge}</p>
                                </div>
                                <div className="line">
                                    <p className="left_p">Длительность занятий</p>
                                    <p className="right_p">{course.time_hours}</p>
                                </div>
                                <div className="line">
                                    <p className="left_p">Количество звнятий в неделю</p>
                                    <p className="right_p">{course.time_days}</p>
                                </div>
                                <div className="line">
                                    <p className="left_p">Учеников в группе</p>
                                    <p className="right_p">{course.students}</p>
                                </div>
                            </div>
                            <button onClick={attend}>Записаться на курс</button>
                        </div>
                    </div>
                </div>
            <div className="cont c1">
                <div className="left_part l1">
                    <p className="create" style={{textAlign: "start"}}>Структура курса</p>
                    <div className="structure">
                        <p className="desc">{course.description}</p>
                    </div>
                </div>
                <div className="right_part r1">
                    <p className="create" style={{textAlign: "start"}}>Инструктор курса</p>
                    <div className="instructure">
                        <div className="photo_inst">
                            <img src={process.env.REACT_APP_API_URL + course.instructor_photo}/>
                        </div>
                        <div className="structure">
                            <p className="desc d1">{course.instructor}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket_page