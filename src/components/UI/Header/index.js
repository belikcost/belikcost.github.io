import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./index.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Интерьер.</h1>
            <nav>
                <NavLink to="catalog">Каталог</NavLink>
                <NavLink to="cart">Корзина</NavLink>
            </nav>
        </header>
    );
};

export default React.memo(Header);