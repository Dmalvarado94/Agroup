import React from 'react';
import './Sidebar.scss';

import PersonIcon from '@mui/icons-material/Person';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import BarChartIcon from '@mui/icons-material/BarChart';

import { Link } from 'react-router-dom';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';





const Sidebar = () => {
  return (
    <div className='sidebar'>
        <ul>

            <li><PersonIcon className='icon'></PersonIcon><span>Mi cuenta</span></li>
            <Link to="/personal"><li><EngineeringIcon className='icon'/><span>Personal</span></li></Link>
            <li><BarChartIcon className='icon' /><span>Graficos</span></li>
             <Link to='categorias'><li><span>Categorías</span></li></Link>
             <Link to="/calendario"><li>  <span>Calendario </span></li></Link>
            <Link to='tareas'> <li> <NoteAltOutlinedIcon  className='icon' /> <span>Tareas Pendientes</span></li></Link>

            </ul>
    </div>
  )
}

export default Sidebar