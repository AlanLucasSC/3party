///Third Party
import React from 'react'

export default props => (
    <div className="profileActionBar">
        <div className="profileActionBar-anchor">
            <a className="profileActionBar-imgWrapper"><img src="/assets/images/users/user.jpg" alt=""/></a>
            &nbsp;
            <span> { props.userEmail } </span> 
            &nbsp;
            <span onClick={ props.logout }  className="profileActionBar-logout">Logout</span>
        </div>
    </div>
)