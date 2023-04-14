import React from 'react'
import '../styles/Popup.css'

interface PopupProps {
  title: string
  body: string | JSX.Element
  buttons: {
    label: string
    callback: () => void
  }[]
}

const Popup: React.FC<PopupProps> = ({ title, body, buttons }) => {
  return (
    <div className='popup'>
      <div className='popup-content'>
        <h2>{title}</h2>
        <p>{body}</p>
        <div className='buttons'>
          {buttons.map((button) => (
            <button onClick={button.callback}>{button.label}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Popup
