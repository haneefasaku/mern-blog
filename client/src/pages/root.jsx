import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import FooterCom from '../components/Footer'

function Root() {
  return (
    <>
        <Header/>
        <Outlet/>
        <FooterCom/>
    </>
  )
}

export default Root