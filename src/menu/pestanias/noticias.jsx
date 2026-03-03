import './estilos/noticias.css'
import lilix from '../assets/integrados/lilix.webp'
import img1 from '../assets/actomos.png'

import facebookLogo from '../assets/facebook.png'
import instagramLogo from '../assets/instagram.png'
import twitterLogo from '../assets/donarx.png'

const Noticias = () => {

    const tarjetas = [
          {
            titular: 'Lilix de The piggy draws',
            subtitulo: 'Un personaje que la marca The piggy draws nos ha brindado para incluir en otvers.',
            noticia: 'Lilix es una Polymyr...',
            image: lilix,
            autor: 'The piggy draws',
            autorImg: 'https://www.facebook.com/photo/?fbid=122145912518836879&set=a.122093148932836879',
            redes: [
              { url: 'https://www.facebook.com/profile.php?id=61575106370554', icon: facebookLogo },
              { url: 'https://www.instagram.com/the.piggy.draws', icon: instagramLogo },
              { url: 'https://twitter.com/thepiggydraws', icon: twitterLogo },
            ],
            urlv: ['#'], // agrega para que no rompa la lógica
          },
          {
            titular:'TITULO',
            subtitulo:'Subtítulo',
            noticia:'NOTICIA',
            image: img1, // corregido
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
                                                 <p className="autor">
                                                    <img src={card.autorImg} alt={card.autor} />
                                                 </p>
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