import React from 'react'
import image from '../image/rr.png'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const nav = () => { 
      const box = useRef();
      useGSAP(()=>{
       gsap.from(".navbar",{
        y:-50,
        scale:1,
        opacity:0,
        duration:1
    })
    gsap.from(".image",{
        x:-50,
        scale:1,
        opacity:0,
        duration:1
    })
},{scope:box})


    return (
        <>

            <div class="nav" ref={box}>
                <img class="image" src={image} alt="rr"></img>
                <div class="navbar">

                    <a href="#" id="home">Home</a>
                    <a href="#" id="about">About</a>
                    <a href="#" id="skill">Skill</a>
                    <a href="#" id="project">Project</a>
                    <a href="#" id="contact">Contact</a>
                    <a href="rushi raut.pdf" download="rushi raut " class="resume"><i class="fa-solid fa-download"></i>
                        Resume</a>
                </div>
            </div>
        </>
    )
}

export default nav