import './Layout.scss'

import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="page">
        <span className="tags">&lt; Mustafa Bilal Dogan &gt;</span>

        <Outlet />{/* Home sayfasını içerde göstermesini sağladı. */}
        <span className="bottom-tags">&lt; /Mustafa Bilal Dogan &gt;</span>
      </div>
    </div>
  )
}

export default Layout
