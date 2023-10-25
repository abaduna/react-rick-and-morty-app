import  {Card,Button} from "react-bootstrap"
import PropTypes from "prop-types"
const Character = ({character}) => {
  return (
    <>

<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
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


