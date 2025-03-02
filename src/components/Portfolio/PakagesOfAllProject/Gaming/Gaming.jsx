import React from 'react'
import GameHero from './GameHero'
import GameServices from './GameServices'
import SerivcesOfGaming from './SerivcesOfGaming';
import GameSpin from './GameSpin'
import ContactUs from '../../../../pages/contactUs';
const Gaming = () => {
  return (
    <div>
      <GameHero/>
      <GameServices/>
      <SerivcesOfGaming/>
      <GameSpin/>
      <ContactUs/>
    </div>
  )
}

export default Gaming
