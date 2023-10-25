
import { useState } from 'react';
import './App.scss';
import { useFech } from './Hooks/useFech';
import Characters from './components/Characters/Characters';
import { Container } from 'react-bootstrap';
import Loading from './components/common/Loading';
import Serch from './components/Serch/Serch';
function App() {


  const [endpoint,setEndpoint] = useState("character")
  const {data,loading,error} = useFech(endpoint)
  console.log(data)  //obj sin result

  const { results: characters, info } = data;
  console.log("Characters data:", characters); //undefind
  console.log("info data:", info); //obj


  const findCharacters =(character)=>{
    setEndpoint(`character?name=${character}`)
  }
// 
  if (loading) return <Loading></Loading>
  if (error) return <h1>Error...</h1>
  
  console.log(`%c ${characters}`, "color:blue")//undefind

  return (
    
    <Container className="App">
      <Serch findCharacters={findCharacters}></Serch>
      {characters ? (
        <Characters characters={characters}></Characters>
      ) : (
        <Loading></Loading>
      )}
    </Container>
  );
}

export default App;



