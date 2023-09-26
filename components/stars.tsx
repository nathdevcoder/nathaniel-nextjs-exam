import React from 'react'

import style from './star.module.css'

export default function Stars() {
  return (
    <div className={`flex justify-center ${style.startContainer}`}> 
    <span className={style.Stars}   data-index="0" data-forhalf="★">★</span>
    <span className={style.Stars}  data-index="1" data-forhalf="★">★</span>
    <span className={style.Stars} data-index="2" data-forhalf="★">★</span><span className={style.Stars}  data-index="3" data-forhalf="★">★</span>
    <span className={style.Starsb} data-index="4" data-forhalf="★">★</span></div>
  )
}
