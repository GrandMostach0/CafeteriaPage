import React from "react";
import { Link } from "react-router-dom";

function HeaderSecction(){
    return(
        <header className="flex items-center justify-between px-30 py-4 sticky top-0 z-30 w-screen">
            <h1 className="text-2xl font-bold">Placer and Delirios</h1>
            <nav>
                <Link to="/" className="navigateItem">Inicio</Link>
                <Link to="/about" className="navigateItem">Nosotros</Link>
                <Link to="/schedule" className="navigateItem">Horario</Link>
                <Link to="/products" className="navigateItem">Productos</Link>
                <Link to="/location" className="navigateItem">Ubicación</Link>
                <Link to="/login" className="text-sm font-bold border py-2 px-4 rounded-[8px]">Iniciar Sesión</Link>
            </nav>
        </header>
    );
}

export default HeaderSecction;