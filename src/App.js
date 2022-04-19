
import './App.css';
import Circle from './components/Circle';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Speakers from './components/Speakers';
import Sponsers from './components/Sponsers';

function App() {
  return (
    <div className="App">
      <Circle></Circle>
      <Sponsers></Sponsers>

      <Footer></Footer>
      <FAQ></FAQ>
 
      <Speakers></Speakers>
      

    </div>
  );
}

export default App;
