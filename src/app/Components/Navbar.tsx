// Link, Redes sociales, imágenes
import React from 'react'
import { SocialMedia } from '../../../constants'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='fixed-top-0 w-full h-full flex'>
        <div className='flex flex-row gap-3 items-center'>
          <div className='flex flex-row'>
            <div className='relative'>
              {
                
              }
            </div>
          </div>            
        </div>

        <div className='absolute flex flex-col'>
          <Link
            href="/skills"
            className="text-lg"
            
          />

        </div>

        <div className='flex flex-row'>
          {SocialMedia.map((social) =>(
            <a className='fixed-top-0 w-full h-full flex' target='blank' href={social.href}>
              <Image
              key={social.name}
              src={social.src}
              alt={social.name}
              width={40}
              height={40}        
            />
            </a>
            
          ))        
            
          }
        </div>
      
    </div>
  )
}

export default Navbar
