// src/components/ModalForm.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './FeesModal.module.css';

Modal.setAppElement('#root');

const ModalForm = ({student}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    studentName : student.studentName,
    seatNo : student.seatNo,
    batchTiming : student.batchTiming,
    month: '',
    year: '',
    dop: '',
    amount: ''
  });

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
        const response = await fetch(`${server.server}/submit-fees`,{
            method : "post",
            mode : "cors",
            headers: {
                'Content-Type': 'application/json'
              },
            body : JSON.stringify(formData)
        });
        const data = await response.json();
        console.log(data);
        setStudents(data.data);
    } catch (error) {
        console.error('Error fetching students:', error);
    }
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Submit Fees</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Enter Details"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <h2>Enter Details</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Month: </label>
            <select name="month" value={formData.month} onChange={handleChange} required>
              <option value="">Select Month</option>
              {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                <option key={index} value={month}>{month}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Year: </label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
              min="1900"
              max="2100"
            />
          </div>
          <div>
            <label>Date of Payment: </label>
            <input
              type="date"
              name="dop"
              value={formData.dop}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Amount: </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default ModalForm;
