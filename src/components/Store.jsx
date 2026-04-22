import { Link } from "react-router";
import { useParams } from "react-router";
import Header from "./Header";
import Shop from "./Shop";
import Cart from "./Cart";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import classes from "../styles/Store.module.css"


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

        <Header></Header>

        <div className={classes.container}>
            {(name === 'home') ? (
                <Home></Home>
            ) : name === 'shop' ? (
                <Shop></Shop>
            ) : name === 'cart' ? (
                <Cart></Cart>
            ) : (
                <ErrorPage></ErrorPage>
            )}
        </div>

    </>
    )
}

export default Store;