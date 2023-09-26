import React from 'react'
import style from './Variants.module.css'

export default function Variants({css, title, opt, avails}:{css?:string, title: string, opt: string[], avails: string[] }) { 
  return (
    <div className={`pl-0 pr-0 ${style.Variants} ${css}`} >
        <p className="text-xs mx-0 mb-1 font-semibold text-center text-[#126B60]">{title}</p> 
        <br/>
        <div className="flex flex-wrap justify-center">
            {
                opt.map (op =>{
                    return <button disabled={!avails.includes(op)} value="BLUE" className={`w-28 m-1 p-0 text-xs ${avails.includes(op) ? 'bg-[#126B60] text-white': 'bg-[#f0f0f0] text-[#126B60] line-through'}`}>{op}</button>
                })
            } 
        </div>
    </div>
  )
}
