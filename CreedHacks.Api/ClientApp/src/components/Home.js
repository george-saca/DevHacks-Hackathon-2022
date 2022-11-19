import React, { useState, useEffect } from 'react';
import CartProduct from './CartProduct';
import { Badge, Drawer, Grid, LinearProgress } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Wrapper, StyledButton } from "./Home.styles"
import Cart from './Cart'
import { useQuery } from "react-query";
import Product from './Product';
import {getProducts} from '../helpers/httpCaller';

export const Home = () => {
  const [products, setProducts] = useState([]);
  //const [data, setData] = useState([]);

  useEffect(() => {
    async function getProds() {
      const resp = await getProducts();
      setProducts(resp);
  }
    getProds()
  });

  let [cartItems, setCartItems] = useState([{ id: "cartitem1", title: "some title", description: "some description", amount: 2, price: 12, image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }]);
  let [cartOpen, setCartOpen] = useState(false);
  const getTotalItems = (items) => Array.isArray(items) ?
    items.reduce((acc, item) => acc + item.amount, 0) : 0;

  // const getProducts = async () =>
  //   await (await fetch("https://fakestoreapi.com/products")).json();

  const handleAddToCart = (clickedItem) => {
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

  //if (isLoading) return <LinearProgress />;
  //if (error) return <div>Something went wrong</div>;

  return (
    <div>
      <h1>Hello, world!</h1>
      <div>
        {
          products.map((product,i) => 
             
              <div>{product.name}</div>
            )
        }
      </div>
      <p>Welcome to your new single-page application, built with:</p>
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
