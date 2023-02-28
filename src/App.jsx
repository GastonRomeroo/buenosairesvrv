import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/NavBar';
import Carrousel from './components/carrousel';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import BodyApp from './components/BodyApp';
import Error404 from './components/Error404'

function App() {
  return (
    <div className='container'>
      < BrowserRouter>
        < Nav />
        < Carrousel />
        < Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"*"} element={<Error404 />} />;
        </Routes>
        <BodyApp />
        < Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
