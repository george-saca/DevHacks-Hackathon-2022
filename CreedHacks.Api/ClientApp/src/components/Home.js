import React, { useState, useEffect } from 'react';
import CartProduct from './CartProduct';
import { Badge, Drawer, Grid, LinearProgress } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Wrapper, StyledButton } from "./Home.styles"
import Cart from './Cart'
import Product from './Product';
import { useAppContext } from '../contexts/AppContext';
import { addToCart } from '../helpers/httpCaller';


export const Home = () => {
  let { cartItems, products, setCartItems } = useAppContext();
  let [cartUserItems, setCartUserItems] = useState(cartItems);

  let [cartOpen, setCartOpen] = useState(false);
  const getTotalItems = (items) => Array.isArray(items) ?
    items.reduce((acc, item) => acc + item.amount, 0) : 0;
  
  useEffect(() => {
    setCartUserItems(cartItems)
    }, [cartItems]);

  const handleAddToCart = async (clickedItem) => {
    await addToCart({
      id: clickedItem.id, 
      img: clickedItem.image, 
      price: clickedItem.price, 
      title: clickedItem.title,
      amount: 1});

    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
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
          cartItems={cartUserItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartUserItems)} color="error">
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
