import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { makeFinancialFormat } from "../../../utils/makeFinancialFormat";

import Input from "../../UI/Input";

import Product from "./components/Product";
import styles from "./index.module.scss";

const Cart = ({ products, clearCart, onChangeProductCount, onDeleteProduct }) => {
    const navigate = useNavigate();
    const [forPlaceOrderInfo, setForPlaceOrderInfo] = useState({ fullName: '', phone: '', address: '' });

    const totalAmount = useMemo(
        () => products.reduce((acc, product) => acc + (product.count * product.price), 0),
        [products]
    );

    const onChangeForPlaceOrderInfo = (field) => (e) => setForPlaceOrderInfo((info) => ({
        ...info,
        [field]: e.target.value
    }));

    if (products.length === 0) return (
        <h3>Корзина пуста</h3>
    );

    return (
        <div className={styles.container}>
            <div>
                <header className={styles.header}>
                    <span>Товар</span>
                    <span>К-во</span>
                </header>
                <div className={styles.divider}/>
                <div className={styles.products}>
                    {products.map((product, i) => (
                        <React.Fragment key={product.id}>
                            <Product {...product} onChangeCount={onChangeProductCount} onDelete={onDeleteProduct}/>
                            {i !== products.length - 1 && (
                                <div className={styles.divider}/>
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <footer className={styles.buttons}>
                    <button onClick={clearCart}>Очистить корзину</button>
                    <button onClick={() => navigate('/catalog')}>Продолжить покупки</button>
                </footer>
            </div>
            <div className={styles.placeOrder}>
                <h3>Оформление заказа</h3>
                <div className={styles.inputs}>
                    <Input
                        value={forPlaceOrderInfo.fullName}
                        placeholder="Имя Фамилия"
                        onChange={onChangeForPlaceOrderInfo('fullName')}
                    />
                    <Input
                        value={forPlaceOrderInfo.phone}
                        placeholder="+ 7 904 000 80 80"
                        onChange={onChangeForPlaceOrderInfo('phone')}
                    />
                    <Input
                        value={forPlaceOrderInfo.address}
                        placeholder="Адрес доставки"
                        onChange={onChangeForPlaceOrderInfo('address')}
                    />
                </div>
                <div className={styles.totalAmount}>
                    Итого: <span className={styles.totalAmountValue}>{makeFinancialFormat(totalAmount)}</span>
                </div>
                <button>Оформить заказ</button>
            </div>
        </div>
    );
};

export default React.memo(Cart);