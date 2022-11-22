import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { Container } from 'react-bootstrap';


function ProductCard({name, price, image, description, color, size, bImage}) {  
  const [open, setOpen] = useState(false);


  return (     
    <Card onClick={() => setOpen(!open)}
          aria-controls="colapseText"
          aria-expanded={open}
          className="bg-ligth text-black" style={{width: "10rem", margin:"0.2rem"}}>
      <Card.Img src={image} alt={name} />
      <Card.ImgOverlay>                         
        <Card.Title style={{textShadow: "0.8px 0.8px 1px white"}}>{name}</Card.Title>
        <Card.Subtitle className="text-black" style={{textShadow: "1.5px 1.5px 1px white"}}>
          {price}</Card.Subtitle>
          <Card.Text style={{textShadow: "1.5px 1.5px 1px white"}}><strong>Tamanho:</strong> {size}</Card.Text>        
        
        <Collapse in={open} dimension="width" style={{marginLeft:"-1.8rem", marginTop:"-1rem"}}>
          <div id="colapseText" >
            <Card body style={{ width: '13.5rem',zIndex: "1" }}>
              <Container className='d-flex' style={{justifyContent:"end", padding: "0"}}>
                <img src="https://cdn-icons-png.flaticon.com/512/88/88039.png?w=740&t=st=1669119726~exp=1669120326~hmac=38176d558c65f8ebdf830f2efb86e0461701cf27c10a25d06a4147017aea54c8" height={"12rem"} /> 
                </Container>
              <Card.Text style={{textShadow: "1.5px 1.5px 1px white"}}><strong>Cor:</strong> {color}</Card.Text>
              <Card.Text style={{textShadow: "1.5px 1.5px 1px white"}}><strong>descrição:</strong> {description}</Card.Text>
              <Card.Img style={{width: "90%"}} src={bImage} alt="costas" />
            </Card>
          </div>
        </Collapse>
      
        {/* <Button style={{opacity:"60%"}} variant="primary">Quero esse</Button>        */}
      </Card.ImgOverlay>      
      
    
    </Card>
    
  );
}

export default ProductCard;