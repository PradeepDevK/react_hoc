import React from 'react'


const isAuthenticated = true;

export default function WithAuthentication(Component) {
  return () => {
    if(!isAuthenticated) {
        return <>
            <div>User not authenticated.</div>
        </>
    } else {
        return <Component />
    }
  }
}
