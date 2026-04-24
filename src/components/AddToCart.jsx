import classes from "../styles/AddToCart.module.css";

function AddToCart() {

    return(
        <div className={classes.container}>
            <input type="number" min={0} max={99} className={classes.inputDiv}></input>
            <button className={classes.btnDiv}>Add to Cart</button>
        </div>
    )
}

export default AddToCart;