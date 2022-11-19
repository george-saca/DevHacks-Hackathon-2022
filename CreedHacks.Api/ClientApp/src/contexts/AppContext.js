import React, { useContext, useEffect, useState } from 'react';
import { getProducts } from '../helpers/httpCaller';


const AppContext = React.createContext();
const AppContextProvider = ({ children }) => {
    const [products, setProducts] = useState([{ id: "cartitem1", title: "some title", description: "some description", amount: 2, price: 12, image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }])

    useEffect(() => {
        async function fetchData() {
            const resp = await getProducts();
            setProducts(resp);
        }
        fetchData();
    }, [])


    return (
        <AppContext.Provider
            value={{
                products,
                setProducts,
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
