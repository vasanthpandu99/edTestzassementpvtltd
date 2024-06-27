
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentHistory = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('/api/appointments', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setAppointments(response.data);
      } catch (error) {
        alert('Error fetching appointments');
      }
    };

    fetchAppointments();
  }, []);

  return (
    <ul>
      {appointments.map((appointment) => (
        <li key={appointment.id}>{appointment.date}</li>
      ))}
    </ul>
  );
};

export default AppointmentHistory;
