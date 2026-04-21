import { Link } from "react-router";
import { useParams } from "react-router";
import Shop from "./Shop";
import Cart from "./Cart";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
// import { useNavigate  } from "react-router";
// import { useEffect } from "react";


// READ THIS BELOW

// https://stackoverflow.com/questions/70437952/is-there-a-way-to-set-a-default-route-with-react-router-v6

// READ THIS ABOVE



function Store() {
    const { name } = useParams();


    
//     useEffect(() => {

//         function redirectHome() {
// //   console.log('redirected hell yeah');
// //   return redirect("/store/home");
//     let navigate = useNavigate();
    
//     navigate("/store/home");
//     }
    
//     redirectHome();

//     }, []);

    return(
    <>

        <div>
            <nav><div>
                <Link to="/store/home">Home</Link>
            </div></nav>
            <nav><div>
                <Link to="/store/shop">Shop</Link>
            </div></nav>
            <nav><div>
                <Link to="/store/cart">Cart</Link>
            </div></nav>
        </div>

        {(name === 'home') ? (
            <Home></Home>
        ) : name === 'shop' ? (
            <Shop></Shop>
        ) : name === 'cart' ? (
            <Cart></Cart>
        ) : (
            <ErrorPage></ErrorPage>
        )}

    </>
    )
}

export default Store;