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