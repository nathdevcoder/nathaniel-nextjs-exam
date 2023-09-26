'use client'
import React  from 'react'
import Stars from './stars'
import Variants from './Variants' 
import { formatPrice } from '@src/utils/formater'
import useProductVariantPicker from '@src/hooks/useProductVariantPicker'


 

export default function ProductVariants({name, variants, options}: {name: string, variants: variantsType, options: optionsType}) { 
    const {filter, detail, active} = useProductVariantPicker(options, variants)
    
  return  (
    <div className='col-span-9 md:w-96 mt-16 p-2 mb-10'>
        <h1 className="font-semibold text-center text-xl">{name} <br/>{detail?.name}</h1>
        <p className="mx-0 mb-2.5 underline text-center text-[#707070]">Mobile phones:</p>
        <Stars />
        <p className="text-xl mt-2.5 font-semibold text-center text-[#f36d22]">{formatPrice(detail?.price || 0)}</p>
        <p className="text-xs mt-2.5 mb-1 font-semibold text-center text-[#126B60]">VARIANTS:</p>

        { options.map((opt, i)=> { 
            const available = active ? active[i].availables : [] as string[]
            const acts = active ? active[i].active : ''
            return <Variants key={Math.random()} css='mt-5' opt={opt.values} avails={available} title={opt.name} active={acts} filter={filter} ind={i}/>
        }) }   

    </div>
  )
}
