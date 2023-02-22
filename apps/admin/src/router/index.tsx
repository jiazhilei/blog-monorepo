import { lazy } from 'react'
import { createBrowserRouter, RouteObject } from 'react-router-dom'
const Layout = lazy(() => import('../components/layout'))
const Home = lazy(() => import('../pages/home'))
const ArticleList = lazy(() => import('../pages/article'))
const Create = lazy(() => import('../pages/article/create'))
const Login = lazy(() => import('../pages/login'))
const NotFound = lazy(() => import('../pages/not-found'))
const RouteTable: RouteObject[] = [
  {
    path: '/', //一级路由
    element: <Layout />,
    children: [
      //二级路由
      {
        path: '', //为空则默认显示该路由
        index: true,
        element: <Home />
      },
      {
        path: 'article', //为空则默认显示该路由
        element: <ArticleList />
      }
    ]
  },
  {
    path: '/article/create', //为空则默认显示该路由
    element: <Create />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*', //404页面
    element: <NotFound />
  }
]
const router = createBrowserRouter(RouteTable)

export default router
