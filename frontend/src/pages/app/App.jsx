import styles from '../../styles/App.module.scss'
import React from 'react'

import Header from '../components/template/Header'
import Nav from '../components/template/Nav'
import Home from '../components/home/Home'
import Footer from '../components/template/Footer'

// eslint-disable-next-line
export default props =>
<div className={styles.app}>
  <Header/>
  <Nav/>
  <Home/>
  <Footer/>
</div>