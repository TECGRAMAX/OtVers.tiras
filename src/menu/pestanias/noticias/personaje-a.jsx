import '../estilos/noticias.css'
import lilix from '../../assets/integrados/lilix.webp'
import { useEffect, useState } from 'react'

const Thepiggydraws = () => {
  // Texto completo que quieres mostrar
  const textoCompleto = `Lilix de Polymyr. Personaje de la marca The piggy draws. 
    Se ha llegado a un acuerdo con la marca para incluir a Lilix en otvers. 
    Una extraterrestre de la raza Polymyr, de composición corporal libre del componente mineral óseo, 
    siendo una masa libre y fácilmente moldeable; también cambia o modifica a voluntad la melamina 
    de su cuerpo.`

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
        {/* Imagen en la esquina superior izquierda */}
        <img src={lilix} alt="Lilix de Polymyr" width='500px' />

        {/* Texto con efecto de escritura */}
        <article className="blog-text">
          <p>{texto}</p>
        </article>
      </div>
    </section>
  )
}

export default Thepiggydraws
