import { useState } from 'react'
import imagen1 from "./foto1.jpg"
import imagen2 from "./foto2.jpg"
import imagen3 from "./foto3.jpg"
import imagen4 from "./foto4.jpg"
import imagen5 from "./foto5.jpg"
import imagen6 from "./foto6.jpg"
import imagen7 from "./foto7.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './App.css'

function App() {
  
// ..
AOS.init();

  return (
    <>
     <main>
      <section className='section1'>
        <h1>Suave, dulce y delicada 💕</h1>
        <h2>Mientras esto exista, mi amor por vos tambien lo hará...</h2>
      </section>
        <section>
          <div className='div-imagenes' data-aos="fade-right">
            <img className='img' src={imagen1} alt="as" />
            <p className='caracteristicas'>Amable</p>
          </div>
          <div className='div-imagenes' data-aos="fade-left">
            <p className='caracteristicas'>Empática</p>
            <img className='img' src={imagen2} alt="as" />
          </div>
          <div className='div-imagenes' data-aos="fade-right">
            <img className='img' src={imagen3} alt="as" />
            <p className='caracteristicas'>Cariñosa</p>
          </div>
          <div className='div-imagenes' data-aos="fade-left">
            <p className='caracteristicas'>Bella</p>
            <img className='img' src={imagen4} alt="as" />
          </div>
          <div className='div-imagenes' data-aos="fade-right">
            <img className='img' src={imagen5} alt="as" />
            <p className='caracteristicas'>Sensible</p>
          </div>
          <div className='div-imagenes' data-aos="fade-left">
            <p className='caracteristicas'>Divertida</p>
            <img className='img' src={imagen6} alt="as" />
          </div>
          <div className='div-imagenes' data-aos="fade-right">
            <img className='img' src={imagen7} alt="as" />
            <p className='caracteristicas'>Detallista</p>
          </div>
        </section>
        <section className='section2'>
          <p className='letra'>🎵 I was enchanted to meet you</p>
          <p className='letra'>🎵 Please don't be in love with someone else</p>
          <p className='letra'>🎵 Please don't have somebody waiting on you</p>
          <p className='letra'>🎵 Please don't be in love with someone else</p>
          <p className='letra'>🎵 Please don't have somebody waiting on you </p>
        </section>
        <section className='seccion3'>
         
        </section>
     </main>
    </>
  )
}

export default App
