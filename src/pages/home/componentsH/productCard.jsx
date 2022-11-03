import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';

function ProductCard({image, name, price, description, color, size}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <div style={{display: "flex", alignItems: "center"}}>
          <Figure>
            <Figure.Image
              width={170}
              height={180}
              alt={name}
              src={image}
            />      
          </Figure>
    </div>    
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{price}</Card.Subtitle>
        
        <Card.Text>
        <strong>Descrição:</strong> {description}
        </Card.Text>
        <Card.Text>
        <strong>Cor:</strong> {color}
        </Card.Text>
        <Card.Text>
          <strong>Tamanho:</strong> {size}
        </Card.Text>

        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;