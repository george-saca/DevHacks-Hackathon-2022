import authService from '../components/api-authorization/AuthorizeService'

export const getProducts = async () => 
{
    const token = await authService.getAccessToken();
    const response = await fetch('products', {
      headers: !token ? {} : { 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c` }
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