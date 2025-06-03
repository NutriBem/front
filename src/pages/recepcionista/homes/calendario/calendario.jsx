import React, { useState } from "react";
import './calendário.css';
import Header from '../../../../components/compRecepcionista/compRecepcionista';

function Calendario() {
    const [currentDate, setCurrentDate] = useState(new Date());

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const generateCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const totalDays = getDaysInMonth(year, month);

        const calendar = [];
        let week = new Array(7).fill(null);
        let day = 1;

        for (let i = 0; i < 6; i++) {
            week = new Array(7).fill(null);

            for (let j = 0; j < 7; j++) {
                if ((i === 0 && j < firstDay) || day > totalDays) continue;
                week[j] = day++;
            }

            calendar.push(week);
        }

        return calendar;
    };

    const changeMonth = (offset) => {
        const newDate = new Date(currentDate);
        newDate.setMonth(currentDate.getMonth() + offset);
        setCurrentDate(newDate);
    };

    const monthNames = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    const calendar = generateCalendar();

    return (
        <div className="calendario-layout">
            <Header />
            <div className="calendario-container">
                <h3>Calendário</h3>
                <div className="calendario-header">
                    <button onClick={() => changeMonth(-1)}>&lt;</button>
                    <h2>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
                    <button onClick={() => changeMonth(1)}>&gt;</button>
                </div>

                <div className="calendario-grid">
                    {['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'].map(day => (
                        <div key={day} className="calendario-day-header">{day}</div>
                    ))}
                    {calendar.flat().map((day, index) => (
                        <div key={index} className="calendario-cell">
                            {day && <span>{day}</span>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Calendario;
