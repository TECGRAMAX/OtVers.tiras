import '../estilos/blog.css'
import { useState} from 'react';
import { Helmet } from 'react-helmet-async';
import perfil from '../../assets/integrados/blog/tpd-a.webp'
import portada from '../../assets/integrados/blog/tpd-b.webp'
import boceto from '../../assets/integrados/blog/parikaboc.jpg'
import parika from '../../assets/integrados/blog/Parika.png'
import parikacompleta from '../../assets/integrados/blog/Parikafondo.png'

const Blog = () => {
  const textoIntro = `<b>El autor y su marca «The piggy draws» nos trajo voluntariamente un nuevo personaje, esta vez de la raza SAIYAN.<br/>
    Será incluida en una futura narrativa de otvers.</b>`

  const subtitulo = `<b>Explica su autor:</b>`

  const textoRaza = `<b>De la raza Saiyan, no tiene más contenido más que su nombre: Parika.</b>`

  const textoIdioma = `<b>El diseño en digital es traido por el dibujante de Otvers.</b>`

  return (
    <div className="contenedor">
      <Helmet>
        <title>Blog - Parika en OT.VERS</title>
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
          <img src={parika} alt="Parika" className="imgmedium" />
        </div>

        <div className="sectionbelow">
          <img src={parikacompleta} alt="Parika-Fondo" className="imgwide" />
          <div className="text" dangerouslySetInnerHTML={{ __html: textoIdioma }} />
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

