import React,{useState} from 'react'
import TopBar from "./TopBar"
import Description from "./Description"
import Work from "./Work"
import Skills from "./Skills"
import "../assets/css/home.css"
import Platforms from './Platforms'
import Howtocontact from './Howtocontact'
import Callme from './Callme'

function Home(scollToRef) {

  return (
    <div >

      <div>
      <TopBar/>
      </div>

      <div>
      <Description/>
      </div>

      <div style={{marginTop:'10vh'}}>
      <Skills/>
      </div>

      <div>
      <Work/>
      </div>

      <div>
      <Platforms/>
      </div>

      <div id='Howtocontact' style={{marginTop:'10vh'}}>
      <Howtocontact/>
      </div>

      <div style={{marginBottom:'12vh'}}>
      <Callme/>
      </div>

    </div>
  )
}

export default Home