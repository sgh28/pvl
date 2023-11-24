import React,{useEffect, useState} from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import {logout} from '../reducer/auth'
import decode from 'jwt-decode';
// import { initializeUseSelector } from "react-redux/es/hooks/useSelector";
import { useSelector } from 'react-redux';

function Layout(){
    const location = useLocation();

    useEffect(() => {
        
        const token = JSON.parse(localStorage.getItem('profile'))?.token?.token;
        console.log(token);
        if (token) {
          const decodedToken = decode(token);
    
            if (decodedToken.exp * 1000 < new Date().getTime()){
                logout();
            }
        
        }
        
        // setUser()
      }, [location]);
    const {person} = useSelector(state=>state.person)

    return(
        <>
            {person && <NavBar />}
            <Outlet />
            <Footer />
        </>
    )
}
export default Layout;