import React from 'react'
import img1 from '../Assets/images/woman-selecting-pictures-people.jpg'
import './Landing.scss'

function Landing() {
    return (
      <section className='landing'>
         <div className='main'>
        <div class="lefttext">
              <div class="textwrap">
                  <h1>
                      Find your dream remote jobs first
                  </h1>
                  <p>
                    Search by talent , view by salary
                  </p>
                  <button>Apply Jobs</button>
              </div>
          </div>
          <div class="rightimage">
              <img src={img1}/>
          </div>
          </div>
          </section>
    )
  }
  
  export default Landing
  