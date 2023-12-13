import React, { useEffect, useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import { Route, Routes } from 'react-router-dom'
import Register from './Pages/Register/Register'
import BarraDeNavegacion from './Components/BarraDeNavegacion/BarraDeNavegacion'
import DetallesPersonaje from './Pages/DetallesPersonaje/DetallesPersonaje'

function App() {

  return (
    <>
      <BarraDeNavegacion />

      <Routes> {/* Routes es una lista de rutas, contiene todas mis rutas. Todo lo que esta adentro son rutas, y lo que esta afuera no. */}
        <Route path="/login" element={<Login />} />{/* Route en singular, es una ruta. Cada componente tiene su ruta en particular. Dependiendo del path que yo le de, sera el elemento que se renderizara */}
        <Route path="/home" element={<Home />} /> {/*Cada route es una pagina o "archivo .html"*/}
        <Route path="/register" element={<Register/>}/>
        <Route path="/personaje" element={<DetallesPersonaje/>}/>
      </Routes>
    </>
  )
}

export default App
