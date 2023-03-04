import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/NavBar';
import Carrousel from './components/carrousel';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import BodyApp1 from './components/BodyApp1';
import ItemListContainer from './components/ItemListContainer';
import Error404 from "./components/Error404";
import Gift from "./components/Gift"

function App() {
  return (
    < BrowserRouter>
      <div className='container'>
        < Nav />
        < Carrousel />
        < Routes>
          <Route path={"/"} element={< BodyApp1 />}/>
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"*"} element={<Error404 />} />;
        </Routes>
        < Gift />
        < Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
