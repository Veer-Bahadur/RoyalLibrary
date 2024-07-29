// src/ResponsiveTable.js

import React, { useState } from 'react';
import './Fees.css';

const ResponsiveTable = () => {
  const data = [
    { name: 'John Doe', seatNo: 'A1', shift: 'Morning', feesAmount: '$500', amountSubmitted: '$500', date: '2023-01-15' },
    { name: 'Jane Smith', seatNo: 'A2', shift: 'Evening', feesAmount: '$500', amountSubmitted: '$300', date: '2023-02-20' },
    { name: 'Sam Brown', seatNo: 'B1', shift: 'Morning', feesAmount: '$500', amountSubmitted: '$500', date: '2023-03-10' },
    { name: 'Lucy Green', seatNo: 'B2', shift: 'Evening', feesAmount: '$500', amountSubmitted: '$200', date: '2023-04-25' }
  ];

  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const filterData = (data) => {
    return data.filter((row) => {
      const rowDate = new Date(row.date);
      const rowMonth = rowDate.getMonth() + 1;
      const rowYear = rowDate.getFullYear();
      
      return (
        (!selectedMonth || rowMonth === parseInt(selectedMonth)) &&
        (!selectedYear || rowYear === parseInt(selectedYear))
      );
    });
  };

  const filteredData = filterData(data);

  return (
    <div className="table-container">
      <div className="filters">
        <select value={selectedMonth} onChange={handleMonthChange}>
          <option value="">Select Month</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <select value={selectedYear} onChange={handleYearChange}>
          <option value="">Select Year</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
      <table className="responsive-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Seat No</th>
            <th>Shift</th>
            <th>Fees Amount</th>
            <th>Amount Submitted</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.seatNo}</td>
              <td>{row.shift}</td>
              <td>{row.feesAmount}</td>
              <td>{row.amountSubmitted}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponsiveTable;
