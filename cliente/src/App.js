import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ListaUsuarios from './components/ListaUsuarios';
import CadastroUsuario from './components/CadastroUsuario';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<ListaUsuarios />} />
          <Route path="/cadastrar" element={<CadastroUsuario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;