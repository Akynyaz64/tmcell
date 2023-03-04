import React, { Fragment } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

import Navbar from "../components/UI/Navbar";
import Footer from "../components/UI/Footer";

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
