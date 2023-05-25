import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import classes from "./styles.module.css"

const Header = () => {
    return (
        <Nav activeKey="/" className="justify-contnent-between container">
            <Nav.Item className={classes.logo}>
                <Link>Book-store</Link>
            </Nav.Item>
            <Nav.Item className={classes.cart}>
                <i class="fa-solid fa-cart-shopping"></i>
            </Nav.Item>
        </Nav>
    )
}

export default Header;