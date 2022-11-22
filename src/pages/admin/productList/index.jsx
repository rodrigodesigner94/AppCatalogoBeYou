import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';


function Products({name, price, image, bImage, description, color, size, id, quantity}){
const [open, setOpen] = useState(false);
// const [nameUp, setNameUp] = useState('');
// const [priceUp, setPriceUp] = useState('');
// const [frontImageUp, setFrontImageUp] = useState('');
// const [backImageUp, setBackImageUp] = useState('');
// const [descriptionUp, setDescriptionUp] = useState('');
// const [colorUp, setColorUp] = useState('');
// const [sizeUp, setSizeUp] = useState('');
// const [quantityUp, setQuantityUp] = useState(0);

    const hundleDelete = () =>{    
        
       const decision = confirm(`Deseja apagar o Produto ${name}?`)
        if(decision === true){
        axios
        .delete(`https://apicatalogobeyou.up.railway.app/products/${id}`)
          .then(function (res) {
            alert(`Produto deletado com sucesso!`);
            window.location.reload();
          })
          .catch(function (err) {
            alert(`Desculpa houve um erro, tente novamente!`)
            console.error(err);
          });
        } else{
            alert(`Solicitação cancelada!`)

        }
    };
    
    // const hundleSubmit = (event) =>{
    //     event.preventDefault();
    //     const inputProduct = {           
    //         nameUp,
    //         priceUp,
    //         frontImageUp,
    //         backImageUp,
    //         descriptionUp,
    //         colorUp,
    //         sizeUp,
    //         quantityUp
    //     };
    //     axios
    //     .patch(`https://apicatalogobeyou.up.railway.app/products/${id}`, inputProduct)
    //       .then(function (res) {
    //         alert(`Produto ${name} atualizado com sucesso!`);
    //         window.location.reload();
    //       })
    //       .catch(function (err) {
    //         alert(`Desculpa houve um erro, tente novamente!`)
    //         console.error(err);
    //       });
    // };
        
    
    

        
    return(
<Card className="bg-ligth text-black" style={{width: "24rem", margin:"0.5rem"}}>
      <Container className='d-flex' style={{margin: "0.5rem"}} >
        <Card.Img style={{width: "10rem"}} src={image} alt={name} />
        <Card.Img style={{width: "10rem"}} src={bImage} alt="costas" />
      </Container>
      <Container>                         
        <Card.Title style={{textShadow: "0.8px 0.8px 1px white"}}>{name}</Card.Title>
        <Card.Subtitle className="text-black" style={{textShadow: "1.5px 1.5px 1px white"}}>
          {price}</Card.Subtitle>
          <Card.Text style={{textShadow: "1.5px 1.5px 1px white"}}><strong>Cor:</strong> {color}</Card.Text>
        <Card.Text style={{textShadow: "1.5px 1.5px 1px white"}}><strong>Tamanho:</strong> {size}</Card.Text>
        <Card.Text style={{textShadow: "1.5px 1.5px 1px white"}}><strong>descrição:</strong> {description}</Card.Text>
        <Card.Text style={{textShadow: "1.5px 1.5px 1px white"}}><strong>quantidade:</strong> {quantity}</Card.Text>
        
          <Container className='d-flex' style={{marginBottom: "1rem", justifyContent:'space-around'}}>
               
            <Button  variant="primary" onClick={() => hundleDelete()} >Apagar</Button>       
            {/* <Button  variant="primary" onClick={() => setOpen(!open)}
                    aria-controls="colapseText"
                    aria-expanded={open}
                    className="bg-ligth text-black" style={{width: "10rem", margin:"0.5rem"}}
          >Editar</Button>        */}
          </Container>
      
           {/* <div>
                <Collapse in={open} dimension="width">
                    <div id="colapseText" >
                        <Card body style={{ width: '15rem',zIndex: "1" }}>
                        
                        <Form onSubmit={hundleSubmit}
                                style={{width: "20rem", paddingTop: "15px", marginLeft: "2rem"}}>
                                    <div>
                                        <h1>Cadastrar Novo Produto</h1>
                                    </div>
                            <Form.Group className="mb-1">
                                <Form.Label>Nome:</Form.Label>
                                <Form.Control type="name" placeholder={name}
                                onChange={(event) => setNameUp(event.target.value)} />        
                            </Form.Group>

                            <Form.Group className="mb-2" >
                                <Form.Label>Preço:</Form.Label>
                                <Form.Control type="price" placeholder={price}
                                onChange={(event) => setPriceUp(event.target.value)} />
                            </Form.Group>
                            
                            <Form.Group className="mb-3" >
                                <Form.Label>Foto frente:</Form.Label>
                                <Form.Control type="text" placeholder={image} 
                                onChange={(event) => setFrontImageUp(event.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-4" >
                                <Form.Label>Foto costa:</Form.Label>
                                <Form.Control type="text" placeholder={bImage}
                                onChange={(event) => setBackImageUp(event.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-5" >
                                <Form.Label>Description:</Form.Label>
                                <Form.Control style={{higth: "7rem"}} type="text" placeholder={description}
                                onChange={(event) => setDescriptionUp(event.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-6" >
                                <Form.Label>Cores:</Form.Label>
                                <Form.Control type="text" placeholder={color} 
                                onChange={(event) => setColorUp(event.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-7">
                                <Form.Label>Tamanho:</Form.Label>
                                <Form.Select onChange={(event) => setSizeUp(event.target.value)}>
                                <option>Selecione o tamanho</option>
                                <option>Único</option>
                                <option>G</option>        
                                </Form.Select>

                                <Form.Group className="mb-6" >
                                <Form.Label>Quantidade:</Form.Label>
                                <Form.Control type="number" placeholder={quantity} 
                                onChange={(event) => setQuantityUp(event.target.value)}/>
                            </Form.Group>

                            </Form.Group>           
                            <Button variant="primary" type="submit">
                                Atualizar
                            </Button>
                        </Form>
                        
                        </Card>
                    </div>
                </Collapse>
         </div> */}
        </Container>    
    
</Card>
    )
}
export default Products;