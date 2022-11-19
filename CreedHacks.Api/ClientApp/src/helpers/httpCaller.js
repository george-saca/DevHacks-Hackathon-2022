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

export const addToCart = async (id, src, price, title, amount) => 
{
    const token = await authService.getAccessToken();
    const response = await fetch(`addToCart?id="${id}"&image="${src}"&price="${price}"&title="${title}"&amount="${amount}"`, {
      headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
    });
    const data = await response.json();
    return data;
}