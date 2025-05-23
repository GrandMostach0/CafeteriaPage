import React from "react";
import { Link } from "react-router-dom";

function HeaderSecction(){
    return(
        <header className="flex items-center justify-between px-30 py-4">
            <h1 className="text-2xl">Title de la pagina</h1>

            <nav>
                <Link to="/" className="mr-4">Inicio</Link>
                <Link to="/users">Users</Link>
            </nav>
        </header>
    );
}

export default HeaderSecction;