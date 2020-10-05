import React from 'react'
import {HomePageHeader, CharacterSearchContainer} from '../HomePage'

function HomePage ({selChar, setSelChar}) {
  return (
    <div className='home-page-hero-container'>
      <HomePageHeader />
      <CharacterSearchContainer selChar={selChar} setSelChar={setSelChar} />
    </div>
  )
}

export default HomePage
