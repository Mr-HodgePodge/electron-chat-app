import React from 'react';

export default function App() {
  const title = 'Hello World';
  const enhancedTitle = title + ' - React App!';

  const sendNotification = () => {
    window.sendNotification('Custom Message!');
  }

  return (
    <>
      <h1>{enhancedTitle}</h1>
      <button onClick={sendNotification}>Send Notification</button>
    </>
  )
}