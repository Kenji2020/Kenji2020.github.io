import React from 'react'
import '../App.css'
import Typewriter from "typewriter-effect";
import { Carrusel } from '../Components/Carousel/Carrusel';
export const Inicio = () => {
  return (
    <div>
            <br></br>
            <br></br>
            <h1 className='React'>Hola, soy <Typewriter
                   onInit={(typewriter)=> {
                                          typewriter
                                          .typeString("Víctor Salgado")
                                          .pauseFor(1000)
                                          .deleteAll()
                                          .start()
                                          .typeString("Víctor Salgado")
                                          .pauseFor(1000)
                                          .deleteAll()
                                          .start()
                                          .typeString("Víctor Salgado")                                  
                                          

                          }}
                  /><h1 className='React'>soy Full-Stack Developer Trainee-Junior (Especializado en Front-end)</h1></h1>
            <p className='React'>
                <span>Me gusta escribir código</span><span className="contenedor">_</span>
                <br></br>
                <h1><span className='auto-type'></span></h1>
              
                <br></br>
            </p>
            
            <Carrusel/>
      </div>
  )
}
