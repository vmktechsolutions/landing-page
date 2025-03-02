import React from 'react'
import Hero from './Hero';
import ProductFeature from './productFeature';
import BusinessSolutions from './businessSolutions';
import Services from './Services';
import ContactUs from '../../pages/contactUs';
import TechStack from './techStack';
const androidDevelopment = () => {
  return (
  <>
   <div className=''>
   <Hero/>
   <ProductFeature/>
   <BusinessSolutions/>
   <Services/>
   <TechStack/>
   <ContactUs/>
   </div>
  </>
  )
}

export default androidDevelopment;