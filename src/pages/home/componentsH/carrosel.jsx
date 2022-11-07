import Figure from 'react-bootstrap/Figure';


function CarslHome({image, name}) {
  
  
  return (                 
      <Figure style={{display: "flex", alingItens: "center",justifyContent: "center", marginTop: "1rem"}}>
        <Figure.Image       
          width={"390rem"}
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