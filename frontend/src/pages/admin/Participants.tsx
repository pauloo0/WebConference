import { BsTrashFill } from 'react-icons/bs'

interface IPeople {
  id: number
  name: string
  email: string
}

export function Participants() {
  const people: IPeople[] = [
    {
      id: 1,
      name: 'Ricardo Queirós',
      email: 'ricardo.queiros@gmail.com',
    },
    {
      id: 2,
      name: 'sss',
      email: 'r@r.pt',
    },
    {
      id: 3,
      name: 'Filipe Portela',
      email: 'portela.mis@gmail.com',
    },
  ]

  return (
    <div className='mx-12 my-24 text-slate-800'>
      <section id='participants-title'>
        <h1 className='text-8xl'>Participantes</h1>
        <p className='text-lg my-4'>Gestão de inscritos na WebConference</p>
      </section>
      <hr className='my-2' />
      <section id='participants-table' className='mx-4'>
        <table className='w-full'>
          <thead>
            <tr>
              <td
                colSpan={4}
                className='text-center font-bold py-2 bg-slate-300'
              >
                Lista de Participantes
              </td>
            </tr>
            <tr className='bg-slate-500 text-slate-50 text-left'>
              <th className='p-2 w-1/12'>#</th>
              <th className='p-2 w-3/12'>Nome</th>
              <th className='p-2 w-2/12 '>E-mail</th>
              <th className='p-2 w-1/12'>Ações</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person: IPeople) => (
              <tr key={person.id}>
                <td className='p-2'>{person.id}</td>
                <td className='p-2'>{person.name}</td>
                <td className='p-2'>{person.email}</td>
                <td className='p-2'>
                  <BsTrashFill
                    className='cursor-pointer hover:text-red-500'
                    onClick={() => console.log(person.id)}
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
