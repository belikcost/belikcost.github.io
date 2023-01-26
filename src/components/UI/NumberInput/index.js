import React, { useCallback } from "react";

import arrowIcon from "./icons/arrowIcon";
import styles from "./index.module.scss";

const NumberInput = ({ value, onChange, min, max }) => {
    const checkNumberAndChange = useCallback((value) => {
        if (+value > max) onChange(max);
        else if (+value < min) onChange(min);
        else onChange(value);
    }, [min, max, onChange]);

    const onChangeHandler = useCallback((e) => {
        checkNumberAndChange(e.target.value);
    }, [checkNumberAndChange]);

    const increaseNumber = useCallback(() => {
        checkNumberAndChange(value + 1);
    }, [checkNumberAndChange, value]);

    const decreaseNumber = useCallback(() => {
        checkNumberAndChange(value - 1);
    }, [checkNumberAndChange, value]);

    return (
        <label className={styles.container}>
            <input className={styles.input} type="number" value={value} onChange={onChangeHandler} min={min} max={max}/>
            <div className={styles.buttons}>
                <button onClick={increaseNumber}>{arrowIcon}</button>
                <button onClick={decreaseNumber} className={styles.downIcon}>{arrowIcon}</button>
            </div>
        </label>
    );
};

export default React.memo(NumberInput);