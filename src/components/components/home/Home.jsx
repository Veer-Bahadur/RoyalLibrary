import React, { useEffect, useState } from 'react'
import server from "../services/server.tsx"
import { useStore } from '../../../Store'
import Navbar from '../navbar/navbar'
import "./home.css"
import Card from './Card.jsx'
import './card.css'
import pic from './studentDummyImg.jpeg'

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
        <div >
            <input
                type="text"
                placeholder="Search by Enrollment No, Name, or Seat No"
                value={searchTerm}
                onChange={handleSearch}
                className="search-bar"
            />
            <div className="cards-container">
                {filteredStudents.map(student => (
                    <div>
                        <Card photo={pic} studentName={student.studentName} enrollmentNo={student.enrollmentNo} seatNo={student.seatNo} shift={student.batchTiming}/>
                    </div>
                    
                ))}
            </div>
        </div>
    );
};
export default Home