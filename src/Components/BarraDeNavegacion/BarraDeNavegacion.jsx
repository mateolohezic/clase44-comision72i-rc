import React from 'react'

function BarraDeNavegacion() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/home">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Iniciar sesión</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/register">Registrarse</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default BarraDeNavegacion