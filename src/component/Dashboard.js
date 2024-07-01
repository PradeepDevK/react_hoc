import React from 'react'
import WithAuthentication from '../hoc/WithAuthentication'

function Dashboard() {
  return (
    <div>
      Dashboard
    </div>
  )
}

export default WithAuthentication(Dashboard);
