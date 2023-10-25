import  {Card,Button} from "react-bootstrap"
import PropTypes from "prop-types"
const Character = ({id,name,image,status,species,created}) => {

  return (
    <>

<Card style={{ width: '18rem' }} className="charcter_separation" key={id}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
       Especie : {species}  <br/> esta vivo: {status} <br/> fue creado {created}
    </Card.Text>
    <Button variant="primary">Go {id} </Button>
    </Card.Body>
</Card>    
    </>
                
  )
}
Character.propTypes = {
    character: PropTypes.shape({
            created: PropTypes.string,
            gender: PropTypes.string,
            id: PropTypes.number,
            name:PropTypes.string,
            species:PropTypes.string,
            status:PropTypes.string

        }).isRequired
    
}

export default Character


