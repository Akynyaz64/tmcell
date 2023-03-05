import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

import Navbar from "../components/site/UI/Navbar";
import Footer from "../components/site/UI/Footer";

function RootSiteLayout() {
    return (
        <>
            <ScrollRestoration />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default RootSiteLayout;
