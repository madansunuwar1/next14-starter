import React from 'react'
import style from './adminUser.module.css'
import Image from 'next/image';
import { getUsers } from '@/lib/data';
import { deleteUser } from '@/lib/action';

const AdminUser = async () => {

  const users = await getUsers();
  return (
    <div className={style.container}>
    <h1>users</h1>
    {users.map((user) => (
      <div className={style.user} key={user.id}>
        <div className={style.detail}>
          <Image src={user.img || "/noAvatar.png"} alt='' width={50} height={50}/>
          <span className={style.userTitle}>{user.username}</span>
        </div>
        <form action={deleteUser}>
          <input type='hidden' name='id' value={user.id}/>
        <button className={style.userButon}>Delete</button>
        </form>
      </div>
    ))}
  </div>
  )
}

export default AdminUser