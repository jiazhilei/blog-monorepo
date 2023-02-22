import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout as AntdLayout, theme } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import MenuSider from './menu-sider'

import styles from './index.module.scss'
const { Header, Sider, Content, Footer } = AntdLayout
const Layout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <AntdLayout className={styles.layoutContainer}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.logo}>{collapsed ? '博客' : '博客后台管理'}</div>
        <MenuSider />
      </Sider>
      <AntdLayout>
        <Header style={{ background: colorBgContainer }}>
          <div
            className={styles.trigger}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
        </Header>
        <Content className={styles.content}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </AntdLayout>
    </AntdLayout>
  )
}
export default Layout
