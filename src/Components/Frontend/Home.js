import React from 'react'
import { Outlet } from 'react-router'
import Indexhead from './Indexhead'
import Indexproducts from './Indexproducts'

export default function Home() {
  return (
    <div>
      <Outlet/>
        {/* <h3>Home Homw</h3> */}
        <Indexhead/>
        <Indexproducts/>
    </div>
  )
}
