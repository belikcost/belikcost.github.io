import React, { useCallback } from "react";

import cartIcon from "../../../../../assets/images/cart.svg";
import heartIcon from "../../../../../assets/images/heart.svg";
import { cutTextByConstraint } from "../../../../../utils/cutTextByConstraint";
import { makeFinancialFormat } from "../../../../../utils/makeFinancialFormat";

import styles from "./index.module.scss";

const Product = ({ id, name, img, description, price, onAddToCart }) => {
    const addToCartClick = useCallback(() => onAddToCart(id), [id, onAddToCart]);

    return (
        <div className={styles.container}>
            <div className={styles.hoverActions}>
                <button onClick={addToCartClick}>
                    <img src={cartIcon} alt="В корзину"/>
                </button>
                <button>
                    <img src={heartIcon} alt="В избранное"/>
                </button>
            </div>
            <img className={styles.image} src={img} alt={name}/>
            <h3 className={styles.name} title={name}>{cutTextByConstraint(name, 20)}</h3>
            <p className={styles.description} title={description}>{cutTextByConstraint(description, 100)}</p>
            <h3 className={styles.price}>{makeFinancialFormat(price)}</h3>
        </div>
    );
};

export default React.memo(Product);