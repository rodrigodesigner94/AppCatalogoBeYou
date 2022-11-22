import axios from "axios";
import { useEffect, useState } from "react";
import ComsumerList from "./consumerList";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Products from "./productList";

function Admin(){
    const [consumers, setConsumers] = useState([]);
    useEffect(() => {
        getConsumers()
    }, [])
    const getConsumers = () => {
        axios
        .get("https://apicatalogobeyou.up.railway.app/clients")
        .then((res) => setConsumers(res.data))
        .catch((err) => console.log(err))
    };

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

    return(
        <div>
            <Container style={{margin: "1rem", display: "flex", width: "100%"}} >        
            <Card style={{width: "15rem"}}>
            <Card.Body>
                <h5>Painel de produtos</h5>
                <Link to="/cadastrarproduto">Cadastrar Novo Produto</Link>
                <Link to="/cadastrarfoto"> inserir Fotos ao Carrosel</Link>
            </Card.Body>
            </Card>
        </Container>

        <Container style={{justifyContent: "center"}}>
        {consumers.map((consumer, key) => (
            <ComsumerList
                name={consumer.name}
                lastName={consumer.lastName}
                size={consumer.size}
                birthday={consumer.birthday}
                phone={consumer.phone}
                email={consumer.email}
                adress={consumer.adress}
                postalCode={consumer.postalCode}                
                key={key}
                 />
        ))}
        </Container>

        <Container className="d-flex" style={{justifyContent: "center", flexWrap:"wrap" }}>                        
                {products.map((product, key) => (
                    <Products 
                        name={product.name}
                        price={product.price}
                        image={product.frontImage}
                        bImage={product.backImage}
                        description={product.description}
                        color={product.color}
                        size={product.size}
                        id={product._id}                   
                        quantity={product.quantity}
                        key={key}
                    />
                ))}            
                        
            </Container>       
        
        </div>
    )
}
export default Admin;