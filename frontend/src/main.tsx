import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App.tsx'
import Error from './pages/Error.tsx'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AddProduct from './pages/AddProduct.tsx'
import { Provider as JotaiProvider } from 'jotai'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import Logout from './components/Logout.tsx'
import Cart from './pages/Cart.tsx'
import Product from './pages/Product.tsx'
import InitialData from './pages/InitialData.tsx'
import SellerHome from './pages/SellerHome.tsx'
import SellerLogin from './pages/SellerLogin.tsx'
import SellerRegister from './pages/SellerRegister.tsx'
import SellerLogout from './components/SellerLogout.tsx'
import SellerLayout from './components/SellerLayout.tsx'
import SellerProducts from './pages/SellerProducts.tsx'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    // loader:,
    // action:,
    children: [
      {
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: '/login',
            element: <Login />,
          },
          {
            path: '/login/register',
            element: <Register />,
          },
          {
            path: '/products/:productName/:productId',
            element: <Product />,
          },
          {
            path: '/cart',
            element: <Cart />
          },
          {
            path: '/logout',
            element: <Logout />,
          },
          {
            path: '/fake',
            element: <InitialData />,
          },
          {
            path: '/seller-login',
            element: <SellerLogin />,
          },
          {
            path: '/seller-login/register',
            element: <SellerRegister />,
          },
        ],
      }
    ],
  },
  {
    path: '/seller',
    element: <SellerLayout />,
    errorElement: <Error />,
    // loader:,
    // action:,
    children: [
      {
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <SellerHome />
          },
          {
            path: '/seller/add',
            element: <AddProduct />,
          },
          {
            path: '/seller/products',
            element: <SellerProducts />,
          },
          {
            path: '/seller/logout',
            element: <SellerLogout />,
          },
        ],
      },
    ],
  }
  /*
  {
    path: '/add',
    element: <AddProduct />,
    errorElement: <Error />,
    // loader:,
    // action:,
  },
  */
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      <JotaiProvider>
        <RouterProvider router={router} />
      </JotaiProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
