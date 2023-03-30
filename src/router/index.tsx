import React, { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import Layout from '../layout'
import Index from '../pages/Index'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/index',
        Component: lazy(() => import('../pages/Index')),
        handle: { title: '首页' }
      }
    ]
  }
]

const router = createBrowserRouter(routes)

export default router