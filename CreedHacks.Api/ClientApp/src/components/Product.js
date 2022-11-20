import { Button } from "@material-ui/core";
import { Wrapper } from "./Product.styles.js";

const Product = ({ item, handleAddToCart }) => {
  return (
    <Wrapper>
      <img style={{maxWidth:"100", maxHeight:"150"}} src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </Wrapper>
  );
};

export default Product;
