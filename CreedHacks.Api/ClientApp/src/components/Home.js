import React, { useState, useEffect } from 'react';
import CartProduct from './CartProduct';
import { Badge, Drawer, Grid, LinearProgress } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Wrapper, StyledButton } from "./Home.styles"
import Cart from './Cart'
import Product from './Product';
import { useAppContext } from '../contexts/AppContext';
import { addToCart, removeFromCart } from '../helpers/httpCaller';


export const Home = () => {
  let { cartItems, products, setCartItems, userId } = useAppContext();
  // let [cartUserItems, setCartUserItems] = useState(cartItems);

  let [cartOpen, setCartOpen] = useState(false);
  const getTotalItems = (items) => Array.isArray(items) ?
    items.reduce((acc, item) => acc + item.amount, 0) : 0;

  // useEffect(() => {
  //   setCartUserItems(cartItems)
  //   }, [cartItems]);

  const handleAddToCart = async (clickedItem) => {
    addToCart({
      userId: userId,
      productId: clickedItem.id ?? clickedItem.productId,
      img: clickedItem.image,
      price: clickedItem.price,
      title: clickedItem.title,
      amount: 1
    }).then((data)=>{
      setCartItems(data);
    });
  };

  const handleRemoveFromCart = async (clickedItem) => {
    await removeFromCart({
      userId: userId,
      productId: clickedItem.id,
      amount: 1
    });
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === clickedItem.id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [])
    );
  };

  return (
    <div>
      <h1>Products</h1>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCart />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {products?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Product item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
