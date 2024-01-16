"use client"
import React from 'react'
import style from './adminPostForm.module.css'
import { useFormState } from 'react-dom'
import { addPost } from '@/lib/action'

const AdminPostForm = ({userId}) => {
  const [state, formAction] = useFormState(addPost, undefined)
  return (
    <form action={formAction} className={style.container}>
      <h1>Add new post</h1>
      <input type='hidden' name='userId' value={userId}/>
      <input type='text' name='title' placeholder='Title' />
      <input type='text' name='slug' placeholder='slug' />
      <input type='text' name='img' placeholder='img' />
      <textarea type='text' name='desc' placeholder='desc' />
      <button className={style.button}>Add</button>
      {state && state.error}
      </form>
  )
}

export default AdminPostForm