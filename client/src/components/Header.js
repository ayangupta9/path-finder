import React from 'react'

const Header = () => {
  return (
    <div
      style={{
        fontSize: '25px',
        fontWeight: 'w100',
        display: 'flex',
        width: '100%',
        // marginTop: '1.5em',
        marginBottom: '1.5em',
        justifyContent: 'center',
        alignItems: 'center',
        textShadow: '2px 2px lightcoral'
      }}
      className='header'
    >
      <h1>PATH FINDER</h1>
    </div>
  )
}

export default Header
