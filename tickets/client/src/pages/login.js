import React, {useContext, useState} from "react";
import {Link, Route, useNavigate} from 'react-router-dom';
import Home from './home'
import Register from './register'
import TicketPage from './ticket_page'
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {logen, registration} from "../http/userAPI";


const login = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = async () => {
        try {
            let data;
            data = await logen(email,password);
            user.setUser(data)
            user.setIsAuth(true)
            navigate('/')
        }
        catch (e) {
            alert(e.response.data.message)
        }
    }

    const logout = async () => {
        user.setUser({})
        user.setIsAuth(false)
        alert("Bye-Bye")
    }
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
                    <div className="left_cont">
                        <div className="left_cont_img"></div>
                    </div>
                    <div className="right_cont">
                        <div className="right_cont_mini">
                            <p className="create">Войдите в аккаунт</p>
                            <div className="containerReg">
                                <label>Электронная почта</label>
                                <input type="text" placeholder="Введите ваш e-mail"
                                       value = {email} onChange={e => setEmail(e.target.value)} required></input>
                                <label>Пароль</label>
                                <input type="password" placeholder="Введите пароль"
                                       value = {password} onChange={e => setPassword(e.target.value)} required></input>
                                <button onClick={signIn}>Войти в аккаунт</button>
                                <p className="already">Еще нет аккаунта? <Link to="/register"><a>Создайтe</a></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
});

export default login