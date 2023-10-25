import  PropTypes   from "prop-types"
import  {Row,Col} from "react-bootstrap"
import Character from "../Character/Character"

const Characters = ({characters}) => {
  return (
    <div>
        <Row className="justify-content-center">
             <Col md="4" sm="12">

            {characters?.length > 0 && 
            characters.map((character)=>{<Character character={character} ></Character> })}

             </Col>   
        </Row>
    </div>
  )

} 
   Characters.propTypes  = {
        characters: PropTypes .arrayOf(
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

