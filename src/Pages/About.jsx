import React from 'react'
import './About.scss'
import aboutImg1 from '../Assets/images/24644459_Hand of HR manager choosing woman as best candidate.jpg'
import aboutImg2 from '../Assets/images/campaign-creators-qCi_MzVODoU-unsplash.jpg'

function About() {
  return (
    <div className='abt'>
    <div class="we-are-block">

    <div id="about-us-section">
  
      <div class="about-us-image">
  
        <img src={aboutImg1} width="808" height="458" alt="Lobby Image"/>
  
      </div>
  
      <div class="about-us-info">
  
        <h2>About Us</h2>
  
        <p>We believe that finding the right talent is the cornerstone of success for any organization.
         As a leading recruitment platform, we are dedicated to connecting businesses with top-tier professionals who possess the 
         skills, experience, and passion to drive growth and innovation.We take pride in our unique approach to recruitment, which
          is based on innovation, technology, and human touch. Our platform leverages cutting-edge AI-driven algorithms to match 
          candidates with the right opportunities, but we firmly believe in the power of human intuition and expertise. 
        </p>
  
        <a href="#" title="About Us Button">Read More</a>
  
      </div>
  
    </div>
  
    <div id="history-section">
  
      <div class="history-image">
  
        <img src={aboutImg2} width="951" height="471" alt="Building Pic"/>
  
      </div>
  
      <div class="history-info">
  
        <h2>WHY US!</h2>
  
        <p>
        We understand that each organization is unique, and so are its hiring requirements.
       Time is of the essence in recruitment, and we strive to deliver prompt results without compromising on quality.We value the confidentiality
        and trust placed in us by both job seekers and employers. Rest assured, your data and personal information are secure with us.
       Our commitment to your success does not end with the hire. We offer continuous support to ensure a smooth onboarding process
        and long-term employee satisfaction.</p>
  
        <a href="#" title="Domain btn">DOMAIN</a>
  
      </div>
  
    </div>
  
  </div>
    </div>
  )
}

export default About
