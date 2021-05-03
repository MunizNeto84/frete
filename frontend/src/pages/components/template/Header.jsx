import styles from '../../../styles/Header.module.scss'
import React from 'react'

import format from 'date-fns/format'
import { ptBR } from 'date-fns/locale'

const currentDate = format (new Date(), 'iii, d MMMM', {
  locale: ptBR
})
//eslint-disable-next-line
export default props =>
<header className={styles.header}>
        <img src="/logo-white.svg" alt="frete"/>
        <p>O melhor para seu negocio!</p>
        <span>{currentDate}</span>
</header>