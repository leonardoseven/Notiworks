import LeftBar from "../LeftBar/Index"
import './index.css'
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from 'axios';
const location = useLocation();

// get userId
let notaId = location.state.notaId

const Editor = () =>{


    const getConteudoNota = () =>{
        let config = {
            headers: {
              "Content-Type": "application/json",
              'Authorization':`Bearer ${sessionStorage.getItem("token")}`
              }
            }
        axios.get('http://localhost/api/v1/nota/'+notaId,config)
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            alert("error")
        })
    }

    useEffect(()=>{
        getConteudoNota();
    },[])

    
    return(
        <>
            <div className="container-editor">
                <LeftBar activeIcon="editor"></LeftBar>
                <h1>Editor</h1>
            </div>
        </>
    )
}

export default Editor;