//Third Party
import React from 'react'

export default class ProfileActionBar extends React.Component {

    constructor(props) {
        super(props)
        this.userName = "AlanLucasSC2011@gmail.com"

        this.logout = this.logout.bind(this)
    }

    logout() {
        console.log('Log saiu !!!')
    }

    render() {
        return (
            <div className="profileActionBar">
                <div className="profileActionBar-anchor">
                    <a className="profileActionBar-imgWrapper"><img src="/assets/images/users/user.jpg" alt=""/></a>
                    <span> { this.userEmail } </span>
                    <span onClick={ this.logout } className="profileActionBar-logout">Logout</span>
                </div>
            </div>
        )
    }
    //(click)="logout.emit($event)"
}