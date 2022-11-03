import Figure from 'react-bootstrap/Figure';

function ImagsCarrosel({image, name}) {
  return (
    <Figure>
      <Figure.Image
        width={400}
        // height={180}
        alt={name}
        src={image}
      />      
    </Figure>
  );
}

export default ImagsCarrosel;