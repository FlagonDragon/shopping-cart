import classes from "../styles/CartMenu.module.css";

function CartMenu({ item }) {

    return(
        <div className={classes.container}>
           <div>Amount: {item.n}</div>
        </div>
    )
}

export default CartMenu;