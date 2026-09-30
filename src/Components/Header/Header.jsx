import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="fixed top-0 left-0 w-full z-50 flex text-white">
            <div className=' basis-1/4 flex flex-row justify-end bg-gray-900'></div>
            <div className=' basis-3/4 flex flex-row gap-15 justify-end py-4 pr-7 bg-gray-900 w-full'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/project">Project</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
};
export default Header;



