import { useState } from 'react';
import { Alert } from 'react-native';
import axios from 'axios';
import { getData } from '../utils';

const useBookTrain = () => {
    const [loading, setLoading] = useState(false);

    const bookTrain = async (trainId: number) => {
        if (loading) {
            return;
        }

        try {
            setLoading(true);
            const token = await getData('token');
            await axios.post(
                `${process.env.API_URL}/api/book/create`,
                { train_id: trainId },
                { headers: { authorization: token } }
            );
            Alert.alert('Success', 'Train booked successfully');
        } catch (error) {
            console.error('Failed to book train', error);
            Alert.alert('Error', 'Failed to book train');
        } finally {
            setLoading(false);
        }
    };

    return { loading, bookTrain };
};

export default useBookTrain;
