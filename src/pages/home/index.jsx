import CarslHome from "./componentsH/carrosel";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./componentsH/productCard";
import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';


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
    const [imgs, setImgs] = useState([]);
    useEffect(() =>{
        getCarrosel();
    }, []);
  
   const getCarrosel = () =>{
        axios
        .get("https://catalogoprodby.herokuapp.com/carrossel")
        .then((res) => setImgs(res.data))
        .catch((err) => console.log(err));
    }; 
   
    return (
        <div id="body">
            <Container style={{ backgroundColor:"#fbe2ea"}}>            
                <Carousel>                   
                    {imgs.map((img, key) => (
                        <Carousel.Item>
                            <CarslHome 
                                image={img.urlImage}
                                name={img.name}
                                key={key} />
                        </Carousel.Item>                               
                     ))}                    
                </Carousel>                       
            </Container>

            <Container style={{marginRight: "2rem", marginLeft: "2rem"}}>
            <div id="products">
                {products.map((product, key) => (
                    <ProductCard 
                        name={product.name}
                        price={product.price}
                        image={product.imageFront}
                        description={product.description}
                        color={product.color}
                        size={product.size}
                        id={product._id}
                        key={key}
                    />

                ))}            
            </div>            
            </Container>            
        </div>
    )
};
  
export default Home;
  