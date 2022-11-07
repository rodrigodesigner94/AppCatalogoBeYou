import Figure from 'react-bootstrap/Figure';


function CarslHome({image, name}) {
  
  
  return (                 
      <Figure style={{display: "flex", alingItens: "center", marginLeft:"22rem", marginRight: "22rem", marginTop: "1rem"}}>
        <Figure.Image       
          width={400}
          // height={180}
          alt={name}
          src={image}
          style={{borderRadius: "2%"}}
        />
        <Figure.Caption className="text-black" style={{position: "absolute", marginLeft: "1rem", textShadow: "2px 2px 1.25px white",
      top:"3rem"}}>
        <h4 >{name}</h4>
        </Figure.Caption>        
      </Figure>      
  );
}

export default CarslHome;