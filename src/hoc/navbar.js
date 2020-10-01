import React from 'react';
import './navbar.scss'
import {Link} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className='navbar'>
            <Link to='/' className='brand'>Тестовые задания</Link>
            <div className='links'>
                <Link className='link' to={'/about'}>О приложении</Link>
                <Link className='link' to={'/quiz/list'}>Список тестов</Link>
            </div>
        </div>
    );
};

export default Navbar;