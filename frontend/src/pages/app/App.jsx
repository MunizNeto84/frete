import styles from '../../styles/App.module.scss'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from '../components/template/Header'
import Nav from '../components/template/Nav'
import Routes from './Routes'
import Footer from '../components/template/Footer'

// eslint-disable-next-line
export default props =>
<BrowserRouter>
  <div className={styles.app}>
    <Header/>
    <Nav/>
    <Routes />
    <Footer/>
  </div>
</BrowserRouter>