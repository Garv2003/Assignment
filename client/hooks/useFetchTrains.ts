import { useEffect, useState } from 'react';
import axios from 'axios';
import { getData } from '../utils';

const useFetchTrains = () => {
    const [trains, setTrains] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchTrains = async () => {
        setLoading(true);
        const token = await getData('token');
        try {
            const response = await axios.get(`${process.env.API_URL}/api/trains`, {
                headers: { Authorization: token },
            });
            setTrains(response.data);
        } catch (err) {
            console.error('Failed to fetch trains', err);
            setError('Failed to fetch trains');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTrains();
    }, []);

    return { trains, loading, error };
};

export default useFetchTrains;
