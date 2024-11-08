import React, { useState } from 'react'

const Login = ({HandleLOgin}) => {



    const  [email, setfirst] = useState('')
    const [password, setpassword] = useState('')

const submitHandler = (e)=>{
    e.preventDefault()
  HandleLOgin(email,password)


    setfirst("")
    setpassword("")

}


  return (
    <div className=' flex h-screen w-screen items-center justify-center'>

        <div className='border-2 border-emerald-600 rounded-xl p-20'>
            <form
             onSubmit={(e)=>{
                submitHandler(e)

             }}
            className='flex flex-col items-center justify-center'>

            <input 
            value={email}
             onChange={(e)=>{
                setfirst(e.target.value)
            }}
            required 
            className=' text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-grey-500' type="email" placeholder='Enter your email' />
                <input
                value ={password}
                onChange={(e)=>{
                    setpassword(e.target.value)
                }}
                 required 
                 className=' text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-grey-500 mt-3' type="password" placeholder='Enter your password' />
                <button 
                className='mt-5 text-white outline-none  border-none bg-emerald-600 py-2 px-4 text-xl rounded-full placeholder:text-white mt-3' type="Login" >
            Log in
          </button>
            </form>

            



        </div>





    </div>
  )
}

export default Login