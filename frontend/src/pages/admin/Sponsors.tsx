import { useState } from 'react'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'

interface ISponsor {
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

const clearSponsor = {
  name: '',
  position: '',
  photo: '',
  socials: { facebook: '', twitter: '', linkedin: '' },
  bio: '',
}

export function Sponsors() {
  const [sponsors, setSponsors] = useState<ISponsor[]>([])
  const [newSponsor, setNewSponsor] = useState<ISponsor>(clearSponsor)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newSponsorId: number =
      sponsors.length > 0
        ? Math.max(...sponsors.map((sponsor: ISponsor) => sponsor.id ?? 0)) + 1
        : 1

    setSponsors([...sponsors, { id: newSponsorId, ...newSponsor }])

    setNewSponsor(clearSponsor)
  }

  const handleEdit = (sponsorId: number | undefined) => {
    if (sponsorId !== undefined) {
      const editSponsor: ISponsor | undefined = sponsors.find(
        (sponsor: ISponsor) => sponsor.id === sponsorId
      )

      if (editSponsor !== undefined) {
        setNewSponsor(editSponsor)
      }
    }
  }

  const handleDelete = (sponsorId: number | undefined) => {
    const newSponsors: ISponsor[] = sponsors.filter(
      (sponsor: ISponsor) => sponsor.id !== sponsorId
    )

    setSponsors(newSponsors)
  }

  return (
    <div className='mx-8 my-12 text-slate-800'>
      <section id='sponsors-title'>
        <h1 className='text-7xl'>Sponsors</h1>
        <p className='text-lg my-4'>Gestão de Sponsors na webConference</p>
      </section>
      <hr className='my-2' />

      <section id='sponsors-form'>
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
              id='sponsorName'
              placeholder='Nome'
              className='border-[1px] px-2 py-1 rounded-sm'
              value={newSponsor.name}
              onChange={(e) =>
                setNewSponsor({ ...newSponsor, name: e.target.value })
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
              id='sponsorPosition'
              placeholder='Cargo'
              className='border-[1px] px-2 py-1 rounded-sm'
              value={newSponsor.position}
              onChange={(e) =>
                setNewSponsor({ ...newSponsor, position: e.target.value })
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
              id='sponsorPhoto'
              placeholder='Link da foto'
              className='border-[1px] px-2 py-1 rounded-sm'
              value={newSponsor.photo}
              onChange={(e) =>
                setNewSponsor({ ...newSponsor, photo: e.target.value })
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
              id='sponsorFacebook'
              placeholder='Facebook'
              className='border-[1px] px-2 py-1 rounded-sm'
              value={newSponsor.socials.facebook}
              onChange={(e) =>
                setNewSponsor({
                  ...newSponsor,
                  socials: { ...newSponsor.socials, facebook: e.target.value },
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
              id='sponsorTwitter'
              placeholder='Twitter'
              className='border-[1px] px-2 py-1 rounded-sm'
              value={newSponsor.socials.twitter}
              onChange={(e) =>
                setNewSponsor({
                  ...newSponsor,
                  socials: { ...newSponsor.socials, twitter: e.target.value },
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
              id='sponsorLinkedin'
              placeholder='Linkedin'
              className='border-[1px] px-2 py-1 rounded-sm'
              value={newSponsor.socials.linkedin}
              onChange={(e) =>
                setNewSponsor({
                  ...newSponsor,
                  socials: { ...newSponsor.socials, linkedin: e.target.value },
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
              id='sponsorBio'
              placeholder='Biografia'
              className='border-[1px] px-2 py-1 rounded-sm'
              value={newSponsor.bio}
              onChange={(e) =>
                setNewSponsor({ ...newSponsor, bio: e.target.value })
              }
            />
          </div>

          <div className='col-span-3 flex justify-between items-center'>
            <button
              type='submit'
              className='col-span-1 px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700 focus:bg-green-700'
            >
              Guardar Sponsor
            </button>
            <button
              type='button'
              className='col-span-1 px-4 py-2 rounded-md text-white bg-slate-400 hover:bg-slate-500 focus:bg-slate-500'
              onClick={() => setNewSponsor(clearSponsor)}
            >
              Limpar Valores
            </button>
          </div>
        </form>
      </section>

      <section id='sponsors-table' className='mt-8 mx-4'>
        <table className='w-full'>
          <thead>
            <tr>
              <td
                colSpan={4}
                className='text-center font-bold py-2 bg-slate-300'
              >
                Lista de Sponsors
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
            {sponsors &&
              sponsors.map((sponsor: ISponsor) => (
                <tr key={sponsor.id}>
                  <td className='p-2'>{sponsor.id}</td>
                  <td className='p-2'>{sponsor.name}</td>
                  <td className='p-2'>{sponsor.position}</td>
                  <td className='p-2 flex'>
                    <FaEdit
                      className='cursor-pointer hover:text-amber-400 mr-2'
                      onClick={() => handleEdit(sponsor.id)}
                    />
                    <FaTrashAlt
                      className='cursor-pointer hover:text-red-500'
                      onClick={() => handleDelete(sponsor.id)}
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
