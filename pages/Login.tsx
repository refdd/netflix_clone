import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {useForm , SubmitHandler} from "react-hook-form"
import useAuth from '../hooks/useAuth'

interface Inputs{
  email: string
  password : string
}
function Login() {
  const [login , setLogin ] = useState(false)
  const { register, handleSubmit,formState: { errors } } = useForm<Inputs>();
  const  { signIn , signUp} = useAuth()
  const onSubmit: SubmitHandler<Inputs> = async  ({email , password}) => {
    if(login){
      await signIn(email , password )
    }else{
      await signUp(email , password )
    }
  }
  return (
    <div className=' relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
        <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
       <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />
      <form  onSubmit={handleSubmit(onSubmit)} className=' relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14'>
        <h1 className=' text-3xl font-semibold'>Sing In </h1>
        <div className=' space-y-4'>
          <label  className=' inline-block w-full'>
            <input {...register("email", { required: true })} type="email" placeholder='Email' className='input'/>
            {errors.email &&    <p className="text-sm  text-orange-500">
                Please enter a valid email.
              </p>}

          </label>
          <label  className=' inline-block w-full'>
          <input {...register("password", { required: true })} type="password" placeholder='Password' className='input' />
          {errors.password && <p className="text-sm  text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>}

           </label>
        </div>
        <button className=' w-full rounded py-3 bg-[#e50914] font-semibold' 
        onClick={() => setLogin(true) }
        >Sing In </button>
        <div className=' text-[gray]'>
          New to Nerflix? {" "}
          <button type='submit' className=' text-white  hover:underline'
          onClick={() => setLogin(false) }
          >Sign Up Now </button>
        </div>
      </form>
    </div>
  )
}

export default Login