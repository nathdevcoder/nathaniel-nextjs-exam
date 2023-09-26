'use client'
import React, { useEffect, useState } from 'react'
import Stars from './stars'
import Variants from './Variants'

type variantType = {
    name: string
    isAvailable: string
    options: {[key:string]: string}
    price: number
}

type variantsType = variantType []

type optionsType = {
    name: string 
    values: string[]
} []

 

export default function ProductVariants({name, variants, options}: {name: string, variants: variantsType, options: optionsType}) {
    const [active, setActive] = useState( options[0].values[0])
    const [detail, setDetail] = useState<variantType>()
    const [activeVariants, setActiveVariants] = useState<variantsType>()

    useEffect(()=>{
        const act = variants.filter(dt=>dt.options.color == active)
        setActiveVariants(act) 
        setDetail(act[0])
    }, [active])
    
  return  (
    <div className='col-span-9 w-96 mt-16'>
        <h1 className="font-semibold text-center text-xl">{name} <br/>{detail?.name}</h1>
        <p className="mx-0 mb-2.5 underline text-center text-[#707070]">Mobile phones:</p>
        <Stars />
        <p className="text-xl mt-2.5 font-semibold text-center text-[#f36d22]">{detail?.price}</p>
        <p className="text-xs mt-2.5 mb-1 font-semibold text-center text-[#126B60]">VARIANTS:</p>
        {
            options.map(opt=> {
                const available: string[] = []
                activeVariants?.forEach(d=>available.push(d.options[opt.name])) 
                return <Variants key={Math.random()} css='mt-5' opt={opt.values} avails={available} title={opt.name} />
            })
        } 
        

    </div>
  )
}
