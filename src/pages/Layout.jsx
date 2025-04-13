import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
    return (
        <div className="max-w-screen min-h-screen bg-gradient-to-br from-blue-100 via-white to-pink-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
            <Navbar />
            <div className="px-4 h-4/6 *:text-neutral-800">
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default Layout;
