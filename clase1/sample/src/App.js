import Header from './components/header/header';
import './App.css';
import Main from './components/main/main';
import Navbar from './components/navbar/navbar';
import RecSection from './components/section/section';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">

        <>
        <Navbar></Navbar>
        <Main></Main>
        <Header title="Header title 🔥" name="Artu" edad ={25} hobies={["programar","ver series","dormir"]} altura={1.9}></Header>
        <RecSection article={["voy por la quinta","vulvo al mismo lugar","que hago mal"]}></RecSection>
        <Footer datos="no te pude soltar"></Footer>
        </>
    

    </div>
  );
}

export default App;
