import React from 'react';
import { Outlet } from 'react-router-dom'

// Layout Components
import LayoutHeader from './components/Header'
import './index.less'

const Layout: React.FC<any> = (props) => {
  return (
    <div className='layout-container'>
      <LayoutHeader />
      <div className='layout-container__main'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout