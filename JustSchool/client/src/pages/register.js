import React, {useContext, useState} from "react";
import Home from './home'
import Login from './login'
import {Link, useNavigate} from 'react-router-dom';
import TicketPage from './ticket_page'
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {registration} from "../http/userAPI";

const register = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const signUp = async () => {
        try {
            const response = await registration(email, name, password);
            console.log(response)
            alert("You are successfully registered")
            navigate('/login')
        } catch(e)
            {
                alert(e.response.data.message)
            }
        }


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
                            <a className="s">Моя страница</a>
                        </Link>
                    }
                </div>
                <div className="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
            <div className="row row2">
                <div className="col col2">
                    <img src="/assets/images/logging.svg"/>
                </div>
                <div className = "col col2">
                    <div className="right_cont_mini">
                        <p className="create">Войдите в аккаунт</p>
                        <div className="containerReg">
                            <label>Ваше имя*</label>
                            <input type="text" placeholder="Введите полное имя"
                               value = {name} onChange={e => setName(e.target.value)}required></input>
                            <label>Электронная почта*</label>
                            <input type="text" placeholder="Введите ваш e-mail"
                                   value = {email} onChange={e => setEmail(e.target.value)}required></input>
                            <label>Придумайте пароль*</label>
                            <input type="password" placeholder="Введите пароль"
                                   value = {password} onChange={e => setPassword(e.target.value)} required></input>
                            <button onClick={signUp}>Создать аккаунт</button>
                                <p className="already">Уже есть Аккаунт? <Link to="/login"><a>Войдите</a></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
});

export default register