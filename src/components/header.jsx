import React from 'react'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const header = () => {
  gsap.registerPlugin(useGSAP);

  const box = useRef();
  useGSAP(() => {
    gsap.from(".main h1", {
      x: -500,
      scale: 1,
      opacity: 0,
      duration: 1
    })
    gsap.from(".main h2", {
      x: 500,
      scale: 1,
      opacity: 0,
      duration: 1

    })
  }, { scope: box }
  )
  return (
    <>
      <div className="main" ref={box}>
        <h1 id="name">RUSHi RAUT</h1>
        <h2>A Curious Mind Who Writes Code</h2>
      </div>
    </>
  )
}

export default header