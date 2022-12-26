import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';



const Chart = () => {

  const data = [
    {
      name: 'tomate',
      precio: 1245,
      precioAyer: 1100
    },
    {
      name: 'cereza',
      
      precio: 890,
      precioAyer: 1100
    },
    {
      name: 'nuez',
      precio: 1500,
      precioAyer: 1700
    },
    {
      name: 'pera',
      precio: 345,
      precioAyer: 500
    },
    {
      name: 'mango',
      precio: 1300,
      precioAyer: 1700
    },
    {
      name: 'palta',
      precio: 2100,
      precioAyer: 1700
    },
    {
      name: 'uvas',
      precio: 680,
      precioAyer: 670
    },
  ];
  




  return (
    <div className='areachart'>
 <AreaChart width={650} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="precio" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#034C3D" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#034C3D" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="precioAyer" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#034C3D" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#034C3D" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis  />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="precio" stroke="#034C3D" fillOpacity={1} fill="url(#precio)" />
  <Area type="monotone" dataKey="precio" stroke= "#034C3D" fillOpacity={1} fill="url(#precioAyer)" />
   
</AreaChart>
    </div>
  )
}

export default Chart