import { useEffect } from "react";
import { useState } from "react";
import classes from "../styles/Card.module.css";


function Card() {
    const [data, setData] = useState({});

    useEffect(() => {

    async function getProduct() {

      try {        

        const response = await fetch(`https://fakestoreapi.com/products/1`);

        const productData = await response.json();

        setData(productData);

        console.log(productData);
        
        
      } catch (error) {
        console.error(error);
      }

    }

    getProduct();

  }, [])

    return(
        <div className={classes.container}>

            <div className={classes.imgDiv}>
              <img className={classes.myImg} src={data.image}></img>
            </div>

            <div className={classes.dataDiv}>
              <div>{data.title}</div>
              <div>${data.price}</div>
            </div>
        </div>
    )
}

export default Card;