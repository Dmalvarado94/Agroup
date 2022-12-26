import React from 'react';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import SuperscriptOutlinedIcon from '@mui/icons-material/SuperscriptOutlined';
import './TareasItem.scss'
import { RiDeleteBin6Line } from "react-icons/ri";


const TareasItem = (props) => {

  return (
    <li className='tareasItem'>
      
      
      <p className={`TareaItem-p ${props.completed && 'TareaItem-p--complete'}`}>
      <CheckOutlinedIcon 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} 
        onClick={props.onComplete}/>
          <span className='TareaItem-p'>{props.text}</span>
         <SuperscriptOutlinedIcon className="Icon Icon-delete"  onClick={props.onDelete} />
        </p>
    </li>
  )
}

export default TareasItem

/**
 * 
 * 
 *       <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} 
        onClick={props.onComplete}
      >
        l
      </span>
        <p className={`TareaItem-p ${props.completed && 'TareaItem-p--complete'}`}>
            {props.text}
        </p>
        <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
        >
          <SuperscriptOutlinedIcon className="Icon Icon-delete"  onClick={props.onDelete} />
        </span>

 */