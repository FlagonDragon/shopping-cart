import { useState } from "react";
import classes from "../styles/AddToCart.module.css";

function AddToCart({ handleClick }) {
    const [value, setValue] = useState('');
    
    function onClick() {
        // console.log(handleClick);
        handleClick(value);
        setValue('');
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
                onClick={onClick}
            >Add to Cart</button>
        </div>
    )
}

export default AddToCart;