import React from 'react';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import './App.css';
import Carrousel from './components/carrousel';
import Footer from './components/Footer';
import Nav from './components/Nav';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import BodyApp1 from './components/BodyApp1';

function App() {
  return (
    <div className='container'>
      < BrowserRouter>
        < Nav />
        < Carrousel />
        < BodyApp1 />
        < Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        </Routes>
      < Footer />
      </BrowserRouter>
    </div>

);
}
// import BodyApp from './components/BodyApp';
//{/* <BodyApp /> pagina en construccion */}

export default App;
