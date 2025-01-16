import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function Root() {
  return (
    <>
        <Header/>
        <Outlet/>
        <footer></footer>
    </>
  )
}

export default Root