import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-brands-svg-icons' 
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faCheckCircle, faLayerGroup, faSearch, faShieldAlt, faWrench } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
    <div>
        
        
 <section id="services">
 <div class="container">
     <h1 class="text-center">Services</h1>
     <div class="row">
         <div class="col-lg-4 mt-4">
             <div class="card servicesText">
                 <div class="card-body">
                    
                     <i class="fas servicesIcon fa-clock"> <FontAwesomeIcon icon={faClock} /></i>
                     <h4 class="card-title mt-3">Website Development</h4>
                     <p class="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                         Some quick example text to build on the card title and make up the bulk of the card's content.
                     </p>
                 </div>
             </div>  
         </div>
         <div class="col-lg-4 mt-4">
             <div class="card servicesText">
                 <div class="card-body">

                 

                     <i class='fas servicesIcon fa-layer-group'><FontAwesomeIcon icon={faLayerGroup} /></i>
                     <h4 class="card-title mt-3">Website Design</h4>
                     <p class="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                         Some quick example text to build on the card title and make up the bulk of the card's content.
                     </p>
                 </div>
             </div>  
         </div>

         <div class="col-lg-4 mt-4">
             <div class="card servicesText">
                 <div class="card-body">

             

                     <i class='far servicesIcon fa-check-circle'>   <FontAwesomeIcon icon={faCheckCircle} /></i>
                     <h4 class="card-title mt-3">Website Deployment</h4>
                     <p class="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                         Some quick example text to build on the card title and make up the bulk of the card's content.
                     </p>
                 </div>
             </div>  
         </div>
     </div>

     <div class="row">
         <div class="col-lg-4 mt-4">
             <div class="card servicesText">
                 <div class="card-body">

                 

                     <i class='fas servicesIcon fa-search'><FontAwesomeIcon icon={faSearch} /></i>
                     <h4 class="card-title mt-3">SEO</h4>
                     <p class="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                         Some quick example text to build on the card title and make up the bulk of the card's content.
                     </p>
                 </div>
             </div>  
         </div>

         <div class="col-lg-4 mt-4">
             <div class="card servicesText">
                 <div class="card-body">

              

                     <i class='fas servicesIcon fa-shield-alt'>   <FontAwesomeIcon icon={faShieldAlt} /></i>
                     <h4 class="card-title mt-3">DevOps</h4>
                     <p class="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                         Some quick example text to build on the card title and make up the bulk of the card's content.
                     </p>
                 </div>
             </div>  
         </div>

         <div class="col-lg-4 mt-4">
             <div class="card servicesText">
                 <div class="card-body">

                 
                     <i class='fas servicesIcon fa-wrench'><FontAwesomeIcon icon={faWrench} /></i>
                     <h4 class="card-title mt-3">QA</h4>
                     <p class="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                         Some quick example text to build on the card title and make up the bulk of the card's content.
                     </p>
                 </div>
             </div>  
         </div>
     </div>
 </div>
 </section>

    </div>
  )
}

export default Services
