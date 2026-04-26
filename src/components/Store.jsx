import { useParams } from "react-router";
import { useState } from "react";
import Header from "./Header";
import Shop from "./Shop";
import Cart from "./Cart";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import classes from "../styles/Store.module.css";

let itemsArray = [];

for (let i = 1; i <= 20; i++) {
    itemsArray.push({id: i, n: 0});
}

function totalItems(myItems) {

    let total = 0;

    myItems.forEach((item) => {
        total += item.n;
    })
        
    return total;

}

function Store() {
    const { name } = useParams();
    const [items, setItems] = useState(itemsArray);
    const [inCart, setInCart] = useState(totalItems(items));

    function handleClick(id, value) {

        if ((inCart+value) < 1000) {

            setInCart(inCart+value);
            
            console.log(totalItems(items));
            

            let newItems = [...items];
            newItems[id-1].n += value;
            console.log(newItems);
            setItems(newItems);

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