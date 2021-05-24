import React,{Component} from 'react'
import Chart from 'react-apexcharts'
const BarChart = () => {
  const options = {
    plotOptions: {
        bar: {
            vertical: true,
        }
    },
      colors: ['#92FFBB', '#FF756A']
  }

  const mockData = {
    labels: {
        categories: ['Mar', 'Abr', 'Mai']
    },
    series: [
        {
            name: "Lucros",
            data: [43.6, 67.1, 67.7]                   
        },
        {
            name: "Gastos",
            data: [33.6, 47.1, 27.7]                   
      }
    ]
  }

  return(
    <Chart 
      options={{ ...options, xaxis: mockData.labels}}
      series={mockData.series}
      type= "bar"
      height= "200"
      width= "400"
    />
  )
}


export default class LastMonths extends Component {
  state = {...BarChart}
  render() {
     return (
       <div>
         <p>Últimos meses</p>
         <BarChart/>
       </div>
     )
  }
}
