import React from 'react'
import style from './Variants.module.css'

export default function Variants({css}:{css?:string}) {
  return (
    <div className={`pl-0 pr-0 ${style.Variants} ${css}`} >
        <p className="text-xs mx-0 mb-1 font-semibold text-center text-[#126B60]">COLOR:</p> 
        <br/>
        <div className="flex flex-wrap justify-center">
            <button value="BLUE" className="w-28 m-1 p-0 text-xs bg-[#f0f0f0] text-[#126B60]">BLUE</button>
            <button value="BLACK" className="w-28 m-1 p-0 text-xs bg-[#f0f0f0] text-[#126B60]">BLACK</button>
            <button value="WHITE" className="w-28 m-1 p-0 text-xs bg-[#126B60] text-white">WHITE</button>
        </div>
    </div>
  )
}
