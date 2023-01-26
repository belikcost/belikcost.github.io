import React, { useCallback } from "react";

import styles from "./index.module.scss";

const Select = ({ value, onChange, options }) => {
    const changeEventHandler = useCallback((e) => onChange(e.target.value), [onChange]);

    return (
        <select className={styles.select} value={value} onChange={changeEventHandler}>
            {options.map((option) => (
                <option value={option.id} key={option.id}>{option.name}</option>
            ))}
        </select>
    );
};

export default React.memo(Select);