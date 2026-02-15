import { useState, useEffect } from 'react';
import { format, addDays, startOfDay } from 'date-fns';
import { appointmentsAPI } from '../services/apiService';
import { toast } from 'react-toastify';

const Booking = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [availableSlots, setAvailableSlots] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [notes, setNotes] = useState('');
    const [bookingType, setBookingType] = useState('in-person');

    useEffect(() => {
        fetchAvailability(selectedDate);
    }, [selectedDate]);

    const fetchAvailability = async (date) => {
        setLoading(true);
        try {
            const formattedDate = format(date, 'yyyy-MM-dd');
            const response = await appointmentsAPI.getAvailability(formattedDate);
            setAvailableSlots(response.data.data);
        } catch (error) {
            console.error('Error fetching availability:', error);
            toast.error('Could not load available slots');
        } finally {
            setLoading(false);
        }
    };

    const handleBook = async () => {
        if (!selectedSlot) return;

        try {
            await appointmentsAPI.create({
                date: format(selectedDate, 'yyyy-MM-dd'),
                timeSlot: selectedSlot,
                type: bookingType,
                notes
            });
            toast.success('Appointment booked successfully!');
            // Refresh slots
            fetchAvailability(selectedDate);
            setSelectedSlot(null);
            setNotes('');
        } catch (error) {
            const message = error.response?.data?.message || 'Booking failed';
            toast.error(message);
        }
    };

    const generateDates = () => {
        const dates = [];
        for (let i = 0; i < 7; i++) {
            dates.push(addDays(new Date(), i));
        }
        return dates;
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif text-primary-dark mb-6">Book an Appointment</h2>

            {/* Date Selection */}
            <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Select Date</h3>
                <div className="flex gap-4 overflow-x-auto pb-4">
                    {generateDates().map((date) => (
                        <button
                            key={date.toString()}
                            onClick={() => setSelectedDate(date)}
                            className={`flex-shrink-0 p-4 rounded-xl border transition-all ${format(selectedDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
                                    ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                                    : 'border-gray-200 hover:border-primary/50'
                                }`}
                        >
                            <div className="text-sm text-gray-500">{format(date, 'EEE')}</div>
                            <div className="text-xl font-bold text-gray-800">{format(date, 'd')}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Time Selection */}
            <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Select Time</h3>
                {loading ? (
                    <div className="text-center py-8 text-gray-500">Loading slots...</div>
                ) : availableSlots.length > 0 ? (
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                        {availableSlots.map((slot) => (
                            <button
                                key={slot}
                                onClick={() => setSelectedSlot(slot)}
                                className={`py-2 px-4 rounded-lg text-sm font-medium transition-all ${selectedSlot === slot
                                        ? 'bg-primary text-white shadow-md'
                                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {slot}
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-8 bg-gray-50 rounded-xl text-gray-500">
                        No slots available for this date.
                    </div>
                )}
            </div>

            {/* Booking Details */}
            {selectedSlot && (
                <div className="border-t pt-6 animation-fade-in">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Session Type</label>
                            <select
                                value={bookingType}
                                onChange={(e) => setBookingType(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                            >
                                <option value="in-person">In-Person (Santa Monica)</option>
                                <option value="telehealth">Telehealth (Video Call)</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Notes (Optional)</label>
                            <input
                                type="text"
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                placeholder="Any specific topics?"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                            />
                        </div>
                    </div>

                    <button
                        onClick={handleBook}
                        className="w-full btn-primary py-3 text-lg"
                    >
                        Confirm Booking
                    </button>
                </div>
            )}
        </div>
    );
};

export default Booking;
