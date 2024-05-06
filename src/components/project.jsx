import React from 'react'
import amezon from '../image/amezon.png'
import calculator from '../image/calculator.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
const project = () => {
    return (
        <div>
            <h2 class="project-heding">Project</h2>
            <div class="project">

                <div class="amezon">
                    <h3>Amezon</h3>
                    <img src={amezon}
                        alt="amezon"></img>
                    <div class="a-tag">
                        <a href="https://github.com/rushi999999/amezon" class="githube"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="amezon/index.html" class="link"><FontAwesomeIcon icon={faLink} /></a>
                    </div>
                </div>

                <div class="calculator">
                    <h3>Calculator</h3>
                    <img src={calculator} alt="calculator"></img>
                    <div class="a-tag">
                        <a href="https://github.com/rushi999999/calculator" class="githube"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="calculator/index1.html" class="link "><FontAwesomeIcon icon={faLink} /></a>
                    </div>
                </div>
            </div></div>
    )
}

export default project