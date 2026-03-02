import './estilos/dibujos.css'
import img1 from '../assets/bdib.png'
import img2 from '../assets/abtomos.png'
import img3 from '../assets/cnotic.png'

import red1 from '../assets/tomosbri.png'
import red2 from '../assets/tomosbri.png'
import red3 from '../assets/tomosbri.png'
import red4 from '../assets/tomosbri.png'

const Dibujos = () => {

    const tarjetas = [
        {
            image:[img1],
            nom:'Nombre del dibujo',
            urlv:['#'],
            descrip:'Descripción',
            autor:'- dibujante',
            redsoc:'REDES:',
        },
        {
            image:[img2],
            nom:'Nombre del dibujo',
            urlv:['#'],
            descrip:'Descripción',
            autor:'- dibujante',
            redsoc:'REDES:',
        },
        {
            image:[img3],
            nom:'Nombre del dibujo',
            urlv:['#'],
            descrip:'Descripción',
            autor:'- dibujante',
            redsoc:'REDES:',
        },
    ]
    const mantener = (e) => {
        e.preventDefault();
    }
    return (
        <section className="Dibujos">

            <h1>ÁLBUM</h1>

            <div className="album">
                {
                    tarjetas.map((card,index) => {
                        const noHayEnlace = card.urlv[0] === '#';
                        const almoadilla = noHayEnlace ? { onClick: mantener, style: { cursor: 'default' } } : { target: "_blank", href: card.urlv[0] };

                        return(
                            <div key={index} className="presentacion">
                                <h2>{card.nom}</h2>
                                <div className="dib">
                                    <img src={card.image} />
                                    <div className="descripcion">
                                        <p>{card.descrip}</p>
                                        <p>{card.autor}</p>
                                        <a {...almoadilla} className="almoadilla">
                                            <div className="redes">
                                                    <p>{card.redsoc}</p>
                                                    <div className="imagen">
                                                        <img src={red1} />
                                                        <img src={red2} />
                                                        <img src={red3} />
                                                        <img src={red4} />
                                                    </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Dibujos;