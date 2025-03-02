import React from 'react'
import Hero from './Hero'
import OverViewsDescription from './OverViewsDescription';
import FortuneFeature from './FortuneFeature';
import FortuneTalkLive from './FortuneTalkLive';
import FortuneTalkCourse from './FortuneTalkCourse';
import FortuneTalkGem from './FortuneTalkGem';
import FortuneTalkTarotCard from './FortuneTalkTarotCard';
import ContactUs from '../../../../pages/contactUs';


const FortuneTalk = () => {
  return (
    <div>
    <Hero/>
  <FortuneFeature/>
    <OverViewsDescription/>
  <FortuneTalkLive/>
  <FortuneTalkCourse/>
  <FortuneTalkGem/>
  <FortuneTalkTarotCard/>  
  <ContactUs/>   
    </div>
  )
}

export default FortuneTalk
