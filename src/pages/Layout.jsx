import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
    return (
        <div className="max-w-screen min-h-screen bg-neutral-300">
            <Navbar />
            <div className="px-4 h-4/6 *:text-neutral-800">
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default Layout;
