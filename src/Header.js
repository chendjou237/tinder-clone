import { Forum, Person } from '@mui/icons-material' 
import { IconButton } from '@mui/material'
import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='header'>
        
        
        <IconButton>
        <Person />
        </IconButton>

        <img className='header_logo' alt='' src='https://www.1min30.com/wp-content/uploads/2018/05/logo-Tinder-1.jpg' />
<IconButton>
         <Forum fontSize= "large" className='header_icon'/>
</IconButton>

    </div>
  )
}

export default Header