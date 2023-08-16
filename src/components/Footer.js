import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <div>
{/* <FontAwesomeIcon icon={faFacebook} /> */}


 <footer id="footer">
 <div class="container-fluid">
     {/* <!-- social media icons --> */}
     <div class="social-icons mt-4">
      
         <a href="https:www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
         <a href="https:www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
         <a href="https:www.twitter.com/" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
         <a href="https:www.linkedin.com/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
         <a href="https:www.whatsapp.com/" target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></a>
         <a href="https:www.github.com/" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
      
    </div>
 </div>
 <p>Copyright © 2023 All Rights Reserved by ODUTEMOWO TOMIWA YUSUF</p>
 </footer> 

    </div>
  )
}

export default Footer
