import CarslHome from "./componentsH/carrosel";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./componentsH/productCard";
import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import SizeTable from "./componentsH/sizeTable";



function Home() {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        getProducts();
    }, [])

    const getProducts = () => {
        axios
        .get("https://apicatalogobeyou.up.railway.app/products")
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err))
    };    
    const [imgs, setImgs] = useState([]);
    useEffect(() =>{
        getCarrosel();
    }, []);
  
   const getCarrosel = () =>{
        axios
        .get("https://apicatalogobeyou.up.railway.app/carrossel")
        .then((res) => setImgs(res.data))
        .catch((err) => console.log(err));
    }; 
   
    return (
        <div id="body">
           
                       
                <Carousel className="d-flex" variant="dark" style={{ width:"100%" }}>                   
                    {imgs.map((img, key) => (
                        <Carousel.Item>
                            <CarslHome                               
                                image={img.urlImage}
                                name={img.name}
                                key={key} />
                        </Carousel.Item>                               
                     ))}                    
                </Carousel>                       
            

            <Container style={{justifyContent: "center"}}>
            <div id="products">
                {products.map((product, key) => (
                    <ProductCard 
                        name={product.name}
                        price={product.price}
                        image={product.frontImage}
                        description={product.description}
                        color={product.color}
                        size={product.size}
                        id={product._id}
                        key={key}
                    />

                ))}            
            </div>            
            </Container> 

            <Container className="d-flex" style={{justifyContent:"end"}}>
            <SizeTable />            
            </Container>           
        </div>
    )
};
  
export default Home;
  