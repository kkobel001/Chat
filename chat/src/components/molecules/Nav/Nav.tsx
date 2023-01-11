import React from 'react';
import './Nav.scss';

type PropsNav = {
    title: string;
    source: string;

}

const Nav: React.FC<PropsNav> = ({ source, title }) => {
    return (
        <ul className="nav">
            <li className='nav-item'>{title}</li>
            <li className='nav-item'>{source}</li>
        </ul>

    )

}


export default Nav;