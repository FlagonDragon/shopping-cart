import { Navigate } from "react-router";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import classes from '../styles/Home.module.css';

function Home() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/store/shop');
    }

    return(
    <div className={classes.container}>
        <div className={classes.background}>
            <div>The store<br /><em>for you</em></div>
            <button onClick={handleClick}>Shop now</button>
        </div>
    </div>
    )
}

export default Home;