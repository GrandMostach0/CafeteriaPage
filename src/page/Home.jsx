import React, { useState } from "react";
import CoffeBanner from "../assets/images/CoffeBanner.png"
import { Link } from "react-router-dom";
import CardPresentacion from "../components/Cards/CardPresentacion";
import CardProducto from "../components/Cards/CardProducto";

const Home = () =>{
    const listaMenu = ['caffe', 'postres', 'bebidas', 'productos', 'mercancias']
    const [selectedIndex, setSelectedIndex] = useState(0);


    return(
        <>
            <section className="border-red-800 min-h-[80vh] flex items-center justify-center">
                <div className="px-5 py-20 max-w-[40%]">
                    <h1 className="text-7xl font-extrabold">Toda nuestra Tradicion hasta tu hogar</h1>
                    <p className="mt-5 mb-10 text-2xl">! La calidad que esperabas, ahora puedes disfrutarlos deste tu casa ¡</p>
                    <Link to="/" className="border-none px-8 py-4 rounded-3xl bg-black text-white font-extrabold">Disfrutar ahora</Link>
                </div>

                <img src={CoffeBanner} alt="Imagen banner" className="object-cover w-[40%]"/>
            </section>

            <section className="py-10 flex items-center justify-center">
                <CardPresentacion />
                <CardPresentacion />
                <CardPresentacion />
            </section>

            <section className="py-10">
                <div className="text-center max-w-[600px] m-auto">
                    <h1 className="font-extrabold text-3xl mb-5">Conoce nuestros Productos</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                </div>
                <div className="border-none bg-amber-950 max-w-[30%] rounded-xl py-4 m-auto mt-5 flex items-center justify-center ">
                    {listaMenu.map((lista, index) => (
                        <p
                            key={index}
                            className={`mx-2 py-1 px-4 border-none cursor-pointer ${
                            index === selectedIndex
                                ? "text-amber-950 bg-yellow-600 rounded-lg font-bold" // Estilo seleccionado
                                : "text-yellow-600" // Estilo normal
                            }`}
                            onClick={() => setSelectedIndex(index)}
                        >
                        {lista}
                      </p>
                    ))}
                </div>

                <div className="my-10 px-4 py-4 grid grid-cols-3 m-auto w-[50%] gap-10">
                    <CardProducto />
                    <CardProducto />
                    <CardProducto />
                    <CardProducto />
                    <CardProducto />
                    <CardProducto />
                </div>

            </section>

        </>
    )
}

export default Home;