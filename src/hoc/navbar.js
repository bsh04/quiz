import React from 'react';
import './navbar.scss'

const Navbar = (props) => {
    return (
        <div className='navbar'>
            <a href='/' className='brand'>Тестовые задания</a>
            <ul>
                <li>О приложении</li>
                <li>Список тестов</li>
            </ul>
        </div>
    );
};

export default Navbar;