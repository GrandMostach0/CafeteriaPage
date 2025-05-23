import React from "react";
import Coffe from '../../assets/images/CoffeBanner.png'
function CardProducto(){
    return(
        <div className=" bg-slate-200 py-3 px-3 rounded-2xl hover:scale-110 cursor-pointer">
            <img src={Coffe} alt="imagen" className="rounded-2xl"/>
            <div>
                <p className="mt-4 font-bold text-xl">Cold Brow</p>
                <div className="my-3 flex items-center justify-between">
                    <p className="font-bold text-xl">$2,95</p>
                    <button className="bg-black py-1 px-6 text-white rounded-lg">+</button>
                </div>
            </div>
        </div>
    )
}

export default CardProducto;