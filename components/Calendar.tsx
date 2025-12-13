import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

export interface CalendarEvent {
    id: string;
    organizer: string;
    date: Date;
    title: string;
    type: 'course' | 'talk' | 'class';
}

interface CalendarProps {
    events: CalendarEvent[];
    selectedDate: Date | null;
    onSelectDate: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ events, selectedDate, onSelectDate }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    // Auto-switch month when selectedDate changes
    React.useEffect(() => {
        if (selectedDate) {
            setCurrentMonth(prev => {
                if (prev.getMonth() !== selectedDate.getMonth() || prev.getFullYear() !== selectedDate.getFullYear()) {
                    return new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
                }
                return prev;
            });
        }
    }, [selectedDate]);

    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

    const monthNames = [
        "Januari", "Februari", "Mac", "April", "Mei", "Jun",
        "Julai", "Ogos", "September", "Oktober", "November", "Disember"
    ];

    const handlePrevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    const isSameDay = (d1: Date, d2: Date) => {
        return d1.getDate() === d2.getDate() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getFullYear() === d2.getFullYear();
    };

    const getDayEvents = (day: number) => {
        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        return events.filter(e => isSameDay(e.date, date));
    };

    const days = [];
    // Empty slots for previous month
    for (let i = 0; i < firstDayOfMonth; i++) {
        days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
    }

    // Days of the month
    for (let d = 1; d <= daysInMonth; d++) {
        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), d);
        const dayEvents = getDayEvents(d);
        const hasEvent = dayEvents.length > 0;
        const isSelected = selectedDate && isSameDay(selectedDate, date);

        days.push(
            <button
                key={d}
                onClick={() => {
                    if (hasEvent) onSelectDate(date);
                }}
                disabled={!hasEvent}
                className={`h-10 w-10 rounded-full flex items-center justify-center text-sm relative transition-all duration-300
          ${isSelected
                        ? 'bg-gold-500 text-white shadow-lg scale-110 font-bold'
                        : hasEvent
                            ? 'text-olive-900 hover:bg-gold-100 font-medium cursor-pointer'
                            : 'text-gray-300 cursor-default'
                    }
        `}
            >
                {d}
                {hasEvent && !isSelected && (
                    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gold-500 rounded-full"></span>
                )}
            </button>
        );
    }

    return (
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-sand-200">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-serif text-olive-900 flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-gold-600" />
                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h3>
                <div className="flex gap-1">
                    <button onClick={handlePrevMonth} className="p-1 hover:bg-sand-100 rounded-full text-olive-800 transition-colors">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button onClick={handleNextMonth} className="p-1 hover:bg-sand-100 rounded-full text-olive-800 transition-colors">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">
                {['Ahd', 'Isn', 'Sel', 'Rab', 'Kha', 'Jum', 'Sab'].map(day => (
                    <div key={day} className="h-10 flex items-center justify-center">{day}</div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-1 justify-items-center">
                {days}
            </div>

            <div className="mt-6 pt-4 border-t border-sand-100 text-sm text-center text-gray-500 italic">
                Pilih tarikh untuk melihat kursus
            </div>
        </div>
    );
};

export default Calendar;
