import React from 'react'
import Navbar from './Component/Navbar'
import HeroSlider from './Component/HeroSlider'
import Examination from './Component/Examnation'
import CardSlider from './Component/CardSlider'
import Counter from './Component/Counter'
import FAQ from './Component/FAQ'
import Subscribe from './Component/Subscribe'
import Footer from './Component/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSlider/>
      <Examination/>
      <CardSlider/>
      <Counter/>
      <FAQ/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default App
