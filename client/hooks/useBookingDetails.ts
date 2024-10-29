import { useState, useEffect } from 'react';
import axios from 'axios';
import { Alert } from 'react-native';
import { getData } from '../utils';

const useBookingDetails = (booking_id: string) => {
    const [loading, setLoading] = useState(true);
    const [booking, setBooking] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBookingDetails = async () => {
            setLoading(true);
            try {
                const token = await getData('token');
                const response = await axios.get(
                    `${process.env.API_URL}/api/booking/${booking_id}`,
                    {
                        headers: { authorization: token },
                    }
                );
                setBooking(response.data);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch booking details');
                Alert.alert('Error', 'Failed to fetch booking details');
            } finally {
                setLoading(false);
            }
        };

        if (booking_id) {
            fetchBookingDetails();
        }
    }, [booking_id]);

    return { loading, booking, error };
};

export default useBookingDetails;
