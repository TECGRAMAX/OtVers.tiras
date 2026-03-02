import './estilos/noticias.css'
import img1 from '../assets/actomos.png'

const Noticias = () => {

    const tarjetas = [
        {
            titular:'TITULO',
            subtitulo:'Subtítulo',
            noticia:'NOTICIA',
            image:[img1],
            autor:'-Autor',
            urlv:['#'],
        },
        {
            titular:'TITULO',
            subtitulo:'Subtítulo',
            noticia:'NOTICIA',
            image:[img1],
            autor:'-Autor',
            urlv:['#'],
        },
    ]

    const mantener = (e) => {
        e.preventDefault();
    }
    return (
        <section className="Noticias">

            <div className="cartas">

                {
                    tarjetas.map((card,index) => {
                        const noHayEnlace = card.urlv[0] === '#';
                        const almoadilla = noHayEnlace ? { onClick: mantener, style: { cursor: 'default' } } : { target: "_blank", href: card.urlv[0] };

                        return(
                            <div key={index} className="carta">

                                <article className="titular">
                                    <h1>{card.titular}</h1>
                                    <h2 >{card.subtitulo}</h2>
                                </article>
                                <a {...almoadilla}>
                                    <div className="noticia">
                                            <article className="articulo">
                                                 <h2 className="noticia">{card.noticia}</h2>
                                                 <p className="autor">{card.autor}</p>
                                            </article>
                                            <img src={card.image} />
                                    </div>
                                </a>
                            </div>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Noticias;