import { Link } from "react-router";

function Cart() {
    return(
    <>
        <div>WE BE IN THE CART</div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home!</Link>
                </li>
                <li>
                    <Link to="/store/shop">Shop!</Link>
                </li>
            </ul>
        </nav>
    </>
    )
}

export default Cart;