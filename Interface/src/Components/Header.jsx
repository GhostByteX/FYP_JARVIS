import React, { Fragment, useState } from 'react'
import Granim from 'granim'
import '../styles/Header.css'
import { FaUserCircle, FaCaretDown } from 'react-icons/fa'

const Header = () => {
  const userName = 'Chris Evans'
  const [dropdownState, setDropdownState] = useState(0)
  const handleDropdownState = () => {
    setDropdownState(!dropdownState)
    console.log(dropdownState)
  }
  const goToLogin = event => {
    window.location.href = '/login'
  }
  return (
    <Fragment>
      <div className='headerContainer'>
        <div className='userpic' style={{ fontSize: '35px' }}>
          <FaUserCircle />
        </div>
        <h1 className='userNametxt'>{userName}</h1>
        <div
          onClick={handleDropdownState}
          className='dropdownpic'
          style={{ fontSize: '25px' }}
        >
          <FaCaretDown />
        </div>
        {dropdownState === true && (
          <button onClick={goToLogin} className='logoutButton'>
            LOGOUT
          </button>
        )}
      </div>
    </Fragment>
  )
}
export default Header
