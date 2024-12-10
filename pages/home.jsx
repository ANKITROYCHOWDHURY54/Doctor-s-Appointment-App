import React from "react";
import Header from "../components/header";
import SpecialityMenu from "../components/specialityMenu";
import Topdoctors from "../components/topdoctors";
const Home = () =>{
    return(
        <>
           <Header /> 
           <SpecialityMenu />
           <Topdoctors/>
        </>
    )
}
export default Home;