import React, { useState } from 'react'
import './card.css'
import MyModal from './MyModal.jsx';


const Card = ({photo, studentName, enrollmentNo, seatNo,shift, student}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className='card'>
      <img src={photo} alt={`${studentName}'s`} className="card-photo" />
      <div>
        <h2 className="card-name">{studentName}</h2>
        <p className="card-enrollment"><b>Enrollment No:</b> {enrollmentNo}</p>
        <p className="card-seat"><b>Seat No:</b> {seatNo}</p>
        <p className="card-shift"><b>Shift: </b>{shift}</p>
      </div>
      <button className='card-button' onClick={() => setModalIsOpen(true)}>View Details</button>
      <MyModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} student={student} />
    </div>
  )
}

export default Card

