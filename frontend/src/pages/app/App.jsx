import '../../styles/App.module.scss'
import React from 'react'

import Header from '../components/template/Header'
import Nav from '../components/template/Nav'
import Main from '../components/template/Main'
import Footer from '../components/template/Footer'

export default props =>
<div className="app">
  <Header/>
  <Nav/>
  <Main/>
  <Footer/>
</div>