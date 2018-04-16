import React, { Component } from 'react'
import style from '../../assets/css/icon.scss'

const Icon =({ type })=> {
  return <div className={style.icon} style={{ backgroundImage: `url(${ require(`../../assets/img/icon/${type}.png`) })` }}></div>
}

export default Icon
