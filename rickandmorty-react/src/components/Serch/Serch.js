import {useState} from "react"
import { PropTypes } from "prop-types"

import { InputGroup,FormControl,Form } from "react-bootstrap"

const Serch = ({findCharacters}) => {
    const [characters,setCharacter] = useState("")
    const getCharacters =(e)=>{
        e.preventDefault()
        findCharacters(characters)

    }

  return (
   <>
    <Form onSubmit={getCharacters} className="serch-character-input">
        <InputGroup>
            <FormControl placeholder="Personaje" onChange={(e)=> setCharacter(e.target.value)} value={characters} name="charqacter">

            </FormControl>
        </InputGroup>
    </Form>
   </>
  )
}

// Serch.propTypes = {
//     findCharacters: PropTypes.func.is
// }
export default Serch