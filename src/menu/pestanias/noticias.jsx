import './estilos/noticias.css'
import lilix from '../assets/integrados/lilix.webp'
import parika from '../assets/integrados/blog/Parikapres.png'
import tpd from '../assets/integrados/tpd-b.webp'
import img1 from '../assets/actomos.png'

import NotUno from './noticias/not-1.jsx'
import NotDos from './noticias/not-2.jsx'

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
      abreNot: true,
      ruta: 'NotUno',
    },
    {
      titular: 'MUJER SAIYAN',
      subtitulo: 'Personaje de la marca The piggy draws.',
      noticia: 'Un Nuevo personaje ha llegado a OtVers, nuevamente de parte de la marca The piggy draws, una mujer saiyagin con diseño renovado.',
      image: parika,
      autorImg: tpd,
      redes: [
        { href: 'https://www.facebook.com/profile.php?id=61575106370554', logo: facebookLogo, alt: 'Facebook' },
        { href: 'https://www.instagram.com/the.piggy.draws', logo: instagramLogo, alt: 'Instagram' },
        { href: 'https://twitter.com/thepiggydraws', logo: xLogo, alt: 'X/Twitter' },
      ],
      abreNot: true,
      ruta: 'NotDos',
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
  const esRutaNot =
    location.pathname.includes('/Noticias/NotUno') ||
    location.pathname.includes('/Noticias/NotDos')

  return (
    <>
      <Routes>
        <Route path="NotUno" element={<NotUno />} />
        <Route path="NotDos" element={<NotDos />} />   {/* nueva sub‑ruta */}
      </Routes>

      {!esRutaNot && (
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
                  {card.abreNot && card.ruta ? (
                    <Link to={card.ruta}>
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