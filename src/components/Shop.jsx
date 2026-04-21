import { Link } from "react-router";

function Shop() {
    return(
    <>
        <div>SHOP SHOP SHOPPINNNN</div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home!</Link>
                </li>
                <li>
                    <Link to="/store/cart">Cart!</Link>
                </li>
            </ul>
        </nav>
    </>
    )
}

export default Shop;