import React from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import { BookingDetailsProps } from '../types';
import styles from "../styles/screens/BookingScreen";
import useBookingDetails from '../hooks/useBookingDetails';

const BookingDetails = ({ route }: BookingDetailsProps) => {
    const { booking_id } = route.params;
    const { loading, booking, error } = useBookingDetails(booking_id);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    if (!booking) {
        return (
            <View style={styles.container}>
                <Text style={styles.noBookingText}>No booking details found</Text>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Booking Details</Text>
            <Text style={styles.label}>Booking ID: <Text style={styles.value}>{booking.booking_id}</Text></Text>
            <Text style={styles.label}>Train Name: <Text style={styles.value}>{booking.train_name}</Text></Text>
            <Text style={styles.label}>Train ID: <Text style={styles.value}>{booking.train_id}</Text></Text>
            <Text style={styles.label}>User Name: <Text style={styles.value}>{booking.user_name}</Text></Text>
            <Text style={styles.label}>Arrival at Source: <Text style={styles.value}>{booking.arrival_time_at_source}</Text></Text>
            <Text style={styles.label}>Arrival at Destination: <Text style={styles.value}>{booking.arrival_time_at_destination}</Text></Text>
        </ScrollView>
    );
};

export default BookingDetails;
