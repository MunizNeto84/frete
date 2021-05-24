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
        <Link to='/pedidos'>
          Funcionários
        </Link>
        <Link to='/pedidos'>
          Clientes
        </Link>
        <Link to='/pedidos'>
          Fretes
        </Link>
        <Link to='/pedidos'>
          Gastos
        </Link>
        <Link to='/pedidos'>
          Manutenção
        </Link>
      </nav> 
</aside>