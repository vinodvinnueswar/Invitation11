import React from 'react'
import Intro from '../components/Intro'
import Bride from '../components/Bride'
import Groom from '../components/Groom'
import Gallery from '../components/Gallery'
import Location from '../components/Location'
import Contact from '../components/Contact'

const HomePage = () => {
  return (
    <div className="HomePage">
        <Intro/>
       <div className="Boreder">
       <Bride/>
       <Groom/>
       <Gallery/>
       <Location/>
       <Contact/>
       </div>
    </div>
  )
}

export default HomePage