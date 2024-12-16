import React from 'react'
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <header>
        <h1> User Header</h1>
      </header>
          <Outlet/>  
      <footer>
        <h1>User Footer</h1>
      </footer>
    </>
  )
}

export default Root
