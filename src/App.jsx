import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home/Home.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Skill from "./Components/Skills/Skill.jsx";
import About from "./Components/About/About.jsx";
import Project from "./Components/Project/Project.jsx";
const App = () => {
    return (
        <>
           <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skill />} />
                <Route path="/project" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
};

export default App;