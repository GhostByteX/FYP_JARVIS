import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import '../styles/Dashboard.css'
import wave from '../assets/wave.png'
import key1 from '../assets/1.PNG'
import key2 from '../assets/2.PNG'
import key3 from '../assets/3.PNG'
import key4 from '../assets/4.PNG'
import key5 from '../assets/5.PNG'
import key6 from '../assets/6.PNG'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
  Legend,
  ResponsiveContainer
} from 'recharts'

//import USAmap from 'react-usa-map'

const Dashboard = () => {
  const Data = [7043, 5174, 1869]
  const paperlessBilling = { yes: 5643, no: 1400 }
  const streamingMusic = { yes: 3432, no: 3611 }
  const dependents = { yes: 2641, no: 4402 }
  const internetTypeData = [
    { type: 'Fibre Optic', noOfCustomers: 4000 },
    { type: 'Cable', noOfCustomers: 2000 },
    { type: 'DSL', noOfCustomers: 1043 }
  ]
  const paymentMethodData = [
    { method: 'Withdrawal', noOfCustomers: 2000 },
    { method: 'Credit Card', noOfCustomers: 3000 },
    { method: 'Mail Check', noOfCustomers: 2043 }
  ]
  const chartData = [
    { name: 'Women', value: 3325 },
    { name: 'men', value: 3718 }
  ]
  const chartData2 = [
    { name: '>40', value: 2000 },
    { name: '>30', value: 3000 },
    { name: '>20', value: 2043 }
  ]
  const chartData3 = [
    { name: 'biyearly', value: 3500 },
    { name: 'monthly', value: 1543 },
    { name: 'yearly', value: 2000 }
  ]
  const COLORS = ['#8845E4', '#F76982']
  const COLORS2 = ['#648BE5', '#F76982', '#8845E4']

  const updateData = () => {
    let submitData = {
      customer_id: 'all'
    }

    let response = fetch('http://127.0.0.1:3001/query/stats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submitData)
    })
      .then(response => response.json())
      .then(data => {
        //update Data and G_Data
        this.setState({
          Data: [data.total, data.churned, data.retained],
          G_Data: [data.male, data.female]
        })

        this.setState({
          loaded: true
        })

        console.log(data)
      })
  }

  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  const statesCustomConfig = () => {
    return {
      NJ: {
        fill: '#4C7FEE',
        clickHandler: event => console.log('New Jersey')
      },
      NY: {
        fill: '#4C7FEE',
        clickHandler: event => console.log('New York')
      },
      IL: {
        fill: '#4C7FEE',
        clickHandler: event => console.log('Illinois')
      },
      WI: {
        fill: '#4C7FEE',
        clickHandler: event => console.log('Wisconsin')
      },
      TX: {
        fill: '#4C7FEE',
        clickHandler: event => console.log('Texas')
      },
      KS: {
        fill: '#4C7FEE',
        clickHandler: event => console.log('Kansas')
      },
      WV: {
        fill: '#4C7FEE',
        clickHandler: event => console.log('West Virginia')
      },
      UT: {
        fill: '#4C7FEE',
        clickHandler: event => console.log('Utah')
      }
    }
  }

  return (
    <Fragment>
      {updateData()}
      <Header />
      <Sidebar />
      <h1 className='welcomeetxt'>
        Welcome to <span className='welcomeetxtspan'>JARVIS!</span>
      </h1>
      <img className='wave' src={wave} alt='wave' />
      <div className='container1'>
        <div className='labeltxt2'>Statistics by Gender</div>
        <img className='keypositioning1' src={key6} alt='key6' />
        <PieChart width={450} height={200}>
          <Pie
            data={chartData}
            cx='50%'
            cy='50%'
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill='#EA4598'
            dataKey='value'
            cursor={'pointer'}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className='container2'>
        <div className='labeltxt2'>Customers by Age</div>
        <img className='keypositioning2' src={key5} alt='key5' />
        <PieChart width={450} height={200}>
          <Pie
            data={chartData2}
            cx='50%'
            cy='50%'
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill='#EA4598'
            dataKey='value'
            cursor={'pointer'}
          >
            {chartData2.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS2[index % COLORS2.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className='container3'>
        <div className='labeltxt2'>Contract</div>
        <img className='keypositioning3' src={key4} alt='key4' />
        <PieChart width={450} height={200}>
          <Pie
            data={chartData3}
            cx='50%'
            cy='50%'
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill='#8884d8'
            dataKey='value'
            cursor={'pointer'}
          >
            {chartData3.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS2[index % COLORS2.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className='container4'>
        <div className='labeltxt2'>Dependents</div>
        <img className='keypositioning' src={key3} alt='key3' />
        <div className='statsbox1'>
          <div className='statsbox1txt'>{dependents.no}</div>
        </div>
        <div className='statsbox2'>
          <div className='statsbox2txt'>{dependents.yes}</div>
        </div>
      </div>
      <div className='container5'>
        <div className='labeltxt2'>Paperless Billing</div>
        <img className='keypositioning' src={key1} alt='key1' />
        <div className='statsbox1'>
          <div className='statsbox1txt'>{paperlessBilling.no}</div>
        </div>
        <div className='statsbox3'>
          <div className='statsbox2txt'>{paperlessBilling.yes}</div>
        </div>
      </div>
      <div className='container6'>
        <div className='labeltxt2'>Streaming Music</div>
        <img className='keypositioning' src={key2} alt='key2' />
        <div className='statsbox1'>
          <div className='statsbox1txt'>{streamingMusic.no}</div>
        </div>
        <div className='statsbox4'>
          <div className='statsbox2txt'>{streamingMusic.yes}</div>
        </div>
      </div>
      <div className='container7'>
        <div className='labeltxt'>Total Customers</div>
        <div className='valuetxt'>{Data[0]}</div>
      </div>
      <div className='container8'>
        <div className='labeltxt'>Churners</div>
        <div className='valuetxt'>{Data[1]}</div>
      </div>
      <div className='container9'>
        <div className='labeltxt'>Non-Churners</div>
        <div className='valuetxt'>{Data[2]}</div>
      </div>
      {/* <div className='container10'>
        <div className='maptxt'>US Map Distribution</div>
        <USAmap
          className='mapPos'
          customize={statesCustomConfig()}
          defaultFill='#9AC8FC'
          height='400'
          width='950'
        />
      </div> */}
      <div className='container11'>
        <div className='labeltxt2'>Internet Type</div>
        <BarChart
          width={420}
          height={450}
          data={internetTypeData}
          margin={{
            top: 35,
            right: 30,
            left: 35,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='type' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='noOfCustomers' fill='#F76982' />
        </BarChart>
      </div>
      <div className='container12'>
        <div className='labeltxt2'>Payment Method</div>
        <BarChart
          width={420}
          height={450}
          data={paymentMethodData}
          margin={{
            top: 35,
            right: 30,
            left: 35,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='method' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='noOfCustomers' fill='#8845E4' />
        </BarChart>
      </div>
    </Fragment>
  )
}

export default Dashboard
