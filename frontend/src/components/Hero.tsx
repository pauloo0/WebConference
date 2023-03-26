import React, { useEffect, useState } from 'react'
import { CgClose } from 'react-icons/cg'

type Registry = {
  username: string
  email: string
}

const cleanRegistry: Registry = {
  username: '',
  email: '',
}

function Hero() {
  const [registry, setRegistry] = useState<Registry>(cleanRegistry)
  const [showRegister, setShowRegister] = useState<boolean>(false)

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(registry)
    //TODO Use API, check page 137 of the book for reference
    //TODO Maybe create a custom endpoint that checks if email exists
    //TODO If exists, return error, else create new
  }

  const handleCancel = () => {
    setRegistry(cleanRegistry)
    setShowRegister(false)
  }

  return (
    <>
      {showRegister && (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-40 grid place-items-center'>
          <div className='w-1/3 h-1/3 min-w-[600px] min-h-[300px] bg-white rounded-xl relative grid place-items-center'>
            <CgClose
              className='text-slate-800 text-xl absolute right-6 top-4 cursor-pointer'
              onClick={handleCancel}
            />
            <form
              className='flex flex-col justify-between w-4/5 h-2/3'
              onSubmit={(e) => handleRegister(e)}
            >
              <div id='inputs' className='h-1/2 flex flex-col justify-between'>
                <input
                  type='text'
                  name='username'
                  id='register-username'
                  value={registry.username}
                  onChange={(e) =>
                    setRegistry({ ...registry, username: e.target.value })
                  }
                  placeholder='Name'
                  required
                  className='p-2 border-[1px] rounded-md'
                />
                <input
                  type='email'
                  name='email'
                  id='register-email'
                  value={registry.email}
                  onChange={(e) =>
                    setRegistry({ ...registry, email: e.target.value })
                  }
                  placeholder='Email'
                  required
                  className='p-2 border-[1px] rounded-md'
                />
              </div>

              <div id='buttons' className='flex justify-between'>
                <button
                  type='submit'
                  className='px-4 py-2 bg-sky-600 text-sky-100 rounded-md'
                >
                  Inscrever
                </button>
                <button
                  type='button'
                  className='px-4 py-2 bg-gray-400 text-gray-900 rounded-md'
                  onClick={handleCancel}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <header className='bg-hero bg-scroll bg-center bg-cover bg-no-repeat text-white'>
        <div className='h-screen flex flex-col justify-center items-center bg-gray-900 bg-opacity-70'>
          <h2 className='text-5xl font-playfairDisplay'>
            Vamos celebrar a Web!
          </h2>
          <h1 className='mt-8 text-8xl uppercase font-bold'>WebConference</h1>
          <button
            className='mt-12 px-6 py-4 rounded-md bg-sky-600 hover:bg-sky-700 focus:bg-sky-700 font-bold'
            onClick={() => setShowRegister(true)}
          >
            Inscrever
          </button>
        </div>
      </header>
    </>
  )
}

export default Hero
