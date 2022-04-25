
import './App.css';
import Circle from './components/Circle';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Speakers from './components/Speakers';
import Sponsers from './components/Sponsers';
import Hover from "./components/Hover"
import Intro from "./components/Intro"
import Header from './components/Navbar';


function App() {
  return (
  <div className="App">
    <Intro></Intro>
    <Circle></Circle>
    <Sponsers></Sponsers>
    <FAQ></FAQ>
    <Footer></Footer>

  </div>
  );
}

export default App;
