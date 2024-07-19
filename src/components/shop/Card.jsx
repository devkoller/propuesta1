import React from 'react'

export const Card = ({ item }) => {
  return (
    <article
      className={`
      flex flex-col items-center gap-5
      bg-gradient-to-r from-cyan-500 to-blue-500 
      py-5 rounded-md
      text-white text-xl
      
    `}
    >
      <h3 className='text-5xl'>${item.price}</h3>
      <h2 className='font-bold text-8xl'>{item.gb}GB</h2>
      <span>+ Redes sociales</span>
      <span>{item.days} días de vigencia</span>

      <button
        className={`
          bg-violet-500 py-2 px-4 rounded-xl font-bold 
          duration-300
          hover:bg-indigo-600
          hover:scale-105
        `}
      >
        ¡Lo quiero!
      </button>
    </article>
  )
}
