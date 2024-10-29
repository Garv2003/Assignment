import { useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-native';
import { getData } from '../utils';
import { useNavigation } from '@react-navigation/native';

const useCreateTrain = () => {
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();
    const handleCreateTrain = async (
        trainName: string,
        source: string,
        destination: string,
        seatCapacity: string,
        arrivalTimeAtSource: Date,
        arrivalTimeAtDestination: Date,
    ) => {
        if (loading) {
            return;
        }

        if (!trainName || !source || !destination || !seatCapacity) {
            Alert.alert('Error', 'Please fill all fields');
            return;
        }

        try {
            setLoading(true);
            const token = await getData('token');

            await axios.post(
                `${process.env.API_URL}/api/trains/create`,
                {
                    name: trainName,
                    source,
                    destination,
                    seat_capacity: parseInt(seatCapacity),
                    availableSeats: parseInt(seatCapacity),
                    arrival_time_at_source: arrivalTimeAtSource.toISOString(),
                    arrival_time_at_destination: arrivalTimeAtDestination.toISOString(),
                },
                {
                    headers: {
                        Authorization: token || '',
                        'x-api-key': process.env.ADMIN_API_KEY,
                    },
                }
            );

            Alert.alert('Success', 'Train created successfully');
            navigation.goBack();
        } catch (error) {
            Alert.alert('Error', 'Failed to create train');
        } finally {
            setLoading(false);
        }
    };

    return { loading, handleCreateTrain };
};

export default useCreateTrain;
