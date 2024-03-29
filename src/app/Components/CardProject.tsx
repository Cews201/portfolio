import React from 'react'
import Image from 'next/image'


const CardProject = () => {
  return (

    <section className="text-gray-600 body-font">
    <div className="container px-5 py-0 mx-auto">
      <div className="flex flex-wrap w-full mb-20">
        <div className="container px-0 py-0 mx-auto">
          <Image
            key='logo-cews'
            src="/Logo_blanco.png"
            alt='logo-cews'
            width={200}
            height={200}   
          />
        </div>
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Bienvenido a mi portafolio de proyectos</h1>
          <div className="h-1 w-20 bg-yellow-500 rounded"></div>
        </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">¡Hola! Soy un desarrollador junior apasionado por la tecnología y con experiencia en React, Node.js y Python. En este portafolio, podrás encontrar una selección de mis proyectos más destacados que demuestran mis habilidades y conocimientos.</p>
        </div>
      <div className="flex flex-wrap -m-4">
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"/>
            <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">SUBTITLE</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content"/>
            <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">SUBTITLE</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content"/>
            <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">SUBTITLE</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"/>
            <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">SUBTITLE</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default CardProject
