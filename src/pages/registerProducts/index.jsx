import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';


function RgstrProdcts() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [frontImage, setFrontImage] = useState('');
    const [backImage, setBackImage] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [quantity, setquantity] = useState(0);
    
    const hundleSubmit = (event) =>{
        event.preventDefault();
        const inputProduct = {
            name,
            price,
            frontImage,
            backImage,
            description,
            color,
            size,
            quantity
        };
        axios.post('https://catalogoprodby.herokuapp.com/product', inputProduct)
          .then(function (res) {
            console.log(res);
          })
          .catch(function (err) {
            console.error(err);
          });
    };


    return(          
        <Form onSubmit={hundleSubmit}
        style={{width: "20rem", paddingTop: "15px", marginLeft: "2rem"}}>
            <div>
                <h1>Cadastrar Novo Produto</h1>
            </div>
      <Form.Group className="mb-1">
        <Form.Label>Nome:</Form.Label>
        <Form.Control type="name" placeholder="Nome do Produto"
        onChange={(event) => setName(event.target.value)} />        
      </Form.Group>

      <Form.Group className="mb-2" >
        <Form.Label>Preço:</Form.Label>
        <Form.Control type="price" placeholder="999,99"
        onChange={(event) => setPrice(event.target.value)} />
      </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Label>Foto frente:</Form.Label>
        <Form.Control type="text" placeholder="Informe a url da imagem" 
        onChange={(event) => setFrontImage(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-4" >
        <Form.Label>Foto costa:</Form.Label>
        <Form.Control type="text" placeholder="Informe a url da imagem"
        onChange={(event) => setBackImage(event.target.value)} />
      </Form.Group>

      <Form.Group className="mb-5" >
        <Form.Label>Description:</Form.Label>
        <Form.Control style={{higth: "7rem"}} type="text" placeholder="Informes as cores"
        onChange={(event) => setDescription(event.target.value)} />
      </Form.Group>

      <Form.Group className="mb-6" >
        <Form.Label>Cores:</Form.Label>
        <Form.Control type="text" placeholder="Informes as cores" 
        onChange={(event) => setColor(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-7">
        <Form.Label>Tamanho:</Form.Label>
        <Form.Select onChange={(event) => setSize(event.target.value)}>
          <option>Selecione o tamanho</option>
          <option>Único</option>
          <option>G</option>        
        </Form.Select>

        <Form.Group className="mb-6" >
        <Form.Label>Quantidade:</Form.Label>
        <Form.Control type="number" placeholder="Informes a quantidade" 
        onChange={(event) => setquantity(event.target.value)}/>
      </Form.Group>

      </Form.Group>           
      <Button variant="primary" type="submit">
        Cadastrar
      </Button>
    </Form>
    

    )
};
export default RgstrProdcts;