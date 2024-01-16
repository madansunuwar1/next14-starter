import React from 'react'
import style from './footer.module.css'

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>LOGO</div>
      <div className={style.text}>copyright@2023<br></br>Website by madan sunuwar</div>
    </div>
  )
}

export default Footer