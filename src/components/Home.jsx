import { Link } from "react-router";

function Page() {
    return(
    <>
        <div>THIS MY HOMEPAGE AYO AYOOO</div>
        <nav>
            <ul>
                <li>
                    <Link to="shop">Shop!</Link>
                </li>
                <li>
                    <Link to="cart">Cart!</Link>
                </li>
            </ul>
        </nav>
    </>
    )
}

export default Page;