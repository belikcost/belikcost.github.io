import { Route, Routes } from "react-router-dom";

import Header from "./Header";
import Catalog from "./Catalog";
import Cart from "./Cart";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </>
    );
}

export default App;
