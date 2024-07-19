import React from 'react'
import { TopMenu, BottomMenu } from '../components'

//images
import banner from '../assets/img/header.webp'
import img1 from '../assets/img/img1.webp'
import network from '../assets/img/globe.avif'
import world from '../assets/img/world.avif'
import g4 from '../assets/img/4g.avif'
import g5 from '../assets/img/5g.avif'
import cobertura from '../assets/img/cobertura.jpg'

//icons
import { MdOutlineTouchApp, MdLockOutline } from 'react-icons/md'
import { LuQrCode } from 'react-icons/lu'
import { BsClockHistory } from 'react-icons/bs'
import { BsPhoneFlip } from 'react-icons/bs'
import { GiEcology } from 'react-icons/gi'
import { FiSend } from 'react-icons/fi'

export const Home = () => {
  return (
    <div className='relative'>
      <TopMenu />
      <img src={banner} alt='' className='mb-5' />
      <section className='px-3 lg:w-4/5 mx-auto mb-5'>
        <h2 className='text-cyan-600 font-bold text-5xl mb-5'>Beneficios</h2>
        <div className='flex gap-5 flex-col lg:flex-row items-center'>
          <img src={img1} alt='' className='object-none' />
          <ul className='grid grid-cols-2 gap-5 text-xl text-justify'>
            <li className='flex items-center justify-center gap-3 flex-col md:flex-row'>
              <MdOutlineTouchApp className='text-9xl' />
              <p>
                <span className='font-bold text-cyan-600'>
                  Muy fácil de usar
                </span>
                , escanea el código QR, configura y disfruta los beneficios.
              </p>
            </li>
            <li className='flex items-center gap-3 flex-col md:flex-row'>
              <MdLockOutline className='text-9xl' />
              <p>
                <span className='font-bold text-cyan-600'>Seguridad</span>,
                olvídate de daños físicos o perdida de tu SIM
              </p>
            </li>
            <li className='flex items-center gap-3 flex-col md:flex-row'>
              <LuQrCode className='text-9xl' />
              <p>
                <span className='font-bold text-cyan-600'>
                  Dos líneas en tu móvil
                </span>
                , al mismo tiempo al sumar tu eSIM y tu SIM física
              </p>
            </li>
            <li className='flex items-center gap-3 flex-col md:flex-row'>
              <BsClockHistory className='text-9xl' />
              <p>
                <span className='font-bold text-cyan-600'>Entrega rápida</span>,
                compra online y configura en tu hogar
              </p>
            </li>
            <li className='flex items-center gap-3 flex-col md:flex-row'>
              <BsPhoneFlip className='text-9xl' />
              <p>
                <span className='font-bold text-cyan-600'>
                  Transfiere fácilmente
                </span>
                , toda tu información
              </p>
            </li>
            <li className='flex items-center gap-3 flex-col md:flex-row'>
              <GiEcology className='text-9xl' />
              <p>
                <span className='font-bold text-cyan-600'>
                  Reducción en impacto ambiental
                </span>
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className='px-3 lg:w-4/5 mx-auto mb-5'>
        <h2 className='font-bold text-3xl mb-5 text-center'>
          Cámbiate a la nueva era de la tecnología, adquiere tu e-SIM y disfruta
        </h2>
        <div>
          <iframe
            width='100%'
            height='600'
            src='https://www.youtube.com/embed/BW5bdHc_c4k?si=BH15a0pkgaHUZZ__'
            title='YouTube video player'
            allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section
        className={`
          flex flex-col items-center
          text-white
          py-10 mb-5 
          relative max-h-50
          after:content-[''] after:absolute 
          after:top-0 after:left-0 
          after:w-full after:h-full
          after:z-1 
          after:opacity-80
          after:bg-gradient-to-r from-cyan-500 to-blue-500 
        `}
      >
        <img
          src={cobertura}
          alt=''
          className='object-cover absolute w-full h-full z-0 top-0 left-0'
        />
        <h3 className='font-bold text-3xl mb-5 text-center relative z-10'>
          Cobertura
        </h3>
        <p className='text-xl relative z-10'>
          Conoce la red de cobertura de AT&T
        </p>
      </section>

      <section className='px-3 lg:w-4/5 mx-auto mb-5'>
        <ul className='grid grid-cols-2 md:grid-cols-4 gap-5 text-justify text-light'>
          <li className='flex flex-col gap-3'>
            <img src={network} alt='' />
            <h3 className='text-center font-bold'>
              El ABC de Network | AT&T México
            </h3>
            <p>
              Desde 2015, hemos conectado a una gran comunidad de mexicanos
              gracias a nuestra red 4G LTE.
            </p>
          </li>
          <li className='flex flex-col gap-3'>
            <img src={world} alt='' />
            <h3 className='text-center font-bold'>
              Conoce el mapa de cobertura
            </h3>
            <p>Conoce el área de cobertura de los servicios de AT&T.</p>
          </li>
          <li className='flex flex-col gap-3'>
            <img src={g4} alt='' />
            <h3 className='text-center font-bold'>Conoce la red 4G LTE</h3>
            <p>
              Te mostramos los mapas con las ciudades que cuentan con nuestra
              red 4G LTE.
            </p>
          </li>
          <li className='flex flex-col gap-3'>
            <img src={g5} alt='' />
            <h3 className='text-center font-bold'>Red 5G</h3>
            <p>
              Conoce sobre nuestra tecnología 5G, así como los beneficios y
              dispositivos compatibles.
            </p>
          </li>
        </ul>
      </section>

      <section className='px-3 lg:w-4/5 mx-auto mb-5'>
        <h2 className='font-bold text-3xl mb-5 text-center'>
          ¿Aun tiene dudas?
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 text-xl'>
          <div>
            <div className='flex flex-col mb-3'>
              <label htmlFor='' className='ps-3'>
                Correo
              </label>
              <input
                type='text'
                className='border border-slate-500 rounded-md p-2'
                placeholder='Escribe tu correo'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='' className='ps-3'>
                Numero de teléfono
              </label>
              <input
                type='text'
                className='border border-slate-500 rounded-md p-2'
                placeholder='Escribe tu número de teléfono'
              />
            </div>
          </div>
          <div>
            <div className='flex flex-col mb-3'>
              <label htmlFor='' className='ps-3'>
                Dudas
              </label>
              <textarea
                name=''
                rows='3'
                className='border border-slate-500 rounded-md p-2'
                placeholder='Escribe tus comentarios'
              />
            </div>
            <div className='flex justify-end'>
              <button className='bg-cyan-600 py-2 px-4 flex text-white items-center gap-3 rounded-md hover:bg-cyan-800'>
                <span>Enviar</span>
                <FiSend />
              </button>
            </div>
          </div>
        </div>
      </section>

      <BottomMenu />
    </div>
  )
}
