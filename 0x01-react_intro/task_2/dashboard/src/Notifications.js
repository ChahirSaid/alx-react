import React from 'react'
import './Notifications.css'
import { getLatestNotification } from './utils'
import closeIcon from './close-icon.png'

export default function Notifications() {
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
      <button
        aria-label='Close'
        style={{
          position: 'absolute',
          top: '.2rem',
          right: '.2rem',
          background: 'transparent',
          border: 'none',
        }}
        onClick={() => console.log('Close button has been clicked')}
      >
        <img src={closeIcon} alt='close-icon' />
      </button>
    </div>
  )
}
