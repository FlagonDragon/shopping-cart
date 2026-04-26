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
    const [onCart, setOnCart] = useState(0);

    function handleClick(value) {
        setOnCart(Number(onCart)+Number(value));
    }

    return(
    <>

        <Header onCart={onCart}></Header>

        <div className={classes.container}>
            {(name === 'home') ? (
                <Home></Home>
            ) : name === 'shop' ? (
                <Shop handleClick={handleClick}></Shop>
            ) : name === 'cart' ? (
                <Cart></Cart>
            ) : (
                <ErrorPage></ErrorPage>
            )}
        </div>

    </>
    )
}

export default Store;