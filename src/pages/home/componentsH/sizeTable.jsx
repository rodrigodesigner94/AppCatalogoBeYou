import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function SizeTable () {
    return(
    <Card  style={{ width: '18rem', alignItems: "center" }}>
        <h6>Tabela de tamanhos</h6>
      <ListGroup variant="flush">
        <ListGroup.Item>Tamanho Único pode vestir do 36 ao 42 ou P e M</ListGroup.Item>
        <ListGroup.Item>Tamanho G pode vestir do 42 ao 44</ListGroup.Item>
        
      </ListGroup>
    </Card>)
}
export default SizeTable;