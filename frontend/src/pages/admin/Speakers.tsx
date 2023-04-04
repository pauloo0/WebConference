import { useState } from 'react'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'

interface ISpeaker {
  id?: number | undefined
  name: string
  position: string
  photo: string
  socials: {
    facebook: string
    twitter: string
    linkedin: string
  }
  bio: string
}

const clearSpeaker = {
  name: '',
  position: '',
  photo: '',
  socials: { facebook: '', twitter: '', linkedin: '' },
  bio: '',
}

export function Speakers() {
  const [speakers, setSpeakers] = useState<ISpeaker[]>([])
  const [newSpeaker, setNewSpeaker] = useState<ISpeaker>(clearSpeaker)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newSpeakerId: number =
      speakers.length > 0
        ? Math.max(...speakers.map((speaker: ISpeaker) => speaker.id ?? 0)) + 1
        : 1

    setSpeakers([...speakers, { id: newSpeakerId, ...newSpeaker }])

    setNewSpeaker(clearSpeaker)
  }

  const handleEdit = (speakerId: number | undefined) => {
    if (speakerId !== undefined) {
      const editSpeaker: ISpeaker | undefined = speakers.find(
        (speaker: ISpeaker) => speaker.id === speakerId
      )

      if (editSpeaker !== undefined) {
        setNewSpeaker(editSpeaker)
      }
    }
  }

  const handleDelete = (speakerId: number | undefined) => {
    const newSpeakers: ISpeaker[] = speakers.filter(
      (speaker: ISpeaker) => speaker.id !== speakerId
    )

    setSpeakers(newSpeakers)
  }

  return (
    <div className='mx-8 my-12 text-slate-800'>
      <section id='speakers-title'>
        <h1 className='text-7xl'>Oradores</h1>
        <p className='text-lg my-4'>Gestão de Oradores na webConference</p>
      </section>
      <hr className='my-2' />

      <section id='speakers-form'>
        <form
          className='grid grid-cols-12 gap-y-4 gap-x-6'
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className='col-span-6 flex flex-col'>
            <label htmlFor='nome' className='mb-2'>
              Nome
            </label>
            <input
              type='text'
              name='nome'
              id='speakerName'
              placeholder='Nome'
              className='border-[1px] px-2 py-1 rounded-sm'
              value={newSpeaker.name}
              onChange={(e) =>
                setNewSpeaker({ ...newSpeaker, name: e.target.value })
              }
            />
          </div>
          <div className='col-span-6 flex flex-col'>
            <label htmlFor='position' className='mb-2'>
              Cargo
            </label>
            <input
              type='text'
              name='position'
              id='speakerPosition'
              placeholder='Cargo'
              className='border-[1px] px-2 py-1 rounded-sm'
              value={newSpeaker.position}
              onChange={(e) =>
                setNewSpeaker({ ...newSpeaker, position: e.target.value })
              }
            />
          </div>

          <div className='col-span-full flex flex-col'>
            <label htmlFor='photo' className='mb-2'>
              Foto
            </label>
            <input
              type='text'
              name='photo'
              id='speakerPhoto'
              placeholder='Link da foto'
              className='border-[1px] px-2 py-1 rounded-sm'
              value={newSpeaker.photo}
              onChange={(e) =>
                setNewSpeaker({ ...newSpeaker, photo: e.target.value })
              }
            />
          </div>

          <div className='col-span-4 flex flex-col'>
            <label htmlFor='facebook' className='mb-2'>
              Facebook
            </label>
            <input
              type='text'
              name='facebook'
              id='speakerFacebook'
              placeholder='Facebook'
              className='border-[1px] px-2 py-1 rounded-sm'
              value={newSpeaker.socials.facebook}
              onChange={(e) =>
                setNewSpeaker({
                  ...newSpeaker,
                  socials: { ...newSpeaker.socials, facebook: e.target.value },
                })
              }
            />
          </div>

          <div className='col-span-4 flex flex-col'>
            <label htmlFor='twitter' className='mb-2'>
              Twitter
            </label>
            <input
              type='text'
              name='twitter'
              id='speakerTwitter'
              placeholder='Twitter'
              className='border-[1px] px-2 py-1 rounded-sm'
              value={newSpeaker.socials.twitter}
              onChange={(e) =>
                setNewSpeaker({
                  ...newSpeaker,
                  socials: { ...newSpeaker.socials, twitter: e.target.value },
                })
              }
            />
          </div>

          <div className='col-span-4 flex flex-col'>
            <label htmlFor='linkedin' className='mb-2'>
              Linkedin
            </label>
            <input
              type='text'
              name='linkedin'
              id='speakerLinkedin'
              placeholder='Linkedin'
              className='border-[1px] px-2 py-1 rounded-sm'
              value={newSpeaker.socials.linkedin}
              onChange={(e) =>
                setNewSpeaker({
                  ...newSpeaker,
                  socials: { ...newSpeaker.socials, linkedin: e.target.value },
                })
              }
            />
          </div>

          <div className='col-span-full flex flex-col'>
            <label htmlFor='bio' className='mb-2'>
              Biografia
            </label>
            <textarea
              name='bio'
              id='speakerBio'
              placeholder='Biografia'
              className='border-[1px] px-2 py-1 rounded-sm'
              value={newSpeaker.bio}
              onChange={(e) =>
                setNewSpeaker({ ...newSpeaker, bio: e.target.value })
              }
            />
          </div>

          <div className='col-span-3 flex justify-between items-center'>
            <button
              type='submit'
              className='col-span-1 px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700 focus:bg-green-700'
            >
              Guardar Orador
            </button>
            <button
              type='button'
              className='col-span-1 px-4 py-2 rounded-md text-white bg-slate-400 hover:bg-slate-500 focus:bg-slate-500'
              onClick={() => setNewSpeaker(clearSpeaker)}
            >
              Limpar Valores
            </button>
          </div>
        </form>
      </section>

      <section id='speakers-table' className='mt-8 mx-4'>
        <table className='w-full'>
          <thead>
            <tr>
              <td
                colSpan={4}
                className='text-center font-bold py-2 bg-slate-300'
              >
                Lista de Oradores
              </td>
            </tr>
            <tr className='bg-slate-500 text-slate-5- text-left'>
              <th className='p-2 w-1/12'>#</th>
              <th className='p-2 w-3/12'>Nome</th>
              <th className='p-2 w-2/12'>Cargo</th>
              <th className='p-2 1/12'>Ações</th>
            </tr>
          </thead>
          <tbody>
            {speakers &&
              speakers.map((speaker: ISpeaker) => (
                <tr key={speaker.id}>
                  <td className='p-2'>{speaker.id}</td>
                  <td className='p-2'>{speaker.name}</td>
                  <td className='p-2'>{speaker.position}</td>
                  <td className='p-2 flex'>
                    <FaEdit
                      className='cursor-pointer hover:text-amber-400 mr-2'
                      onClick={() => handleEdit(speaker.id)}
                    />
                    <FaTrashAlt
                      className='cursor-pointer hover:text-red-500'
                      onClick={() => handleDelete(speaker.id)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}
