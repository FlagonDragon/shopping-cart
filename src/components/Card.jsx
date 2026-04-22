import { useEffect } from "react";
import { useState } from "react";
// import classes from "../styles/Card.module.css";


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
        <div>
            <div>{data.title}</div>
            <div>Img</div>
            <div>Price: {data.price}</div>
        </div>
    )
}

export default Card;