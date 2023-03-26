import React from 'react'
import envatoLogo from '../assets/sponsors/envato.svg'
import designmodoLogo from '../assets/sponsors/designmodo.svg'
import themeforestLogo from '../assets/sponsors/themeforest.svg'
import creativemarketLogo from '../assets/sponsors/creativemarket.svg'

function Sponsors() {
  return (
    <section
      id='sponsors'
      className='px-32 flex flex-col justify-center items-center text-slate-800'
    >
      <div id='sponsors-title' className='mt-24'>
        <h1 className='mt-24 uppercase font-bold text-3xl text-center'>
          Sponsors
        </h1>
      </div>

      <div id='sponsors-info' className='mt-4 w-full'>
        <div className='grid grid-cols-4 place-items-center'>
          <a href='https://www.envato.com/'>
            <img className='w-2/3' src={envatoLogo} alt='Envato' />
          </a>
          <a href='https://designmodo.com/'>
            <img className='w-1/2' src={designmodoLogo} alt='Design Modo' />
          </a>
          <a href='https://themeforest.net/'>
            <img className='w-1/2' src={themeforestLogo} alt='Theme Forest' />
          </a>
          <a href='https://creativemarket.com/'>
            <img className='w-1/2' src='' alt='Creative Market' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Sponsors
