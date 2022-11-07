import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import ProductCard from "./productCard";

function ProductsList () {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        getProducts();
    }, [])

    const getProducts = () => {
        axios
        .get("https://catalogoprodby.herokuapp.com/product")
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err))
    }; 
    return(
        <Container style={{marginRight: "2rem", marginLeft: "2rem"}}>
            <div id="products">
                {products.map((product, key) => (
                    <ProductCard 
                        name={product.name}
                        price={product.price}
                        iamge={product.imageFront}
                        description={product.description}
                        color={product.color}
                        size={product.size}
                        id={product._id}
                        key={key}
                    />

                ))}            
            </div>            
            </Container>
    )

}
export default ProductsList;