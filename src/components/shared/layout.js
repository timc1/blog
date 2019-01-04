import React from 'react'

import Header from './header'
import Footer from './footer'
import './layout.css'

export default ({ children }) => (
  <>
    <Header />
    <main className="blur-me">{children}</main>
    <Footer className="blur-me" />
  </>
)
