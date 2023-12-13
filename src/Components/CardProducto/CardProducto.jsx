import React from 'react'
import './cardProducto.css'

function CardProducto(props) {

    const verPersonaje = () => {
        localStorage.setItem('idPersonaje', props.personaje.id)
        window.location.replace('/personaje')
    }

    return (
    <>
        <div className="card">
            <img src={props.personaje.image} className="card-img-top w-100" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.personaje.name}</h5>
                <p className="card-text">{props.personaje.status}</p>
                <button className="btn btn-primary" onClick={verPersonaje}>Ver más</button>
            </div>
        </div>
    </>
    )
}

export default CardProducto
