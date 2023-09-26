import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import Image from 'next/image' 

 

export default function ProductMedia({image}: {image: string}) {
  return (
    <div className="col-span-3 mr-20 items-center">
        <Breadcrumbs />
        <div className="pl-0 pr-0 mt-16">
            <Image src={image} alt='asd' height={456} width={456} />
        </div>
    </div>
  )
}
