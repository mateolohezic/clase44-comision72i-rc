import React, { useEffect, useState } from 'react'
import CardProducto from '../../Components/CardProducto/CardProducto'
import axios from 'axios'

function Home() {
  
  const [personajes, setPersonajes] = useState([])

  const getDatabase = async () => {
    const url = 'https://rickandmortyapi.com/api/character'
    const respuesta = await axios(url)
    console.log(respuesta.data);
    console.log(respuesta.data.results);
    setPersonajes(respuesta.data.results)
  }

  useEffect(() => {

    getDatabase()

  }, [])
  

  return (
    <>
      <h1>HOME</h1>
      <section className='contenedorCards container'>
        {
          personajes.map(personaje =>
            <React.Fragment key={personaje.id}>
              <CardProducto personaje={personaje} />
            </React.Fragment>
          )
        }
      </section>
      <h1>Hola</h1>
    </>
  )
}

export default Home
