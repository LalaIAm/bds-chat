import React, {useEffect, useState} from 'react'
import logo from '../assets/img/logo.png'
import { socket } from '../socket'

export const Header = () => {
    const [userCount, setUserCount] = useState(0)

    useEffect(() => {
        socket.on('users', (users) => {
            let count = users.length;
            setUserCount(count)
        })

        return () => {
            socket.off('users')
        }
    }, [socket])
  return (
      <header>
          <div className='header-container'>
              <div className='logo-container'>
                  <img src={logo} alt='' className='logo' />
              </div>
              <div className='header-txt-container'>
                  <p>Online: {userCount} </p>
              </div>
          </div>
    </header>
  )
}

export default Header