import Card from "./Card";
import classes from "../styles/Shop.module.css";

function Cart({ items , handleClick }) {
    return(
    <div className={classes.container}>

        {items.map((item) => {

            if (item.n > 0) {

                return <Card 
                    key={item.id} 
                    item={item}  
                    handleClick={handleClick}
                    page='cart'
                ></Card>

            }

        })}

    </div>
    )
}

export default Cart;