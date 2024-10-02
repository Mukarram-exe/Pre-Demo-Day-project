import React from 'react'
import UserAddress from '../components/UserAddress'
import Navbar from '../components/Navbar'
import Orderdetails from '../components/Orderdetails'

function Endpage() {
  return (
      <div>
        <Navbar/>
      <UserAddress />
      <Orderdetails />
    </div>
  )
}


export default Endpage