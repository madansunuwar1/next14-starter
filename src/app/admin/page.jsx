import React, { Suspense } from 'react'
import style from './admin.module.css'
import AdminPost from '../../component/adminPost/adminPOst'
import AdminUserForm from '../../component/adminUserForm/adminUserForm'
import AdminUser from '../../component/adminUser/adminUser'
import AdminPostForm from '../../component/adminPostForm/adminPostForm'
import { auth } from '@/lib/auth'

const AdminPage = async () => {
  const session = await auth();
  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className={style.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPost />
          </Suspense>
        </div>
        <div className={style.col}>
            <AdminPostForm userId = {session.user.id}/>
        </div>
      </div>
      <div className={style.row}>
        <div className={style.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUser />
          </Suspense>
        </div>
        <div className={style.col}>
            <AdminUserForm />
        </div>
      </div>
    </div>
  )
}

export default AdminPage
