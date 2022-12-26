import React from 'react';
import './Widgets.scss';
import EmailIcon from '@mui/icons-material/Email';
import CircularProgress from '@mui/material/CircularProgress';
import EngineeringIcon from '@mui/icons-material/Engineering';
import InventoryIcon from '@mui/icons-material/Inventory';
import {  yellow } from '@mui/material/colors';




const Widgets = () => {
  return (
    <div className='widgets'>
        <div className="widgetCard">
            <div className='lado-izquierdo'>
                <EmailIcon />
                <h3>89</h3>
                <p>Mails recibidos</p>
            </div>
            <div className="lado-derecho">
                <CircularProgress variant="determinate" value={75} />
                <p>+ 75%</p>
            </div>
        </div>
        <div className="widgetCard">
        <div className='lado-izquierdo'>
                < EngineeringIcon />
                <h3>159</h3>
                <p>Trabajadores</p>
            </div>
            <div className="lado-derecho">
                <CircularProgress variant="determinate" value={48} />
                <p>+ 48%</p>
            </div>
        </div>
        <div className="widgetCard">
        <div className='lado-izquierdo'>
                <InventoryIcon />
                <h3>238</h3>
                <p>Cosechas</p>
            </div>
            <div className="lado-derecho">
                <CircularProgress variant="determinate" value={30} />
                <p>+ 30%</p>
            </div>
        </div>
    </div>
  )
}

export default Widgets