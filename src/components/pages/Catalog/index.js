import React, { useMemo, useState } from "react";
import Product from "./components/Product";

import Select from "../../UI/Select";

import styles from "./index.module.scss";

const SORT_OPTIONS_IDS = {
    PRICE_ASC: 'priceAsc',
    PRICE_DESC: 'priceDesc'
};

const SORT_OPTIONS = [
    { id: SORT_OPTIONS_IDS.PRICE_DESC, name: 'Порядок: сперва дороже' },
    { id: SORT_OPTIONS_IDS.PRICE_ASC, name: 'Порядок: сперва дешевле' }
];

const Catalog = ({ products, onAddToCart }) => {
    const [sort, setSort] = useState(SORT_OPTIONS_IDS.PRICE_ASC);

    const sortedProducts = useMemo(() => products.sort(
        (a, b) => sort === SORT_OPTIONS_IDS.PRICE_ASC ? a.price - b.price : b.price - a.price
    ), [sort, products]);

    return (
        <div>
            <div className={styles.sort}>
                <Select value={sort} onChange={setSort} options={SORT_OPTIONS}/>
            </div>
            <div className={styles.products}>
                {sortedProducts.map((product) => (
                    <Product {...product} onAddToCart={onAddToCart} key={product.id}/>
                ))}
            </div>
        </div>
    );
};

export default React.memo(Catalog);