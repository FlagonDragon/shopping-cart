import { Link } from "react-router";
import classes from "../styles/Header.module.css";

function Header({ onCart }) {
    
    return(
        <div className={classes.container}>
            <nav><div>
                <Link to="/store/home">Home</Link>
            </div></nav>
            <nav><div className={classes.middleDiv}>
                <Link to="/store/shop">Shop</Link>
            </div></nav>
            <nav><div>
                <Link to="/store/cart">Cart ({onCart})</Link>
            </div></nav>
        </div>
    )
}

export default Header;