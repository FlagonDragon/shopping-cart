import { Link } from "react-router";

function Page() {
    return(
    <>
        <div>THIS MY HOMEPAGE AYO AYOOO</div>
        <nav>
            <ul>
                <li>
                    <Link to="/store/shop">Shop!</Link>
                </li>
                <li>
                    <Link to="/store/cart">Cart!</Link>
                </li>
            </ul>
        </nav>
    </>
    )
}

export default Page;