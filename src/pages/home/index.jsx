import NavTop from "../componentsG/Nav";
import CarslHome from "./componentsH/carrosel";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./componentsH/productCard";
import { Container } from "react-bootstrap";

function Home() {
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
    console.log(products)
   
    return (
        <div id="body">
                    
            <CarslHome />
            <Container>
            <div id="products">
                {products.map((product, key) => (
                    <ProductCard 
                        name={product.name}
                        price={product.price}
                        iamge={product.frontImage}
                        description={product.description}
                        color={product.color}
                        size={product.size}
                        key={key}
                    />

                ))}            
            </div>            
            </Container>            
        </div>
    )
};
  
export default Home;
  