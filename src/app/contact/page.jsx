import React from 'react'
import style from './contact.module.css'
import Image from 'next/image'

export const metadata = {
  title:"contact page",
  description: 'contact description',
}

const ContactPage = () => {
  return (
    <div className={style.container}>
      <div className={style.imagecontainer}>
        <Image src='/contact.png' alt='' fill className={style.img} />
      </div>
      <div className={style.formcontainer}>
        <form action='' className={style.form}>
          <input type='text' placeholder='Name and Surname'></input>
          <input type='text' placeholder='Email adress'></input>
          <input type='text' placeholder='Phone number(optional)'></input>
          <textarea
          name=''
          id=''
          cols='30'
          rows='10'
          placeholder='message'> </textarea>
          <button>Send</button>
        </form> 
      </div>
    </div>
  )
}

export default ContactPage