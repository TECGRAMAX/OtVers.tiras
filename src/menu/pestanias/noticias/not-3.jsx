import '../estilos/blogdos.css'
import { useState} from 'react';
import { Helmet } from 'react-helmet-async';
import perfil from '../../assets/integrados/SaiyanYulickAF/perfil.webp'
import portada from '../../assets/integrados/SaiyanYulickAF/portada.webp'
import boceto from '../../assets/integrados/SaiyanYulickAF/saf2.webp'
import presentacion from '../../assets/integrados/SaiyanYulickAF/mellizasjotapege.webp'
import caracteristicas from '../../assets/integrados/SaiyanYulickAF/mellizasjotapegeotravez.webp'
import futer from '../../assets/integrados/mellizas.webp'

const Blog = () => {
  const textoIntro = `<b>Una nueva autora de nombre «Saiyan Yulick AF» nos ha enviado dos personajes «Las Mellizas».<br/>`

  const subtitulo = `<b>Explica su autor:</b>`

  const textoRaza = `<b>Se saben que son híbridas de Saiyan, su apariencia es claramente similar a un Androide característico.</b>No se sabe más al respecto`

  const textoIdioma = `<b>Diseño realizado por OtBot.</b>`

  const textoFinal = `<div class="headline-top"><b>¿Como apareceran las mellizas en OT.VERS.?</b></div>
                      <div class="headline-bottom"><b>¡¡NO SE LO PIERDAN!!</b></div>`

  return (
    <div className="contenedor">
      <Helmet>
        <title>Blog - Lilix en OT.VERS</title>
        <meta property="og:title" content="Lilix de Polymyr en OT.VERS" />
        <meta property="og:description" content="Conoce a Lilix, personaje de la marca The Piggy Draws, ahora integrado en OT.VERS. Descubre su historia, habilidades y más." />
        <meta property="og:image" content="https://ot-vers-tiras.vercel.app/imagenes/lilix-portada.jpg" />
        <meta property="og:url" content="https://ot-vers-tiras.vercel.app/Blog" />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lilix de Polymyr en OT.VERS" />
        <meta name="twitter:description" content="Conoce a Lilix, personaje de la marca The Piggy Draws, ahora integrado en OT.VERS. Descubre su historia, habilidades y más." />
        <meta name="twitter:image" content="https://ot-vers-tiras.vercel.app/imagenes/lilix-portada.jpg" />
      </Helmet>
      <div className="acomodo">
        <img src={portada} alt="Portada" className="portadaimg" />
        <img src={perfil} alt="Perfil" className="perfilimg" />
      </div>

      <div className="introsection">
        <img src={boceto} alt="Boceto" className="bocetoimg" />
        <div className="introtext" dangerouslySetInnerHTML={{ __html: textoIntro }} />
      </div>

      <div className="sub">
        <div className="subtitulo" dangerouslySetInnerHTML={{ __html: subtitulo }} />
      </div>

      <div className="contenido">


        <div className="sectionleft">
          <div className="text" dangerouslySetInnerHTML={{ __html: textoRaza }} />
          <img src={presentacion} alt="Lilix" className="imgmedium" />
        </div>

        <div className="sectionbelow">
          <img src={caracteristicas} alt="Lilix Idioma" className="imgwide" />
          <div className="text" dangerouslySetInnerHTML={{ __html: textoIdioma }} />
        </div>

      </div>

      <div className="futer">

        <div className="sectionheadline">
          <img src={futer} alt="Lilix Saiyan" className="headlineimg" />
          <div className="headlinetext" dangerouslySetInnerHTML={{ __html: textoFinal }} />
        </div>
      </div>

    </div>
  )
}

export default Blog







/*
   // Estado para el efecto de "escribir"
    const [texto, setTexto] = useState("")

    useEffect(() => {
      let i = 0
      const intervalo = setInterval(() => {
        setTexto(textoCompleto.slice(0, i))
        i++
        if (i > textoCompleto.length) clearInterval(intervalo)
      }, 50) // velocidad de escritura (ms)
      return () => clearInterval(intervalo)
    }, [])

    return (
      <section className="Noticias">
        <div className="blog-container">
          {/* Imagen en la esquina superior izquierda *//*
          <img src={lilix} alt="Lilix de Polymyr" width='500px' />

          {/* Texto con efecto de escritura *//*
          <article className="blog-text">
            <p>{texto}</p>
          </article>
        </div>
      </section>
    )
  }
*/

