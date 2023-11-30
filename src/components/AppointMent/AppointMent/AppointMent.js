import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointMentForm from '../AppointMentForm/AppointMentForm';
import AppointMentTop from '../AppointMentTop/AppointMentTop';
import BookApointMent from '../BookApointMent/BookApointMent';
// import 
const AppointMent = () => {
    const [selectDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) =>{
        setSelectedDate(date)
    }
    return (
        <div>
            
        </div>
    );
};

export default AppointMent;