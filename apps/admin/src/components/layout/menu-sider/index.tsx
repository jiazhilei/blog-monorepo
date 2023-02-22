import { useEffect, useState } from 'react'
import { Menu } from 'antd'
import { DashboardOutlined, FileOutlined } from '@ant-design/icons'
import { ItemType } from 'antd/es/menu/hooks/useItems'
import { useLocation, useNavigate } from 'react-router-dom'

const MenuSider = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedKeys, setSelectedKeys] = useState(['/'])
  // 每次切换路由，获取当前最新的pathname,并赋给menu组件
  useEffect(() => {
    // location.pathname对应路由数据中的path属性
    setSelectedKeys([location.pathname])
  }, [location])
  const MenuItems: ItemType[] = [
    {
      key: '/',
      title: '首页',
      label: '首页',
      icon: <DashboardOutlined />
    },
    {
      key: '/article',
      title: '文章',
      label: '文章',
      icon: <FileOutlined />
    }
  ]
  return (
    <>
      <Menu
        selectedKeys={selectedKeys}
        mode="inline"
        theme="dark"
        items={MenuItems}
        onClick={({ key }:{key:string}) => {
          setSelectedKeys([key])
          navigate(key)
        }}
      />
    </>
  )
}
export default MenuSider
