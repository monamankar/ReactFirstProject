import  Card  from "react-bootstrap/Card";

function Cards( props ){
    const name = props.data.location.name;
    const temp = props.data.current.temp_c;
    return  <Card
    bg={"success"}
    key={"1"}
    text={'dark'}
    style={{ width: '18rem' }}
    className="mb-2"
    >
    <Card.Header>{temp}</Card.Header>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
}
export default Cards;