import React from 'react';
import './ListasTareas.scss';

const ListasTareas = (props) => {
  return (
    <div>
        <ul>
          {props.children}
        </ul>
    </div>
  )
}

export default ListasTareas