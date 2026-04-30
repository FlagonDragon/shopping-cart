import classes from "../styles/CartMenu.module.css";

function CartMenu({ item }) {

    return(
        <div className={classes.container}>
           <div>In cart: </div>
           <div className={classes.btnsDiv}>
                <button className={classes.btnLeft}>-</button> 
                <div className={classes.nDiv}>{item.n}</div>
                <button className={classes.btnRight}>+</button> 
            </div>
        </div>
    )
}

export default CartMenu;