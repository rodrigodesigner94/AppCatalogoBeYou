import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import { Navigate } from 'react-router-dom';

function ProductCard({name, price, image, description, color, size, id}) {
  

  return (     
    <Card className="bg-ligth text-black" style={{width: "14rem", margin:"0.2rem"}}>
      <Card.Img src={image} alt={name} />
      <Card.ImgOverlay>
      
      
      
      <br/>
      <br/>
      <br/>      
        <Card.Title style={{textShadow: "0.8px 0.8px 1px white"}}>{name}</Card.Title>
        <Card.Subtitle className="text-black" style={{textShadow: "1.5px 1.5px 1px white"}}>
          {price}</Card.Subtitle>
        {/* <Card.Text><strong>Descrição:</strong> {description}.</Card.Text>  */}
        <Card.Text style={{textShadow: "1.5px 1.5px 1px white"}}><strong>Cor:</strong> {color}</Card.Text>
        <Card.Text style={{textShadow: "1.5px 1.5px 1px white"}}><strong>Tamanho:</strong> {size}</Card.Text>
        <Button style={{opacity:"60%"}} variant="primary">Quero esse</Button>       
      </Card.ImgOverlay>
    </Card>
    // <Card style={{ width: '18rem', margin: "0.5rem"}}>
    //   <Card.Body>        
    //       <Figure>
    //         <Figure.Image
    //           width={350}
    //           height={350}
    //           alt={name}
    //           src={image}              
    //         />      
    //       </Figure> 
                
    //     <Card.Title>{name}</Card.Title>
    //     <Card.Subtitle className="mb-2 text-muted">{price}</Card.Subtitle>
        
    //     <Card.Text>
    //     <strong>Descrição:</strong> {description}
    //     </Card.Text>
    //     <Card.Text>
    //     <strong>Cor:</strong> {color}
    //     </Card.Text>
    //     <Card.Text>
    //       <strong>Tamanho:</strong> {size}
    //     </Card.Text>

    //     <Button variant="primary">+ Detalhes</Button>
    //   </Card.Body>
    // </Card>
  );
}

export default ProductCard;