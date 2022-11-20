import authService from '../components/api-authorization/AuthorizeService'

export const getProducts = async () => 
{
    const token = await authService.getAccessToken();
    const response = await fetch('products', {
        headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
      });
    const data = await response.json();
    return data;
}

export const addToCart = async (cartItem) => 
{
    const token = await authService.getAccessToken();
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cartItem)
    };
    if(token) 
        requestOptions.headers = {...requestOptions.headers, 'Authorization': `Bearer ${token}`};
        
    const response = await fetch(`api/addToCart`, requestOptions);
    const data = await response.json();
    return data;
}

const getCart = async (userId) => 
{
    const token = await authService.getAccessToken();
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cartItem)
    };
    if(token) 
        requestOptions.headers = {...requestOptions.headers, 'Authorization': `Bearer ${token}`};
        
    const response = await fetch(`api/addToCart`, requestOptions);
    const data = await response.json();
    return data;
}