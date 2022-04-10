import React, {useContext, useState} from "react";
import Home from './home'
import Login from './login'
import {Link, useNavigate} from 'react-router-dom';
import TicketPage from './ticket_page'
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {registration} from "../http/userAPI";
import register from "./register";

const aboutUs = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    return (
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
                        <div className="AboutUs">
                            <a className="s">О нас</a>
                        </div>
                    </div>
                    {!user.isAuth ?
                        <Link to="/register"><div className="enter"><a>Войти в кабинет</a></div></Link>
                        :
                        <Link to="/">
                            <a>Моя страница</a>
                        </Link>
                    }
                </div>
                <div className="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
            <div className="photos_container">
                <div className="one_photo">
                    <div className="photo_box">
                        <img src="/assets/images/im1.png"/>
                    </div>
                    <div className="descr">
                        <p className="already">JustSchool - это онлайн школа программирования.
                            В нашей команде работают только профессионалы своего дела.
                            Курсы разрабатываются совместно с экспертами GeekBrains.
                        </p>
                    </div>
                </div>
                <div className="one_photo">
                    <div className="photo_box">
                        <img src="/assets/images/im2.png"/>
                    </div>
                    <div className="descr">
                        <p className="already">Занятия проходят в небольших группах по 6-8 человек.
                            По окончании курса у ребенка будет портфолио из проектов, разработанных на занятиях.
                            В конце каждого курса на итоговом уроке, дети презентуют проекты, которые разработали
                            самостоятельно.</p>
                    </div>
                </div>
                <div className="one_photo">
                    <div className="photo_box">
                        <img src="/assets/images/im3.png"/>
                    </div>
                    <div className="descr">
                        <p className="already">Большую часть занятий мы отводим на практику.
                            Потому что только практикуясь можно хорошо усвоить материал.
                            Благодаря тому, что учебные группы небольшие, дети чуствуют себя комфортно,
                            а у преподавателя есть возможность уделить внимание каждому.</p>
                    </div>
                </div>
                <div className="email">
                    <p className="already">Если у вас остались воросы или есть предложения, будем рады вашим обращениям
                        на почту:</p>
                    <p className="al1">JustShool@gmail.com</p>
                </div>
            </div>
        </div>
    );
});

export default aboutUs