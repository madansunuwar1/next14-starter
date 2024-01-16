import React from 'react'
import style from './adminPost.module.css'
import Image from 'next/image'
import { getPosts } from '@/lib/data'
import { deletePost } from '@/lib/action'

const AdminPost = async () => {
  const posts = await getPosts();

  return (
    <div className={style.container}>
      <h1>posts</h1>
      {posts.map((post) => (
        <div className={style.post} key={post.id}>
          <div className={style.detail}>
            <Image src={post.img || "/noAvatar.png"} alt='' width={50} height={50}/>
            <span className={style.postTitle}>{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type='hidden' name='id' value={post.id}/>
          <button className={style.postButon}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  )
}

export default AdminPost