import React, { useState } from 'react'
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useLocation } from 'react-router-dom'
import { routes } from '@/router'

const items: MenuProps['items'] = [
  {
    label: 'Navigation One',
    key: 'mail',
  },
  {
    label: 'Navigation Two',
    key: 'app',
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: 'alipay',
  },
];

const resolvePath = (routePath: string, basePath: string) => {
  return `${basePath}${routePath}`
}

const handleRoutes = (routes: any, baseUrl: string = '/') => {
  if (!routes || !Array.isArray(routes)) return routes
  const res: any[] = []
  routes.forEach(route => {
    const { path, children, handle} = route
    const concatPath = resolvePath(path, baseUrl)
    const obj: any = {
      label: handle?.title,
      key: concatPath
    }
    if (handle?.icon) {
      obj.icon = handle?.icon
    }
    if (children) {
      obj.children = handleRoutes(children, concatPath)
    }
    res.push(obj)
  })
  return res
}

const HeaderMenu: React.FC = () => {
  console.log(handleRoutes(routes))
  // console.log(useLocation())
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}

export default HeaderMenu