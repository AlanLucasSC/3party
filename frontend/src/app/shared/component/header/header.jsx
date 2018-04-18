//Third Party
import React from 'react'

//Applicatio file
import ProfileActionBar from '../profileActionBar/profileActionBar'

export default props => (
    <div className='header'>
        <a href='/#/home' className="header-logo">
            <img src="/assets/images/logo_az_dark.png"/>
        </a>
        <div className="header-profileBarWrapper">
            <ProfileActionBar userEmail={ props.userEmail } logout={ props.logout }/>
        </div>
    </div>
)
