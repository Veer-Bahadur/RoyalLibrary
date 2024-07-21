import React, { useEffect, useState } from 'react'
import server from "../services/server.tsx"
import { useStore } from '../../../Store'
import Navbar from '../navbar/navbar'
import "./home.css"

const Home = () => {
    const [students, setStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch(`${server.server}/getAllStudents`);
                const data = await response.json();
                console.log(data);
                setStudents(data.data);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchStudents();
    }, []);
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredStudents = students.filter(student =>
        student.enrollmentNo.toLowerCase()===searchTerm.toLowerCase() ||
        student.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.seatNo?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="student-list-container">
            <input
                type="text"
                placeholder="Search by Enrollment No, Name, or Seat No"
                value={searchTerm}
                onChange={handleSearch}
                className="search-bar"
            />
            <div className="student-list">
                {filteredStudents.map(student => (
                    <div key={student._id} className="student-row">
                        <div className="student-card">
                            <h3>{student.studentName}</h3>
                            <p>Enrollment No: {student.enrollmentNo}</p>
                            <p>Batch Timing: {student.batchTiming}</p>
                            <p>Seat No: {student.seatNo}</p>
                            <p>Date of Enrollment: {new Date(student.dateOfEnrollment).toLocaleDateString()}</p>
                            <p>Date of Birth: {new Date(student.dateOfBirth).toLocaleDateString()}</p>
                            <p>Mother's Name: {student.motherName}</p>
                            <p>Father's Name: {student.fatherName}</p>
                            <p>Address: {student.address}</p>
                            <p>Qualification: {student.qualification}</p>
                            <p>Mobile No: {student.mobileNo}</p>
                            <p>Email ID: {student.emailId}</p>
                            <p>Monthly Fee: {student.monthlyFee}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Home