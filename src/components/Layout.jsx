import React from "react";
import { Outlet } from "react-router-dom";
import HeaderSecction from "./HeaderSecction";
import FooterSecction from "./FooterSecction";

function Layout (){
    return(
        <>
            <HeaderSecction  />

            <main>
                <Outlet />
            </main>

            <FooterSecction />
        </>
    )
}

export default Layout;