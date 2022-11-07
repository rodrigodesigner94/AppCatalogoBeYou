import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';


function RgstrCarrosel() {
    const [name, setName] = useState('');
    const [urlImage, setUrlImage] = useState('');
    
    
    const hundleSubmit = (event) =>{
        event.preventDefault();
        const inputImage = {
            name,
            urlImage
        };
        axios.post('https://catalogoprodby.herokuapp.com/carrossel', inputImage)
          .then(function (res) {
            alert(`Imagem ${name} cadastrado com sucesso!`);
            window.location.reload();
          })
          .catch(function (err) {
            alert(`Desculpa houve um erro, certtifique-se de todos os dados, tente novamente!`)
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
      
      <Form.Group className="mb-3" >
        <Form.Label>Foto:</Form.Label>
        <Form.Control type="text" placeholder="Informe a url da imagem" 
        onChange={(event) => setUrlImage(event.target.value)}/>
      </Form.Group>         
      
      <Button variant="primary" type="submit">
        Cadastrar
      </Button>
    </Form>
    

    )
};
export default RgstrCarrosel;