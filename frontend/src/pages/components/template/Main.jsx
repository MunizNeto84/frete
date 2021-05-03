import styles from'../../../styles/Main.module.scss'
import React from 'react'

// eslint-disable-next-line
export default props =>
  <main className={styles.content}>
    <div>
      {props.children}
    </div>
  </main>
