import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function RgstrConsumer() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [adress, setAdress] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [size, setSize] = useState('');
    const navgate = useNavigate();
    
    
          
    const hundleSubmit = (event) =>{
        event.preventDefault();
        const inputConsumer = {
            name,
            lastName,
            phone,
            email,
            birthday,
            adress,
            postalCode,
            size
        };
        axios.post('https://catalogoprodby.herokuapp.com/clients', inputConsumer)
          .then(function (res) {
            alert(`Cadastrado efetuado com sucesso!`);
            navgate('/produtos');
            
          })
          .catch(function (err) {
            alert(`Desculpa houve um erro, certifique-se de todos os dados, tente novamente!`)
            console.error(err);
          });
    };
    return(
        <Form onSubmit={hundleSubmit}
        style={{width: "20rem", paddingTop: "15px", marginLeft: "2rem"}}>
            <div>
                <h1>Cadastro de Cliente</h1>
            </div>
      <Form.Group className="mb-1">
        <Form.Label>Nome:</Form.Label>
        <Form.Control type="text" placeholder="informe seu primeiro nome"
        onChange={(event) => setName(event.target.value)} />        
      </Form.Group>

      <Form.Group className="mb-1">
        <Form.Label>Sobrenome:</Form.Label>
        <Form.Control type="text" placeholder="Imforme seu sobrenome"
        onChange={(event) => setLastName(event.target.value)} />        
      </Form.Group>

      <Form.Group className="mb-1">
        <Form.Label>Whatsapp:</Form.Label>
        <Form.Control type="name" placeholder="(xx) x xxxx-xxxx"
        onChange={(event) => setPhone(event.target.value)} />        
      </Form.Group>

      <Form.Group className="mb-1">
        <Form.Label>Endereço:</Form.Label>
        <Form.Control type="name" placeholder="Rua, nº, bairro, complemento (lote, cond., apt., etc)"
        onChange={(event) => setAdress(event.target.value)} />        
      </Form.Group>

      <Form.Group className="mb-1">
        <Form.Label>CEP:</Form.Label>
        <Form.Control type="number" placeholder="xx.xxx-xxx"
        onChange={(event) => setPostalCode(event.target.value)} />        
      </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Label>Aniverssário:</Form.Label>
        <Form.Control type="text" placeholder="DD/MM" 
        onChange={(event) => setBirthday(event.target.value)}/>
      </Form.Group>         
      
      <Form.Group className="mb-3" >
        <Form.Label>Tamanho:</Form.Label>
        <Form.Control type="text" placeholder="P/M/G 38/40/42/44" 
        onChange={(event) => setSize(event.target.value)}/>
      </Form.Group>         
      
      <Form.Group className="mb-3" >
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="informeaquiseu@email.com" 
        onChange={(event) => setEmail(event.target.value)}/>
      </Form.Group>         
      
      <Button variant="primary" type="submit">
        Cadastrar
      </Button>
    </Form>
    )
}

export default RgstrConsumer;
