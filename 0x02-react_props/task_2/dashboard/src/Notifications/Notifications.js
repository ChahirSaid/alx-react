import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';

export default function Notifications() {
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type='default' value='New course available' />
        <NotificationItem type='default' value='New resume available' />
        <NotificationItem type='urgent' html={{ __html: getLatestNotification() }} />
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
