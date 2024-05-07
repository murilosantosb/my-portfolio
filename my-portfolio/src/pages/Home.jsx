import React from 'react'

// img
import ProfileImage from '../assets/profile-pic.png'

// Icons
import SocialBtns from '../components/social-btns/social-btns'


const Home = () => {
  return (
    <main>
      <header>
        <h1>Oi, sou Murilo! 👋</h1>
        <h2>Desenvolvedor Front-end</h2>
        <img src={ProfileImage} alt="My photo" />

        <SocialBtns />
      </header>

    </main>
  )
}

export default Home