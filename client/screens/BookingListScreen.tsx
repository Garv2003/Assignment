import React from 'react';
import { View, Text, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import { BookingListScreenProp } from '../types';
import BookingItem from '../components/BookItem';
import styles from '../styles/screens/BookListScreen';
import useBookings from '../hooks/useBooking';

const BookingListScreen = ({ navigation }: BookingListScreenProp) => {

    const { bookings, loading, error } = useBookings();

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Pressable onPress={() => navigation.navigate('Home')} style={styles.homeButton}>
                    <Text style={styles.homeButtonText}>Home</Text>
                </Pressable>
                <Text style={styles.title}>Your Bookings</Text>
            </View>
            {loading ? (
                <ActivityIndicator size="large" color="#007BFF" style={styles.loader} />
            ) : error ? (
                <Text style={styles.errorMessage}>{error}</Text>
            ) : bookings.length === 0 ? (
                <Text style={styles.noBookingsMessage}>No bookings found.</Text>
            ) : (
                <ScrollView>
                    {bookings.map(booking => (
                        <BookingItem key={booking.id} booking={booking} />
                    ))}
                </ScrollView>
            )}
        </View>
    );
};

export default BookingListScreen;
