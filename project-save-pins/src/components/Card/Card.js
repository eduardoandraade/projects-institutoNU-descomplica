import { Badge } from 'react-bootstrap';
import CardBS from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Card({ id, image, title, quantity, onClick}) {

  return (
    <CardBS className="bg-light text-dark">
      <CardBS.Img src={image} alt="Card image" />
      <CardBS.ImgOverlay>
        
        <Button variant='primary' onClick={() => onClick(id)}>
            Salvar <Badge bg='secondary'> {quantity} </Badge>
        </Button>
      </CardBS.ImgOverlay>
      <CardBS.Body>
        <CardBS.Title>
          {title}
        </CardBS.Title>
      </CardBS.Body>
    </CardBS>
  );
}

export default Card;