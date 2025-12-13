import React, { useState, useEffect } from 'react';
import Calendar, { CalendarEvent } from './Calendar';
import { MapPin, Clock, Users, Building, CheckCircle, Maximize2, X, Download, ChevronLeft, ChevronRight } from 'lucide-react';

// @ts-ignore
import coursePoster1 from '../assets/poster/poster-1.jpg';
// @ts-ignore
import coursePoster2 from '../assets/poster/poster-2.jpg';
// @ts-ignore
import coursePoster3 from '../assets/poster/poster-4.jpeg';

const UmrahCourseSection: React.FC = () => {
    const fixedEvents: CalendarEvent[] = [
        {
            id: '1',
            date: new Date('2025-02-15T09:00:00'),
            organizer: 'Hijrah al Haramain HQ',
            title: 'Kursus Asas Umrah',
            type: 'course'
        },
        {
            id: '2',
            date: new Date('2026-01-01T20:00:00'),
            organizer: 'Surau Al-Hajj',
            title: 'Ceramah Perdana: Menuju Baitullah',
            type: 'talk'
        },
        {
            id: '3',
            date: new Date('2025-12-15'),
            organizer: 'Hijrah al Haramain HQ',
            title: 'Kursus intensif Ramadan',
            type: 'course'
        },
        // Adding more dummy events to demonstrate scroll
        {
            id: '4',
            date: new Date('2026-03-10'),
            organizer: 'Masjid Negeri',
            title: 'Persiapan Haji 2026',
            type: 'course'
        },
        {
            id: '5',
            date: new Date('2026-04-05'),
            organizer: 'Hijrah al Haramain HQ',
            title: 'Tanya Jawab Umrah',
            type: 'talk'
        }
    ];

    const eventDetails: Record<string, {
        img: string;
        time: string;
        location: string;
        speakers: string[];
        price: string;
        organizer: string;
    }> = {
        '1': {
            img: coursePoster1,
            time: '09:00 PAGI - 01:00 PETANG',
            location: 'Masjid Wilayah Persekutuan, Kuala Lumpur',
            speakers: ['Ustaz Don Daniyal', 'Ustaz Azhar Idrus'],
            price: 'Percuma – Teori',
            organizer: 'Hijrah al Haramain HQ',
        },
        '2': {
            img: coursePoster2,
            time: '08:00 MALAM - 10:30 MALAM',
            location: 'Dewan seminar Hijrah, Shah Alam',
            speakers: ['Oki Setiana Dewi', 'Prof. Muhaya'],
            price: 'Percuma',
            organizer: 'Surau Al-Hajj',
        },
        '3': {
            img: coursePoster3,
            time: '09:00 PAGI - 05:00 PETANG',
            location: 'Masjid Besi, Putrajaya',
            speakers: ['Ustaz Kazim Elias'],
            price: 'Berbayar - RM50',
            organizer: 'Hijrah al Haramain HQ',
        },
        '4': {
            img: coursePoster1,
            time: '09:00 PAGI - 12:00 PETANG',
            location: 'Masjid Negeri Shah Alam',
            speakers: ['Ustaz A', 'Ustaz B'],
            price: 'Percuma',
            organizer: 'Masjid Negeri',
        },
        '5': {
            img: coursePoster2,
            time: '08:00 MALAM - 10:00 MALAM',
            location: 'Online Zoom',
            speakers: ['Ustaz C'],
            price: 'Percuma',
            organizer: 'Hijrah al Haramain HQ',
        }
    };

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // Default Selection Logic
    useEffect(() => {
        const today = new Date();
        const upcomingEvents = fixedEvents
            .filter(e => e.date >= today)
            .sort((a, b) => a.date.getTime() - b.date.getTime());

        const targetEvent = upcomingEvents.length > 0 ? upcomingEvents[0] : fixedEvents[0];

        if (targetEvent) {
            setSelectedDate(targetEvent.date);
            setSelectedEvent(targetEvent);
        }
    }, []);

    useEffect(() => {
        if (selectedDate) {
            const evt = fixedEvents.find(e =>
                e.date.getDate() === selectedDate.getDate() &&
                e.date.getMonth() === selectedDate.getMonth() &&
                e.date.getFullYear() === selectedDate.getFullYear()
            );
            if (evt) setSelectedEvent(evt);
        }
    }, [selectedDate]);


    const details = selectedEvent ? (eventDetails[selectedEvent.id] || eventDetails['1']) : eventDetails['1'];

    const handleDownload = () => {
        if (!details?.img) return;
        const link = document.createElement('a');
        link.href = details.img;
        link.download = `Umrah-Event-${selectedEvent?.title || 'Poster'}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Scroll Handler for Top List
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };
    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };


    return (
        <section className="py-5 bg-white relative overflow-hidden" id="courses">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-sand-50/50 -skew-x-12 transform translate-x-20 z-0"></div>

            <div className=" text-center max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10 space-y-2">
                <div className="inline-block py-1.5 px-4 mb-4 border border-gold-200 rounded-full bg-gold-50 text-gold-700 text-xs tracking-widest uppercase font-bold">
                    Program Kami
                </div>


                {/* --------------------- TOP: EVENT LIST PREVIEW --------------------- */}
                <div className="bg-sand-50 p-6 rounded-2xl border border-sand-100 relative group/list">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="font-serif text-olive-800 text-xl flex items-center gap-2">
                            <span className="w-2 h-8 bg-gold-400 rounded-full inline-block"></span>
                            Jadual Akan Datang
                        </h4>
                        <div className="flex gap-2">
                            <button onClick={scrollLeft} className="p-2 rounded-full bg-white hover:bg-gold-50 text-olive-800 shadow-sm border border-sand-200 transition-colors">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button onClick={scrollRight} className="p-2 rounded-full bg-white hover:bg-gold-50 text-olive-800 shadow-sm border border-sand-200 transition-colors">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div
                        ref={scrollContainerRef}
                        className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar snap-x"
                    >
                        {fixedEvents.map(evt => (
                            <div
                                key={evt.id}
                                className={`flex items-center gap-4 p-4 rounded-xl transition-all cursor-pointer border min-w-[300px] snap-start ${selectedEvent?.id === evt.id ? 'bg-white shadow-md border-gold-300 ring-1 ring-gold-100' : 'bg-white/50 border-transparent hover:bg-white hover:border-sand-200'}`}
                                onClick={() => setSelectedDate(evt.date)}
                            >
                                <div className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center shrink-0 transition-colors ${selectedEvent?.id === evt.id ? 'bg-gold-500 text-white' : 'bg-olive-100 text-olive-800'}`}>
                                    <span className="text-xs font-bold uppercase tracking-wider">{evt.date.toLocaleString('default', { month: 'short' })}</span>
                                    <span className="text-xl font-bold leading-none">{evt.date.getDate()}</span>
                                </div>
                                <div className="flex-grow min-w-0">
                                    <h5 className={`font-serif text-lg leading-tight mb-1 truncate ${selectedEvent?.id === evt.id ? 'text-olive-900' : 'text-gray-700'}`}>{evt.title}</h5>
                                    <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wide">
                                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${evt.type === 'course' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                                            {evt.type}
                                        </span>
                                        <span className="truncate">{evt.organizer}</span>
                                    </div>
                                </div>
                                {selectedEvent?.id === evt.id && (
                                    <CheckCircle className="w-5 h-5 text-gold-500 shrink-0" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* --------------------- BOTTOM ROW SPLIT --------------------- */}
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* LEFT: FEATURED EVENT DETAILS */}
                    <div className="lg:w-2/3 w-full">
                        <div className="bg-white p-2 rounded-[2rem] shadow-2xl border border-sand-200 relative overflow-hidden group flex flex-col lg:flex-row min-h-[500px]"> {/* Increased min-height */}

                            {/* Poster Image Container */}
                            <div
                                className="relative lg:w-1/2 min-h-[300px] lg:min-h-0 rounded-[1.5rem] overflow-hidden bg-olive-900 cursor-zoom-in group/image flex justify-center items-center p-4"
                                onClick={() => setIsLightboxOpen(true)}
                            >
                                <img
                                    src={details?.img}
                                    alt="Poster"
                                    className="object-contain w-full h-full max-h-[400px] opacity-90 group-hover/image:scale-105 transition-transform duration-700 rounded-lg shadow-md"
                                />
                                <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                                    <Maximize2 className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Details Grid */}
                            <div className="p-8 lg:w-1/2 flex flex-col justify-center space-y-8">
                                <div>
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <span className="inline-block py-1 px-3 bg-gold-500 text-white text-xs font-bold rounded-full shadow-lg">
                                            {details?.price}
                                        </span>
                                        <span className="flex items-center gap-2 text-olive-800 text-sm font-medium bg-sand-50 px-3 py-1 rounded-full border border-sand-200">
                                            <Building className="w-3 h-3" />
                                            <span>{details?.organizer}</span>
                                        </span>
                                    </div>
                                    <h3 className="text-3xl font-serif text-olive-900 leading-tight mb-2">
                                        {selectedEvent?.title}
                                    </h3>
                                </div>

                                <div className="space-y-4 text-sm"> {/* Compact text-sm */}
                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-sand-100 p-2 rounded-full h-fit text-olive-800 shrink-0">
                                            <Clock className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Masa</p>
                                            <p className="text-olive-900 font-medium">{details?.time}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-sand-100 p-2 rounded-full h-fit text-olive-800 shrink-0">
                                            <MapPin className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Lokasi</p>
                                            <p className="text-olive-900 font-medium">{details?.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-sand-100 p-2 rounded-full h-fit text-olive-800 shrink-0">
                                            <Users className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Penceramah</p>
                                            <ul className="space-y-1">
                                                {details?.speakers.map((speaker, idx) => (
                                                    <li key={idx} className="flex items-center gap-2 text-olive-900 font-medium">
                                                        <CheckCircle className="w-3 h-3 text-gold-500" />
                                                        {speaker}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-4">

                                    <button
                                        onClick={() => setIsLightboxOpen(true)}
                                        className="px-4 py-3 border border-sand-300 hover:bg-sand-50 text-olive-900 rounded-xl font-medium transition-all flex items-center justify-center gap-2 group/btn"
                                        title="Lihat Gambar"
                                    >Lihat Gambar Penuh
                                        <Maximize2 className="w-5 h-5 text-gold-400 group-hover/btn:scale-110 transition-transform" />
                                    </button>
                                </div>

                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pattern-islamic-card bg-contain opacity-5 pointer-events-none"></div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: CALENDAR ONLY */}
                    <div className="lg:w-1/3 w-full">
                        <Calendar
                            events={fixedEvents}
                            selectedDate={selectedDate}
                            onSelectDate={setSelectedDate}
                        />
                    </div>

                </div>

            </div>

            {/* Lightbox Modal (Same as before) */}
            {isLightboxOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in">
                    <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
                        <div className="absolute top-4 right-4 flex gap-4 z-10">
                            <button onClick={handleDownload} className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md">
                                <Download className="w-6 h-6" />
                            </button>
                            <button onClick={() => setIsLightboxOpen(false)} className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <img src={details?.img} alt={selectedEvent?.title} className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl" />
                        <div className="mt-4 text-white text-center"><h3 className="text-xl font-serif">{selectedEvent?.title}</h3></div>
                    </div>
                    <div className="absolute inset-0 -z-10" onClick={() => setIsLightboxOpen(false)}></div>
                </div>
            )}
        </section>
    );
};

export default UmrahCourseSection;
