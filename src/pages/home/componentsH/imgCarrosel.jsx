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
      <Figure.Caption className="text-black" style={{position: "relative", marginTop:"-32rem",
      marginBottom: "33rem", marginLeft: "1rem", textShadow: "2px 2px 1.25px white"}}>
       <h4 >{name}</h4>
      </Figure.Caption>        
    </Figure>
  );
}

export default ImagsCarrosel;