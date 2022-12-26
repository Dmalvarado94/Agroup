import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import NotificationsIcon from '@mui/icons-material/Notifications';
import './Navbar.scss'
import logo from '../../logo.png'
import { FiAlignJustify} from "react-icons/fi";
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <div className='navbar'>

      <div className="wrapper">
        <div className="left-side">
            < FiAlignJustify />
            <Link to='/'><img src={logo} alt="" className='logo' /></Link>
        </div>
        <div className="search">
          <SearchIcon className='icon'/>
          <input type="text" placeholder='search ... ' />

        </div>
        <div className="bienvenido">
          <h4 className='bienvenido-title'>Bienvendio: Family Farm</h4>
          <p className='bienvenido-correo'> familyfarm@gmail.com</p>
        </div>
        <div className="items">
          <div className="item">
            <DarkModeIcon className='icon' />

          </div>
           
            <div className="item">
              <NotificationsIcon className='icon'/>
            </div>
            <div className="item">
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Maradona-Mundial_86_con_la_copa.JPG/800px-Maradona-Mundial_86_con_la_copa.JPG'
              className='avatar'
              alt='maradios'
              />
            </div>
        </div>
      </div>


    </div>
  )
}

export default Navbar