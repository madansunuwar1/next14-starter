import React from 'react'
import style from './postUser.module.css'
import { getUser } from '@/lib/data'
import Image from 'next/image'

const PostUser = async ({ userId }) => {

  const user = await getUser(userId);
  return (
    <div className={style.container}>
      <Image
        className={style.avatar}
        src={ user.img ? user.img : "/noavatar.png"}
        alt=""
        width={50}
        height={50}
      />
      <div className={style.texts}>
        <span className={style.title}>Author</span>
        <span className={style.username}>{user.username}</span>
      </div>
    </div>
  )
}

export default PostUser