import React from 'react'
import image from '../image/my.jpg'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const myphoto = () => {

  const box = useRef();
  useGSAP(() => {
    gsap.from(".my_photo", {
      y: 150,
      scale: 1,
      opacity: 0,
      duration: 2,
      dilay: 2
    })
  }, { scope: box })

  return (
    <div class="photo" ref={box}>
      <div class="my_photo">
        <div class="line1"></div>
        <div class="line2"></div>
        <img src={image} alt="my photo"></img>
      </div>
    </div>
  )
}

export default myphoto