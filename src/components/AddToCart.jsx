import { useState } from "react";
import classes from "../styles/AddToCart.module.css";

function AddToCart() {
    const [value, setValue] = useState("");
    const [onCart, setOnCart] = useState(0);
    
    function handleClick() {
        setOnCart(Number(onCart)+Number(value));
        console.log(onCart);
    }

    return(
        <div className={classes.container}>
            <input 
                className={classes.inputDiv}
                type="number" 
                min={0} 
                max={99}
                value={value}
                onChange={
                    (e) => setValue(e.target.value)
                }          
            ></input>
            <button 
                className={classes.btnDiv}
                onClick={handleClick}
            >Add to Cart</button>
        </div>
    )
}

export default AddToCart;