import React, { useContext, useEffect, useState } from 'react';
import { getProducts, getCart } from '../helpers/httpCaller';
import { useNavigate } from "react-router-dom";

const AppContext = React.createContext();
const AppContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('userId')) || 0);
    const [cartItems, setCartItems] = useState([]);
    let history = useNavigate();
    useEffect(() => {
        async function fetchData() {
            const resp = await getProducts();
            setProducts(resp);
        }
        fetchData();
    }, [])

    useEffect(() => {
        if(userId == 0)
            history("/authentication/login");
        else
        {
            async function fetchData() {
                const resp = await getCart(userId);
                setCartItems(resp);
            }
            fetchData();
        }
       
    }, [userId])

    useEffect(() => {
        if(userId == 0)
            history("/authentication/login");
        else
            localStorage.setItem('userId', JSON.stringify(userId));
    }, [userId])


    return (
        <AppContext.Provider
            value={{
                products,
                setProducts,
                userId,
                setUserId,
                setCartItems,
                cartItems
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
export const useAppContext = () => {
    const context = useContext(AppContext);
    return { ...context };
};
