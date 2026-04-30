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
    itemsArray.push({id: i, n: 1});
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

    let inCart = totalItems(items);

    function shopAdd(id, value) {

        if ((inCart+value) < 1000 && (items[id-1].n + value) < 100) {            

            let newItems = [...items];
            newItems[id-1].n += value;
            console.log(newItems);
            setItems(newItems);

        } 

    }

    function cartEdit(id, action) {

        if (action == 'add') {

            if ((inCart+1) < 1000 && (items[id-1].n + 1) < 100) {

                let newItems = [...items];
                newItems[id-1].n += 1;
                console.log(newItems);
                setItems(newItems);

            } 

        }

        if (action == 'substract') {

            if ((inCart-1) >= 0 && (items[id-1].n - 1) >= 0) {

                let newItems = [...items];
                newItems[id-1].n -= 1;
                console.log(newItems);
                setItems(newItems);

            } 

        }

        if (action == 'delete') {

            let newItems = [...items];
            newItems[id-1].n = 0;
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
                <Shop items={items} handleClick={shopAdd}></Shop>
            ) : name === 'cart' ? (
                <Cart items={items} handleClick={cartEdit}></Cart>
            ) : (
                <ErrorPage></ErrorPage>
            )}
        </div>

    </>
    )
}

export default Store;