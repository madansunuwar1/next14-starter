import Image from 'next/image'
import React from 'react'
import style from './about.module.css'

export const metadata = {
  title:"about page",
  description: 'about description',
}

const AboutPage = () => {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h2 className={style.subtitle}>About Agency</h2>
        <h1 className={style.title}>We create digital ideas thaat are bigger,bolder, braver and better</h1>
        <p className={style.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni suscipit aperiam doloribus, at accusantium a
           placeat, natus sequi ex dolorem voluptas sapiente sint amet mollitia?
            Eius in temporibus aliquam quia neque iste animi.</p>
      
      <div className={style.boxes}>
        <div className={style.box}>
          <h1>10K</h1>
          <p>Year of experience</p>
        </div>
        <div className={style.box}>
        <h1>10K</h1>
          <p>Year of experience</p>
        </div>
        <div className={style.box}>
        <h1>10K</h1>
          <p>Year of experience</p>
        </div>
      </div>
      </div>
      <div className={style.imgContainer}>
      <Image src="/about.png" alt='about image' fill/>
      </div>
    </div>
  )
}

export default AboutPage
