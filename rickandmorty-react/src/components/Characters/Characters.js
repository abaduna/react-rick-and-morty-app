import  PropTypes   from "prop-types"
import  {Row,Col} from "react-bootstrap"
import Character from "../Character/Character"

const Characters = ({characters }) => {
     console.log(`%c ${characters } `, 'color:red')
  return (
    <div>
        <Row className="justify-content-center">
             <Col md="4" sm="12">

            {characters?.length > 0 && 
            characters.map((character)=>(<Character {...character} ></Character> ))}

             </Col>   
        </Row>
    </div>
  )

} 
Characters.propTypes  = {
    Characters : PropTypes .arrayOf(
            PropTypes .shape({
                created: PropTypes .string,
                gender: PropTypes.string,
                id: PropTypes.number,
                name:PropTypes.string,
                species:PropTypes.string,
                status:PropTypes.string

            }).isRequired
        )
    }


export default Characters

