import styles from '../../../styles/Header.module.scss'
import React from 'react'
import {Link} from 'react-router-dom'

import format from 'date-fns/format'
import { ptBR } from 'date-fns/locale'

const currentDate = format (new Date(), 'iii, d MMMM', {
  locale: ptBR
})
//eslint-disable-next-line
export default () =>
<header className={styles.header}>
        <Link to='/'>
          <img src="/frete-white.svg" alt="frete"/>
        </Link>
        <p>O melhor para seu negocio!</p>
        <span>{currentDate}</span>
</header>