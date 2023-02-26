import React from 'react'
import Header from './header'
import PreHeader from './preHeader'
import { Outlet } from 'react-router-dom'
import Footer from './footer'

export default function Layout() {
  return (
    <>
    <PreHeader/>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}
