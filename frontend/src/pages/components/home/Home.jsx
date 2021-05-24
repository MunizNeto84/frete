import React from 'react'
import Main from '../template/Main'
import Styles from '../../../styles/Home.module.scss'

// eslint-disable-next-line
export default props => 
<React.Fragment>
  <Main >
 
  <body className={Styles.content}>
    <div className={Styles.latestSpending}>
      <p>Últimos Gastos</p>
      <div>
          
      </div>
    </div>
    <div className={Styles.spending}>
    <p>Gastos</p>
     <div>
       
     </div>
    </div>
    <div className={Styles.lastMonths}>
      <p>Últimos meses</p>
    </div>
    <h2>Últimos Fretes</h2>
    <div className={Styles.lastFreight}>
      <div>

      </div>
    </div>
  </body>  
  </Main>
</React.Fragment>
