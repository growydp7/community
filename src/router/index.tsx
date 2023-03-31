import React, { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import Layout from '../layout'
import Index from '../pages/Index'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/index',
        Component: lazy(() => import('../pages/Index')),
        handle: { title: '首页', icon: <AppstoreOutlined /> }
      }
    ]
  }
]

const router = createBrowserRouter(routes)

export default router