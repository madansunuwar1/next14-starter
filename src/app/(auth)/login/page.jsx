import React from 'react'
import { handleGithubLogin, login} from '@/lib/action'
import LoginForm from '@/component/loginForm/LoginForm'
import style from "./login.module.css"


const LoginPage = () => {  

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
      <form action={handleGithubLogin}>
        <button className={style.github}>Login with Github</button>
      </form>
      <LoginForm />
    </div>
    </div>
  )
}

export default LoginPage
