import Card from "./Card";
import classes from "../styles/Shop.module.css";

function Shop({ items, handleClick }) {
    return(
    <div className={classes.container}>

        {items.map((item) => {

            console.log(item);
            
            return <Card 
                key={item.id} 
                item={item}  
                handleClick={handleClick}
                page='shop'
            ></Card>

        })}

    </div>
    )
}

export default Shop;