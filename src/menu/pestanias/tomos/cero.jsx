import '../estilos/tomocont.css'
import '../estilos/cuadro.css'

import { useState, useEffect } from 'react'

import audio from './hojas/hcero/SolidStateScouter .mp3'

import donaciones from '../../assets/donar.png';
import x from '../../assets/donarx.png'; 

import portada from './hojas/hcero/hoja-a.webp'
import anuncio from './hojas/hcero/hoja-a-a.webp'
import destitulada from './hojas/hcero/hoja-a-b.webp'

import uno from './hojas/hcero/hoja-b.webp'
import dos from './hojas/hcero/hoja-c.webp'
import tres from './hojas/hcero/hoja-d.webp'
import cuatro from './hojas/hcero/hoja-e.webp'
import cinco from './hojas/hcero/hoja-f.webp'
import seis from './hojas/hcero/hoja-g.webp'
import siete from './hojas/hcero/hoja-h.webp'
import ocho from './hojas/hcero/hoja-i.webp'
import nueve from './hojas/hcero/hoja-j.webp'
import diez from './hojas/hcero/hoja-k.webp'
import once from './hojas/hcero/hoja-l.webp'
import doce from './hojas/hcero/hoja-ll.webp'
import trece from './hojas/hcero/hoja-m.webp'
import catorce from './hojas/hcero/hoja-n.webp'
import quince from './hojas/hcero/hoja-o.webp'
import diesiceis from './hojas/hcero/hoja-p.webp'
import diesiciete from './hojas/hcero/hoja-q.webp'
import diesiocho from './hojas/hcero/hoja-r.webp'
import diesinueve from './hojas/hcero/hoja-s.webp'
import veinte from './hojas/hcero/hoja-t.webp'
import veintiuno from './hojas/hcero/hoja-u.webp'
import veintidos from './hojas/hcero/hoja-v.webp'
import veintitres from './hojas/hcero/hoja-w.webp'
import veinticuatro from './hojas/hcero/hoja-x.webp'
import veinticinco from './hojas/hcero/hoja-y.webp'
import veintiseis from './hojas/hcero/hoja-z.webp'
import veintisiete from './hojas/hcero/hoja-z-a.webp'
import veintiocho from './hojas/hcero/hoja-z-a.webp'
import veintinueve from './hojas/hcero/hoja-z-b.webp'
import treinta from './hojas/hcero/hoja-z-c.webp'
import treintaiuno from './hojas/hcero/hoja-z-d.webp'
import treintaidos from './hojas/hcero/hoja-z-e.webp'
import vacio from '../../assets/atomos.png'
const Hoja = () => {
    const [mostrarSubmenu, setMostrarSubmenu] = useState(false);
    const toggleSubmenu = (e) => {
        e.preventDefault();
        setMostrarSubmenu((prev) => !prev);
    };

    const tarjetas = [
        { image: portada, pagina: 'portada' },
        { image: anuncio, pagina: 'anuncio' },
        { image: destitulada, pagina: 'destitulada' },
        { image: uno, pagina: 'Pagina-01' },
        { image: dos, pagina: 'Pagina-02' },
        { image: tres, pagina: 'Pagina-03' },
        { image: cuatro, pagina: 'Pagina-04' },
        { image: cinco, pagina: 'Pagina-05' },
        { image: seis, pagina: 'Pagina-06' },
        { image: siete, pagina: 'Pagina-07' },
        { image: ocho, pagina: 'Pagina-08' },
        { image: nueve, pagina: 'Pagina-09' },
        { image: diez, pagina: 'Pagina-10' },
        { image: once, pagina: 'Pagina-11' },
        { image: doce, pagina: 'Pagina-12' },
        { image: trece, pagina: 'Pagina-13' },
        { image: catorce, pagina: 'Pagina-14' },
        { image: quince, pagina: 'Pagina-15' },
        { image: diesiceis, pagina: 'Pagina-16' },
        { image: diesiciete, pagina: 'Pagina-17' },
        { image: diesiocho, pagina: 'Pagina-18' },
        { image: diesinueve, pagina: 'Pagina-19' },
        { image: veinte, pagina: 'Pagina-20' },
        { image: veintiuno, pagina: 'Pagina-21' },
        { image: veintidos, pagina: 'Pagina-22' },
        { image: veintitres, pagina: 'Pagina-23' },
        { image: veinticuatro, pagina: 'Pagina-24' },
        { image: veinticinco, pagina: 'Pagina-25' },
        { image: veintiseis, pagina: 'Pagina-26' },
        { image: veintisiete, pagina: 'Pagina-27' },
        { image: veintiocho, pagina: 'Pagina-28' },
        { image: veintinueve, pagina: 'Pagina-29' },
        { image: treinta, pagina: 'Pagina-30' },
        { image: treintaiuno, pagina: 'Pagina-31' },
        { image: treintaidos, pagina: 'Pagina-32' },
        { image: vacio, pagina: '-' },
    ];

    const [tarjetaActiva, setTarjetaActiva] = useState(null)
    const [mostrarCuadro, setMostrarCuadro] = useState(true); // Para la vista expandida con cuadro de aviso*
    const cerrarTarjeta = () => setTarjetaActiva(null)

    const cambiarTarjeta = (direccion) => {
        if (direccion === 'prev' && tarjetaActiva > 0) {
            setTarjetaActiva(tarjetaActiva - 1)
        } else if (direccion === 'next' && tarjetaActiva < tarjetas.length - 1) {
            setTarjetaActiva(tarjetaActiva + 1)
        }
    }

    const ua = navigator.userAgent;
    const cbu = "1430001713046954610018";
    const dolarTag = "197328agosto";

    const BrubankClick = (e) => {
      e.preventDefault();

      let appUrl = "";
      let storeUrl = "";


      if (/Android/i.test(ua)) {
        // Intent en Android: abre la app si está instalada, si no → Play Store
        appUrl = "intent://brubank#Intent;scheme=brubank;package=com.brubank;end";
        storeUrl = "https://play.google.com/store/apps/details?id=com.brubank";
      } else if (/iPhone|iPad|iPod/i.test(ua)) {
        // En iOS se usa el esquema brubank:// y fallback a App Store
        appUrl = "brubank://";
        storeUrl = "https://apps.apple.com/ar/app/brubank/id1436487560";
      }  else {
        appUrl = "";
        storeUrl = "";
        // En desktop u otros sistemas → abrir web oficial en pestaña nueva
        window.open("https://www.brubank.com", "_blank", "noopener,noreferrer");
        return; // salir de la función para no ejecutar lo demás
      }

      // Intentar abrir la app en móviles
      const now = Date.now();
      window.location.href = appUrl;

      // Si no abre en ~1s, redirigir a la tienda
      setTimeout(() => {
        if (Date.now() - now < 1500 && storeUrl) {
          window.location.href = storeUrl;
        }
      }, 1000);

    // Mensaje informativo
      alert("CBU para transferir: " + cbu);
    };

    const DolarAPPClick = (e) => {
      e.preventDefault();

      let appUrl = "dolarapp://"; 
      let storeUrl = "";


      if (/Android/i.test(ua)) {
        storeUrl = "https://play.google.com/store/apps/details?id=com.dolarapp";
      } else if (/iPhone|iPad|iPod/i.test(ua)) {
        storeUrl = "https://apps.apple.com/ar/app/dolarapp/id1500916609";
      } else {
        // En desktop u otros sistemas → abrir web oficial en pestaña nueva
        window.open("https://www.dolarapp.com", "_blank", "noopener,noreferrer");
        return; // salir de la función para no ejecutar lo demás
      }

      // Intentar abrir la app en móviles
      const now = Date.now();
      window.location.href = appUrl;

      // Si no abre en ~1s, redirigir a la tienda
      setTimeout(() => {
        if (Date.now() - now < 1500 && storeUrl) {
          window.location.href = storeUrl;
        }
      }, 1000);

      alert("Dolar Tag para transferir: " + dolarTag);
    };

    useEffect(() => {
        // Función que escucha las teclas presionadas
        const handleKeyDown = (e) => {
            if (tarjetaActiva !== null) { 
            // Solo funciona si hay una tarjeta activa (overlay abierto)
            if (e.key === "ArrowLeft") {
            // Flecha izquierda → ir a la tarjeta anterior
            cambiarTarjeta("prev");
            } else if (e.key === "ArrowRight") {
            // Flecha derecha → ir a la tarjeta siguiente
            cambiarTarjeta("next");
            } else if (e.key === "Escape") {
            // Escape → cerrar el overlay
            cerrarTarjeta();
            }
            }
            };

            // Se agrega el listener al montar el componente
            window.addEventListener("keydown", handleKeyDown);

            // Se limpia el listener al desmontar o cambiar tarjetaActiva
            return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [tarjetaActiva]); 


    useEffect(() => {
        const handlePopState = () => cerrarTarjeta()
        window.addEventListener('popstate', handlePopState)
        return () => window.removeEventListener('popstate', handlePopState)
    }, [])

// 🔊 Reproducir audio en bucle al montar el componente
    useEffect(() => {
        const bgAudio = new Audio(audio);
        bgAudio.loop = true;
        bgAudio.volume = 0.5; // opcional: ajustar volumen
        bgAudio.play().catch(err => {
            console.log("Autoplay bloqueado por el navegador:", err);
        });

        // limpiar al desmontar
        return () => {
            bgAudio.pause();
            bgAudio.currentTime = 0;
        };
    }, []);


    return (
        <>
            <section className="tomo">
                {/* Tarjeta Principal */}
                <div className="card-principal">
                    <img src={tarjetas[0].image} alt="Principal" />
                    <div className="contenido">
                        <h2>UN EVENTO DECISIVO</h2>

                        <div>

                            <p style={{ marginTop: '60px' }}>
                                Este evento desató una cadena de cambios en tiempos futuros..., 
                                una pelea de baja clase y sin importancia, que define el destino de tres especies..., de tres familias.
                            </p>
                            <p className="enlaces" style={{ position: 'relative' }}>
                                <button onClick={toggleSubmenu} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                    <img
                                        width={mostrarSubmenu ? "30px" : "500px"}
                                        src={mostrarSubmenu ? x : donaciones}
                                        alt="donaciones"
                                        style={mostrarSubmenu ? {
                                            position: 'absolute',
                                            top: 0,
                                            right: 0, 
                                            zIndex: 10
                                        } : {}}
                                    />
                                </button>

                                {mostrarSubmenu && (
                                    <div className="submenu">
                                         <a href="https://www.brubank.com" 
                                            target="_blank" rel="noopener noreferrer" 
                                            onClick={BrubankClick} >
                                                BRUBANK (<b>ARG</b>)
                                        </a>
                                        <a href="https://www.dolarapp.com" 
                                            target="_blank" rel="noopener noreferrer" 
                                            onClick={DolarAPPClick} >
                                                DOLAR APP  (<b>INT</b>)
                                        </a>
                                    </div>
                                )}
                            </p>
                        </div>

                    </div>
                </div>

                {/* Tarjetas */}
                {tarjetaActiva === null && (
                    <div className="cartas">
                        {tarjetas.map((card, index) => (
                            <div key={index} className="card" onClick={() => setTarjetaActiva(index)}>
                                <div className="img">
                                    <img width="100%" src={card.image} alt={card.pagina} />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </section>

            {/* Vista expandida con cuadro de aviso*/}
            {tarjetaActiva !== null && (
                <div className="overlay">
                    <button className="cerrar" onClick={cerrarTarjeta}><b>X</b></button>
                    <div className="contenedor-expandido">
                        <div className="contenido-expandido">
                            <p>{tarjetas[tarjetaActiva].pagina}</p>
                            <img 
                                src={tarjetas[tarjetaActiva].image} 
                                alt={`Tarjeta ${tarjetaActiva + 1}`}
                            />
                            <p>{`Hoja ${tarjetaActiva + 1} de ${tarjetas.length}`}</p>
                        </div>
                    <button className="prev" onClick={() => cambiarTarjeta('prev')}>←</button>
                    <button className="next" onClick={() => cambiarTarjeta('next')}>→</button>
                </div>
                {/* Mostrar el cuadro solo si la tarjeta es vacía y mostrarCuadro está activo */}
                {tarjetas[tarjetaActiva].pagina === '-' && mostrarCuadro && (
                    <div className="cuadro">
                        <button className="cerrarc" onClick={() => setMostrarCuadro(false)}>
                            <b>X</b>
                        </button>
                        <p>
                          Si llegaste hasta aquí y te gusta la calidad de nuestro trabajo, 
                          por favor donanos en la casilla donaciones para poder continuar.
                          <br/> 
                          Muchas gracias.
                        </p>
                        <button
                          className="don" 
                          onClick={() => {
                            cerrarTarjeta(); // cerrar vista expandida
                            setMostrarSubmenu(true); // abrir submenú
                            document.querySelector('.contenido')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          <img src={donaciones} alt="Donaciones" />
                        </button>
                    </div>
                )}
                </div>
            )}
        </>
    )
}

export default Hoja
