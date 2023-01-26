import React from "react";

import styles from "./index.module.scss";

const Input = ({ value, onChange, placeholder }) => {
    return (
        <input className={styles.input} type="text" value={value} onChange={onChange} placeholder={placeholder}/>
    );
};

export default React.memo(Input);