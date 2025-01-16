import React from 'react'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
        <header>
            <h1>Logo</h1>
        </header>
        <Outlet/>
        <footer></footer>
    </>
  )
}

export default Root