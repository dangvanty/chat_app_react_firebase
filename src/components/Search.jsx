import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='find a user'/>
      </div>
      <div className="userChat">
        <img src="https://www.w3schools.com/css/rock600x400.jpg" alt="" />
        <div className="userChatInfo">
          <span>Hoang bo</span>
        </div>
      </div>
    </div>
  )
}

export default Search