import styles from '../../../styles/Nav.module.scss'
import React from 'react'
import {Link} from 'react-router-dom'

// eslint-disable-next-line
export default props =>
<aside className={styles.menuContainer}>
    <nav>
        <Link to='/'>
          Inicio
        </Link>
        <Link to='/funcionarios'>
          Funcionários
        </Link>
        <Link to='/'>
          Clientes
        </Link>
        <Link to='/'>
          Fretes
        </Link>
        <Link to='/'>
          Gastos
        </Link>
        <Link to='/'>
          Manutenção
        </Link>
      </nav> 
</aside>