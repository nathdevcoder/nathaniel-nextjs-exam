'use client'
import React, { useEffect, useState } from 'react'
import Stars from './stars'
import Variants from './Variants'
import { filterProducts } from '@src/utils/Filter'
import { formatPrice } from '@src/utils/formater'


 

export default function ProductVariants({name, variants, options}: {name: string, variants: variantsType, options: optionsType}) {
    const [active, setActive] = useState<activesType>( )
    const [detail, setDetail] = useState<variantType>() 

    useEffect(()=>{
        const [act, reff] =  filterProducts(options, variants, null, 0, '')
        setActive(act)  
        setDetail(reff)  
    }, [])

    function filter(ind: number, value: string) { 
        const [act, reff] =  filterProducts(options, variants, active || null, ind, value)

        setActive(act)   
        setDetail(reff) 
    }
    
  return  (
    <div className='col-span-9 w-96 mt-16'>
        <h1 className="font-semibold text-center text-xl">{name} <br/>{detail?.name}</h1>
        <p className="mx-0 mb-2.5 underline text-center text-[#707070]">Mobile phones:</p>
        <Stars />
        <p className="text-xl mt-2.5 font-semibold text-center text-[#f36d22]">{formatPrice(detail?.price || 0)}</p>
        <p className="text-xs mt-2.5 mb-1 font-semibold text-center text-[#126B60]">VARIANTS:</p>
        {
            options.map((opt, i)=> { 
                const available = active ? active[i].availables : [] as string[]
                const acts = active ? active[i].active : ''
                return <Variants key={Math.random()} css='mt-5' opt={opt.values} avails={available} title={opt.name} active={acts} filter={filter} ind={i}/>
            })
        }   
    </div>
  )
}
