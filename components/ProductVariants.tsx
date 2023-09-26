import React from 'react'
import Stars from './stars'
import Variants from './Variants'

export default function ProductVariants() {
  return  (
    <div className='col-span-9 w-96 mt-16'>
        <h1 className="font-semibold text-center text-xl">Samsung Galaxy A01 (SM-A015F)<br/>BLACK / 32GB</h1>
        <p className="mx-0 mb-2.5 underline text-center text-[#707070]">Mobile phones:</p>
        <Stars />
        <p className="text-xl mt-2.5 font-semibold text-center text-[#f36d22]">₱31,301.00</p>
        <p className="text-xs mt-2.5 mb-1 font-semibold text-center text-[#126B60]">VARIANTS:</p>
        <Variants/>
        <Variants css='mt-5'/>

    </div>
  )
}
