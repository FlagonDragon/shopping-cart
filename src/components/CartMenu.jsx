import classes from "../styles/CartMenu.module.css";

function CartMenu({ id }) {

    return(
        <div className={classes.container}>
           <div>Amount: {id}</div>
        </div>
    )
}

export default CartMenu;