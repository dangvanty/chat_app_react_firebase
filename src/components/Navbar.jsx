import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">React chat</span>
      <div className="user">
        <img src="https://www.w3schools.com/css/rock600x400.jpg" alt="" />
        <span>TyDang</span>
        <button>logout</button>
      </div>    
    </div>
  )
}

export default Navbar