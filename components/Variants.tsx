import React from 'react'
import style from './Variants.module.css'

type  variantTygpe = {
  css?:string
  title: string
  opt: string[]
  avails: string[]
  active: string 
  filter: (ind: number, value: string) => void
  ind: number
}

export default function Variants({css, title, opt, avails, active, filter, ind}:variantTygpe) {   
  return (
    <div className={`pl-0 pr-0 ${style.Variants} ${css}`} >
        <p className="text-xs mx-0 mb-1 font-semibold text-center text-[#126B60]">{title}</p> 
        <br/>
        <div className="flex flex-wrap justify-center">
            {
                opt.map (op=>{  
                    return <button 
                    key={Math.random()} 
                    onClick={()=>filter(ind, op)}
                    disabled={!avails.includes(op) || op == active}
                    className={`w-28 m-1 p-0 text-xs ${op == active ? 'bg-[#126B60] text-white': avails.includes(op) ?'bg-[#f0f0f0] text-[#126B60]' : 'bg-[#f0f0f0] text-[#126B60] line-through'}`}
                    >{op}</button>
                })
            } 
        </div>
    </div>
  )
}
