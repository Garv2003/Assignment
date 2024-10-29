import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from '../styles/components/TrainItem'
import useBookTrain from '../hooks/useBookTrain';

const TrainItem = ({ item }: { item: any }) => {
    const { loading, bookTrain } = useBookTrain();

    const handleBooking = () => {
        bookTrain(item.id);
    };

    return (
        <View style={styles.trainContainer}>
            <Text style={styles.trainName}>{item.name}</Text>
            <Text style={styles.availableSeats}>Available Seats: {item.availableSeats}</Text>
            <Text style={styles.sourceDestination}>Source: {item.source}</Text>
            <Text style={styles.sourceDestination}>Destination: {item.destination}</Text>
            <Pressable
                style={styles.bookButton}
                onPress={handleBooking}>
                <Text style={styles.buttonText}>
                    {loading ? 'Booking...' : 'Book'}
                </Text>
            </Pressable>
        </View>
    )
}

export default TrainItem
