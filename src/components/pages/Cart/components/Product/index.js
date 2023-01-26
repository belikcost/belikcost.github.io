import React, { useCallback } from "react";

import { MAX_CART_COUNT, MIN_CART_COUNT } from "../../../../../constants";
import { makeFinancialFormat } from "../../../../../utils/makeFinancialFormat";

import NumberInput from "../../../../UI/NumberInput";

import styles from "./index.module.scss";

const Product = ({ id, name, img, description, price, count, onChangeCount, onDelete }) => {
    const handleOnChangeCount = useCallback((value) => onChangeCount(id, value), [id, onChangeCount]);
    const handleOnDelete = useCallback(() => onDelete(id), [id, onDelete]);

    return (
        <div className={styles.container}>
            <img className={styles.image} src={img} alt={name}/>
            <div className={styles.mainBlock}>
                <h3>{name}</h3>
                <p className={styles.description}>{description}</p>
                <span className={styles.price}>{makeFinancialFormat(price)}</span>
                <div className={styles.actions}>
                    <button>Избранные</button>
                    <button onClick={handleOnDelete}>Удалить</button>
                </div>
            </div>
            <div className={styles.input}>
                <NumberInput
                    value={count}
                    onChange={handleOnChangeCount}
                    min={MIN_CART_COUNT}
                    max={MAX_CART_COUNT}
                />
            </div>
        </div>
    );
};

export default React.memo(Product);