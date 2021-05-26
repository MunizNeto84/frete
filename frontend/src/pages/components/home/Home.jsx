import React from 'react'
import Main from '../template/Main'
import LatestSpending from '../latestSpending/LatestSpending'
import LastFreight from '../lastFreight/LastFreight'
import LastMonths from '../barChart/LastMonths'
import Spending from '../donutChart/Spending'
import Styles from '../../../styles/Home.module.scss'

// eslint-disable-next-line
export default () => 
<React.Fragment>
  <Main >
  <div className={Styles.content}>
    <div className={Styles.latestSpending}>
      <p>Últimos Gastos</p>
      <div>
        <LatestSpending/>
      </div>
    </div>
    <div className={Styles.spending}>
     <div>
       <Spending/>
     </div>
    </div>
    <div className={Styles.lastMonths}>
      <div>
        <LastMonths/>
      </div>
    </div>
    <h2>Últimos Fretes</h2>
    <div className={Styles.lastFreight}>
      <div>
        <LastFreight/>
      </div>
    </div>
  </div>  
  </Main>
</React.Fragment>
