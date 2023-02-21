import './App.css';
import Carrousel from './components/carrousel';
// import BodyApp from './components/BodyApp';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <div className='container'>
      <Nav />
      < Carrousel/>
      {/* <BodyApp /> pagina en construccion */}
      <Footer />
    </div>

  );
}

export default App;
