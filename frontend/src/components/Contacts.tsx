import React, { useState } from 'react'

interface Contacts {
  name: string
  email: string
  phoneNumber: string
  message: string
}

const initialContactData = {
  name: '',
  email: '',
  phoneNumber: '',
  message: '',
}

function Contacts() {
  const [contactData, setContactData] = useState<Contacts>(initialContactData)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(contactData)
    setContactData(initialContactData)
  }

  return (
    <section
      id='contacts'
      className='px-32 flex flex-col justify-between items-center text-slate-800'
    >
      <div id='contacts-title' className='mt-24'>
        <h1 className='mt-24 uppercase font-bold text-3xl text-center'>
          Contactos
        </h1>
        <h3 className='mt-4 font-playfairDisplay text-center'>
          Deixe-nos a sua sugestão/dúvida e nós entratemos em contacto consigo!
        </h3>
      </div>

      <div id='contacts-info' className='mt-12 w-2/3 mx-auto '>
        <form className='flex flex-col items-center' onSubmit={handleSubmit}>
          <div className='w-full flex justify-between'>
            <div className='w-1/2 grid grid-cols-1 gap-2'>
              <input
                type='text'
                name='name'
                id='contact-name'
                className='w-full px-2 py-1 border-[1px] border-slate-300 rounded-md'
                placeholder='Nome'
                required
                value={contactData.name}
                onChange={(e) =>
                  setContactData({ ...contactData, name: e.target.value })
                }
              />
              <input
                type='text'
                name='email'
                id='contact-email'
                className='w-full px-2 py-1 border-[1px] border-slate-300 rounded-md'
                placeholder='Email'
                required
                value={contactData.email}
                onChange={(e) =>
                  setContactData({ ...contactData, email: e.target.value })
                }
              />
              <input
                type='text'
                name='telephone'
                id='contact-telephone'
                className='w-full px-2 py-1 border-[1px] border-slate-300 rounded-md'
                placeholder='Nº telefone'
                required
                value={contactData.phoneNumber}
                onChange={(e) =>
                  setContactData({
                    ...contactData,
                    phoneNumber: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <textarea
                className='w-full px-2 py-1 border-[1px] border-slate-300 rounded-md'
                name='message'
                id='contact-message'
                cols={40}
                rows={1}
                placeholder='Mensagem'
                required
                value={contactData.message}
                onChange={(e) =>
                  setContactData({ ...contactData, message: e.target.value })
                }
              />
            </div>
          </div>

          <button className='mt-4 uppercase font-bold bg-sky-600 hover:bg-sky-700 focus:bg-sky-700 text-white rounded-md px-6 py-4'>
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contacts
