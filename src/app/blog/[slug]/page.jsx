import React, { Suspense } from 'react'
import style from './singlePost.module.css'
import Image from 'next/image'
import PostUser from '@/component/postUser/postUser';
import { getPost } from '@/lib/data';


const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  
    if(!res.ok){
      throw new Error("something went wrong");
    }
    return res.json();
  }

export const generatemetadata = async ({params}) => {

const{ slug } = params;
const post = await getPost(slug);

return {
    title: post.title,
    description: post.desc,
}

}
const SinglePostPage = async ({ params }) => {

    const { slug } = params;

    const post = await getData(slug);
    
    // const post= await getPost(slug);

    return (
        <div className={style.container}>
            {post.img  && <div className={style.imgContainer}>
                <Image src={post.img} alt='' className={style.img} fill />
            </div>}
            <div className={style.textContainer}>
                <h1 className={style.title}>{post.title}</h1>
                <div className={style.detail}>
                    <Suspense fallback={<div>Loading...</div>}>
                    <PostUser userId={post.userId}/>
                    </Suspense>
                    <div className={style.detailText}>
                        <span className={style.detailTitle}>Published</span>
                        <span className={style.detailValue}>{post.createdAt.toString().slice(4,16)}</span>
                    </div>
                </div>
                <div className={style.content}>
                {post.desc}
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage