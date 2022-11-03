import Carousel from 'react-bootstrap/Carousel';
import ImagsCarrosel from './imgCarrosel';
import axios from 'axios';
import { useEffect, useState } from 'react';


function CarslHome() {
  const [imgs, setImgs] = useState([]);
  useEffect(() =>{
      getCarrosel();
  }, []);

 const getCarrosel = () =>{
      axios
      .get("https://catalogoprodby.herokuapp.com/carrossel")
      .then((res) => setImgs(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <Carousel  variant="dark">
      <Carousel.Item>     
        {imgs.map((img, key) => (
          <ImagsCarrosel 
          image={img.urlImage}
          name={img.name}
          key={key} />
        ))}            
      </Carousel.Item>      
    </Carousel>
  );
}

export default CarslHome;