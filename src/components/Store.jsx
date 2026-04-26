import { useParams } from "react-router";
import { useState } from "react";
import Header from "./Header";
import Shop from "./Shop";
import Cart from "./Cart";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import classes from "../styles/Store.module.css"

function Store() {
    const { name } = useParams();
    const [inCart, setInCart] = useState(0);

    function handleClick(value) {
        if ((Number(inCart)+Number(value)) < 1000) {
            setInCart(Number(inCart)+Number(value));
        } else {
            setInCart(Number(inCart));
        }
    }

    return(
    <>

        <Header inCart={inCart}></Header>

        <div className={classes.container}>
            {(name === 'home') ? (
                <Home></Home>
            ) : name === 'shop' ? (
                <Shop handleClick={handleClick}></Shop>
            ) : name === 'cart' ? (
                <Cart inCart={inCart}></Cart>
            ) : (
                <ErrorPage></ErrorPage>
            )}
        </div>

    </>
    )
}

export default Store;