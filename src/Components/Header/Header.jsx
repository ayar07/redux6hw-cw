import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./styles.module.css";
import { useDispatch } from "react-redux";
import { setisOpen } from "../../store/reducers/cartSlice";

const Header = () => {
  const dispatch = useDispatch();

  const onCartClick = () => dispatch(setisOpen(true));

  return (
    <Nav activeKey="/" className="justify-content-between container">
      <Nav.Item className={classes.logo}>
        <Link>Book-store</Link>
      </Nav.Item>
      <Nav.Item className={classes.cart} onClick={onCartClick}>
        <i className="fa-solid fa-cart-shopping"></i>
      </Nav.Item>
    </Nav>
  );
};

export default Header;