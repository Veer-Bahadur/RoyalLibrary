import React, { useEffect, useState } from 'react'
import { useStore } from '../../../Store'
import Navbar from '../navbar/navbar'
import "./home.css"

const Home = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch('http://localhost:8000/getAllStudents');
                const data = await response.json();
                console.log(data);
                setStudents(data.data);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchStudents();
    }, []);

    return (
        <div className="student-list">
            {students.map(student => (
                <div key={student._id} className="student-row">
                    <div className="student-card">
                        <h3>{student.studentName}</h3>
                        <p>Enrollment No: {student.enrollmentNo}</p>
                        <p>Date of Enrollment: {new Date(student.dateOfEnrollment).toLocaleDateString()}</p>
                        <p>Date of Birth: {new Date(student.dateOfBirth).toLocaleDateString()}</p>
                        <p>Mother's Name: {student.motherName}</p>
                        <p>Father's Name: {student.fatherName}</p>
                        <p>Address: {student.address}</p>
                        <p>Qualification: {student.qualification}</p>
                        <p>Mobile No: {student.mobileNo}</p>
                        <p>Email ID: {student.emailId}</p>
                        <p>Monthly Fee: {student.monthlyFee}</p>
                        <p>Batch Timing: {student.batchTiming}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Home