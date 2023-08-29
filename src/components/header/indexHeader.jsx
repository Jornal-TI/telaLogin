import Login from "../login/login"
import "./styleHeader.css"
import React, { useEffect, useState } from 'react';


export default function Header() {

    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const date = new Date();
        setCurrentDate(date.toLocaleDateString());
    }, []);


    return (
        <div className="containerHeader">


            <div className="background-data">
                <div className="data">
                    <p>{currentDate}</p>
                </div>
            </div>

            <div className="background-titulo">
                <div className="titulo">
                    <h1>Jornal Senac</h1>
                    <p>Projeto Orientador de Ensino</p>
                </div>
            </div>


            <div className="background-nav">
                <nav>
                    <ul>
                        <li>
                            <a class="nav-home" href="#" title="Home">Home</a>
                            <Login/>
                            <input className="pesquisa" type="search" placeholder="pesquisa" />
                        </li>
                    </ul>
                </nav>

            </div>

        </div>
    )
}