"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import style from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { login } from "@/lib/action"

const LoginForm = () => {
    const [state, formAction] = useFormState(login, undefined); 
    
    // const router = useRouter()
    
    // useEffect(() => {
    //     state?.sucess && router.push("/login");
    // },[state?.sucess, router])

  return (
    <form className={style.form} action={formAction}>
    <input type='text' placeholder='username' name='username'/>
    <input type='password' placeholder='password' name='password'/>
    <button>Login</button>
    {state?.error}
    <Link href='/register'>{"don't have an account"} <b>Register</b></Link>
  </form>
  );
};
export default LoginForm