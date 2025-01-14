import React from "react";
import Header from "../components/header";
import SpecialityMenu from "../components/specialityMenu";
import Topdoctors from "../components/topdoctors";
import Banner from "../components/Banner";
const Home = () =>{
    return(
        <>
           <Header /> 
           <SpecialityMenu />
           <Topdoctors/>
           <Banner/>
        </>
    )
}
export default Home;