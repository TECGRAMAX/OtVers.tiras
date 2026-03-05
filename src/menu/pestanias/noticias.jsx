import './estilos/noticias.css'
import lilix from '../assets/integrados/lilix.webp'
import tpd from '../assets/integrados/tpd-b.webp'
import img1 from '../assets/actomos.png'

import NotUno from './noticias/not-1.jsx'

import facebookLogo from '../assets/facebook.png'
import instagramLogo from '../assets/instagram.png'
import xLogo from '../assets/donarx.png'

import { Routes, Route, useLocation, Link } from 'react-router-dom'

const Noticias = () => {
  const tarjetas = [
    {
      titular: 'Lilix de Polymyr',
      subtitulo: 'Personaje de la marca The piggy draws.',
      noticia:
        'Se ha llegado a un acuerdo con la marca para incluir a Lilix en otvers. Una extraterrestre de la raza Polymyr, de composición corporal libre del componente mineral óseo, siendo una masa libre y fácilmente moldeable; también cambia o modifica a voluntad la melamina de su cuerpo.',
      image: lilix,
      autorImg: tpd,
      redes: [
        { href: 'https://www.facebook.com/profile.php?id=61575106370554', logo: facebookLogo, alt: 'Facebook' },
        { href: 'https://www.instagram.com/the.piggy.draws', logo: instagramLogo, alt: 'Instagram' },
        { href: 'https://twitter.com/thepiggydraws', logo: xLogo, alt: 'X/Twitter' },
      ],
      abreNot: true,   // Esta tarjeta abre la sub‑ruta
    },
    {
      titular: 'TITULO',
      subtitulo: 'Subtítulo',
      noticia: 'NOTICIA ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ...',
      image: img1,
      autorImg: null,
      redes: [],
      abreNot: false,
    },
    {
      titular: 'TITULO',
      subtitulo: 'Subtítulo',
      noticia: 'NOTICIA ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ...',
      image: img1,
      autorImg: null,
      redes: [],
      abreNot: false,
    },
  ]

  const location = useLocation()
  const esRutaNot = location.pathname.endsWith('/Noticias/NotUno') // detecta si estás en /Noticias/NotUno

  return (
    <>
      <Routes>
        <Route path="NotUno" element={<NotUno />} />   {/* sub‑ruta anidada -solo enlace usando variable principal- */}
      </Routes>

      {!esRutaNot && ( // oculta la sección si la ruta es /Noticias/NotUno
        <section className="Noticias">
          <h2>TODAS LAS NOTICIAS:</h2>
          <div className="cartas">
            {tarjetas.map((card, index) => (
              <div key={index} className="carta">
                <article className="titular">
                  <h1>{card.titular}</h1>
                  <h2>{card.subtitulo}</h2>
                </article>

                <div className="noticia">
                  {card.abreNot ? (
                    <Link to="NotUno">  
                      <img src={card.image} alt={card.titular} />
                    </Link>
                  ) : (
                    <img src={card.image} alt={card.titular} />
                  )}

                  <article className="articulo">
                    <h2>{card.noticia}</h2>
                    {card.autorImg && (
                      <p className="autor">
                        <img className="autorImg" src={card.autorImg} alt="Autor" />
                      </p>
                    )}
                    <div className="redes">
                      {card.redes.map((red, i) => (
                        <a key={i} href={red.href} target="_blank" rel="noopener noreferrer">
                          <img src={red.logo} alt={red.alt} className="redImg" />
                        </a>
                      ))}
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  )
}

export default Noticias
