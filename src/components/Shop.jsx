import Card from "./Card";
import classes from "../styles/Shop.module.css";

let productIds = [];

for (let i = 1; i <= 20; i++) {
    productIds.push(i);
}

function Shop({ handleClick }) {
    return(
    <div className={classes.container}>

        {productIds.map((productId) => {
            return <Card 
                key={productId} 
                id={productId}  
                handleClick={handleClick}
            ></Card>
        })}

    </div>
    )
}

export default Shop;