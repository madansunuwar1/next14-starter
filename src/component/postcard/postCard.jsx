import React from 'react'
import style from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = ({post}) => {
  return (
    <div className={style.container}>
        <div className={style.top}>
            {post.img && <div className={style.imgContainer}>
                <Image src={post.img} alt='ok' fill className={style.img} />
            </div>}
            <span className={style.date}>01.01.2024</span>
        </div>
        <div className={style.bottom}>
            <h1 className={style.title}>{post.title}</h1>
            <p className={style.description}>{post.desc}</p>
            <Link href={`/blog/${post.slug}`}>READ MORE</Link>
        </div>
    </div>
  )
}

export default PostCard