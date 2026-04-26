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
                maxLength="1"
                value={value}
                onChange={
                    (e) => {
                        let validValue = e.target.value.slice(0, 2);
                        setValue(validValue)
                    }
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