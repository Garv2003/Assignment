import { useState, useEffect } from 'react';
import axios from 'axios';
import { Alert } from 'react-native';
import { getData } from '../utils';
const useBookings = () => {
    const [bookings, setBookings] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchBookings = async () => {
        try {
            const token = await getData('token');
            const response = await axios.get(`${process.env.API_URL}/api/bookings`, {
                headers: { authorization: token },
            });
            setBookings(response.data);
        } catch (err) {
            setError('Failed to fetch bookings');
            Alert.alert('Error', 'Failed to fetch bookings');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    return { bookings, loading, error };
};

export default useBookings;
