
import { useState } from 'react';
import './App.scss';
import { useFech } from './Hooks/useFech';
import Characters from './components/Characters/Characters';
function App() {


  const [endpoint,setEndpoint] = useState("character")
  const [data,loading,error] = useFech(endpoint)

  console.log(data)
  return (
    
    <div className="App">
      <Characters Characters={data.results}></Characters>
    </div>
  );
}

export default App;
