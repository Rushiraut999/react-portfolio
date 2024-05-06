import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
const Contact = () => {
    return (
        <>
            <div class="contact">
                <h2>Contact</h2>
                <p class="reach-out">Reach out to me, 24/7</p>
                <p class="email">Email Me</p>
                <p class="my-email">rushiraut1717@gmail.com</p>
                <p class="call">Call Me</p>
                <p class="my-no">7350062647</p>
                <p class="follow">follow Me</p>
                <a href="www.linkedin.com/in/rushiraut/" class="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/rushi999999" class="github"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.instagram.com/_rishi_r_999/" class="instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
        </>
    )
}

export default Contact