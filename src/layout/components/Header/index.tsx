import React from 'react'
import { Layout } from 'antd'
import HeaderMenu from './menu'

const { Header } = Layout

const LayoutHeader: React.FC = () => {
  return (
    <Header className="layout-container__header">
      <div className="layout-container__header-container">
        <div className="layout-container__header-logo"></div>
        <div className="layout-container__header-nav">
          <HeaderMenu />
        </div>
      </div>
    </Header>
  )
}

export default LayoutHeader