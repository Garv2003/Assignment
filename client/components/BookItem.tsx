import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/components/BookingItem';
import { BookingItemProps } from '../types';

const BookingItem: React.FC<BookingItemProps> = ({ booking }) => {
    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.navigate('Booking', { booking_id: booking.booking_id })}>
            <View style={styles.bookingContainer}>
                <Text style={styles.trainName}>{booking.train_name}</Text>
                <Text>Source: {booking.source}</Text>
                <Text>Destination: {booking.destination}</Text>
                <Text>Booking ID: {booking.booking_id}</Text>
                <Text>Booking Date: {new Date(booking.booking_date).toLocaleDateString()}</Text>
            </View>
        </Pressable>
    );
};

export default BookingItem;
