import React from 'react'
import WithAuthentication from '../hoc/WithAuthentication'

function Profile() {
  return (
    <div>
      Profile
    </div>
  )
}

export default WithAuthentication(Profile);
