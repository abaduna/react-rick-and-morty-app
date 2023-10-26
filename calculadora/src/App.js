import {Container,Col,Row,Button} from "react-bootstrap"
import {useState} from "react"
import './App.css';

function App() {
  const [calculadora,setCalculadora] = useState("")
  const [numeroPrevio, setNumeroPrevio] = useState(""); // Utilizamos estado para númeroPrevio
  const [operaciones, setOperaciones] = useState("");
  const [resultado, setResultado] = useState(""); // Utilizamos estado para resultado

  const handleNumber =(numero)=>{
      setCalculadora(Math.floor(calculadora+numero))


  }
  const handleOperacion = (operacion)=>{
    setNumeroPrevio(calculadora)
    setCalculadora("")
    console.log(`NP ${numeroPrevio}`);
    setOperaciones(operacion);


  }
  const handelEqual = ()=>{

    console.log(`calculadora ${calculadora}`); 
    let resultadoCalculado;


    if (operaciones === "+") {
      resultadoCalculado = parseFloat(numeroPrevio) + parseFloat(calculadora);
    } else if (operaciones === "-") {
      resultadoCalculado = parseFloat(numeroPrevio) - parseFloat(calculadora);
    } else if (operaciones === "*") {
      resultadoCalculado = parseFloat(numeroPrevio) * parseFloat(calculadora);
    } else if (operaciones === "/") {
      resultadoCalculado = parseFloat(numeroPrevio) / parseFloat(calculadora);
    }
    console.log(`operaciones ${operaciones}`); 
    console.log(`resultadoCalculado ${resultadoCalculado}`);
    console.log(`numPrev ${numeroPrevio}`);
    setResultado(resultadoCalculado.toString());
  }
  const handleClear =()=>{
	setCalculadora("")
	setNumeroPrevio("")
	setResultado("")
	setOperaciones("")
  }
  return (
    <div className="App">
      <Container>
	   <div className="displey">	
		<Row className="justify-content-center">
			<div>{resultado}</div>
		</Row>
	   <Row className="opreciones justify-content-center">
	  <div> {numeroPrevio}</div><div>{operaciones}</div><div>{calculadora}</div>		
	  </Row>	   


	  
	  </div>
	  

        <Row> 
          <Col> <Button className="whidth" variant="secondary" onClick={()=>handleNumber("7") }>7</Button></Col>


          <Col><Button className="whidth" variant="secondary" onClick={()=>handleNumber("8") }>8</Button></Col>
          <Col><Button className="whidth" variant="secondary" onClick={()=>handleNumber("9") }>9</Button></Col>
          <Col><Button className="whidth"  variant="warning" onClick={()=>handleOperacion("*") } >X</Button></Col>
        </Row>
        <Row>
          <Col><Button className="whidth" variant="secondary"  onClick={()=>handleNumber("4")}>4</Button></Col>
          <Col><Button className="whidth" variant="secondary"  onClick={()=>handleNumber("5") }>5</Button></Col>
          <Col><Button className="whidth" variant="secondary"  onClick={()=>handleNumber("6") }>6</Button></Col>
          <Col><Button className="whidth"  variant="warning" onClick={()=>handleOperacion("-") } >-</Button></Col>
        </Row>
        <Row>
          <Col><Button className="whidth" variant="secondary" onClick={()=>handleNumber("1") }>1</Button></Col>
          <Col><Button className="whidth" variant="secondary" onClick={()=>handleNumber("2") }>2</Button></Col>
          <Col><Button className="whidth" variant="secondary" onClick={()=>handleNumber("3") }>3</Button></Col>
          <Col><Button className="whidth"  variant="warning" onClick={()=>handleOperacion("+") }>+</Button></Col>
        </Row>
        <Row>
          <Col><Button className="whidth" variant="secondary" onClick={()=>handleNumber("0") }>0</Button></Col>
          <Col><Button className="whidth" variant="secondary">.</Button></Col>
          <Col><Button className="whidth" variant="danger" onClick={()=>handelEqual("=") }>=</Button></Col>
          <Col><Button className="whidth"  variant="warning" onClick={()=>handleOperacion("/") }>/</Button></Col>
        </Row>
        <Row>
          <Button  className="whidth"  variant="warning" onClick={()=>handleClear("/") }><span> Liampiar </span></Button>
        </Row>
      </Container>
    </div>
  );
}

export default App;

