import React from 'react'

export default function NotificationItem({ type, value, html}) {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}>
      {value}
    </li>
  )
}
