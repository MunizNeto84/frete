import React,{Component} from 'react'
import Chart from 'react-apexcharts'

const DonutChart = () => {
  const mockData = {
    series: [477138, 499928],
    labels: ['Lucros', 'Gastos']
  }

  const options = {
    legend: {
        show: true
    },
    colors: ['#92FFBB', '#FF756A'],
    
  } 
  
  return(
    <Chart 
      options={{ ...options, labels: mockData.labels}}
      series={mockData.series}
      type= "donut"
      height= "200"
      width= "400"
    />
  )
}


export default class Spending extends Component {
  state = {...DonutChart}
  render() {
     return (
       <div>
         <p>Gastos(%)</p>
         <DonutChart/>
       </div>
     )
  }
}
