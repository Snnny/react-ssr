import React, { Component } from 'react'
import cookie from 'react-cookie'

class PersonalCenter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log("USER_SIDimport cookies from 'react-cookie'\n:",cookie)
    const {  history } = this.props
    // if(!cookies) {
    //   history.push('/login')
    // }
    return(
      <div>
        PersonCenter
      </div>
    )
  }
}

export default PersonalCenter