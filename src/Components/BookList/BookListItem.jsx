import classes from "./styles.module.css"
import { Button } from "react-bootstrap"


const BookListItem = ({ book }) => {
    const { id, title, author, price, imgUrl } = book;

    const onAddToCart = () => console.log("clicked", id);
    return (

        <li className={classes.list_item}>
            <div className={classes.list_item_cover}>
                <img src={imgUrl} alt="" />
            </div>
            <div className={classes.list_item_details}>
                <h4>{title}</h4>
                <div>{author}</div>
                <div className={classes.list_item_item_price}>{price}$</div>
                <Button onClick={onAddToCart}>Add to cart</Button>
            </div>
        </li>
    )

}

export default BookListItem