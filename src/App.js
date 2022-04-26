
import './App.css';
import Circle from './components/Circle';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Speakers from './components/Speakers';
import Sponsers from './components/Sponsers';
import Intro from "./components/Intro"
import Hero from './components/Dual';
import Navbars from "./components/Navbar";



function App() {
  return (
  <div className="App">
    <Navbars></Navbars>
  <Intro></Intro>
<Circle></Circle>
{/* <Hero></Hero> */}
<FAQ></FAQ>
<Footer></Footer>
  </div>
  );
}

export default App;
