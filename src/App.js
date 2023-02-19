import './App.css';
import BodyApp from './components/BodyApp';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <div className='container'>
      <Nav />
      <BodyApp />
      <Footer />
    </div>

  );
}

export default App;
