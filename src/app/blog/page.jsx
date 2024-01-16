import React from 'react'
import style from './blog.module.css'
import PostCard from '@/component/postcard/postCard'
import { getPosts } from '@/lib/data'

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog");

  if(!res.ok){
    throw new Error("something went wrong");
  }
  return res.json();
}

export const metadata = {
  title:"blog page",
  description: 'blog description',
}

const BlogPage = async () => {
  const posts = await getData();
  // const posts = await getPosts();
  
  return (
    <div className={style.container}>
      {posts.map(post => (
      <div className={style.post} key={post.id}>
      <PostCard post={post}/>
      </div>
      ) )}
    </div>
  )
}

export default BlogPage
