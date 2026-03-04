import './estilos/noticias.css'
import lilix from '../assets/integrados/lilix.webp'
import tpd from '../assets/integrados/tpd.png'
import img1 from '../assets/actomos.png'

import Pa from './noticias/personaje-a.jsx'

import facebookLogo from '../assets/facebook.png'
import instagramLogo from '../assets/instagram.png'
import xLogo from '../assets/donarx.png'

import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

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
        {
          href: 'https://www.facebook.com/profile.php?id=61575106370554',
          logo: facebookLogo,
          alt: 'Facebook',
        },
        {
          href: 'https://www.instagram.com/the.piggy.draws',
          logo: instagramLogo,
          alt: 'Instagram',
        },
        {
          href: 'https://twitter.com/thepiggydraws',
          logo: xLogo,
          alt: 'X/Twitter',
        },
      ],
      urlv: ['#'],
    },
    {
      titular: 'TITULO',
      subtitulo: 'Subtítulo',
      noticia: 'NOTICIA ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ...',
      image: img1,
      autorImg: null,
      redes: [],
      urlv: ['#'],
    },
    {
      titular: 'TITULO',
      subtitulo: 'Subtítulo',
      noticia: 'NOTICIA ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ...',
      image: img1,
      autorImg: null,
      redes: [],
      urlv: ['#'],
    },
  ]

  const location = useLocation()
  const esRutapa = location.pathname.endsWith('/Pa')

  const mantener = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Routes>
        <Route path="Pa" element={<Pa />} />
      </Routes>

      {!esRutapa && (
        <section className="Noticias">
          <div className="cartas">
            {tarjetas.map((card, index) => {
              const noHayEnlace = card.urlv[0] === '#'
              const almoadilla = noHayEnlace
                ? { onClick: mantener, style: { cursor: 'default' } }
                : { target: '_blank', href: card.urlv[0] }

              return (
                <div key={index} className="carta">
                  <article className="titular">
                    <h1>{card.titular}</h1>
                    <h2>{card.subtitulo}</h2>
                  </article>
                  <div
                    onClick={() => {
                      if (card.urlv[0] !== '#') {
                        window.open(
                          card.urlv[0],
                          '_blank',
                          'noopener,noreferrer'
                        )
                      }
                    }}
                    style={{
                      cursor: card.urlv[0] !== '#' ? 'pointer' : 'default',
                    }}
                  >
                    <div className="noticia">
                      <img src={card.image} alt={card.titular} />
                      <article className="articulo">
                        <h2>{card.noticia}</h2>
                        {card.autorImg && (
                          <p className="autor">
                            <img
                              className="autorImg"
                              src={card.autorImg}
                              alt="Autor"
                            />
                          </p>
                        )}
                        <div className="redes">
                          {card.redes.map((red, i) => (
                            <a
                              key={i}
                              href={red.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={red.logo}
                                alt={red.alt}
                                className="redImg"
                              />
                            </a>
                          ))}
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      )}
    </>
  )
}

export default Noticias
