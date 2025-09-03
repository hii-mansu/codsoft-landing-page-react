import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Cardsection from './components/Cardsection'
import Hero2 from './components/Hero2'
import Branddevider from './components/Branddevider'
import Contactus from './components/Contactus'
import Footer from './components/Footer'

function App() {
  return (
    <section>
        <Header/>
        <Hero/>
        <Cardsection/>
        <Hero2/>
        <Branddevider img1={`https://i.ibb.co/vvDcRnZ/js.png`} img2={`https://i.ibb.co/4Y6bHt6/html.png`} img3={`https://i.ibb.co/tMS4W0Q/css.png`} img4={`https://i.ibb.co/6NZZPj7/visual-studio.png`} img5={`https://i.ibb.co/q7k10xf/java.png`}/>
        <Contactus/>
        <Footer/>
    </section>
  )
}

export default App