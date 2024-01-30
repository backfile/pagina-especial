import { useRef, useEffect, useState } from 'react'
import imagen1 from "./foto1.jpg"
import imagen2 from "./foto2.jpg"
import imagen3 from "./foto3.jpg"
import imagen4 from "./foto4.jpg"
import imagen5 from "./foto5.jpg"
import imagen6 from "./foto6.jpg"
import imagen7 from "./foto7.jpg"
import useSound from "use-sound"
import sonido from "./rosas.mp3"
import sonido2 from "./enchanted.mp3"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './App.css'
import Typed from 'typed.js';

export function Secundario() {
const [playSound] = useSound(sonido2)
playSound()

AOS.init();

const el = useRef(null);

  const frases = [
    'Mientras esto exista, mi amor por vos tambien lo hará... ♾',
    "Nunca me voy a arrepentir de haberte elegido 💖",
    "Que nada ni nadie ponga en duda el amor que te tuve.",
    "Sos un quilombo hermoso.",
    "Mi imperio romano fue saber que si algún dia se me daba con vos, te haría la mujer mas feliz de la tierra.",
    "Te pudiste equivocar en muchas cosas en la vida, pero nunca en confiar en mi.",
    "Y es que empiezo a pensar que el amor verdadero es tan sólo el primero y es que empiezo a sospechar que los demás son sólo para olvidar 🌹🎵",
    "El amor nos hace querer ser mejores.",
    "¿Cuanto tiempo me esperarias?",
    "Vos ya te fuiste, pero yo sigo aca.",
    "¿Donde esta el amor?",
    "No te logré recuperar :(",
    "Te prometí que siempre ibas a ser vos, y aca estoy... sin vos.. pero compliendo la promesa.",
    "Yo sí te esperaria como la loca del muelle de San Blas.",
    "Y solo me queda decirte hasta la proxima vida, mi amor.",
    "Tu siempre estarás aqui, tatuada en mi alma, así como las entrellas en el cielo.",
    "Ya no quiero buscar a alguien mas, contigo terminó la busqueda.",
    "Hablar evita sobrepensar.",
    "¿Odiarte?",
    "Gracias por enseñarme tanto.",
    "Poder decir adios, es crecer.",
    "Cuanto amor me costó perderte...",
    "Yo te amaba en serio.",
    "Siempre te escogería a ti.",
    "Si es un amor real jamás se dará por vencido."

  ]

  

  useEffect(() => {
 
    const typed = new Typed(el.current, {
      strings: frases,
      typeSpeed: 60,
      showCursor: false,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  return (
    <>
     <main className='tapar'>
      <section className='section1'>
        <h1>Suave, dulce y delicada 💕</h1>
        <h2 ref={el}></h2>
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
        <section className='section2' data-aos="fade-up">
          <p className='letra'>🎵 I was enchanted to meet you</p>
          <p className='letra'>🎵 Please don't be in love with someone else</p>
          <p className='letra'>🎵 Please don't have somebody waiting on you</p>
          <p className='letra'>🎵 Please don't be in love with someone else</p>
          <p className='letra'>🎵 Please don't have somebody waiting on you </p>
        </section>
     </main>
    </>
  )
}


