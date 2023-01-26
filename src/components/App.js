import { useCallback, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { MIN_CART_COUNT, PRODUCTS } from "../constants";

import Header from "./UI/Header";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import styles from "./App.module.scss";


const App = () => {
    const [cartProducts, setCartProducts] = useState([]);

    const onAddToCart = useCallback((productId) => {
        const product = PRODUCTS.find((product) => product.id === productId);
        setCartProducts((cartProducts) => {
            if (cartProducts.find((product) => product.id === productId)) return cartProducts;
            return [...cartProducts, { ...product, count: MIN_CART_COUNT }]
        });
    }, []);

    const clearCart = useCallback(() => setCartProducts([]), []);

    const onChangeProductCount = useCallback((id, count) => {
        setCartProducts((products) => products.map((product) => product.id === id ? {
            ...product,
            count
        } : product));
    }, []);

    const onDeleteProduct = useCallback(
        (productId) => setCartProducts((products) => products.filter((product) => product.id !== productId)),
        []
    );

    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.content}>
                <Routes>
                    <Route
                        exact path="/"
                        element={<Navigate to="/catalog"/>}
                    />
                    <Route
                        path="/catalog"
                        element={<Catalog products={PRODUCTS} onAddToCart={onAddToCart}/>}
                    />
                    <Route
                        path="/cart"
                        element={<Cart
                            products={cartProducts}
                            clearCart={clearCart}
                            onChangeProductCount={onChangeProductCount}
                            onDeleteProduct={onDeleteProduct}
                        />}
                    />
                </Routes>
            </div>
        </div>
    );
};

export default App;
