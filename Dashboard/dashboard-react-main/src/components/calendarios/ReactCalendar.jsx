
import React, { useState }from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './ReactCalendar.scss'
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


import { Link } from 'react-router-dom';
import { style } from '@mui/system';






const locales = {
  "es-CHI": require("date-fns/locale/es")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});

const events = [
  {
    title: "partido Argentina",
    allDay: true,
    start: new Date(2022,12,21),
    end: new Date(2022,12,21),
    
  },

  {
    title: "Vacation",
    start: new Date(2022,12,29),
    end: new Date(2022,12,30)
  },
  {
    title: "conference",
    start: new Date(2022,12,30),
    end: new Date(2022,12,30)
  }
]





const ReactCalendar = () => {

const [newEvent, setNewEvent] =useState({title: "", start: "", end: ""})
const [allEvents, setAllEvents] = useState(events);

function handleAddEvent() {
  setAllEvents([... allEvents, newEvent])
}


  return (
    
    <div className='calendar'>
      
        <div className='calendar-head'>
        
      
      <h1 className='calendar-title'>Calendario AgroUp</h1>
      <h2>Agrega un nuevo evento</h2>
      <div>
        <input className='calendar-input' type="text" placeholder='Agrega un título' 
        style={{width: "40%", marginRight: "10px", justifySelf: "center", marginBottom: "10px",  }}
        value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
        />
        </div>
        <ReactDatePicker placeholderText='Start Date'
        style={{marginRight: "10px",  marginBottom: "40px", marginTop:"40px"}}
        selected={newEvent.start}
        onChange={(start) => setNewEvent({...newEvent, start: start})}
        />
        <ReactDatePicker placeholderText='End Date'
        style={{marginRight: "10px"}}
        selected={newEvent.end}
        onChange={(end) => setNewEvent({...newEvent, end})}
        />
        <button style={{marginTop: "30px", background: "white" }} onClick={handleAddEvent} >Agregar Evento</button>
      </div>

      <Calendar   localizer={localizer} events={allEvents} className="big-calendar"
      startAccessor="start" endAccessor="end" style={{height: 500, margin: "50px", color: "black", background: "white" }}
      />

    </div>
  )
}

export default ReactCalendar