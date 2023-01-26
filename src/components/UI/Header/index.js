import React from "react";
import { NavLink } from "react-router-dom";

import cartMobileIcon from "../../../assets/images/cartMobile.svg";
import catalogMobileIcon from "../../../assets/images/catalogMobile.svg"

import styles from "./index.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Интерьер.</h1>
            <nav>
                <NavLink to="catalog">
                    <span>Каталог</span>
                    <img src={catalogMobileIcon} alt="Каталог"/>
                </NavLink>
                <NavLink to="cart">
                    <span>Корзина</span>
                    <img src={cartMobileIcon} alt="Корзина"/>
                </NavLink>
            </nav>
        </header>
    );
};

export default React.memo(Header);