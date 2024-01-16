"use client"
import React from 'react'
import style from './adminUserForm.module.css'
import { useFormState } from 'react-dom'
import { addUser } from '@/lib/action'

const AdminUserForm = () => {
    const [state, formAction] = useFormState(addUser, undefined)
    return (
      <form action={formAction} className={style.container}>
        <h1>Add new post</h1>
        <input type='text' name='username' placeholder='username' />
        <input type='text' name='email' placeholder='email' />
        <input type='text' name='password' placeholder='password'/>
        <input type='text' name='img' placeholder='img' />
        <select name='isAdmin'>
          <option value="false">User</option>
          <option value="true">Admin</option>
        </select>
        <button className={style.button}>Add</button>
        {state && state.error}
        </form>
    )
  }

export default AdminUserForm