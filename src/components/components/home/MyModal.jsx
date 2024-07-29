import React, { useState } from 'react';
import Modal from 'react-modal';
import './MyModal.css';
import FeesModal from './FeesModal';

Modal.setAppElement('#root');

const MyModal = ({ isOpen, onRequestClose, student }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <div className="left">
          <div className="field">Name: {student.studentName}</div>
          <div className="field">Enrollment No: {student.enrollmentNo}</div>
          <div className="field">Address: {student.address}</div>
          <div className="field">Father's Name: {student.fatherName}</div>
          <div className="field">Mother's Name: {student.motherName}</div>
          <div className="field">Date of Birth: {new Date(student.dateOfBirth).toDateString()}</div>
          <div className="field">Phone: {student.mobileNo}</div>
          <div className="field">Email: {student.emailId}</div>
          <div className="field">Qualification: {student.qualification}</div>
          <div className="field">Seat No: {student.seatNo}</div>
          <div className="field">Shift: {student.batchTiming}</div>
          <div className="field">Date of Joining : {new Date(student.dateOfEnrollment).toDateString()}</div>
        </div>
        <div className="right">
          <img src="https://via.placeholder.com/150" alt="Profile" className="profile-image" />
          <div style={{marginTop : "25px"}}>
            {/* <button>Submit Fees</button> */}
            <FeesModal student={student}/>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MyModal;
