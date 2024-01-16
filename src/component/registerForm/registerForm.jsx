"use client"
import React, { useEffect } from 'react';
import style from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { register } from "@/lib/action"
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const RegisterForm = () => {

    const [state, formAction] = useFormState(register, undefined); 
    
    const router = useRouter()
    
    useEffect(() => {
        state?.sucess && router.push("/login");
    },[state?.sucess, router])

  return (
    <form className={style.form} action={formAction}>
    <input type='text' placeholder='username' name='username'/>
    <input type='email' placeholder='email' name='email'/>
    <input type='password' placeholder='password' name='password'/>
    <input type='password' placeholder='password again' name='passwordRepeat'/>
    <button>Register</button>
    {state?.error}
    <Link href='/login'>have an account <b>login</b></Link>
  </form>
  )
}

export default RegisterForm