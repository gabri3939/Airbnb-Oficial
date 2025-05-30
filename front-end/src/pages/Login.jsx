import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
  <section className='flex items-center'>

      <div className=" gap-4 flex  flex-col items-center  max-w-96 mx-auto w-full ">
        <h1 className='text-3xl font-bold'>Faça seu login</h1>
        <form className='flex flex-col gap-2 w-full'>
          <input type="email" className=' w-full rounded-full border border-gray-300 px-4 py-2' placeholder='Digite seu e-mail'/>
          <input type="password" className=' w-full rounded-full border border-gray-300 px-4 py-2' placeholder='Digite sua senha'/>
          <button className='cursor-pointer bg-primary-400 text-white font-bold w-full rounded-full border border-gray-300 px-4 py-2'>Login</button>
        </form>

<p>Ainda não tem conta? <Link to='/register' className='underline font-semibold'>Registre-se aqui!</Link></p>
     </div>
     </section>
  )
}

export default Login