import React from 'react'
import Header from '../components/Header'
import ChatWindow from '../components/ChatWindow'

const Main = () => {
  return (
    <div className='page chat-page'>
      <Header />
      <main className='main-chat'>
        <ChatWindow />
      </main>
    </div>
  )
}

export default Main