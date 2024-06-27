import React, { useState } from 'react';
import axios from 'axios';

const Booking = () => {
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post('/api/appointments', { date }, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      alert('Appointment booked successfully');
    } catch (error) {
      alert('Error booking appointment');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default Booking;