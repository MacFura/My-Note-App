import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.scss'


const Navigation = () => (
    <nav>
        <ul className={style.wrapper}>
            <li className={style.navItem}>
                <NavLink exact
                    activeClassName={style.navItemLinkActive}
                    className={style.navItemLink} to="/">
                    twitter
                </NavLink>
            </li>
            <li className={style.navItem}>
                <NavLink
                    activeClassName={style.navItemLinkActive}
                    className={style.navItemLink} to="/notes">
                    notes
                </NavLink>
            </li>
            <li className={style.navItem}>
                <NavLink
                    activeClassName={style.navItemLinkActive}
                    className={style.navItemLink} to="/articles">
                    articles
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default Navigation;