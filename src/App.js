
import './App.css';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Speakers from './components/Speakers';
import Sponsers from './components/Sponsers';

function App() {
  return (
    <div className="App">
      <Sponsers></Sponsers>
      <Footer></Footer>
      <FAQ></FAQ>
 
      <Speakers></Speakers>
      

    </div>
  );
}

export default App;
