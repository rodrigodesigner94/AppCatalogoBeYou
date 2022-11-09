import Card from 'react-bootstrap/Card';

function ComsumerList ({name, lastName, birthday, size, phone, adress, postalCode, email}) {
    
    return(
        <Card style={{ width: '18rem', fontSize:"0.8rem" }}>
      <Card.Body >
        <Card.Title ><strong>Cliente: </strong>{name} {lastName}</Card.Title>
        <Card.Subtitle  className="mb-2 text-muted"><strong>Aniversário: </strong>{birthday}</Card.Subtitle>
        <Card.Text style={{margin: '1px'}}><strong>Tamanho: </strong>{size}</Card.Text>
        <Card.Text style={{margin: '1px'}}><strong >Phone: </strong>{phone}</Card.Text>
        <Card.Text style={{margin: '1px'}}><strong>Endereço: </strong>{adress}</Card.Text>
        <Card.Text style={{margin: '1px'}}><strong>CEP: </strong>{postalCode}</Card.Text>
        <Card.Text style={{margin: '1px'}}><strong>Email: </strong>{email}</Card.Text>                       
        <Card.Link style={{margin: '1px'}} href="#">Carrinho</Card.Link>        
      </Card.Body>
    </Card>

    )
}
export default ComsumerList;