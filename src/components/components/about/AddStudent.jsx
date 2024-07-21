import React, { useEffect, useState } from 'react';
import server from "../services/server.tsx"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Enrollment.css';

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    enrollmentNo: '',
    seatNo: '',
    dateOfEnrollment: '',
    studentName: '',
    dateOfBirth: '',
    motherName: '',
    fatherName: '',
    address: '',
    qualification: '',
    mobileNo: '',
    emailId: '',
    monthlyFee: '',
    batchTiming: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // You can add further logic to handle form submission, e.g., sending the data to an API.
    try {
      const response = await fetch(`${server.server}/addStudent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if(response.status===200){
        toast(data.message,{position : 'bottom-right'})
      }else{
        toast(data.message,{position : 'bottom-right' , type : 'error'})
      }
      console.log('Form data submitted:', data);
      // Handle success (e.g., clear the form, show a success message, etc.)
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (e.g., show an error message, etc.)
    }
  };

  useEffect(() => {
    fetch(`${server.server}/getEnrollmentNo`, {
      method: 'GET'
    }).then(async response => {
      let data = await response.json()
      setFormData(prev => { return { ...prev, enrollmentNo: data?.enrollmentNo } })
      console.log(data);
    }).catch(err=>{
      console.log("ERROR IN UPDATING ENROLLMENT NO",err);
    })
  },[])

  return (
    <div className='center div'>
      <div className='div'> 
        <h2>Student Enrollment Form</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className = "div">
          <label>Enrollment No:</label>
          <input type="text" name="enrollmentNo" value={formData.enrollmentNo} onChange={handleChange} required />
        </div>
        <div className = "div">
          <label>Seat No:</label>
          <input type="number" name="seatNo" value={formData.seatNo} onChange={handleChange} required />
        </div>
        <div className = "div">
          <label>Date of Enrollment:</label>
          <input type="date" name="dateOfEnrollment" value={formData.dateOfEnrollment} onChange={handleChange} required />
        </div>
        <div className = "div">
          <label>Student Name:</label>
          <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} />
        </div>
        <div className = "div">
          <label>Date of Birth:</label>
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
        </div>
        <div className = "div">
          <label>Mother's Name:</label>
          <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} />
        </div>
        <div className = "div">
          <label>Father's Name:</label>
          <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} />
        </div>
        <div className = "div">
          <label>Address:</label>
          <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
        </div>
        <div className = "div">
          <label>Qualification:</label>
          <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} />
        </div>
        <div className = "div">
          <label>Mobile No:</label>
          <input type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleChange} />
        </div>
        <div className = "div">
          <label>Email ID:</label>
          <input type="email" name="emailId" value={formData.emailId} onChange={handleChange} />
        </div>
        <div className = "div">
          <label>Monthly Fee:</label>
          <input type="number" name="monthlyFee" value={formData.monthlyFee} onChange={handleChange} />
        </div>
        <div className = "div">
          <label>Batch Timing:</label>
          <select name="batchTiming" value={formData.batchTiming} onChange={handleChange}>
            <option value="">Select Batch Timing</option>
            <option value="Morning">Morning</option>
            <option value="Evening">Evening</option>
            <option value="Full Day">Full Day</option>
          </select>
        </div>
      </form>
      <div className='center div'>
        <button type="submit" onClick={handleSubmit} className='button'>Submit</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EnrollmentForm;
