import React from 'react';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import './BotonCrearTareas.scss'



const BotonCrearTareas = (props) => {

const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
}

  return (
    <div>

        <button
        className="CreateTodoButton"
        onClick={onClickButton}
        >
            +
        </button>

    </div>
  )
}

export default BotonCrearTareas