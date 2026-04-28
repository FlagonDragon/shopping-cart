import Card from "./Card";
import classes from "../styles/Shop.module.css";

function Cart({ items }) {
    return(
    <div className={classes.container}>

        {items.map((item) => {

            if (item.n > 0) {

                return <Card 
                    key={item.id} 
                    id={item.id}  
                    page='cart'
                ></Card>

            }

        })}

    </div>
    )
}

export default Cart;