import React from 'react'

import Header from './header'
import Footer from './footer'
import './layout.css'
import './prism-github-theme.css'

export default ({ children }) => (
  <>
    <Header />
    <main className="blur-me">{children}</main>
    <Footer className="blur-me" />
  </>
)
