'use client'
import { filterProducts } from '@src/utils/Filter'
import  { useEffect, useState } from 'react'

export default function useProductVariantPicker(options: optionsType, variants: variantsType) {
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
  return  {detail, active, filter}
}
