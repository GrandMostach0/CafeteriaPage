import React from "react";
import Coffe from "../../assets/images/CoffeBanner.png"

const CardPresentacion = () => {
    return(
        <div className="bg-amber-950 border-green-200 w-[500px] flex items-center py-2 px-2 rounded-2xl mx-5">
            <img src={Coffe} alt="caffe" className="w-[50%] rounded-xl"/>

            <div className="px-5 py-5 text-center text-white">
                <h1 className="font-bold">Nuestra Especialidad la Chocolatería</h1>

                <p className="text-sm mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a cupiditate explicabo. Perferendis, inventore laborum!</p>
            </div>
        </div>
    )
}

export default CardPresentacion