import { useState } from 'react'
import Nav from './components/nav'
import Header from './components/header'
import Myphoto from './components/myphoto'
import About from './components/about'
import Skill from './components/Skill'
import Project from './components/project'
import Contact from './components/Contact'

import './App.css'
function App() {
  return (
    <>
      <div id="all">
        <Nav />
        <Header />
        <Myphoto />
        <About />
        <Skill />
        <Project />
        <Contact />
      </div>

    </>
  )
}

export default App
