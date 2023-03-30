import React from 'react';
import { Outlet } from 'react-router-dom'

const Layout: React.FC<any> = (props) => {
  return (
    <div className='layout-container'>
      <div className='layout-container__main'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout