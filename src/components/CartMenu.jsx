import classes from "../styles/CartMenu.module.css";

function CartMenu({ item , handleClick }) {

    return(
        <div className={classes.container}>

           <div>In cart: </div>

           <div className={classes.btnsDiv}>
                <button 
                    className={classes.btnLeft}
                    onClick={() => {
                        handleClick(item.id, 'substract');
                    }}
                >-</button> 
                <div 
                    className={classes.nDiv}
                >{item.n}</div>
                <button 
                    className={classes.btnRight}
                    onClick={() => {
                        handleClick(item.id, 'add');
                    }}
                >+</button>
                <button 
                    className={classes.btnDel}
                    onClick={() => {
                        handleClick(item.id, 'delete');
                    }}
                >x</button> 
            </div>

        </div>
    )
}

export default CartMenu;