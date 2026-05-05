import { Link } from "react-router";
import classes from "../styles/Header.module.css";

function Header({ inCart }) {
    
    return(
        <div className={classes.container}>
            <nav><div className={classes.leftDiv}>
                <Link to="/store/home">Home</Link>
            </div></nav>
            <nav><div className={classes.middleDiv}>
                <Link to="/store/shop">Shop</Link>
            </div></nav>
            <nav><div className={classes.rightDiv}>
                <Link to="/store/cart">
                <div className={classes.innerRight}>
                    <div>Cart</div> 
                    <div className={classes.inCart}>{inCart}</div>
                </div>
                </Link>
            </div></nav>
        </div>
    )
}

export default Header;