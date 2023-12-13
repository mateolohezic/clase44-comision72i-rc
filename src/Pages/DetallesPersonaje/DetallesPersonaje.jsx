import axios from 'axios'
import React, { useState } from 'react'

function DetallesPersonaje() {

    const [personaje, setPersonaje] = useState({})

    const getPersonaje = async () => {
        const id = localStorage.getItem('idPersonaje')
        const respuesta = await axios(`https://rickandmortyapi.com/api/character/${id}`)
        setPersonaje(respuesta.data)
    }

    getPersonaje()

  return (
    <>
        <h1>{personaje.name}</h1>
        <img src={personaje.image} alt="" />
    </>
  )
}

export default DetallesPersonaje
