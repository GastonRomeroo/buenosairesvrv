import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/NavBar';
import Carrousel from './components/carrousel';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';

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
          <Route path={"*"} element={<Error404 />} />;
        </Routes>
        <BodyApp />
        < Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
