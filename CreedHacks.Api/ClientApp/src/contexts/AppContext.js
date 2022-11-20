import React, { useContext, useEffect, useState } from 'react';
import { getProducts } from '../helpers/httpCaller';


const AppContext = React.createContext();
const AppContextProvider = ({ children }) => {
    const [products, setProducts] = useState([{ id: "cartitem1", title: "some title", description: "some description", amount: 2, price: 12, image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }])
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('userId')) || 12345);

    useEffect(() => {
        async function fetchData() {
            const resp = await getProducts();
            setProducts(resp);
        }
        fetchData();
    }, [])
    
    useEffect(() => {
        localStorage.setItem('userId', JSON.stringify(userId));
    }, [userId])


    return (
        <AppContext.Provider
            value={{
                products,
                setProducts,
                userId,
                setUserId
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
