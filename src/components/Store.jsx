import { useParams } from "react-router";
import { useState } from "react";
import Header from "./Header";
import Shop from "./Shop";
import Cart from "./Cart";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import classes from "../styles/Store.module.css";

let items = [];

for (let i = 1; i <= 20; i++) {
    items.push({id: i, n: 0});
}

function totalItems() {

    let total = 0;

    items.forEach((item) => {
        total += item.n;
    })
        
    console.log(total);

}

console.log(items);

totalItems();

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
                <Shop items={items} handleClick={handleClick}></Shop>
            ) : name === 'cart' ? (
                <Cart items={items}></Cart>
            ) : (
                <ErrorPage></ErrorPage>
            )}
        </div>

    </>
    )
}

export default Store;