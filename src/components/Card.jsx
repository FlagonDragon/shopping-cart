import { useEffect } from "react";
import { useState } from "react";
import classes from "../styles/Card.module.css";
import AddToCart from "./AddToCart";
import CartMenu from "./CartMenu";


function Card({ item , handleClick, page}) {
    const [data, setData] = useState({});

    useEffect(() => {

    async function getProduct() {

      try {        

        const response = await fetch(`https://fakestoreapi.com/products/${item.id}`);

        const productData = await response.json();

        setData(productData);

        // console.log(productData);
        
      } catch (error) {
        console.error(error);
      }

    }

    getProduct();

  }, [item])

    return(
        <div className={classes.container}>

            <div className={classes.topDiv}>
              <img className={classes.myImg} src={data.image}></img>
            </div>

            <div className={classes.botDiv}>

              <div className={classes.titleDiv}>{data.title}</div>


              <div className={classes.cartDiv}>

                <div className={classes.priceDiv}>${data.price}</div>

                { page == 'shop' ? (
                  <AddToCart 
                    item={item}
                    handleClick={handleClick}
                  ></AddToCart>
                ) : (
                  <CartMenu
                    item={item}
                  ></CartMenu>
                )}
                
              </div>


            </div>

        </div>
    )
}

export default Card;