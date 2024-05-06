import React from 'react'
import image from "../image/react-removebg-preview.png"
const Skill = () => {
    return (
        <div><h2 class="skill-h2">skills</h2>
            <div class="skill-main" >

                <div class="skill">
                    <div class="html">
                        <img src="https://rushijoshi3798.github.io/assets/HTML_icon.png" alt="html"></img>
                        <p>HTML</p>
                    </div>
                    <div class="css">
                        <img src="https://rushijoshi3798.github.io/assets/icons8-css3-96.png" alt="css"></img>
                        <p>CSS</p>
                    </div>
                    <div class="js">
                        <img src="https://rushijoshi3798.github.io/assets/icons8-javascript-96.png" alt="js"></img>
                        <p>Javascript</p>
                    </div>
                    <div class="react">
                        <img src={image} alt="" />
                        <p>React</p>
                    </div>


                </div>
                <img class="skill-img" src="https://rushijoshi3798.github.io/assets/avatar.png" alt=""></img>
            </div></div>
    )
}

export default Skill